function playVideo(url) {
    const lightbox = document.getElementById('videoLightbox');
    const videoFrame = document.getElementById('lightboxVideo');

    videoFrame.src = url;
    lightbox.style.display = 'block';
}

function closeVideo() {
    const lightbox = document.getElementById('videoLightbox');
    const videoFrame = document.getElementById('lightboxVideo');

    videoFrame.src = '';  // Clear the video src to stop playing
    lightbox.style.display = 'none';
}
