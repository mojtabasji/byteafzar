<template>
    <div class="article">
        <h1>{{ title }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    name: 'Article',
    data() {
        return {
            title: 'طراحی و توسعه نرم افزار',
            content: 'طراحی و توسعه نرم افزار یکی از مهمترین مراحل در تولید نرم افزار است. این مرحله شامل تعیین نیازمندی‌ها، طراحی، پیاده‌سازی، تست و نگهداری نرم افزار است.'
        };
    }
};
</script>

<style scoped>
.article {
    padding: 20px;
    padding-top: 100px;
    font-family: Arial, sans-serif;
}

.article h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.article p {
    font-size: 16px;
}
</style>