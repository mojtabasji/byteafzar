<template>
    <div class="contact" id="contact">
        <div class="details">
            <h2>گپ و گفت با ما</h2>
            <ul>
                <li>
                    <p>سوالی دارید؟ ما جواب داریم.</p>
                </li>
                <li>
                    <p>برای ما پیغامی ارسال کنید و ما در اسرع وقت به شما پاسخ خواهیم داد.</p>
                </li>
                <li>
                    <p> برای هر پرسشی با ما تماس بگیرید. اطلاعات خود را پر کنید تا باهم گپ دوستانه داشته باشیم. </p>
                </li>
            </ul>
            <p class="last_word"><i class="bi bi-flower3"></i> ما اینجا هستیم تا به شما در تحقق ایده‌ها و رشد کسب و کارتان کمک کنیم.
                اگر سوالی دارید یا به مشاوره تخصصی در مورد پیاده‌سازی پلتفرم مورد نظر خود نیاز دارید، تیم ما آماده است تا به صورت رایگان راه‌حل‌های مؤثر و کارآمدی را ارائه دهد.
                تنها با پر کردن فرم زیر یا از طریق لینک‌های ما با یک کلیک، می‌توانید به راحتی با ما در ارتباط باشید. تیم ما در اسرع وقت برای هماهنگی جلسه با شما تماس خواهد گرفت. منتظر شما هستیم تا گام اول را به سوی موفقیت بردارید</p>
        </div>
        <div class="form snake-border">
            <h3>درخواست ارسال کنید</h3>
            <h4>و یا از طریق <a href="#footer">لینک های </a>ما با ما در ارتباط باشید</h4>
            <label for="name">نام و نشان</label>
            <input type="text" id="name" name="name" placeholder="نام شما">
            
            <label for="request">نوع درخواست</label>
            <select id="request" name="request" default="0">
                <option value="1">طراحی و توسعه نرم افزار موبایل</option>
                <option value="2">طراحی و توسعه نرم افزار دسکتاپ</option>
                <option value="3">مشاوره رایگان طراحی و ساخت نرم افزار و سایت</option>
                <option value="4">طراحی و توسعه وب سایت و وب اپلیکیشن</option>
                <option value="5">ارتقاء نرم افزار و پلتفرم موجود</option>
                <option value="6">دیپلوی و راه اندازی سرویسهای ایجاد شد DevOps</option>
                <option value="7">خطایابی و رفع مشکلات محصولات توسعه داده شده</option>
                <option value="other">سایر</option>
            </select>

            <label for="contact_type">از چه طریقی برای ارتباط راحت ترید؟</label>
            <div class="selection">
                <div class="selection-item" @click="selectContactType('email')">
                    <input type="radio" id="email" name="contact_type" value="email">
                    <span>ایمیل</span>      
                </div>
                <div class="selection-item" @click="selectContactType('personal')">
                    <input type="radio" id="personal" name="contact_type" value="personal">
                    <span>جلسه حضوری</span>
                </div>
                <div class="selection-item" @click="selectContactType('phone')">
                    <input type="radio" id="phone" name="contact_type" value="phone">
                    <span>تماس تلفنی</span>
                </div>
                <div class="selection-item" @click="selectContactType('whatsapp')">
                    <input type="radio" id="whatsapp" name="contact_type" value="whatsapp">
                    <span>واتساپ</span>
                </div>
                <div class="selection-item" @click="selectContactType('telegram')">
                    <input type="radio" id="telegram" name="contact_type" value="telegram">
                    <span>تلگرام</span>
                </div>
                <div class="selection-item" @click="selectContactType('other')">
                    <input type="radio" id="other" name="contact_type" value="other">
                    <span>سایر</span>
                </div>
            </div>
            
            <label for="email">پل ارتباطی</label>
            <input type="email" id="email" name="email" placeholder="ایمیل، شماره تماس و یا ای دی اکانت" dir="ltr">

            <label for="dateTime"> ساعت و تاریخ پیشنهادی</label>
            <input type="datetime-local" id="dateTime" name="dateTime" placeholder="زمان مورد نظر برای جلسه">

            <label for="message">توضیحات</label>
            <textarea id="message" name="message" placeholder="یک توضیح مختصر در مورد موضوع بحث مد نظر بدهید تا افراد متخصص آن مبحث از تیم بایت افزار برای جلسه هماهنگ شود"></textarea>

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
    methods: {
        sendContact() {
            console.log('Sending contact form...');
        },
        selectContactType(type: string) {
            let input = document.getElementById(type) as HTMLInputElement;
            if (input) {
                input.checked = true;
                document.querySelectorAll('.selection-item').forEach((item) => {
                    item.classList.remove('selected');
                });
                input.parentElement?.classList.add('selected');
            }
        }
    }
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
    padding-bottom: 50px;
    text-align: justify;

    Button {
        width: 30%;
        align-self: center;
        margin-top: 50px;
        margin-bottom: 30px;
        color: var(--color-main-text);
    }
    
    a {
        color: var(--color-secondary);
        text-decoration: none;
    }

    .details {
        margin-bottom: 20px;
        width: 50%;
        min-width: 300px;
        padding: 20px;
        box-sizing: border-box;

        h2 {
            margin-bottom: 2rem;
            font-size: 1.8rem;
            text-align: center;
            color: var(--color-secondary);
        }

        p {
            margin-bottom: 10px;
            font-size: 1rem;
        }

        .last_word {
            margin: 30px;
            margin-top: 100px;
            padding-bottom: 20px;
            font-size: 1rem;
            line-height: 1cm;
            word-spacing: 0.1cm;
            color: var(--color-secondary-text);
            border-bottom: 1px solid var(--color-secondary-text);

            i {
                color: var(--color-secondary);
            }
        }
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: center;
        padding: 40px;
        width: 50%;
        box-sizing: border-box;
        border-radius: 20px;
        // background-color: var(--color-main-background);
        background-color: var(--color-secondary-background);
        // background: linear-gradient(135deg, #3289a0 0%, #edccbb 100%);
        margin: 20px;
        box-shadow: 0 0 14px 8px rgba(0, 0, 0, 0.2);
        // disable text selection:
        user-select: none;

        @media (max-width: 768px) {
            box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.8);            
        }

        h3 {
            margin-top: 10px;
            margin-bottom: 10px;
            font-size: 1.6rem;
            text-align: center;
            align-self: center;
        }
        
        h4 {
            margin-top: 5px;
            margin-bottom: 10px;
            font-size: 1.2rem;
            font-weight: 200;
            text-align: center;
            align-self: center;
            color: var(--color-secondary-text);
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
            margin-top: 20px;
            font-size: 1rem;
            align-self: start;
        }

        input,
        select,
        textarea {
            width: 90%;
            padding: 10px 20px;
            margin-top: 5px;
            margin-bottom: 15px;
            background-color: transparent;
            border: none;
            border-radius: 2px;
            border-bottom: 1px solid var(--color-secondary-text);
            color: var(--color-main-text);
            font-size: 1rem;
            color: var(--color-secondary-text);
            box-sizing: border-box;
            text-align: justify;
        }

        input[type="datetime-local"]::-webkit-calendar-picker-indicator {
            background-color: var(--color-secondary);
            border-radius: 5px;
            padding: 5px;
            box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.4);
            cursor: pointer;
        }

        input:focus, select:focus, textarea:focus {
            outline: none;
            border-bottom: 1px solid var(--color-secondary);
        }

        textarea {
            min-height: 130px;
            padding: 5px;
        }

        select {
            padding-left: 20px;
        }

        option {
            background-color: var(--color-secondary-background);
            color: var(--color-secondary-text);
            padding: 20px;
            margin: 10px;
            border-radius: 10px;
            box-shadow: 0 0 4px 2px var(--color-secondary-text);
        }

        .selection {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            direction: rtl;
            width: 90%;
            flex-wrap: wrap;
            margin-top: 5px;
            margin-bottom: 15px;
        }

        .selection-item {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            margin-top: 5px;
            margin-bottom: 15px;
            border: 1px solid var(--color-secondary-text);
            border-radius: 10px;
            padding: 5px 10px;
            margin-right: 10px;
            cursor: pointer;

            input {
                display: none;
            }
            
            span {
                color: var(--color-secondary-text);
            }

        }

        .selection-item span {
            font-size: 1rem;
            text-align: center;
        }

        .selection-item.selected {
            border: 1px solid var(--color-secondary);
            box-shadow: 0 0 4px 2px var(--color-secondary);

            span {
                color: var(--color-main-text);
            }
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
            padding-right: 30px;
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

        90% {
            left: 0;
            top: 0;
            width: 0;
            height: 40%;
        }

        90% {
            left: 0;
            top: 0;
            width: 0;
            height: 0;
        }

        100% {
            left: 0;
            top: 0;
            width: 40%;
            height: 0;
        }

        0% {
            left: 0;
            top: 0;
            width: 40%;
            height: 0;
        }

        15% {
            left: 60%;
            top: 0;
            width: 40%;
            height: 0;
        }

        15% {
            left: 100%;
            top: 0;
            width: 0;
            height: 0;
        }

        25% {
            left: 100%;
            top: 0;
            width: 0;
            height: 40%;
        }

        40% {
            left: 100%;
            top: 60%;
            width: 0;
            height: 40%;
        }

        40% {
            left: 100%;
            top: 100%;
            width: 0;
            height: 0;
        }

        50% {
            left: 60%;
            top: 100%;
            width: 40%;
            height: 0;
        }

        65% {
            left: 0;
            top: 100%;
            width: 40%;
            height: 0;
        }

        65% {
            left: 0;
            top: 100%;
            width: 0;
            height: 0;
        }

        75% {
            left: 0;
            top: 60%;
            width: 0;
            height: 40%;
        }

    }

    @keyframes snake-border-tail {

        /*
    The "tail" of the snake is at full length when the head is at 0
    length, and vice versa. The tail always at a 90 degree angle
    from the head.
    */

        90% {
            top: 0%;
            height: 40%;
        }

        100% {
            left: 0;
            top: 0;
            width: 0;
            height: 0;
        }

        0% {
            left: 0;
            top: 0;
            width: 0;
            height: 0;
        }

        15% {
            width: 40%;
        }

        25% {
            left: 100%;
            top: 0;
            width: 0;
            height: 0;
        }

        40% {
            height: 40%;
        }

        50% {
            left: 100%;
            top: 100%;
            width: 0;
            height: 0;
        }

        65% {
            left: 0%;
            width: 40%;
        }

        75% {
            left: 0;
            top: 100%;
            width: 0;
            height: 0;
        }

    }

    .snake-border {
        position: relative;
        // box-shadow: inset 0 0 0 1px #00a0ff;
    }

    .snake-border::before,
    .snake-border::after {
        content: '';
        display: block;
        position: absolute;
        outline: 2px solid var(--color-secondary);
        animation-duration: 20s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        box-shadow: 0 0 6px 2px var(--color-secondary);
        border-radius: 50%;
    }

    .snake-border::before {
        animation-name: snake-border-head;
    }

    .snake-border::after {
        animation-name: snake-border-tail;
    }
}
</style>
