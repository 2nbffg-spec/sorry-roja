/**
 * Character Module
 * Handles all character state and animations
 */

const Character = {
    state: 'normal', // normal, hurt, crying, healed
    slapCount: 0,
    element: null,
    tearContainer: null,

    init() {
        this.element = document.getElementById('character');
        this.tearContainer = this.element.querySelector('.tears-container');
    },

    setState(newState) {
        if (this.state === newState) return;

        // Remove previous state classes
        this.element.classList.remove('hurt', 'crying', 'healed');

        // Add new state class
        this.state = newState;
        this.element.classList.add(newState);

        // Update status
        this.updateStatus();
    },

    hurt() {
        this.setState('hurt');
        setTimeout(() => {
            if (this.slapCount > APP_CONFIG.slapThresholdForCrying) {
                this.setState('crying');
                this.createTears();
            } else {
                this.setState('normal');
            }
        }, APP_CONFIG.characterHurtDuration);
    },

    createTears() {
        const tearCount = 2;
        for (let i = 0; i < tearCount; i++) {
            setTimeout(() => {
                this.createSingleTear();
            }, i * APP_CONFIG.tearCreationDelay);
        }
    },

    createSingleTear() {
        const tear = document.createElement('div');
        tear.className = 'tear';
        tear.style.left = (50 + Math.random() * 40 - 20) + 'px';
        tear.style.top = '30px';
        tear.style.animation = 'tearFall 1.5s ease-out forwards';
        this.tearContainer.appendChild(tear);
        setTimeout(() => tear.remove(), 1500);
    },

    heal() {
        this.setState('healed');
        setTimeout(() => {
            // Keep healed state
        }, APP_CONFIG.characterHealDuration);
    },

    updateStatus() {
        const statusEl = document.getElementById('characterStatus');
        const messages = MESSAGES;

        let message = messages.waiting;
        if (this.state === 'hurt') message = messages.hurt;
        if (this.state === 'crying') message = messages.crying;
        if (this.state === 'healed') message = messages.healed;

        statusEl.textContent = message;
    },

    reset() {
        this.state = 'normal';
        this.slapCount = 0;
        this.element.classList.remove('hurt', 'crying', 'healed');
        this.tearContainer.innerHTML = '';
        this.updateStatus();
    }
};
