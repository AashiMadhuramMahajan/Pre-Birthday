// ==========================================
// CLIENT-SIDE AES-GCM DECRYPTOR
// ==========================================

async function deriveDecryptionKey(password, salt) {
    const enc = new TextEncoder();
    const baseKey = await crypto.subtle.importKey(
        'raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']
    );
    return crypto.subtle.deriveKey(
        { name: 'PBKDF2', salt: salt, iterations: 100000, hash: 'SHA-256' },
        baseKey,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
    );
}

/**
 * Fetches an encrypted .enc file, decrypts it using the provided passphrase,
 * and sets the image src to a temporary local Object URL.
 * 
 * @param {string} encFilePath - Path to .enc file (e.g. 'encrypted-images/day30.enc')
 * @param {HTMLImageElement} imgElement - The <img> tag to display the decrypted image
 */
async function loadEncryptedImage(encFilePath, imgElement) {
    // Check if password was already saved in this session, otherwise ask for it
    let password = localStorage.getItem('romantic_vault_key');
    if (!password) {
        password = prompt('Enter our secret word to unlock this memory photo ❤️:');
        if (!password) return;
        localStorage.setItem('romantic_vault_key', password.trim());
    }

    try {
        const response = await fetch(encFilePath);
        if (!response.ok) throw new Error(`Could not load ${encFilePath}`);
        const arrayBuffer = await response.arrayBuffer();

        // Extract Salt (first 16 bytes) and IV (next 12 bytes)
        const salt = new Uint8Array(arrayBuffer.slice(0, 16));
        const iv = new Uint8Array(arrayBuffer.slice(16, 28));
        const ciphertext = arrayBuffer.slice(28);

        // Derive the matching AES key
        const key = await deriveDecryptionKey(password, salt);

        // Decrypt the raw bytes
        const decryptedBuffer = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: iv },
            key,
            ciphertext
        );

        // Convert raw bytes to a displayable image blob
        const blob = new Blob([decryptedBuffer], { type: 'image/jpeg' });
        imgElement.src = URL.createObjectURL(blob);
        imgElement.style.display = 'block';

    } catch (err) {
        console.error('Decryption failed:', err);
        localStorage.removeItem('romantic_vault_key'); // clear faulty password
        alert('Incorrect secret word! Please try again ❤️');
    }
}
