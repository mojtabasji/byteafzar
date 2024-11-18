<template>
  <div class="videoScrollArea" id="videoScrollArea">
    <div class="processBarArea" id="processBarArea">
      <div class="processBar" id="processBar"></div>
    </div>
    <video id="backgroundVideo" class="video" muted preload="metadata">
      <source src="../assets/video.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="scrollingArea" id="scrollingArea">
      <div id="VideoScrollController" style="width: 50px; height: 3000px;">
        <br />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ScrollVideo',
  data() {
    return {
    }
  },
  mounted() {
    const video = document.getElementById('backgroundVideo');
    const scrollContainer = document.getElementById('scrollingArea');
    const processBar = document.getElementById('processBar');

    // Set the number of frames per scroll
    const framesPerScroll = 1;

    // Ensure the video is loaded and ready
    video.addEventListener('loadedmetadata', () => {
      const totalFrames = Math.floor(video.duration * 60); // Assuming 60 FPS for smoother frame change
      const VideoScrollController = document.getElementById('VideoScrollController');
      VideoScrollController.style.height = `${totalFrames * 50 }px`;
      let currentFrame = 0;

      // Function to update video frame based on scroll
      const updateVideoFrame = () => {
      const frameTime = currentFrame / 60; // Convert frame number to time
      video.currentTime = frameTime; // Update video time
      processBar.style.width = `${(currentFrame / totalFrames) * 100}%`;
      };

      scrollContainer.addEventListener('scroll', () => {
      const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const scrollPosition = scrollContainer.scrollTop;

      // Calculate current frame based on scroll position
      currentFrame = Math.floor((scrollPosition / maxScroll) * totalFrames);

      // Ensure current frame stays within bounds
      currentFrame = Math.max(0, Math.min(currentFrame, totalFrames - 1));

      updateVideoFrame();
      });
    });
  }
}

</script>

<style lang="scss">
.videoScrollArea {
  width: 100%;
  height: 100vh;
  position: relative;

  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .scrollingArea {
    overflow-y: scroll;
    width: 100%;
    height: 100%;
    position: relative;
    scrollbar-width: none;
  }

}

.processBarArea {
  width: 100%;
  height: 3px;
  background-color: #fff;
  position: absolute;
  direction: ltr;
  top: 0;
  left: 0;
  z-index: 10;

  .processBar {
    width: 0;
    height: 100%;
    background-color: #000;
  }
}
</style>
