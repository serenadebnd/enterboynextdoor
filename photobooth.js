// Grab elements, create settings, etc.
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const snap = document.getElementById('snap');

// Get access to the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });

// Capture photo
snap.addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
    canvas.style.display = 'block';
    video.style.display = 'none';
    snap.textContent = 'Take another';
});
