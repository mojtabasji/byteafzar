<template>
    <footer class="footer" id="footer">
        <!-- socials -->
        <div class="socials">
            <h4>لینک های ارتباطی ما: </h4>
            <a href="https://www.linkedin.com/company/byteafzar" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/byteafzar" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.twitter.com/byteafzar" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-twitter"></i>
            </a>
            <a href="https://www.github.com/byteafzar" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-github"></i>
            </a>
            <a href="https://t.me/byteafzar" target="_blank" rel="noopener noreferrer">
                <i class="bi bi-telegram"></i>
            </a>
        </div>
        <!-- copy right -->
        <p>&copy; 1403: تمام حقوق این وبسایت برای <a>ByteAfzar</a> محفوض می باشد.</p>
    </footer>
</template>

<script lang="ts">

export default {
    name: 'Footer',
    data() {
        return {
            message: 'Hello, Footer!'
        };
    },
}
</script>

<style scoped>
.footer {
    padding: 20px 0;
    background-color: var(--color-secondary-background);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0;
    width: 100%;

    a {
        color: var(--color-secondary);
        text-decoration: none;
    }

    .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin-bottom: 10px;

        a {
            color: #fff;
            margin: 0 20px;
            font-size: 1.5rem;
        }
    }

    p {
        margin: 0;
    }

    i {
        transition: all 0.5s ease;
    }

    i:hover {
        color: var(--color-secondary);
    }

    a {
        text-decoration: none;
    }

    @media (max-width: 768px) {
        .socials {
            a {
                margin: 0 5px;
            }
        }
    }

    @media (max-width: 576px) {
        .socials {
            a {
                margin: 0 10px;
            }
        }
    }

    @media (max-width: 400px) {
        .socials {
            a {
                margin: 0 5px;
            }
        }
    }


}
</style>