document.getElementById('myFolder').addEventListener('click', function() {
    window.location.href = 'folder.html';
});

function startCamera() {
    navigator.mediaDevices.getUserMedia({
        video: {
            width: 640,
            height: 480
        }
    })
    .then(function(stream) {
        const video = document.getElementById('cameraFeed');
        video.srcObject = stream;
        video.play();
    })
    .catch(function(error) {
        console.error("Error accessing the camera:", error);
    });
}

document.getElementById('photoboothIcon').addEventListener('click', function() {
    document.getElementById('photoboothOverlay').classList.remove('hidden');
    startCamera();
});

document.getElementById('closePhotobooth').addEventListener('click', function() {
    document.getElementById('photoboothOverlay').classList.add('hidden');
    let video = document.getElementById('cameraFeed');
    let stream = video.srcObject;
    let tracks = stream.getTracks();

    tracks.forEach(function(track) {
        track.stop();
    });

    video.srcObject = null;
});

document.getElementById('takePhotoBtn').addEventListener('click', function() {
    // Implement the photo-taking functionality here
    // As mentioned earlier, you can use a canvas to capture the current frame from the video
});
