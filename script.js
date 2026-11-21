const STORAGE_KEY = 'fiancee_birthday_letters_v2';
const ADMIN_PIN = '1235'; // Admin PIN

let isAdminActive = false;
let secretHeartClicks = 0;
let simulatedDate = null; // Used by Admin Time Machine slider
let audioCtx = null;
let isEnvelopeOpen = false;
let selectedDayIndex = 0;
let lettersData = [];

function loadLetters() {
    try {
        lettersData = JSON.parse(JSON.stringify(defaultLetters));
        localStorage.setItem(STORAGE_KEY,JSON.stringify(lettersData));
    } catch (e) {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            lettersData = JSON.parse(stored);
        } else {
            lettersData = JSON.parse(JSON.stringify(defaultLetters));
            localStorage.setItem(STORAGE_KEY, JSON.stringify(lettersData));
        } 
    }
}

function saveLetters() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(lettersData));
        showToast("✨ Love letters saved!");
    } catch (e) {
        showToast("⚠️ Could not write to storage.");
    }
}

// Return effective date (supports Admin Time Machine)
function getEffectiveDate() {
    if (isAdminActive && simulatedDate) {
        return new Date(simulatedDate);
    }
    return new Date();
}

function getCountdownTargetDate() {
    const now = getEffectiveDate();
    let year = now.getFullYear();
    let bday = new Date(year, 11, 16, 18, 7, 0); // Dec 16 at 18:07
    return bday;
}

// Determine which day number is today (30 = Nov 16, 0 = Dec 16)
function getActiveCountdownDayNumber() {
    const now = getEffectiveDate();
    const year = now.getFullYear();

    // Before Nov 16 (month < 10 or month === 10 && date < 16)
    if (now.getMonth() < 10 || (now.getMonth() === 10 && now.getDate() < 16)) {
        return 31; // Before countdown begins
    }

    // On Dec 16
    if (now.getMonth() === 11 && now.getDate() === 16) {
        return 0; // Birthday!
    }

    // After Dec 16
    if (now.getMonth() === 11 && now.getDate() > 16) {
        return 0;
    }

    // Between Nov 16 and Dec 15
    const bday = new Date(year, 11, 16, 18, 7, 0);
    const diffMs = bday - now;
    const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    return Math.min(30, Math.max(0, daysLeft));
}

function isDayUnlocked(dayNumber) {
    if (isAdminActive) return true;

    const activeDayNum = getActiveCountdownDayNumber();
    if (activeDayNum > 30) {
        return false;
    }
    return dayNumber >= activeDayNum;
}

function playRomanticChime() {
    try {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtxClass) return;
        if (!audioCtx) audioCtx = new AudioCtxClass();
        if (audioCtx.state === 'suspended') audioCtx.resume();

        // Sweet harp arpeggio
        const notes = [392.00, 493.88, 587.33, 783.99, 987.77, 1174.66];
        notes.forEach((freq, idx) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + idx * 0.11);

            gain.gain.setValueAtTime(0, audioCtx.currentTime + idx * 0.11);
            gain.gain.linearRampToValueAtTime(0.18, audioCtx.currentTime + idx * 0.11 + 0.04);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + idx * 0.11 + 1.5);

            osc.connect(gain);
            gain.connect(audioCtx.destination);

            osc.start(audioCtx.currentTime + idx * 0.11);
            osc.stop(audioCtx.currentTime + idx * 0.11 + 1.6);
        });
    } catch (err) {
        console.error("Audio synth error", err);
    }
}

function triggerBirthdayConfetti() {
    if (typeof confetti !== 'function') return;
    confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#f43f5e', '#ec4899', '#fb7185', '#d4af37', '#ffffff']
    });

    setTimeout(() => {
        confetti({
            particleCount: 60,
            angle: 60,
            spread: 60,
            origin: { x: 0 },
            colors: ['#e11d48', '#f472b6', '#ffd700']
        });
        confetti({
            particleCount: 60,
            angle: 120,
            spread: 60,
            origin: { x: 1 },
            colors: ['#e11d48', '#f472b6', '#ffd700']
        });
    }, 280);
}

