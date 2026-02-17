const achievementQueue = [];
const activeAchievements = [];
const MAX_VISIBLE_CARDS = 5;
const CARD_SPACING = 5; // pixels between cards
const FADE_DURATION = 1000; // fade & fly up duration
const VISIBLE_TIME = 4000; // time before fade starts
const PAUSE_BEFORE_SHIFT = 300; // pause before sliding down new card

function unlockAchievementCard(name, tooltip) {
    const card = document.createElement("div");
    card.className = "achievementCard";
    card.classList.add('themed4');
    card.innerHTML = `Achievement: <b>"${name}"</b> Unlocked!</b><br><hr>${tooltip}`;
    card.style.opacity = "0";
    card.style.transform = "translateY(-20px)";
    card.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    achievementQueue.push(card);
    processQueue();
    updateBackgrounds();
}

async function sendToast(text) {
    const card = document.createElement("div");
    card.className = "achievementCard";
    card.classList.add('themed4');
    card.innerHTML = text;
    card.style.opacity = "0";
    card.style.transform = "translateY(-20px)";
    card.style.transition = "transform 0.5s ease, opacity 0.5s ease";

    achievementQueue.push(card);
    processQueue();
    updateBackgrounds();
}

function processQueue() {
    const container = document.getElementById("achievementNotifications");

    // If nothing to do, exit
    if (achievementQueue.length === 0 && activeAchievements.length === 0) return;

    const hasSpace = activeAchievements.length < MAX_VISIBLE_CARDS;

    // Only add new card if we have space and there is one queued
    if (hasSpace && achievementQueue.length > 0) {
        const card = achievementQueue.shift();
        card.style.opacity = "0";
        card.style.transform = `translateY(-100px)`; // spawn off-screen
        container.prepend(card);
        activeAchievements.unshift(card); // newest at top
        updateBackgrounds();

        // Slide everything down smoothly including the new card
        requestAnimationFrame(() => {
            activeAchievements.forEach((c, i) => {
                const newY = i * CARD_SPACING;
                c.style.transform = `translateY(${newY}px)`;
                c.style.opacity = "1";
            });
        });

        // Short pause before scheduling fade for bottom-most card
        setTimeout(() => {
            scheduleFade(activeAchievements[activeAchievements.length - 1]);
        }, PAUSE_BEFORE_SHIFT);
    } else if (activeAchievements.length > 0) {
        // Stack is not full, just make sure bottom card fades
        scheduleFade(activeAchievements[activeAchievements.length - 1]);
    }
}

// smoothly shift all active cards to their stacked positions
function slideDownCards(callback) {
    // Force the browser to register the current positions
    activeAchievements.forEach(c => c.getBoundingClientRect());

    // Apply new stacked positions
    activeAchievements.forEach((c, i) => {
        const newY = i * CARD_SPACING; // negative spacing to stack slightly overlapping
        c.style.transform = `translateY(${newY}px)`;
    });

    // Wait for transition to finish
    setTimeout(() => {
        if (callback) callback();
    }, 500); // match the transform transition duration
}

function scheduleFade(card) {
    // Avoid double-scheduling the same card
    if (card._fadeScheduled) return;
    card._fadeScheduled = true;

    setTimeout(() => fadeOutAchievement(card), VISIBLE_TIME);
}

function fadeOutAchievement(card) {
    const isBottom = activeAchievements[activeAchievements.length - 1] === card;

    if (!isBottom) {
        // retry shortly if not yet at bottom
        setTimeout(() => fadeOutAchievement(card), 500);
        return;
    }

    card.style.opacity = "0";
    card.style.transform = `translateY(-${card.offsetHeight + CARD_SPACING}px)`;

    setTimeout(() => {
        card.remove();
        const idx = activeAchievements.indexOf(card);
        if (idx > -1) activeAchievements.splice(idx, 1);

        // Only slide remaining cards if new card is coming in
        if (achievementQueue.length > 0) slideDownCards();

        // Process next queued card
        processQueue();
    }, FADE_DURATION);
}