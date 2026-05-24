/**
 * Effects Module
 * Handles all visual effects and animations
 */

const Effects = {
    createHeartShower() {
        for (let i = 0; i < APP_CONFIG.heartShowerCount; i++) {
            setTimeout(() => {
                this.createSingleHeart();
            }, i * APP_CONFIG.heartShowerDelay);
        }
    },

    createSingleHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-50px';
        heart.style.animation = 'heartFall 2s ease-out forwards';
        heart.style.position = 'fixed';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2000);
    },

    createConfetti() {
        for (let i = 0; i < 20; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.fontSize = (Math.random() * 20 + 10) + 'px';
            confetti.style.animation = 'heartFall 2.5s ease-out forwards';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.textContent = ['✨', '💫', '⭐', '💝', '🎉'][Math.floor(Math.random() * 5)];

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 2500);
        }
    },

    shakeScreen() {
        const container = document.querySelector('.container');
        container.style.animation = 'shake 0.4s ease-out';
        setTimeout(() => {
            container.style.animation = '';
        }, 400);
    }
};
