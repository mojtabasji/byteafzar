<template>
<div class="services" id="services">
    <h2>{{ title }}</h2>
    <div class="services-content">
        <div class="service">
            <div class="img">
                <i class="bi bi-phone service-icon"></i>
            </div>
            <p>طراحی و توسعه نرم افزار موبایل</p>
        </div>
        <div class="service">
            <div class="img">
                <i class="bi bi-pc-display service-icon"></i>
            </div>
            <p>طراحی و توسعه نرم افزار دسکتاپ</p>
        </div>
        <div class="service">
            <div class="img">
                <i class="bi bi-cup-hot service-icon"></i>
            </div>
            <p>مشاوره رایگان طراحی و ساخت پلتفرمهای نرم افزاری</p>
        </div>
        <div class="service">
            <div class="img">
                <i class="bi bi-browser-chrome service-icon"></i>
            </div>
            <p>طراحی و توسعه وبسایت و وب اپلیکیشن</p>
        </div>
        <div class="service">
            <div class="img">
                <i class="bi bi-person-fill-gear service-icon"></i>
            </div>
            <p>ارتقاء نرم افزارها و پلتفرمهای موجود</p>
        </div>
        <div class="service">
            <div class="img">
                <i class="bi bi-cloud-arrow-up service-icon"></i>
            </div>
            <p>دیپلوی و راه اندازی سرویسهای ایجاد شده</p>
        </div>
        <div class="service">
            <div class="img">
                <i class="bi bi-person-fill-gear service-icon"></i>
            </div>
            <p>خطایابی و رفع مشکلات محصولات توسعه داده شده</p>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Services',
    props: {
        title: String
    },
    data() {
        return {
            title: 'خدمات ما'
        }
    },
    methods: {
        log() {
            console.log('Hello World');
        }
    },
    mounted() {
        console.log('Component mounted');
    }
})
</script>

<style scoped lang="scss">

.services {
    background-color: var(--color-main-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom: 2rem;

    h2 {
        color: var(--color-secondary);
        font-size: 1.8em;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        margin-bottom: 3rem;
    }

    .services-content {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;

        .service {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0.5rem;
            border: 1px solid var(--color-main-border);
            border-radius: 5px;
            color: var(--color-main-text);
            width: 3%;
            min-width: 110px;
            max-width: 150px;
            max-height: 250px;
            margin: 0.5rem;

            .img {
                width: 90%;
                height: auto;
                border-radius: 50%;
                margin-bottom: 1rem;
                display: flex;
                justify-content: center;


                transition: transform 0.3s;

                .service-icon {
                    font-size: 4rem;
                    color: var(--color-main-text);
                }
            }

            p {
                font-size: 1rem;
                // font-weight: bold;
                color: var(--color-secondary-text);
                text-align: center;
            }

            &:hover {
                .img {
                    transform: rotate(-30deg);
                }

                p {
                    color: var(--color-secondary);
                }

                transition: transform 0.3s;

                .service-icon {
                    color: var(--color-secondary);
                }
            }
        }
    }
}

</style>