function updateClockAndHeader() {
    const now = getEffectiveDate();
    const bday = getCountdownTargetDate();
    const activeDayNum = getActiveCountdownDayNumber();

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minsEl = document.getElementById('countMins');
    const secsEl = document.getElementById('countSecs');
    const milestoneText = document.getElementById('milestoneText');
    const milestoneIcon = document.getElementById('milestoneIcon');
    const teaser = document.getElementById('preCountdownTeaser');

    // Handle teaser visibility
    if (activeDayNum > 30 && !isAdminActive) {
        teaser.classList.remove('hidden');
    } else {
        teaser.classList.add('hidden');
    }

    // If it's Dec 16 or past
    if (activeDayNum === 0 || (now.getMonth() === 11 && now.getDate() === 16)) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        milestoneText.textContent = "🎉 IT'S YOUR BIRTHDAY TODAY! 🎉";
        milestoneIcon.textContent = "🎂";
        return;
    }

    const diff = bday - now;
    if (diff <= 0) {
        daysEl.textContent = '00';
        hoursEl.textContent = '00';
        minsEl.textContent = '00';
        secsEl.textContent = '00';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(mins).padStart(2, '0');
    secsEl.textContent = String(secs).padStart(2, '0');

    if (days > 30) {
        milestoneText.textContent = `Starts Nov 16 • ${days} Days until Dec 16`;
        milestoneIcon.textContent = "⏳";
    } else if (days === 1) {
        milestoneText.textContent = "Tomorrow is the Big Day!";
        milestoneIcon.textContent = "💖";
    } else {
        milestoneText.textContent = `Day ${30 - days + 1} of 30 • ${days} Days Left`;
        milestoneIcon.textContent = "✨";
    }
}

function renderTimeline() {
    const container = document.getElementById('timelineScroll');
    container.innerHTML = '';

    const statusBadge = document.getElementById('unlockedStatusBadge');
    if (isAdminActive) {
        statusBadge.textContent = "Admin Mode: All 31 Letters Unlocked";
        statusBadge.className = "text-[11px] text-purple-800 font-bold bg-purple-100 px-2.5 py-0.5 rounded-full border border-purple-300";
    } else {
        statusBadge.textContent = "Live Countdown";
        statusBadge.className = "text-[11px] text-rose-700 font-medium bg-rose-100/90 px-2.5 py-0.5 rounded-full border border-rose-200";
    }

    lettersData.forEach((letter, index) => {
        const unlocked = isDayUnlocked(letter.dayNumber);
        const isSelected = index === selectedDayIndex;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `flex-shrink-0 px-3 py-2 rounded-xl text-xs font-medium transition-all flex flex-col items-center justify-center min-w-[72px] ${
            isSelected
                ? 'bg-gradient-to-b from-rose-500 to-pink-600 text-white shadow-md ring-2 ring-rose-400/50 scale-105'
                : unlocked
                ? 'bg-white/90 hover:bg-rose-100/90 text-rose-900 border border-rose-200 shadow-sm'
                : 'bg-rose-100/40 text-rose-400 border border-dashed border-rose-200 cursor-not-allowed opacity-60'
        }`;

        const badge = letter.dayNumber === 0 ? '🎉 Dec 16' : `Day ${letter.dayNumber}`;
        btn.innerHTML = `
            <span class="font-bold text-[11px]">${badge}</span>
            <span class="text-[9px] opacity-80">${letter.dateStr}</span>
            ${!unlocked ? '<span class="text-[9px] mt-0.5">🔒</span>' : ''}
        `;

        btn.addEventListener('click', () => {
            if (!unlocked) {
                showToast(`🔒 Unlocks on ${letter.dateStr}! No peeking early 💕`, "🔒");
                return;
            }
            selectDay(index);
        });

        container.appendChild(btn);
    });
}

