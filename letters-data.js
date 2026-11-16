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
        photoUrl: "Desktop Background.enc"
    },
    {
        dayNumber: 27,
        dateStr: "Nov 19",
        title: "27 Days To Go: Our Favorite Memories",
        quote: "Every memory with you is a treasure I keep close to my chest.",
        salutation: "My Forever Girl,",
        body: "I found myself reminiscing about our earliest dates today—the late night conversations, the silly giggles, and that exact moment I knew I wanted to spend forever with you.\n\nLooking back makes me smile, but looking forward to our future together is my greatest joy.",
        signature: "Eternally in love",
        photoUrl: ""
    },
    {
        dayNumber: 26,
        dateStr: "Nov 20",
        title: "26 Days To Go: Your Caring Heart",
        quote: "Your kindness makes the world softer and brighter.",
        salutation: "My Sweet Angel,",
        body: "The world can be noisy and tough, but your heart is always so tender. The way you care for the people you love inspires me to be a better man every single day.",
        signature: "Admiring you always",
        photoUrl: ""
    },
    {
        dayNumber: 25,
        dateStr: "Nov 21",
        title: "25 Days To Go: A Quarter Century Mark!",
        quote: "Just 25 days left, and my excitement is overflowing.",
        salutation: "My Beautiful Fiancée,",
        body: "25 days to go! In just a little over three weeks, we get to celebrate you being born. I hope you know that December 16 isn't just special to you—it is the anniversary of the world receiving its greatest masterpiece.",
        signature: "With endless kisses",
        photoUrl: ""
    },
    {
        dayNumber: 24,
        dateStr: "Nov 22",
        title: "24 Days To Go: Your Little Quirks",
        quote: "It's the little things about you that captured my whole heart.",
        salutation: "Hey Cutie,",
        body: "From the little expressions you make when you're thinking, to the songs you hum without noticing—every single detail of you is adorable to me. Never change a single thing.",
        signature: "Completely obsessed with you",
        photoUrl: ""
    },
    {
        dayNumber: 23,
        dateStr: "Nov 23",
        title: "23 Days To Go: How You Make Me Laugh",
        quote: "Laughter is sweetest when it's shared with you.",
        salutation: "My Favorite Person,",
        body: "Nobody can make me burst into genuine, tummy-aching laughter the way you do. Life with you is so lighthearted and joyful. Thank you for filling our lives with fun.",
        signature: "Smiling because of you",
        photoUrl: ""
    },
    {
        dayNumber: 22,
        dateStr: "Nov 24",
        title: "22 Days To Go: The Comfort of Your Hugs",
        quote: "Home isn't a place anymore—it's being wrapped in your arms.",
        salutation: "My Sweetheart,",
        body: "Whenever I hug you, everything else fades away. There's an unmistakable sense of belonging that only you can give me. Sending you the warmest, tightest hug today.",
        signature: "Holding you tight",
        photoUrl: "Desktop Background.enc"
    },
    {
        dayNumber: 21,
        dateStr: "Nov 25",
        title: "21 Days To Go: Exactly Three Weeks!",
        quote: "Three weeks from today is December 16th!",
        salutation: "My Queen,",
        body: "We are officially down to 3 weeks! The days are flying by, and every morning I wake up counting down closer to treating you like royalty on your birthday.",
        signature: "Counting every second",
        photoUrl: ""
    },
    {
        dayNumber: 20,
        dateStr: "Nov 26",
        title: "20 Days To Go: Your Passion & Drive",
        quote: "Watching you chase your dreams is purely breathtaking.",
        salutation: "My Inspiration,",
        body: "I am in awe of how hard you work and the dedication you bring to everything you set your mind on. You are intelligent, strong, and capable of anything.",
        signature: "Forever cheering for you",
        photoUrl: ""
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
        body: "A dozen days! Think of this note as a dozen virtual roses delivered straight into your heart. You deserve all the blossoms in the world.",
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
