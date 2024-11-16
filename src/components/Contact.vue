<template>
    <div class="contact">
        <div class="details">
            <h1>Contact Us</h1>
            <p>Have questions? We have answers.</p>
        </div>
        <div class="form">
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
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
    align-items: center;
    justify-content: center;
    align-self: center;
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: var(--color-main-background);
    width: 100%;
    padding: 20px;

    .details {
        text-align: center;
        margin-bottom: 20px;
        width: 50%;
        min-width: 300px;

        h1 {
            margin-bottom: 10px;
        }
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-self: center;
        padding: 20px;
        width: 50%;

        label {
            margin-top: 20px;
            margin-bottom: 10px;
        }

        input,
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
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
}
</style>