function selectDay(index) {
    selectedDayIndex = index;
    const letter = lettersData[index];
    const unlocked = isDayUnlocked(letter.dayNumber);

    const dateTitle = document.getElementById('selectedDateTitle');
    const previewDayTag = document.getElementById('previewDayTag');
    const previewQuote = document.getElementById('previewQuote');
    const currentViewingLabel = document.getElementById('currentViewingLabel');
    const envPrompt = document.getElementById('envelopePrompt');
    const openButtonText = document.getElementById('openButtonText');

    if (unlocked) {
        if (letter.dayNumber === 0) {
            dateTitle.textContent = `Dec 16 - Birthday Finale! 🎉`;
            previewDayTag.textContent = `Birthday Letter 🎉`;
            currentViewingLabel.textContent = `Special Finale`;
        } else {
            dateTitle.textContent = `Day ${letter.dayNumber} (${letter.dateStr}) - ${letter.title}`;
            previewDayTag.textContent = `Day ${letter.dayNumber} Note`;
            currentViewingLabel.textContent = `Viewing Day ${letter.dayNumber}`;
        }
        previewQuote.textContent = `"${letter.quote}"`;
        envPrompt.textContent = "Tap the envelope to open today's letter";
        openButtonText.textContent = "Read Today's Letter";
    } else {
        dateTitle.textContent = `Day ${letter.dayNumber} (${letter.dateStr}) - Locked 🔒`;
        previewDayTag.textContent = `Locked until ${letter.dateStr}`;
        currentViewingLabel.textContent = `Upcoming`;
        previewQuote.textContent = `"A special secret note waiting for ${letter.dateStr}..."`;
        envPrompt.textContent = `Unlocks on ${letter.dateStr}`;
        openButtonText.textContent = `Locked until ${letter.dateStr}`;
    }

    // Close envelope preview animation
    const env = document.getElementById('envelopeContainer');
    env.classList.remove('envelope-open');
    isEnvelopeOpen = false;

    document.getElementById('prevDayBtn').disabled = selectedDayIndex === 0;
    document.getElementById('nextDayBtn').disabled = selectedDayIndex === lettersData.length - 1;

    renderTimeline();
}

function openEnvelopeAndLetter() {
    const letter = lettersData[selectedDayIndex];
    if (!isDayUnlocked(letter.dayNumber)) {
        showToast(`🔒 This letter stays sealed until ${letter.dateStr}!`, "🔒");
        return;
    }

    const env = document.getElementById('envelopeContainer');
    env.classList.add('envelope-open');
    isEnvelopeOpen = true;

    playRomanticChime();

    if (letter.dayNumber === 0) {
        triggerBirthdayConfetti();
    }

    setTimeout(() => {
        showLetterModal(selectedDayIndex);
    }, 3200);
}

function showLetterModal(index) {
    const letter = lettersData[index];
    const modal = document.getElementById('letterModal');
    const card = document.getElementById('letterModalCard');

    document.getElementById('modalDayBadge').textContent = 
        letter.dayNumber === 0 ? "Birthday Day • December 16" : `Day ${letter.dayNumber} • ${letter.dateStr}`;
    document.getElementById('modalLetterTitle').textContent = letter.title;
    document.getElementById('modalSalutation').textContent = letter.salutation;
    document.getElementById('modalLetterContent').textContent = letter.body;
    document.getElementById('modalAuthorSignature').textContent = letter.signature;

    const photoBox = document.getElementById('modalPhotoContainer');
    const photoImg = document.getElementById('modalPhotoImage');
    if (letter.photoUrl && letter.photoUrl.trim() !== '') {
        if (letter.photoUrl.endsWith('.enc')) {
            loadEncryptedImage(letter.photoUrl, photoImg);
        } else {
            photoImg.src = letter.photoUrl;
            photoImg.style.display = 'block';
        }
        photoBox.classList.remove('hidden');
    } else {
        photoBox.classList.add('hidden');
    }

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        card.classList.remove('scale-95');
        card.classList.add('scale-100');
    }, 20);
}

