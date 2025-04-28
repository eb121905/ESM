document.addEventListener('DOMContentLoaded', () => {
  const playPauseButtons = document.querySelectorAll('.play-pause-button');

  playPauseButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const videoId = button.getAttribute('data-id');
      const video = document.getElementById(videoId);

      if (video) {
        // Check if the video is currently playing or paused
        if (video.paused) {
          video.play()
            .then(() => {
              // Successfully started playing
              button.innerHTML = '<i class="fas fa-pause"></i>'; // Show pause icon
            })
            .catch((error) => {
              console.error('Error playing video:', error);
            });
        } else {
          video.pause();
          button.innerHTML = '<i class="fas fa-play"></i>'; // Show play icon
        }
      } else {
        console.error(`Video with ID "${videoId}" not found.`);
      }
    });
  });
});