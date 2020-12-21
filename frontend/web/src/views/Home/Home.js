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
    methods: {
        setLanguage: function () {
            language.initialize(this);
        }
    }
}