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
    <div class="whiteUpperArea" @click="scrollTo('#services')" @drag="scrollTo('#services')">
      <div class="whiteUpper"></div>
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
    window.video = video;
    // Set the number of frames per scroll
    const framesPerScroll = 1;

    // Ensure the video is loaded and ready
    video.addEventListener('loadedmetadata', () => {
      const totalFrames = Math.floor(video.duration * 60); // Assuming 60 FPS for smoother frame change
      const VideoScrollController = document.getElementById('VideoScrollController');
      VideoScrollController.style.height = `${totalFrames * 10 }px`;
      let currentFrame = 0;

      // Function to update video frame based on scroll
      const updateVideoFrame = () => {
        const frameTime = currentFrame / 60; // Convert frame number to time
        video.currentTime = frameTime; // Update video time
        processBar.style.width = `${(currentFrame / totalFrames) * 100}%`;
      };

      let isScrolling = false;

      // // Listen during scroll event
      // scrollContainer.addEventListener('scroll', () => {
      //   // if (!isScrolling) {
      //     window.requestAnimationFrame(() => {
      //       const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      //       const scrollPosition = scrollContainer.scrollTop;

      //       // Calculate current frame based on scroll position
      //       currentFrame = Math.floor((scrollPosition / maxScroll) * totalFrames);

      //       // Ensure current frame stays within bounds
      //       currentFrame = Math.max(0, Math.min(currentFrame, totalFrames - 1));

      //       updateVideoFrame();
      //       isScrolling = false;
      //     });
      //   //   isScrolling = true;
      //   // }
      // });

      scrollContainer.onscroll = function() {
        window.requestAnimationFrame(() => {
            const maxScroll = scrollContainer.scrollHeight - scrollContainer.clientHeight;
            const scrollPosition = scrollContainer.scrollTop;

            // Calculate current frame based on scroll position
            currentFrame = Math.floor((scrollPosition / maxScroll) * totalFrames);

            // Ensure current frame stays within bounds
            currentFrame = Math.max(0, Math.min(currentFrame, totalFrames - 1));

            updateVideoFrame();
            isScrolling = false;
          });
      };

    });
  },
  methods: {
    scrollTo(selector) {
      console.log(selector);
      document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
    }
  }
}

</script>

<style lang="scss">
.videoScrollArea {
  width: 100%;
  height: 99vh;
  position: relative;

  @media (max-width: 768px) {
    height: 87vh;
  }

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

  .whiteUpperArea {
    padding: 10px;
    position: absolute;
    bottom: -12px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    left: calc(50% - 10vw - 10px);
    cursor: pointer;

    @media (max-width: 768px) {
      width: 60vw;
      left: calc(50% - 30vw);
    }
  }

  .whiteUpper {
    width: 20vw;
    height: 4px;
    background-color: #fff;
    align-self: center;
    border-radius: 3px;
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
