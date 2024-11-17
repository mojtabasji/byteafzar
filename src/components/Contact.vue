<template>
    <div class="contact">
        <div class="details">
            <h2>تنظیم قرار ملاقات</h2>
            <ul>
                <li>
                    <p>سوالی دارید؟ ما جواب داریم.</p>
                </li>
                <li>
                    <p>ارسال پیام به ما و ما در اسرع وقت به شما پاسخ خواهیم داد.</p>
                </li>
                <li>
                    <p>برای پشتیبانی <a href="/support">صفحه پشتیبانی ما</a> را ببینید.</p>
                </li>
                <li>
                    <p>ما اینجا هستیم تا به شما کمک کنیم. برای هر پرسشی با ما تماس بگیرید. آزاد باشید بپرسید. ما در اسرع
                        وقت
                        با
                        شما تماس خواهیم گرفت.</p>
                </li>
            </ul>
        </div>
        <div class="form snake-border">
                <h2>فرم درخواست</h2>
                <p>اطلاعات خود را تکمیل کنید</p>
                <label for="name">نام و نشان</label>
                <input type="text" id="name" name="name" placeholder="Your name..">
                
                <label for="email">ایمیل و یا شماره تماس</label>
                <input type="email" id="email" name="email" placeholder="Your email..">

                <label for="email">نوع درخواست</label>
                <select id="request" name="request" style="width: 94%; ">
                    <option value="1">طراحی و توسعه نرم افزار موبایل</option>
                    <option value="2">طراحی و توسعه نرم افزار دستکتاپ</option>
                    <option value="3">مشاوره رایگان طراحی و ساخت نرم افزار و سایت</option>
                    <option value="4">طراحی و توسعه وب سایت و وب اپلیکیشن</option>
                    <option value="5">ارتقاء نرم افزار و پلتفرم موجود</option>
                    <option value="6">دیپلوی و راه اندازی سرویسهای ایجاد شد DevOps</option>
                    <option value="7">خطایابی و رفع مشکلات محصولات توسعه داده شده</option>
                    <option value="other">سایر</option>
                </select>
                
                <label for="message">توضیحات</label>
                <textarea id="message" name="message" placeholder="Write something.."></textarea>
                
                <Button>ارسال</Button>
            </div>
    </div>
</template>


<script lang="ts">
export default {
    name: 'Contact',
    data() {
        return {
            message: 'Hello, Contact!'
        };
    },
}
</script>

<style scoped lang="scss">
.contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: var(--color-main-background);
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    color: var(--color-main-text);

    .details {
        margin-bottom: 20px;
        width: 50%;
        min-width: 300px;
        padding: 20px;
        box-sizing: border-box;

        h2 {
            margin-bottom: 10px;
            font-size: 2rem;
            text-align: center;
        }

        p {
            margin-bottom: 10px;
            font-size: 1.2rem;
        }
    }
        .form {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            align-self: center;
            padding: 20px;
            width: 50%;
            box-sizing: border-box;
            border-radius: 50px;
            background-color: var(--color-main-background);

            h2 {
                margin-bottom: 5px;
                font-size: 2rem;
                text-align: center;
                align-self: center;
            }

            p {
                margin-top: 10px;
                margin-bottom: 20px;
                font-size: 1.2rem;
                text-align: center;
                margin-right: 20px;
            }

            label {
                margin-bottom: 10px;
                font-size: 1.2rem;

            }

            input, select,
            textarea {
                width: 90%;
                padding: 10px;
                margin-bottom: 15px;
                border-radius: 20px;
            }
        }
    
    @media (max-width: 768px) {
        flex-direction: column;
        padding-top: 20px;
        padding-bottom: 20px;

        .details {
            width: 100%;
        }

        .form {
            width: 100%;
        }
    }

    /* snake-border stuff: */
    @keyframes snake-border-head {
    
    /*
    The snake's "head" stretches across a side of its container.
    The moment this head hits a corner, it instantly begins to
    stretch across the next side. (This is why some keyframe
    moments are repeated, to create these instantaneous jumps)
    */
    
    90% { left: 0; top: 0; width: 0; height: 40%; }
    90% { left: 0; top: 0; width: 0; height: 0; }
    100% { left: 0; top: 0; width: 40%; height: 0; } 0% { left: 0; top: 0; width: 40%; height: 0; }
    
    15% { left: 60%; top: 0; width: 40%; height: 0; }
    15% { left: 100%; top: 0; width: 0; height: 0; }
    25% { left: 100%; top: 0; width: 0; height: 40%; }
    
    40% { left: 100%; top: 60%; width: 0; height: 40%; }
    40% { left: 100%; top: 100%; width: 0; height: 0; }
    50% { left: 60%; top: 100%; width: 40%; height: 0; }
    
    65% { left: 0; top: 100%; width: 40%; height: 0; }
    65% { left: 0; top: 100%; width: 0; height: 0; }
    75% { left: 0; top: 60%; width: 0; height: 40%; }
    
    }
    @keyframes snake-border-tail {
    
    /*
    The "tail" of the snake is at full length when the head is at 0
    length, and vice versa. The tail always at a 90 degree angle
    from the head.
    */

    90% { top: 0%; height: 40%; }
    100% { left: 0; top: 0; width: 0; height: 0; } 0% { left: 0; top: 0; width: 0; height: 0; }
    
    15% { width: 40%; }
    25% { left: 100%; top: 0; width: 0; height: 0; }
    
    40% { height: 40%; }
    50% { left: 100%; top: 100%; width: 0; height: 0; }
    
    65% { left: 0%; width: 40%; }
    75% { left: 0; top: 100%; width: 0; height: 0; }
    
    }

    .snake-border {
    position: relative;
    // box-shadow: inset 0 0 0 1px #00a0ff;
    }
    .snake-border::before, .snake-border::after {
    content: '';
    display: block;
    position: absolute;
    outline: 2px solid var(--color-secondary);
    animation-duration: 20s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    }
    .snake-border::before { animation-name: snake-border-head; }
    .snake-border::after { animation-name: snake-border-tail; }
}
</style>