function closeLetterModal() {
    const modal = document.getElementById('letterModal');
    const card = document.getElementById('letterModalCard');
    modal.classList.add('opacity-0');
    card.classList.remove('scale-100');
    card.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        const env = document.getElementById('envelopeContainer');
        env.classList.remove('envelope-open');
        isEnvelopeOpen = false;
    }, 250);
}

function activateAdminMode() {
    isAdminActive = true;
    document.getElementById('adminTopBar').classList.remove('hidden');
    populateTimeTravelDropdown();
    renderTimeline();
    selectDay(selectedDayIndex);
    showToast("🔓 Secret Admin Mode unlocked!", "👑");
}

function deactivateAdminMode() {
    isAdminActive = false;
    simulatedDate = null;
    document.getElementById('adminTopBar').classList.add('hidden');
    if (window.location.search || window.location.hash) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    renderTimeline();
    const activeNum = getActiveCountdownDayNumber();
    const idx = lettersData.findIndex(l => l.dayNumber === (activeNum > 30 ? 30 : activeNum));
    selectDay(idx !== -1 ? idx : 0);
    showToast("Returned to clean Fiancée view.", "👋");
}

function populateTimeTravelDropdown() {
    const sel = document.getElementById('adminTimeTravelSelect');
    sel.innerHTML = `
        <option value="REAL">Real Current Date</option>
        <option value="PRE">Before Nov 16 (Pre-countdown)</option>
        <option value="NOV16">Day 30 (Nov 16 Start)</option>
        <option value="NOV25">Day 21 (Nov 25)</option>
        <option value="DEC01">Day 15 (Dec 1)</option>
        <option value="DEC15">Day 1 (Dec 15 Eve)</option>
        <option value="DEC16">Day 0 (Dec 16 Birthday 🎉)</option>
    `;
    sel.value = simulatedDate ? 'CUSTOM' : 'REAL';

    sel.onchange = (e) => {
        const val = e.target.value;
        const year = new Date().getFullYear();
        if (val === 'REAL') {
            simulatedDate = null;
        } else if (val === 'PRE') {
            simulatedDate = new Date(year, 10, 10, 10, 0, 0); // Nov 10
        } else if (val === 'NOV16') {
            simulatedDate = new Date(year, 10, 16, 9, 0, 0); // Nov 16
        } else if (val === 'NOV25') {
            simulatedDate = new Date(year, 10, 25, 9, 0, 0);
        } else if (val === 'DEC01') {
            simulatedDate = new Date(year, 11, 1, 9, 0, 0); // Dec 1
        } else if (val === 'DEC15') {
            simulatedDate = new Date(year, 11, 15, 9, 0, 0); // Dec 15
        } else if (val === 'DEC16') {
            simulatedDate = new Date(year, 11, 16, 9, 0, 0); // Dec 16
        }
        updateClockAndHeader();
        renderTimeline();
        const activeNum = getActiveCountdownDayNumber();
        const idx = lettersData.findIndex(l => l.dayNumber === (activeNum > 30 ? 30 : activeNum));
        selectDay(idx !== -1 ? idx : 0);
        showToast(`Testing view as: ${sel.options[sel.selectedIndex].text}`);
    };
}

function downloadCleanHtmlForHer() {
    const docClone = document.documentElement.cloneNode(true);

    const adminBar = docClone.querySelector('#adminTopBar');
    if (adminBar) adminBar.remove();

    const pinModal = docClone.querySelector('#pinModal');
    if (pinModal) pinModal.remove();

    const editorModal = docClone.querySelector('#editorModal');
    if (editorModal) editorModal.remove();

    const secretHeart = docClone.querySelector('#secretHeartTrigger');
    if (secretHeart) secretHeart.remove();

    const htmlContent = "<!DOCTYPE html>\n<html lang=\"en\">\n" + docClone.innerHTML + "\n</html>";
    
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Fiancee_Birthday_Countdown.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("💾 Clean Fiancée HTML file downloaded! Ready to send or host.", "🎉");
}

