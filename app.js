// STATE MANAGEMENT & DATA STUBS
const SECRET_PASSCODE = "1810"; // Answer to "Where was our first kiss?"
const TOGETHER_START_DATE = new Date("2025-10-18T00:00:00");

const openWhenData = [
    { id: 1, title: "Open when you miss me", mood: "Longing", note: "Well Well Wellll , if u miss me just say so nigga its cuteeee, anywaysss, I guess its probably midnight and my ass is sleeping so forgive me for that cutu :( , you know if u r missing me a lil too much you can always call and wake me up I won't minddd , but if I am busy or we have fought then I am so sorry that I am not there for you rn love but always remember that I love you so much no matter whattt , mwahhh meri cutu capybara 💕", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600", locked: false },
    { id: 2, title: "Open when you can't sleep", mood: "Night", note: "Hmmmmmmmmm let's see , why can't my baby sleeeep huh ? what could be the reason? YESSS I knowww , tune merko pappiya nahi di na aaj that's whyyyyyyy 😡😡 , on a serious note you are probably sad or stressed because of exams or constant fighting at home , or probably my ass said something stupid and we had an argument , just eat  something or listen to songsss or send me kisses vale vnssss huhu , m sorry for not being there rn baby try sleeping okayyyyyyy? I love you so muchhhhhhh.╰(*°▽°*)╯", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600", locked: false },
    { id: 3, title: "Open when you're stressed", mood: "Comfort", note: "First of all my baby is very very strong , altho not physically but mentally very strongg , u can deal with anything in the world loveeee , i got your back so you don't need to worry about anything okay ? you can never let me down , I am proud of my smol baby so muchhhhh so don't stresss ittt 😘😙", img: "https://images.unsplash.com/photo-1499209974431-9dac3ada00d7?w=600", locked: false },
    { id: 4, title: "Open on New Year's Eve", mood: "Special", note: "Happy New Year my love! I cannot wait for another year with you.", img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=600", locked: true, unlockDate: "2026-12-31T23:59:59" }
];

const loveReasons = [
   "The way your smile lights up my phone screen every single time you text or call.",
  "How drop-dead gorgeous you look in every photo you send me.",
  "The specific facial expressions you make in your videos when you’re talking about something you love.",
  "Your eyes—they are so captivating, even through a camera lens.",
  "How effortless your beauty is, whether you're all dressed up or just waking up.",
  "The cozy, warm vibe you give off whenever we video call.",
  "The way your hair looks when you randomly play with it on camera.",
  "How your laugh in videos instantly fixes my worst moods.",
  "The way you look at the camera when you’re trying to make me blush.",
  "Seeing your soft, radiant smile when I give you a compliment.",
  "How camera-shy you get sometimes, which is ridiculously adorable.",
  "The fact that you are genuinely the prettiest girl I have ever laid eyes on.",
  "How stylish you look in every single outfit photo you share with me.",
  "The cozy, safe feeling I get just hearing your voice.",
  "How caring and thoughtful you are, even from miles away.",
  "Your adorable sense of humor and the way you make me laugh until my stomach hurts.",
  "How genuine and authentic you stay in everything you say and do.",
  "The little happy dances you do in your videos when you’re excited.",
  "Your cute, distinctive voice that I could listen to on repeat all day.",
  "The way you get passionate when explaining a random topic to me.",
  "How gentle and kind-hearted you are with everyone around you.",
  "The cute, sleepy voice you have when we talk late at night or early in the morning.",
  "How comfortable you make it for me to open up and be myself with you.",
  "Your positive energy that brightens up my whole day.",
  "How smart, sharp, and quick-witted you are in our conversations.",
  "The cute way you pronounce certain words or phrases.",
  "How easy it feels to talk to you for hours without ever running out of things to say.",
  "The fact that distance means nothing because you mean everything to me.",
  "How connected I feel to you, even though we haven't held hands in person yet.",
  "The way you randomly send me sweet texts, videos, or photos just to say hi.",
  "How we can sit in comfortable silence on video calls and it still feels perfect.",
  "The way you remember tiny details about my life and bring them up later.",
  "How we have created our own little world, full of inside jokes and sweet nicknames.",
  "The butterflies I get in my stomach every single time your name pops up on my screen.",
  "How supported and encouraged I feel by you, no matter what I’m going through.",
  "The cute reaction videos you send me when I send you a gift or a sweet message.",
  "How good you are at making me feel loved and cherished from afar.",
  "The way you check in on me to make sure I’ve eaten or rested.",
  "How we can turn a simple phone call into the highlight of my entire week.",
  "Thinking about the exact second I finally get to see you in person for the first time.",
  "Dreaming about the moment I get to wrap my arms around you and give you the biggest hug.",
  "How excited I am to take our very first real picture together.",
  "Knowing that one day, screen-time will turn into all-our-time.",
  "Planning all the date ideas on our bucket list together.",
  "Imagining what it will feel like to hold your hand while walking down the street.",
  "The thought of hearing your laugh right next to me instead of through a speaker.",
  "How amazing our future trips and adventures together are going to be.",
  "Knowing that you are worth every single mile between us.",
  "The excitement of finally getting to share a meal across the same table.",
  "How much sweeter our first meeting will be because of all the time we’ve spent building this bond.",
  "Knowing that no matter how far apart we are right now, you are my favorite person.",
  "Simply put... because you are you, and I wouldn't trade you for the world."
];

const bucketList = [
    { id: 1, cat: "Cozy Nights In", title: "Build a massive blanket fort and movie marathon", completed: false },
    { id: 2, cat: "Travel Adventures", title: "Watch the sunrise together at the beach", completed: false },
    { id: 3, cat: "Foodie Dates", title: "Bake homemade pasta from scratch", completed: false },
    { id: 4, cat: "Cheap & Silly", title: "Go to a thrift store with $10 and pick outfits for each other", completed: false }
];

const soundtrack = [
    { title: "Lover", artist: "Taylor Swift", note: "Reminds me of our first road trip together." },
    { title: "Perfect", artist: "Ed Sheeran", note: "Because every time I dance with you, this song plays in my head." }
];

const timelineEvents = [
    { title: "Our First Date", date: "Feb 14, 2023", desc: "We talked for hours at the coffee shop until they had to close!", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600" },
    { title: "Our First Vacation", date: "Jul 20, 2023", desc: "Unforgettable days soaking in the sun and exploring new streets.", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600" }
];

const dateIdeas = [
    { title: "Virtual Food Delivery Surprise", desc: "Order takeout or dessert for each other on DoorDash/UberEats without revealing what you picked, then open and eat together on call!" },
  { title: "Movie & Show Watch Party", desc: "Sync up a movie or TV series using Teleparty or Scener so we can react together in real-time over video." },
  { title: "FaceTime Culinary Challenge", desc: "Pick a new recipe together, buy the ingredients beforehand, and cook side-by-side on video call to see whose turns out best." },
  { title: "Multiplayer Gaming Night", desc: "Team up or compete against each other in cozy or fun online games like Stardew Valley, Mario Kart, or Jackbox." },
  { title: "Virtual Museum & Gallery Tour", desc: "Take a guided virtual stroll through world-class exhibits around the globe using Google Arts & Culture." },
  { title: "Paint & Sip Session", desc: "Grab cheap art supplies, put on a Bob Ross tutorial on YouTube, and share a drink while painting together on video." },
  { title: "Personality & Quiz Night", desc: "Take interactive quizzes together like Love Languages, 16Personalities, or BuzzFeed quizzes and compare our results." },
  { title: "Dream Vacation Planning", desc: "Open up a shared Pinterest board or Google Doc and spend an evening designing our ultimate travel itinerary for when we meet!" },
  { title: "Virtual Morning Coffee Date", desc: "Wake up early together, brew our favorite coffee or tea, and start our morning with a peaceful, laid-back video call." },
  { title: "Co-Curated Playlist Party", desc: "Create a shared Spotify playlist in real time, adding songs that remind us of each other and sharing the stories behind them." },
  { title: "Neighborhood Walk Call", desc: "Go for a stroll outside while video calling to show each other our favorite local spots, parks, and scenery in our towns." },
  { title: "Two-Person Book or Show Club", desc: "Read a chapter of the same book or watch an episode every week, then hop on video call to share our thoughts and theories." },
  { title: "Late-Night Stargazing Call", desc: "Step outside during an evening call and look up at the night sky together while talking about life, dreams, and everything else." },
  { title: "Interactive Online Trivia", desc: "Test our knowledge against each other in fun online trivia games like QuizUp or Jeopardy to see who holds bragging rights!" },
  { title: "Candlelit Video Fine Dining", desc: "Dress up in fancy date-night outfits, set up candles near our screens, and share a romantic dinner date together from afar." }
];

// INIT FUNCTIONALITY ON LOAD
document.addEventListener("DOMContentLoaded", () => {
    startCounter();
    renderEnvelopes();
    renderBucketList("All");
    renderSoundtrack();
    renderTimeline();
    drawRandomReason();
});

// PASSCODE UNLOCK
function unlockSite(e) {
    e.preventDefault();
    const input = document.getElementById("passcodeInput").value.trim().toLowerCase();
    const card = document.getElementById("lockCard");
    const error = document.getElementById("lockError");

    if (input === SECRET_PASSCODE) {
        document.getElementById("lockModal").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");
        spawnHearts(20);
    } else {
        card.classList.add("animate-shake");
        error.classList.remove("hidden");
        setTimeout(() => card.classList.remove("animate-shake"), 500);
    }
}

// LIVE TIMER COUNTER
function startCounter() {
    setInterval(() => {
        const now = new Date();
        const diff = now - TOGETHER_START_DATE;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / 1000 / 60) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = mins < 10 ? "0" + mins : mins;
        document.getElementById("seconds").innerText = secs < 10 ? "0" + secs : secs;
    }, 1000);
}

// AUDIO PLAYER TOGGLE
function toggleAudio() {
    const audio = document.getElementById("welcomeAudio");
    const btn = document.getElementById("playAudioBtn");
    if (audio.paused) {
        audio.play();
        btn.innerText = "⏸";
    } else {
        audio.pause();
        btn.innerText = "▶";
    }
}

// RENDER ENVELOPES
function renderEnvelopes() {
    const container = document.getElementById("envelopeGrid");
    container.innerHTML = openWhenData.map(env => `
        <div onclick="openEnvelope(${env.id})" class="envelope-card bg-white p-6 rounded-2xl shadow-md border border-rose-100 cursor-pointer flex items-center justify-between hover:shadow-lg">
            <div class="flex items-center space-x-4">
                <span class="text-3xl">${env.locked ? '🔒' : '✉️'}</span>
                <div>
                    <h4 class="font-bold text-stone-800 text-sm">${env.title}</h4>
                    <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-rose-100 text-rose-500 rounded-full">${env.mood}</span>
                </div>
            </div>
            <span class="text-xs text-rose-400 font-semibold">${env.locked ? 'Locked' : 'Open →'}</span>
        </div>
    `).join('');
}

function openEnvelope(id) {
    const item = openWhenData.find(x => x.id === id);
    if (item.locked) {
        alert("🔒 This note is time-locked until " + new Date(item.unlockDate).toLocaleDateString() + "!");
        return;
    }
    document.getElementById("modalTitle").innerText = item.title;
    document.getElementById("modalBody").innerText = item.note;
    const img = document.getElementById("modalImg");
    if (item.img) {
        img.src = item.img;
        img.classList.remove("hidden");
    } else {
        img.classList.add("hidden");
    }
    document.getElementById("letterModal").classList.remove("hidden");
}

function closeModal(id) {
    document.getElementById(id).classList.add("hidden");
}

// 52 REASONS CARD FLIP & DRAW
let isFlipped = false;
function flipCard() {
    const card = document.getElementById("loveCard");
    isFlipped = !isFlipped;
    if (isFlipped) card.classList.add("rotate-y-180");
    else card.classList.remove("rotate-y-180");
}

function drawRandomReason() {
    const randomIndex = Math.floor(Math.random() * loveReasons.length);
    document.getElementById("cardNum").innerText = `Reason #${randomIndex + 1}`;
    document.getElementById("cardReason").innerText = loveReasons[randomIndex];
    if (isFlipped) flipCard();
}

// BUCKET LIST CATEGORIES & CLAIM
function renderBucketList(category) {
    const container = document.getElementById("bucketList");
    const filtered = category === "All" ? bucketList : bucketList.filter(x => x.cat === category);
    
    container.innerHTML = filtered.map(item => `
        <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-rose-100">
            <div class="flex items-center space-x-3">
                <input type="checkbox" ${item.completed ? 'checked' : ''} onchange="toggleBucket(${item.id})" class="w-4 h-4 accent-rose-400 rounded cursor-pointer">
                <span class="text-sm ${item.completed ? 'line-through text-stone-400' : 'text-stone-700'}">${item.title}</span>
            </div>
            <button onclick="claimDate('${item.title}')" class="text-[10px] font-bold px-3 py-1 bg-rose-100 text-rose-500 hover:bg-rose-200 rounded-full">Claim Date!</button>
        </div>
    `).join('');
}

function filterBucketList(cat) {
    renderBucketList(cat);
}

function toggleBucket(id) {
    const item = bucketList.find(x => x.id === id);
    if (item) item.completed = !item.completed;
    renderBucketList("All");
}

function claimDate(title) {
    alert(`💖 You claimed: "${title}"! A notification email has been dispatched to your boyfriend!`);
}

// SOUNDTRACK
function renderSoundtrack() {
    const container = document.getElementById("soundtrackList");
    container.innerHTML = soundtrack.map(s => `
        <div class="bg-white p-5 rounded-2xl shadow-sm border border-rose-100 flex flex-col justify-between">
            <div>
                <div class="flex items-center justify-between mb-2">
                    <h4 class="font-bold text-stone-800">${s.title}</h4>
                    <span class="text-xs text-rose-400 font-medium">${s.artist}</span>
                </div>
                <p class="text-xs text-stone-500 italic mb-4">"${s.note}"</p>
            </div>
            <div class="w-full bg-rose-50 p-2 rounded-xl text-center text-xs text-rose-500 font-semibold cursor-pointer hover:bg-rose-100">
                ▶ Play Track Preview
            </div>
        </div>
    `).join('');
}

// TIMELINE
function renderTimeline() {
    const container = document.getElementById("timelineContainer");
    container.innerHTML = timelineEvents.map(t => `
        <div class="relative pl-6">
            <div class="absolute -left-[9px] top-1.5 w-4 h-4 bg-rose-400 rounded-full border-2 border-white"></div>
            <span class="text-xs font-bold text-rose-400 uppercase tracking-wider">${t.date}</span>
            <h4 class="font-bold text-stone-800 text-lg">${t.title}</h4>
            <p class="text-xs text-stone-500 mb-3">${t.desc}</p>
            <img src="${t.img}" class="w-48 h-32 object-cover rounded-xl shadow-md border-4 border-white hover:scale-105 transition-transform cursor-pointer">
        </div>
    `).join('');
}

// DATE WHEEL RANDOMIZER
function spinDateWheel() {
    const res = document.getElementById("dateWheelResult");
    res.innerHTML = `<p class="text-rose-400 font-bold animate-pulse">Spinning the date wheel...</p>`;
    setTimeout(() => {
        const pick = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
        res.innerHTML = `
            <h4 class="font-bold text-stone-800 text-lg">${pick.title}</h4>
            <p class="text-xs text-stone-500 mt-1">${pick.desc}</p>
        `;
        spawnHearts(8);
    }, 1000);
}

// EMERGENCY KISS WEBHOOK SIMULATION
function sendKiss() {
    spawnHearts(15);
    alert("😘 Kiss sent! A real-time notification has been pushed directly to your boyfriend's phone!");
}

// EASTER EGGS
function triggerEasterEgg(type) {
    if (type === 'star') {
        alert("⭐ Easter Egg Found! Secret note: You shine brighter than any star in the sky!");
    } else if (type === 'clover') {
        alert("🍀 Easter Egg Found! Secret note: I am the luckiest guy in the world to have you!");
    }
}

// HEART PARTICLES ANIMATION
function spawnHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart-particle");
        heart.innerText = "💖";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 20 + 80 + "vh";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}