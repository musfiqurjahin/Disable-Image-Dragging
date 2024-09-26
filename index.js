//Created_by_JaHIN//

// Function to disable drag on images:
function disableImageDrag(selector) {
    document.querySelectorAll(selector).forEach(img => {
        img.addEventListener('dragstart', event => {
            event.preventDefault(); // Prevent drag action
        });
    });
}

// Apply drag prevention on both verified badge and logo images
disableImageDrag('.verified-badge-container img'); // For verified badge images
disableImageDrag('.logo img'); // For logo images
