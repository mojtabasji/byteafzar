<template>
    <div class="loading-container">
        <svg>
            <g>
              <path d="M 50,100 A 1,1 0 0 1 50,0"/>
            </g>
            <g>
              <path d="M 50,75 A 1,1 0 0 0 50,-25"/>
            </g>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color:#FF56A1;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FF9350;stop-opacity:1" />
              </linearGradient>
            </defs>
          </svg>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default {
    name: 'Loading',
    
  mounted() {
    // check document loaded
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.querySelector('.loading-container').style.display = 'none';
        }, 3000);
    });
  },
}
</script>

<style scoped lang="scss">
.loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 1.5em;
    background-color: var(--color-background);

    p {
        color: #333;
    }
}

$transition-duration: 2s;
$path-length: 157px; // Retrieved using SVG's getTotalLength()

html, body {
  width: 100%;
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
}

svg {
  overflow: visible;
  width: 100px;
  height: 150px;
  
  g {
    animation: slide $transition-duration linear infinite;
    
    &:nth-child(2) {
      animation-delay: calc($transition-duration / 4);
      
      path {
        animation-delay: calc($transition-duration / 4);
        stroke-dasharray: 0px calc($path-length + 1px);
        stroke-dashoffset: 1px;
      }
    }
  }
  
  path{
    stroke: url(#gradient);
    stroke-width: 20px;
    stroke-linecap: round;
    fill: none;
    stroke-dasharray: 0 $path-length;
    stroke-dashoffset: 0;
    animation: escalade $transition-duration cubic-bezier(0.8, 0, 0.2, 1) infinite;
  }
}

@keyframes slide {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(50px);
  }
}

@keyframes escalade {
  0% {
    stroke-dasharray: 0 $path-length;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: $path-length $path-length;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: $path-length $path-length;
    stroke-dashoffset: -($path-length - 1);
  }
}

</style>