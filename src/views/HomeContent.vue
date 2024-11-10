<template>
    <div class="video-container">
        <video id="backgroundVideo" muted preload="metadata">
            <source src="../assets/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        <div class="Video-scroll-area" id="videoScrollArea">
            <div class="scroll-container">
                <h1>Scroll Down to Play Video Frame by Frame</h1>
                <p>Scroll down to see the effect...</p>
                <div style="height: 1500px;"></div> <!-- Just for scrolling -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeContent',
    data() {
        return {
            message: 'Hello, Home Content!'
        };
    },
    methods: {
        // Add your methods here


    },
    mounted() {
        const video = document.getElementById('backgroundVideo');
        const scrollContainer = document.getElementById('videoScrollArea');

        // Set the number of frames per scroll
        const framesPerScroll = 1;

        // Ensure the video is loaded and ready
        video.addEventListener('loadedmetadata', () => {
            const totalFrames = Math.floor(video.duration * 30); // Assuming 30 FPS
            let currentFrame = 0;

            // Function to update video frame based on scroll
            const updateVideoFrame = () => {
                const frameTime = currentFrame / 30; // Convert frame number to time
                video.currentTime = frameTime; // Update video time
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
};
</script>

<style scoped>
.home-content {
    text-align: center;
    margin-top: 50px;
}

.video-container {
    position: relative;
}

video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Cover the entire container */
}

.Video-scroll-area {
    position: relative;
    z-index: 0;
    /* Place below the video */
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    /* Enable vertical scrolling */
    scrollbar-width: none;
}

.scroll-container {
    position: relative;
    z-index: 1;
    /* Place above the video */
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    /* Semi-transparent background */
}
</style>