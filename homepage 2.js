document.getElementById('myFolder').addEventListener('click', function() {
    const folderContent = document.getElementById('folderContent');
    
    if (folderContent.style.display === "none") {
        folderContent.style.display = "block";
    } else {
        folderContent.style.display = "none";
    }
});
