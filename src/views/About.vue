<template>
    <div class="about">
        <h1>This is an about page</h1>
        <p>{{ $t('message.hello_world') }}</p>

        <locale-changer></locale-changer>
    </div>
</template>
<script>
    import LocaleChanger from '../components/LocaleChanger';

    export default {
        components: {LocaleChanger}
    };
</script>