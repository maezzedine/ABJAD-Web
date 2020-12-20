import abjadLogo from '@/components/svgs/abjadLogo.vue';

export default {
    name: 'Cover',
    components: {
        abjadLogo
    },
    created() {
        this.checkLanguage();
    },
    methods: {
        checkLanguage: function () {
            var lang;
            var langFromStore = this.$store['lang'];
            if (langFromStore) {
                lang = langFromStore;
                console.log(langFromStore);
            } else {
                lang = localStorage.getItem('abjad-lang');
            }
            if (lang) {
                this.$router.push({name: 'Home', params: { lang: lang }});
            }
        }
    }
}