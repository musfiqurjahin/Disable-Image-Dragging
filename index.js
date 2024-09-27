//Created_by_JaHIN//

// Function to disable drag, long press, and download on images
function disableImageActions(selector) {
    document.querySelectorAll(selector).forEach(img => {
        // Prevent drag action (desktop)
        img.addEventListener('dragstart', event => {
            event.preventDefault();
        });
        
        // Prevent right-click (desktop/mobile)
        img.addEventListener('contextmenu', event => {
            event.preventDefault();
        });
        
        // Prevent touch hold behavior (mobile)
        img.addEventListener('touchstart', event => {
            event.preventDefault();
        });

        // Optional: Disable pointer events for extra protection
        img.style.pointerEvents = 'none';
    });
}

// Apply action
disableImageActions('.verified-badge-container img'); // For verified badge images
disableImageActions('.logo img'); // For logo images
