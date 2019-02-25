<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale" class="form-control">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: 'locale-changer',
        data () {
            return { langs: ['ja', 'en', 'cn'] }
        }
    }
</script>