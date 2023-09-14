window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('backgroundVideo').addEventListener('ended', function() {
        // Hide the video
        this.style.display = 'none';
        console.log("Video Ended"); // Add this


        // Display the end image
        document.getElementById('endImage').style.display = 'block';

        // Hide the knock button
        document.getElementById('knockButton').style.display = 'none';

        // Display the application icons
        document.querySelector('.icon-dock').style.display = 'flex';
    });
});

function skipVideo() {
    const video = document.getElementById('backgroundVideo');
    video.pause();
    
    // Hide the video and knock button
    video.style.display = 'none';
    document.getElementById('knockButton').style.display = 'none';

    // Show the end image
    document.getElementById('endImage').style.display = 'block';

    // Display the application icons
    document.querySelector('.icon-dock').style.display = 'flex';
}
