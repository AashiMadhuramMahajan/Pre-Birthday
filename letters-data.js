// 30-Day Romantic Love Letters Data (Nov 16 to Dec 16 Finale)
const defaultLetters = [
    {
        dayNumber: 30,
        dateStr: "Nov 16",
        title: "30 Days To Go: The Countdown Begins",
        quote: "Thirty days of reminding you how grateful I am for you.",
        salutation: "My Dearest,",
        body: "Today officially begins our 30-day countdown to the sweetest day of the year 😍: Meri Radha Rani Ji ka Birthday 🫶! \n\nEvery Day 6:07 PM (IYKYK) from now until December 16th😊, a new love letter will be waiting here for you. Thirty days isn't just a number—it's 30 opportunities to tell you how truly beautiful 💖, kind 💗, and precious ✨ you are to me. \n\nI can't wait for our life together. Me aapke birthday pe Khargone to nahi aa paunga 🥺 Patni Ji par me try karunga ki aapko thoda sa pyaar kar sakun🥰 (waise toh aap bohot zyada deserve karte ho but baby I am trying)!",
        signature: "With all my heart",
        photoUrl: "Photos\\IMG_0136.enc"
    },
    {
        dayNumber: 29,
        dateStr: "Nov 17",
        title: "29 Days To Go: Your Beautiful Smile",
        quote: "Aapki smile dekh kar itni khushi hoti hai, ki bas aapko hi dekhta rahun.",
        salutation: "My Sweet Love,",
        body: "The most beautiful gift you can give me apart from Kanha Ji 🤭 and Radhika Ji 🫣 is your smile 😊. Aapki smile ki tareef ki hi nahi ja sakti, itni sundar smile ki iss universe mein koi compare karne jesi sundar cheez hi nahi hai 🤗.\n\nAap jab haste ho mein bas bhagwan ji se pray karta hun ki aap esse hi haste raho humesha, 🤞💗 Always Smiling! \n\nJust ek burai hai ki aap kanjoos 🙃😉 ho boht zyaada, ek smile ke liye itni baar bolna padta hai, 👉👈 please Madam Jiii iss mamle me thodi kanjoosi kam kardo please, Return gift for meri Madam Jiiii ka 🥳🎀💕Happiest Birthday!",
        signature: "Always your biggest fan",
        photoUrl: "Photos\\7H8A9897.enc"
    },
    {
        dayNumber: 28,
        dateStr: "Nov 18",
        title: "28 Days To Go: The Way You Listen",
        quote: "Aap mujhe sach mein sunte ho, dil se pyaar se.",
        salutation: "Darling,",
        body: "Baby you don't know how much it matters to me jab aap meri boli baat ek baar me sunte ho🥹, samjhte ho; I feel respected✨, I feel hounored, I feel loved 💗. \n\nMeri har choti baat sunte ho, meri mann ki baat sunte ho, kitni saari cheeze hai jo sirf isliye karte ho ki woh muzhe pasand hai🫂💞, jese jab me likh raha hun us din aap aapne naak me cheed karwaya, I know aapko pain hua phir bhi aapne kuch nahi bola🥹, thank you so much baby, I am so grateful for you, so lucky to have you, and I love you so much 💖. Thank you very much Darling Jiii 🥰! \n\nIss kaliyug me muzhe Satyayug vali Patni Jiii milli hai, so Grateful for you Baby !!!! Not just this, jab me yeh likh raha hun us time mumma ne bola beta beech ki paati mat kara karo aur aapne call me hi hairstyle change kardi, shayad yeh choti si baat ho aapke liye but you don't know how much these small things mean to me. Thank You Baby, thank you so much 💕",
        signature: "Yours completely",
        photoUrl: "Photos\\IMG_E9971.enc"
    },
    {
        dayNumber: 27,
        dateStr: "Nov 19",
        title: "27 Days To Go: Our Favorite Memories",
        quote: "Every memory with you is a treasure I keep close to my chest.",
        salutation: "My Forever Girl,",
        body: "I don't know about favorite memory but for sure its a moment I spent with you ✨. It is not a single moment of time, its every second that we spent together 🤩. \n\n\Its the hello we had on 27th 😊. Its the blush jo aapne kiya 😳 jab mumma aur bua ne aapse pucha kessa laga. \n\n\Its the moment jab aapne meko hath diya (the handshake)🤝❤️ at Ram Mandir, woh moment jab aap mandir me aandar bhagwan ✨🪷 ke pass ja ke bethe. Woh chai-Cappi pe meri side me bethna 🥰, woh meri haan hai 🎊🥳🎈 wala moment, woh 29th ko Hello Fiance 😘 wala moment. \n\n\Baby mene socha tha yeh likhna start karne ke pehle ki saare important moments likh lunga but abhi toh me sirf 29th tak hi pahuch paya 😅 hun, toh sorry I can't name any moments puri book hi bhar jayegi likhte likhte. So just know this ki every moment with you is important 🥰💖 and beautiful ✨. Maine socha me aapke liye kuch likhunga, but baby aapke pyaar ke samne mere works hi kam padh gaye, sorry but yeh wala letter toh sirf mehsos 💕 hi kar sakte hai. I Loveeeee Youuuuuuuuuuuuuuuuu 💗!!!",
        signature: "Eternally in love",
        photoUrl: "Photos\\IMG_0226.enc"
    },
    {
        dayNumber: 26,
        dateStr: "Nov 20",
        title: "26 Days To Go: Your Caring Heart",
        quote: "Your loving heart makes my world beautiful and brighter.",
        salutation: "My Sweet Angel,",
        body: "The most beautiful thing: Your Heart ❤️, so soft 💕, so caring 🧑‍❤️‍👩, so beautiful ✨, so selfless 💖, so kind 😇 and most imporatantly mine 😁. I am so grafeful for you baby 🥰, I don't have the words to express. \n\n\You stand by me every time, you tell things, you live cheerfully 🤩, sahi bolun jo aap esse cheerful rahete ho na woh mujhe sabse zyaada pasand hai, I know aap woh cheez zaroor karoge jo mujhe pasand hai 😍, so please stay cheerful always 🥰! Happy Always 😁! and You know.... Smiling always 😇! Please just isliye ke meko pasand hai baby pleaseeeeeee🫶!",
        signature: "Admiring you always",
        photoUrl: "Photos\\IMG_0156.enc"
    },
    {
        dayNumber: 25,
        dateStr: "Nov 21",
        title: "25 Days To Go: A Quarter Century Mark!",
        quote: "Just 25 days left, and my excitement is overflowing.",
        salutation: "My Beautiful Fiancée,",
        body: "Yasssss mere baby 🥰❤️ ka birthday aane wala hai in just 25 days! 🥳🎂🎉 The biggest day of the year 🌎💖, meri dearest, beautiful 😍, cutest 🥹, and the bestest Patni Jiiiiii 👰🏻‍♀️💍 ka Happiest Birthday 💝🎊. \n\n\Aapko pata hai baby... 🥺💕 mera baby 25 din me 24 saal ka ho jayega and 25 start ho jayega! 🎂🎀 Meri pyaari - Cutiepie 🧸❤️ ka Birthday... 🥳🎉 I can't wait baby 😘 another 25 days .... ⏳💗 Jaldiiiii 😍 - Happy Birthday Baby in Advance! 🎂🎁💋❤️",
        signature: "With endless kisses",
        photoUrl: "Photos\\DSC08126.enc"
    },
    {
        dayNumber: 24,
        dateStr: "Nov 22",
        title: "24 Days To Go: Your Little Quirks (aapki cute si aadatain)",
        quote: "It's the little things about you that captured my whole heart.",
        salutation: "Hey Cutie,",
        body: "Aapki yeh cute si aadatain mujko bohot pyari lagti hai baby 🥹❤️, but remember ki un aadaton se jyada pyari, jyada cute meri ek aadat hai woh hain meri Patni Jiii! 😘💗 \n\n\Aap kuch bhi karte ho na baby toh me aappe fidda ho jata hun 🫠❤️, aur aapki yeh cute-cute si aadatain ufffff.... 🙈💕 Woh kucchu pucchu ko leke sona 🧸🥺, woh ek marungi na bolna 😤😂, woh aakhain choti karke gussa karnne ki acting karna 😚🤏, Woh hehe karke hasna hayyyyy 😍💞. \n\n\Yeh saari baatain shayad aapke liye choti ho ya baachon jesi lagti ho 🥹, but baby aapki yeh aadatain, aapke cute se nakhre abb meri aadat ho gayi hai 🫶🏻❤️, jab bhi aap koi essi cute si cheez karte ho toh aapse pyaar aur ho jata hai.... 🥺💘 I Loveeeee Youuuuuuuuuuuuuu! 😘💋❤️🧿",
        signature: "Completely obsessed with you",
        photoUrl: "Photos\\cute.enc"
    },
    {
        dayNumber: 23,
        dateStr: "Nov 23",
        title: "23 Days To Go: How You Make Me Laugh",
        quote: "Laughter is sweetest when it's shared with you.",
        salutation: "My Favorite Person,",
        body: "I know baby aapko bohot accha lagta hai when I laugh, when I am happy, obviously meri Patni Jiii hai hi itni acchi sirf meko khush dekh ke hi khush ho jati hai. 🥹❤️\n\n\ Toh baby aaj ka letter thoda different hai, because its not about my baby (Sorry for this 🤭), its about me. Yassss you read it right it is about me. 😌😂\n\n\Its about aap mujhe kese hassa sakte ho. 🥰\n\n\So first and formost aap haste raho, happy raho, because You Happy I Double Happy. ❤️🫶\n\n\Next aapa chote bacchon jesse baat karna. Itna Marungi na... 😂❤️\n\n\Pata hai Kanha aaj kya hua... Baby aapko pata hai... 🥺💗 so so so many more aapke muh se yeh sab sunna itna accha lagta hai na lala me aapko kya bataun... 🥹😘\n\n\Itni sari aachi baatain hai aapme... itne cute ho aap... itna dyaan rakhte ho mera... itna pamper karte ho... 🥰❤️ itni baatain hai ki koi letter saari toh list hi nahi kar sakta... 🫂💕\n\n\I just want to tell you a big biggggggg bigggggggggggggg Thank Youuuuuuuuuu Babbyyyyyy!!! 🥹❤️❤️\n\n\Forever Grateful Lala... 🫶✨\n\n\and I know no words, no appriciation, no gratitude, no thank you can ever be enough for what you do for me but... 🥺 still as a token of love and a lot of respect please accept a small effort of gratitude and appriciation... from your Forver to My baby (Your Highness)! 👑❤️\n\n\Thank You Very Much Darling! 😘💗",
        signature: "Smiling because of you",
        photoUrl: "Photos\\7H8A0459.enc"
    },
    {
        dayNumber: 22,
        dateStr: "Nov 24",
        title: "22 Days To Go: The Comfort of Your Hugs",
        quote: "Home isn't a place anymore—it's being wrapped in your arms.",
        salutation: "My Sweetheart,",
        body: "Yasss baby 🥹❤️ your hugs 🤗💕, I know its just a small word but its worth writting an individual letter for. \n\n\💌 You remember I used to say no for hugs, wese toh toh me sahi hi bol raha tha baby, ab dekho na kessi aadat ho gayi hai yaar, everyday, every moment, I am craving for it 🥺🫂, shayad aapko bhi yeh feel hota ho ❤️. \n\n\Kitni bhi tension ho, me kitna hi travel karne ke baad Khargone kyun na aaya hun aapki ek hug and I don't have words, woh emotion, woh feeling....pata hi nahi ki usse kya bolun, just pure relive. 🥹💗 \n\n\Ek toh aap itne sundar 😍, upar se aapka warm sa hug essa lagta hai bas aur tight, aur tight, aur tight ekdum tightest 🫂❤️ {agar mere baby ki permission ho toh} 🙈💕. Your hug is the sweetest medicine darling! 💊🥰 \n\n\Thank You!!! ❤️ \n\n\I love you baby! 😘💋 \n\n\Aur haa one more thing baby meko aapke Kucchu Pucchu se bhi jalan hoti hai, usko aapko hug karke rahne milta hai {Woh bade kann wala teddy bear} 🧸😤... \n\n\Basss thoda time aur... Yasssss 🥹❤️🫂",
        signature: "Holding you tight",
        photoUrl: "Photos\\DSC08175.enc"
    },
    {
        dayNumber: 21,
        dateStr: "Nov 25",
        title: "21 Days To Go: Exactly Three Weeks!",
        quote: "Three weeks from today is December 16th!",
        salutation: "My Queen,",
        body: "Just 21 days baby - 3 weeks to my baby ka Happy {Happiest I hope} birthday. 🥹💖🎂 \n\n\No words how exicted I am, for the Hapyyyyyyyy Birthdayyyyy to My kucchuu puchuuu 🥹💕, My chotu baby 💖🧸, My darling 😘❤️, My heart ❤️, My Heart beat 💓, My sweet heart 💗, My wife 😍💍, My life 🧬❤️, My dreams 🤩✨, My everything 🥰🌎, My Angel 😇👼, My bestest friend 🫂💕, My Queen 👑❤️, My princess 👸💖, My dearest Patni ji 💝😘, My Radhika Jii and Kanha Jii ki cute Mata Shri 🫣💞, My Radha Rani Ji 💖🌸🙏",
        signature: "Counting every second",
        photoUrl: "Photos\\DSC07889.enc"
    },
    {
        dayNumber: 20,
        dateStr: "Nov 26",
        title: "20 Days To Go: Your Efforts",
        quote: "Thank You baby for your efforts and your love for me!",
        salutation: "My Inspiration,",
        body: "Baby dekho please jalan mat karna 😘❤️, abb sabhi ke itne punya nahi hote na ki, abb baby bohot punya karna padte hai meri madam jii jesi patni jii paane ke liye samjhe 🥹💗, esse hi nahi bolta yeh sab me lala 😌💕, you don't know mera baby mere se kitna saara pyaar karta hai madam 🥰❤️.\n\n\Mere ek normal se birthday ke liye pura din baith ke gift banaya hai mere baby ne 🎁💝, meri baby mere liye cute - cute se hankerchiefs bhi banati hai 🥺🧸, mere liye roz subah mere se bhi pehle uth ke meko utahta ho, jab tak nahi uthta hun aap try karte rahte ho 🥹💖.\n\n\I love you baby ❤️, isliye nahi ki aap meri liye efforts karte ho, for all these efforts that you make for me I am just grateful for you!!! 🫶🏻💗\n\n\Thankyou lala!!! 😘 And Yasss even reading these letters everyday is an effort and yasss I am very grateful to you for all these things!!! 💌❤️\n\n\Thank You So Much !!! I love you!!! 🥰💋",
        signature: "Forever thankful for you",
        photoUrl: "Photos\\IMG_0173.enc"
    },
    {
        dayNumber: 19,
        dateStr: "Nov 27",
        title: "19 Days To Go: Our Secret Language",
        quote: "A single look between us says a thousand words.",
        salutation: "My Best Friend,",
        body: "I love that we can look at each other across a crowded room and immediately know what the other is thinking. That unspoken connection is rare and priceless.",
        signature: "Only yours",
        photoUrl: ""
    },
    {
        dayNumber: 18,
        dateStr: "Nov 28",
        title: "18 Days To Go: Grateful for You",
        quote: "Gratitude fills my heart every time I look at you.",
        salutation: "My Love,",
        body: "If I listed everything I'm thankful for in you, I would need a million pages. You have enriched my life in ways words cannot capture.",
        signature: "Grateful forever",
        photoUrl: ""
    },
    {
        dayNumber: 17,
        dateStr: "Nov 29",
        title: "17 Days To Go: You Are So Stunning",
        quote: "Inside and out, you take my breath away.",
        salutation: "My Gorgeous Fiancée,",
        body: "Just a gentle reminder today in case you haven't looked in the mirror yet: you are drop-dead gorgeous. Your elegance and natural glow leave me speechless.",
        signature: "Truly enchanted",
        photoUrl: ""
    },
    {
        dayNumber: 16,
        dateStr: "Nov 30",
        title: "16 Days To Go: Goodbye November!",
        quote: "Tomorrow is your birthday month!",
        salutation: "My Sunshine,",
        body: "November is coming to an end, which means tomorrow begins DECEMBER—your official birthday month! Get ready for holiday lights, cozy sweaters, and all the birthday treats.",
        signature: "Ready for celebration",
        photoUrl: ""
    },
    {
        dayNumber: 15,
        dateStr: "Dec 01",
        title: "15 Days To Go: Welcome to December!",
        quote: "Halfway through our countdown, my love!",
        salutation: "My Dearest,",
        body: "Happy December 1st! We are officially halfway through our countdown—15 days left. December belongs to you, and I intend to make every single day of it magical for you.",
        signature: "With all my love",
        photoUrl: ""
    },
    {
        dayNumber: 14,
        dateStr: "Dec 02",
        title: "14 Days To Go: Two Weeks to the Big Day",
        quote: "Two weeks until December 16th!",
        salutation: "My Treasure,",
        body: "Exactly two weeks to go! I find myself daydreaming about our future together and all the birthdays we will celebrate as husband and wife.",
        signature: "Dreaming of our future",
        photoUrl: ""
    },
    {
        dayNumber: 13,
        dateStr: "Dec 03",
        title: "13 Days To Go: Our Cozy Nights",
        quote: "My favorite spot on earth is next to you.",
        salutation: "My Sweetheart,",
        body: "Whether we are out exploring or curled up watching movies under a blanket, doing nothing with you is better than doing anything with anyone else.",
        signature: "Snuggled with love",
        photoUrl: ""
    },
    {
        dayNumber: 12,
        dateStr: "Dec 04",
        title: "12 Days To Go: A Dozen Days Left!",
        quote: "12 days until the sweetest birthday celebration.",
        salutation: "Darling,",
        body: "A dozen days! Think of this note as a dozen virtual roses delivered straight into your heart. You deserve all the blossoms in the world. The days are flying by, and every morning I wake up counting down closer to treating you like royalty on your birthday.",
        signature: "All my devotion",
        photoUrl: ""
    },
    {
        dayNumber: 11,
        dateStr: "Dec 05",
        title: "11 Days To Go: How You Believe in Me",
        quote: "Your belief in me gives me wings.",
        salutation: "My Anchor,",
        body: "Whenever self-doubt creeps in, you remind me who I am. Having your love makes me feel invincible. Thank you for always building me up.",
        signature: "Proud to be yours",
        photoUrl: ""
    },
    {
        dayNumber: 10,
        dateStr: "Dec 06",
        title: "10 Days To Go: Single Digits Tomorrow!",
        quote: "The final stretch has officially begun.",
        salutation: "My Queen,",
        body: "Just 10 days remaining! We are entering the homestretch. I hope you're feeling as cherished as you truly are, because my heart is full to bursting.",
        signature: "Counting down closely",
        photoUrl: ""
    },
    {
        dayNumber: 9,
        dateStr: "Dec 07",
        title: "9 Days To Go: In Single Digits Now",
        quote: "9 days to go! The excitement is real.",
        salutation: "My Angel,",
        body: "Single digits at last! Only 9 days until December 16. If I could wrap up the moon and stars with a big red bow for you, I would in a heartbeat.",
        signature: "With starry eyes",
        photoUrl: ""
    },
    {
        dayNumber: 8,
        dateStr: "Dec 08",
        title: "8 Days To Go: You Make Life Sweet",
        quote: "Like sugar in morning coffee, you sweeten everything.",
        salutation: "My Sweetest One,",
        body: "Everything is simply better with you around. Food tastes better, songs sound prettier, and every sunset looks more colorful when I'm looking at it by your side.",
        signature: "Sweet on you always",
        photoUrl: ""
    },
    {
        dayNumber: 7,
        dateStr: "Dec 09",
        title: "7 Days To Go: Exactly One Week Left!",
        quote: "Seven days! The final countdown week begins.",
        salutation: "My Love,",
        body: "Only one week remaining! 7 little days until your birthday arrives. I can hardly contain my excitement to celebrate the most wonderful woman on earth.",
        signature: "Your eager fiancé",
        photoUrl: ""
    },
    {
        dayNumber: 6,
        dateStr: "Dec 10",
        title: "6 Days To Go: Growing Together",
        quote: "Every day with you is a new chapter I love reading.",
        salutation: "My Partner in Everything,",
        body: "I love seeing how we grow together as a team. We lift each other up, solve problems hand in hand, and create such a safe, loving bond. Here's to us.",
        signature: "Hand in hand",
        photoUrl: ""
    },
    {
        dayNumber: 5,
        dateStr: "Dec 11",
        title: "5 Days To Go: The Big 5!",
        quote: "Just 5 days until December 16th!",
        salutation: "My Darling Girl,",
        body: "High five, my love—we are just 5 days away! The countdown is nearly at its finish line, but my love for you is only just beginning to grow.",
        signature: "So deeply yours",
        photoUrl: ""
    },
    {
        dayNumber: 4,
        dateStr: "Dec 12",
        title: "4 Days To Go: 96 Hours of Anticipation",
        quote: "Almost there, my sweetest heart.",
        salutation: "My Forever Love,",
        body: "Four days left! I want you to pamper yourself, relax, and know that you are loved unconditionally and deeply by me every second of every day.",
        signature: "Pampering you in spirit",
        photoUrl: ""
    },
    {
        dayNumber: 3,
        dateStr: "Dec 13",
        title: "3 Days To Go: Three Words: I Love You",
        quote: "3 days left and three words that say it all.",
        salutation: "My Everything,",
        body: "Three days left. Three simple words that will never grow old: I love you. More today than yesterday, and even more tomorrow.",
        signature: "With all my passion",
        photoUrl: ""
    },
    {
        dayNumber: 2,
        dateStr: "Dec 14",
        title: "2 Days To Go: The Final 48 Hours",
        quote: "Two days! Can you feel the excitement in the air?",
        salutation: "My Soulmate,",
        body: "Only two days until the calendar says December 16! The birthday vibes are officially in full effect. Get ready for an unforgettable year ahead.",
        signature: "Buzzing with excitement",
        photoUrl: ""
    },
    {
        dayNumber: 1,
        dateStr: "Dec 15",
        title: "1 Day To Go: Tomorrow Is Your Birthday!",
        quote: "Tomorrow, my love! Tomorrow the world celebrates you!",
        salutation: "My Bride-to-Be,",
        body: "Tomorrow is December 16! 30 days of countdown have brought us right to the eve of your birthday.\n\nTonight when you close your eyes, know that you are the greatest thing that has ever happened to me. Tomorrow morning, we celebrate YOU!",
        signature: "Waiting eagerly for midnight",
        photoUrl: ""
    },
    {
        dayNumber: 0,
        dateStr: "Dec 16",
        title: "🎉 HAPPY BIRTHDAY MY BEAUTIFUL FIANCÉE! 🎉",
        quote: "Today is YOUR day! Happy Birthday, my love!",
        salutation: "Happy Birthday, My Whole World!",
        body: "THE DAY IS FINALLY HERE! HAPPY BIRTHDAY!\n\nToday, December 16th, is the day the love of my life was born. I thank the universe every day for bringing you into this world and into my arms.\n\nYou are my best friend, my soulmate, my dream come true, and the most stunning fiancée anyone could ever ask for. I promise to spend every day of this year making sure you feel as loved, cherished, respected, and happy as you make me.\n\nMay this new year of your life be filled with laughter, boundless joy, wild dreams fulfilled, and so much romance.\n\nI love you to infinity and back. Happy Birthday!",
        signature: "Forever & Always, Your Devoted Fiancé ❤️",
        photoUrl: ""
    }
];
