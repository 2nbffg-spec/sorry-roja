/**
 * Main Application File
 * Initializes all modules and handles app lifecycle
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎭 I\'m Sorry, Roja - Apology Website');
    console.log('💔 Initializing application...');

    // Initialize modules
    Character.init();
    UI.init();

    // Audio Setup
    const bgMusic = document.getElementById('bgMusic');
    const slapSound = document.getElementById('slapSound');
    const forgiveMusic = document.getElementById('forgiveMusic');

    // Store audio elements globally for UI module
    window.audioElements = { bgMusic, slapSound, forgiveMusic };

    // Start background music
    bgMusic.play().catch(err => {
        console.log('Audio autoplay prevented (user interaction required)');
        // Play on first user interaction
        document.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play();
            }
        }, { once: true });
    });

    console.log('✅ Application ready!');
    console.log('💡 Tips:');
    console.log('   - Press S to slap');
    console.log('   - Press F to forgive (after 3 slaps)');
    console.log('   - Press R to reset');
});

// Handle visibility change
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('😢 Please come back...');
    }
});