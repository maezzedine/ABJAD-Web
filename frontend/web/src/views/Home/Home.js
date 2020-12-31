import abjadLogo from '@/components/svgs/abjadLogo.vue';
import appBar from '@/components/appBar/appBar.vue';
import drawer from '@/components/drawer/drawer.vue';
import language from '@/services/language.js';

export default {
    name: 'Home',
    components: {
        abjadLogo,
        appBar,
        drawer
    },
    created() {
        this.setLanguage();
    },
    computed: {
        url() {
        return `${process.env.VUE_APP_URL}${this.$route.path}`
        }
    },
    methods: {
        setLanguage: function () {
            language.initialize(this);
        },
    }
}