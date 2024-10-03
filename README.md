<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Drag and Download Blocker - Created by JaHIN</title>
</head>
<body>
    <h1>Image Drag and Download Blocker</h1>
    <p>This script is designed to block users from dragging, right-clicking, or downloading images on a webpage, while still keeping the images clickable. It is useful when you want to protect specific images from being easily copied or saved, but you also want to maintain their functionality (e.g., clicking on logos or badges).</p>

  <h2>Features</h2>
    <ul>
        <li><strong>Disable Image Drag:</strong> Prevents users from dragging images, which is a common method used to copy or download images.</li>
        <li><strong>Block Right-click Context Menu:</strong> Disables the right-click context menu on images, preventing users from accessing the "Save image as..." option on both desktop and mobile devices.</li>
        <li><strong>Keep Images Clickable:</strong> The script ensures that images remain clickable, so users can still interact with them (e.g., navigation to a different page or showing a pop-up).</li>
        <li><strong>Mobile Compatibility:</strong> Prevents long-press actions on mobile devices that usually trigger the context menu, without affecting the click functionality on touchscreens.</li>
    </ul>

    
   <h2>How It Works</h2>
    <p>The script applies event listeners to images that match specific CSS selectors. It blocks actions such as dragging and right-clicking, which are typically used to download images. At the same time, it ensures that the images remain fully clickable for both desktop and mobile users.</p>

   <h3>Key Functionalities:</h3>
    <ul>
        <li><strong>Dragstart Prevention:</strong> The script listens for the <code>dragstart</code> event on the selected images and calls <code>event.preventDefault()</code> to block image dragging.</li>
        <li><strong>Contextmenu Prevention:</strong> The script listens for the <code>contextmenu</code> event (triggered by right-clicking or long-pressing) and prevents the default browser behavior, stopping the "Save image as..." option from appearing.</li>
        <li><strong>Selector-based Targeting:</strong> The function takes a CSS selector as an argument, allowing flexibility to block specific images (like logos or verified badges) without affecting all images on the page.</li>
    </ul>

    
   <h2>Usage</h2>
    <p>To use this script on your website:</p>
    <ol>
        <li>Copy the provided JavaScript code.</li>
        <li>Paste it into your HTML file within a <code>&lt;script&gt;</code> tag or link to it from an external JavaScript file.</li>
        <li>Pass a CSS selector to the <code>disableImageActions</code> function to apply the drag and download blocking behavior to specific images.</li>
        <li>Customize the selectors in the script based on the images you want to protect.</li>
    </ol>

   <h2>Example Code</h2>
    <p>Below is an example of how to include and use the script to protect specific images:</p>
    <pre>
        &lt;script&gt;
        // Insert the JavaScript code here
        &lt;/script&gt;
    </pre>

   <p>For instance, if you want to block drag and download actions on verified badge images and logo images, the function calls would look like this:</p>
    <pre>
        disableImageActions('.verified-badge-container img'); // For verified badge images
        disableImageActions('.logo img'); // For logo images
    </pre>

  <h2>Important Notes</h2>
    <ul>
        <li><strong>Not a Full Security Solution:</strong> This script can deter casual users from downloading images, but it is not a foolproof method. Advanced users can still use browser developer tools or other techniques to access the image files.</li>
        <li><strong>Preserve Functionality:</strong> The script allows images to remain clickable, making it suitable for elements like logos or verified badges that also serve as links or trigger actions when clicked.</li>
    </ul>

</body>
</html>
