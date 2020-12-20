import abjadLogo from '@/components/svgs/abjadLogo.vue';
import appBar from '@/components/appBar/appBar.vue';

export default {
    name: 'Home',
    components: {
        abjadLogo,
        appBar
    },
    created() {
        this.setLanguage();
    },
    methods: {
        setLanguage: function () {
            var lang = this.$route?.params?.lang;
            if (lang) {
                var title = (lang == 'en')? 'ABJAD' : 'أبجد';
                localStorage.setItem('abjad-lang', lang);
                this.$store.dispatch('setLanguage', lang)
                    .then(dir => {
                        document.body.dir = dir;
                        document.body.lang = lang;
                    });
                this.$route.meta.title = title;
            }
        }
    }
}