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
