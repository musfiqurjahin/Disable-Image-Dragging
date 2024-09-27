//Created_by_JaHIN//

// Function to disable drag, long press, and download on images but keep them clickable
function disableImageActions(selector) {
    document.querySelectorAll(selector).forEach(img => {
        // Prevent drag action (desktop)
        img.addEventListener('dragstart', event => {
            event.preventDefault();
        });

        // Prevent right-click (desktop/mobile) and long-press context menu on mobile
        img.addEventListener('contextmenu', event => {
            event.preventDefault();
        });

        // Remove touchstart preventDefault to allow clicks on mobile
    });
}

// Apply actions in:
disableImageActions('.verified-badge-container img'); // For verified badge images
disableImageActions('.logo img'); // For logo images