function openEditorModal() {
    const select = document.getElementById('editorDaySelect');
    select.innerHTML = '';
    lettersData.forEach((item, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = item.dayNumber === 0 
            ? `🎉 Dec 16: Birthday Finale` 
            : `Day ${item.dayNumber} (${item.dateStr}) - ${item.title}`;
        select.appendChild(opt);
    });

    select.value = selectedDayIndex;
    loadEditorFields(selectedDayIndex);

    select.onchange = (e) => loadEditorFields(parseInt(e.target.value, 10));

    const modal = document.getElementById('editorModal');
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 20);
}

function loadEditorFields(idx) {
    const item = lettersData[idx];
    document.getElementById('editorTitleInput').value = item.title;
    document.getElementById('editorQuoteInput').value = item.quote;
    document.getElementById('editorBodyInput').value = item.body;
    document.getElementById('editorPhotoInput').value = item.photoUrl || '';
    document.getElementById('editorSalutationInput').value = item.salutation;
    document.getElementById('editorSignatureInput').value = item.signature;
}

function saveEditorFields() {
    const idx = parseInt(document.getElementById('editorDaySelect').value, 10);
    if (isNaN(idx) || !lettersData[idx]) return;

    lettersData[idx].title = document.getElementById('editorTitleInput').value.trim() || `Day ${lettersData[idx].dayNumber} Note`;
    lettersData[idx].quote = document.getElementById('editorQuoteInput').value.trim() || `Thinking of you...`;
    lettersData[idx].body = document.getElementById('editorBodyInput').value.trim() || `I love you with all my heart.`;
    lettersData[idx].photoUrl = document.getElementById('editorPhotoInput').value.trim();
    lettersData[idx].salutation = document.getElementById('editorSalutationInput').value.trim() || `My Dearest,`;
    lettersData[idx].signature = document.getElementById('editorSignatureInput').value.trim() || `Forever yours`;

    saveLetters();
    selectDay(idx);
    closeEditorModal();
}

function closeEditorModal() {
    const modal = document.getElementById('editorModal');
    modal.classList.add('opacity-0');
    setTimeout(() => modal.classList.add('hidden'), 250);
}

function showToast(msg, icon = "💖") {
    const toast = document.getElementById('toastMessage');
    document.getElementById('toastText').textContent = msg;
    document.getElementById('toastIcon').textContent = icon;

    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3200);
}

function initFloatingHeartsCanvas() {
    const canvas = document.getElementById('hearts-canvas');
    const ctx = canvas.getContext('2d');
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const hearts = [];
    const count = Math.min(26, Math.floor(w / 45));

    window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    });

    class Heart {
        constructor() {
            this.init(true);
        }
        init(first = false) {
            this.x = Math.random() * w;
            this.y = first ? Math.random() * h : h + 25;
            this.size = Math.random() * 11 + 7;
            this.speedY = Math.random() * 0.75 + 0.35;
            this.speedX = (Math.random() - 0.5) * 0.45;
            this.alpha = Math.random() * 0.35 + 0.15;
            this.rot = (Math.random() - 0.5) * 0.4;
            this.color = Math.random() > 0.5 ? '244, 63, 94' : '251, 113, 133';
        }
        update() {
            this.y -= this.speedY;
            this.x += this.speedX;
            if (this.y < -30) this.init();
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rot);
            ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
            const s = this.size / 15;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(-10 * s, -10 * s, -20 * s, 5 * s, 0, 18 * s);
            ctx.bezierCurveTo(20 * s, 5 * s, 10 * s, -10 * s, 0, 0);
            ctx.fill();
            ctx.restore();
        }
    }

    for (let i = 0; i < count; i++) hearts.push(new Heart());

    function loop() {
        ctx.clearRect(0, 0, w, h);
        hearts.forEach(h => {
            h.update();
            h.draw();
        });
        requestAnimationFrame(loop);
    }
    loop();
}

