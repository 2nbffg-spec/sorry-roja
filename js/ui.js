/**
 * UI Module
 * Handles all UI updates and interactions
 */

const UI = {
    currentSpeechIndex: 0,
    totalSpeechParts: SPEECHES.length,
    slapCounter: 0,

    init() {
        this.cacheElements();
        this.attachEventListeners();
        this.updateDisplay();
    },

    cacheElements() {
        this.elements = {
            partLabel: document.getElementById('partLabel'),
            speechText: document.getElementById('speechText'),
            speechProgress: document.getElementById('speechProgress'),
            speechTotal: document.getElementById('speechTotal'),
            counterValue: document.querySelector('.counter-value'),
            slapBtn: document.getElementById('slapBtn'),
            forgiveBtn: document.getElementById('forgiveBtn'),
            resetBtn: document.getElementById('resetBtn'),
            endingMessage: document.getElementById('endingMessage'),
            messageBox: document.getElementById('messageBox'),
            progressFill: document.querySelector('.progress-fill')
        };

        // Set total speeches
        this.elements.speechTotal.textContent = this.totalSpeechParts;
    },

    attachEventListeners() {
        this.elements.slapBtn.addEventListener('click', () => this.handleSlap());
        this.elements.forgiveBtn.addEventListener('click', () => this.handleForgive());
        this.elements.resetBtn.addEventListener('click', () => this.handleReset());

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 's' || e.key === 'S') this.handleSlap();
            if (e.key === 'f' || e.key === 'F') {
                if (!this.elements.forgiveBtn.disabled) this.handleForgive();
            }
            if (e.key === 'r' || e.key === 'R') this.handleReset();
        });
    },

    handleSlap() {
        this.slapCounter++;
        Character.slapCount = this.slapCounter;

        // Update UI
        this.updateCounter();
        this.showNextSpeech();

        // Character animation
        Character.hurt();

        // Effects
        Effects.shakeScreen();

        // Check if can forgive
        if (this.slapCounter >= APP_CONFIG.slapThresholdForForgive) {
            this.enableForgiveButton();
        }

        // Show message
        this.showMessage();
    },

    handleForgive() {
        Character.heal();
        this.elements.slapBtn.disabled = true;
        this.elements.forgiveBtn.disabled = true;

        // Effects
        Effects.createHeartShower();
        Effects.createConfetti();

        // Show ending message
        setTimeout(() => {
            this.showEndingMessage();
            this.elements.resetBtn.classList.add('show');
        }, 500);
    },

    handleReset() {
        this.currentSpeechIndex = 0;
        this.slapCounter = 0;
        Character.reset();
        this.elements.slapBtn.disabled = false;
        this.elements.forgiveBtn.disabled = true;
        this.elements.forgiveBtn.classList.remove('active');
        this.elements.resetBtn.classList.remove('show');
        this.elements.endingMessage.classList.remove('show');
        this.elements.endingMessage.textContent = '';
        this.elements.messageBox.textContent = '';
        this.updateDisplay();
    },

    updateDisplay() {
        this.updateCounter();
        this.showNextSpeech();
    },

    updateCounter() {
        this.elements.counterValue.textContent = this.slapCounter;
    },

    showNextSpeech() {
        if (this.currentSpeechIndex < this.totalSpeechParts) {
            const speech = SPEECHES[this.currentSpeechIndex];
            this.elements.partLabel.textContent = speech.part;
            this.elements.speechText.textContent = speech.text;
            this.elements.speechProgress.textContent = this.currentSpeechIndex + 1;
            this.currentSpeechIndex++;

            // Update progress bar
            const progress = ((this.currentSpeechIndex) / this.totalSpeechParts) * 100;
            this.elements.progressFill.style.width = progress + '%';
        }
    },

    enableForgiveButton() {
        this.elements.forgiveBtn.disabled = false;
        this.elements.forgiveBtn.classList.add('active');
    },

    showMessage() {
        const messages = MESSAGES.extraSlaps;
        if (this.slapCounter > APP_CONFIG.slapThresholdForForgive) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            this.elements.messageBox.textContent = randomMessage;
        }
    },

    showEndingMessage() {
        const message = `💚 Thank you for giving me a chance, Roja. I promise to be better for you. I will spend my life making this up to you. 💚`;
        this.elements.endingMessage.textContent = message;
        this.elements.endingMessage.classList.add('show');
    }
};
