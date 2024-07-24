document.addEventListener('DOMContentLoaded', function() {
    var videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(function(videoItem) {
        var video = videoItem.querySelector('.video');

        videoItem.addEventListener('mouseenter', function() {
            video.play();
        });

        videoItem.addEventListener('mouseleave', function() {
            video.pause();
        });
    });
});
