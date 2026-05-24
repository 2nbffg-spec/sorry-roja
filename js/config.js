/**
 * Configuration File
 * Contains all speech parts and app constants
 */

const APP_CONFIG = {
    slapThresholdForCrying: 2,
    slapThresholdForForgive: 3,
    tearCreationDelay: 150,
    heartShowerCount: 40,
    heartShowerDelay: 40,
    characterHealDuration: 800,
    characterHurtDuration: 400,
};

const SPEECHES = [
    {
        part: "Part 1: The Responsibility",
        text: "Roja, I am sorry. I know every fault is mine. I did everything, and every mistake was created by me. I have been trying to find a way to say sorry to you for the last 2-3 months because I feel so much guilt."
    },
    {
        part: "Part 1: The Responsibility",
        text: "If I can't say this to you, I will never be able to forgive myself for the rest of my life. I know I did so many foul things and I hurt you so deeply."
    },
    {
        part: "Part 1: The Responsibility",
        text: "I know you are a girl with the softest heart, but I made you into a hard-hearted person because of my actions. I hate myself for changing the beautiful person you are."
    },
    {
        part: "Part 2: The Human Plea",
        text: "Every single human from Adam to now makes mistakes but people get a chance to fix what they broke. I am begging for that one chance."
    },
    {
        part: "Part 2: The Human Plea",
        text: "I want to live with you for my whole life. If I made the biggest mistake, please forgive me this one last time."
    },
    {
        part: "Part 2: The Human Plea",
        text: "If I ever do anything wrong again, or if I make a mistake without realizing it—instantly tell me. Teach me, guide me, and show me how to be better for you."
    },
    {
        part: "Part 2: The Human Plea",
        text: "I promise I will listen and learn."
    },
    {
        part: "Part 3: The Promise",
        text: "One last time I am sorry, Tuki. If you never reply, I am waiting for you. Please forgive me. I am so sorry. 💔"
    },
    {
        part: "Part 3: The Promise",
        text: "I will stand here in the silence, holding onto the memory of us, hoping that the echo of my sincerity reaches your heart."
    }
];

const MESSAGES = {
    waiting: "😔 Waiting for forgiveness...",
    hurt: "😢 I deserved that...",
    crying: "😭 Please forgive me...",
    almostForgiven: "🥺 I promise to be better...",
    healed: "🥰 Thank you so much...",
    extraSlaps: [
        "I understand your anger...",
        "I'm sorry... I'm sorry...",
        "Every slap is deserved...",
        "I won't give up on us...",
        "You can slap me forever..."
    ]
};
