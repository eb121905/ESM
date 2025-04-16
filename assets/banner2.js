document.addEventListener('DOMContentLoaded', () => {
    const playPauseButtons = document.querySelectorAll('.play-pause-button');
  
    playPauseButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const videoId = button.getAttribute('data-id');
        const video = document.getElementById(videoId);
  
        if (video) {
            if (video.paused) {
              video.play();
              button.innerHTML = '<i class="fas fa-pause"></i>'; // Show pause icon
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