window.addEventListener('DOMContentLoaded', () => {
    loadLetters();
    initFloatingHeartsCanvas();

    // Initial selected day calculation
    const currentActiveDay = getActiveCountdownDayNumber();
    const initialIdx = lettersData.findIndex(l => l.dayNumber === (currentActiveDay > 30 ? 30 : currentActiveDay));
    selectedDayIndex = initialIdx !== -1 ? initialIdx : 0;

    // Envelope opening
    const env = document.getElementById('envelopeContainer');
    env.addEventListener('click', openEnvelopeAndLetter);
    env.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openEnvelopeAndLetter();
        }
    });
    document.getElementById('openLetterDirectBtn').addEventListener('click', openEnvelopeAndLetter);

    // Modal Controls
    document.getElementById('closeLetterModalBtn').addEventListener('click', closeLetterModal);
    document.getElementById('letterModal').addEventListener('click', (e) => {
        if (e.target.id === 'letterModal') closeLetterModal();
    });

    document.getElementById('prevDayBtn').addEventListener('click', () => {
        if (selectedDayIndex > 0) selectDay(selectedDayIndex - 1);
    });
    document.getElementById('nextDayBtn').addEventListener('click', () => {
        if (selectedDayIndex < lettersData.length - 1) selectDay(selectedDayIndex + 1);
    });
    document.getElementById('modalNextDayBtn').addEventListener('click', () => {
        closeLetterModal();
        if (selectedDayIndex < lettersData.length - 1) {
            setTimeout(() => selectDay(selectedDayIndex + 1), 300);
        }
    });

    // Copy note text
    document.getElementById('modalShareCopyBtn').addEventListener('click', () => {
        const item = lettersData[selectedDayIndex];
        const text = `${item.title}\n\n${item.salutation}\n\n${item.body}\n\n${item.signature}`;
        const temp = document.createElement('textarea');
        temp.value = text;
        temp.style.position = 'fixed';
        temp.style.opacity = '0';
        document.body.appendChild(temp);
        temp.select();
        try {
            document.execCommand('copy');
            showToast("Note text copied!", "📋");
        } catch(e) {}
        document.body.removeChild(temp);
    });

    // Music chime button
    document.getElementById('musicToggleBtn').addEventListener('click', () => {
        playRomanticChime();
        showToast("Playing romantic chime...", "🎶");
    });

    // Secret Heart trigger (Click 5 times)
    const secretHeart = document.getElementById('secretHeartTrigger');
    if (secretHeart) {
        secretHeart.addEventListener('click', () => {
            secretHeartClicks++;
            if (secretHeartClicks >= 5) {
                secretHeartClicks = 0;
                document.getElementById('pinModal').classList.remove('hidden');
                document.getElementById('pinInput').value = '';
                document.getElementById('pinInput').focus();
            }
        });
    }

    // Keyboard shortcut for admin: Ctrl + Shift + E
    window.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'e') {
            e.preventDefault();
            document.getElementById('pinModal').classList.remove('hidden');
            document.getElementById('pinInput').focus();
        }
    });

    // PIN Modal listeners
    document.getElementById('cancelPinBtn').addEventListener('click', () => {
        document.getElementById('pinModal').classList.add('hidden');
    });
    document.getElementById('submitPinBtn').addEventListener('click', () => {
        const val = document.getElementById('pinInput').value.trim();
        if (val === ADMIN_PIN) {
            document.getElementById('pinModal').classList.add('hidden');
            activateAdminMode();
        } else {
            showToast("Incorrect passcode", "❌");
        }
    });

    // Admin Top Bar Listeners
    document.getElementById('adminOpenEditorBtn').addEventListener('click', openEditorModal);
    document.getElementById('adminExitBtn').addEventListener('click', deactivateAdminMode);
    document.getElementById('adminDownloadHtmlBtn').addEventListener('click', downloadCleanHtmlForHer);

    // Editor Modal listeners
    document.getElementById('closeEditorModalBtn').addEventListener('click', closeEditorModal);
    document.getElementById('saveNoteBtn').addEventListener('click', saveEditorFields);
    document.getElementById('resetDefaultsBtn').addEventListener('click', () => {
        lettersData = JSON.parse(JSON.stringify(defaultLetters));
        saveLetters();
        loadEditorFields(parseInt(document.getElementById('editorDaySelect').value, 10));
        selectDay(selectedDayIndex);
        showToast("Reset all letters back to defaults!", "🔄");
    });

    // Check if visited with ?admin=true or #admin
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true' || window.location.hash === '#admin') {
        activateAdminMode();
    }

    // Initial render & Clock loop
    selectDay(selectedDayIndex);
    updateClockAndHeader();
    setInterval(updateClockAndHeader, 1000);
});

const WA_TO_STORAGE_KEY = 'birthday_wa_to_number';

function normalizeIndianPhone(raw) {
  const digits = (raw || '').replace(/\D/g, '');
  if (!digits) return '';
  // Prepend 91 if a 10-digit Indian mobile number is entered
  return digits.length === 10 ? `91${digits}` : digits;
}

function toggleWhatsappReplyForm(forceState) {
  const form = document.getElementById('waReplyForm');
  const phoneInput = document.getElementById('waToNumber');
  if (!form) return;

  const isCurrentlyHidden = form.classList.contains('hidden');
  const shouldShow = typeof forceState === 'boolean' ? forceState : isCurrentlyHidden;

  if (shouldShow) {
    form.classList.remove('hidden');
    if (phoneInput) {
      phoneInput.value = localStorage.getItem(WA_TO_STORAGE_KEY) || '91';
    }
    document.getElementById('waReplyText')?.focus();
  } else {
    form.classList.add('hidden');
  }
}

function sendWhatsappReply(event) {
  event.preventDefault();

  const phoneInput = document.getElementById('waToNumber');
  const replyInput = document.getElementById('waReplyText');

  const toNum = normalizeIndianPhone(phoneInput?.value);
  const replyText = (replyInput?.value || '').trim();

  if (!toNum || toNum === '91' || toNum.length < 11) {
    alert('Please enter a valid 10-digit mobile number (with 91 country code).');
    phoneInput?.focus();
    return;
  }

  if (!replyText) {
    alert('Please write a short reply before sending.');
    replyInput?.focus();
    return;
  }

  // Save number in localStorage for future letters
  localStorage.setItem(WA_TO_STORAGE_KEY, toNum);

  // Pull active modal letter details
  const dayBadge = document.getElementById('modalDayBadge')?.innerText?.trim() || '';
  const title = document.getElementById('modalLetterTitle')?.innerText?.trim() || '';
  const body = document.getElementById('modalLetterContent')?.innerText?.trim() || '';

  const fullMessage =
    `Hey love, thanks for reading today's letter... it meant the world to me ❤️\n\n` +
    `*${dayBadge} — ${title}*\n` +
    `${body}\n\n` +
    `💌 *My Reply:*\n` +
    `${replyText}`;

  const waUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(toNum)}&text=${encodeURIComponent(fullMessage)}`;
  window.open(waUrl, '_blank', 'noopener,noreferrer');

  // Reset and collapse drawer
  replyInput.value = '';
  toggleWhatsappReplyForm(false);
}

function resetWhatsappReplyDrawer() {
  toggleWhatsappReplyForm(false);
  const replyInput = document.getElementById('waReplyText');
  if (replyInput) replyInput.value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Reset when clicking the '✕' close button
  document.getElementById('closeLetterModalBtn')?.addEventListener('click', resetWhatsappReplyDrawer);

  // 2. Reset when clicking 'Next Day ->'
  document.getElementById('modalNextDayBtn')?.addEventListener('click', resetWhatsappReplyDrawer);

  // 3. Reset when clicking the dark backdrop outside the card
  const letterModal = document.getElementById('letterModal');
  letterModal?.addEventListener('click', (e) => {
    if (e.target === letterModal) {
      resetWhatsappReplyDrawer();
    }
  });

  // 4. Reset when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      resetWhatsappReplyDrawer();
    }
  });
});