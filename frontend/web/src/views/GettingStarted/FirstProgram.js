import codeArea from '@/components/codeArea/codeArea.vue';
import scroll from '@/services/scroll.js';

export default {
    components: { codeArea },
	data() {
		return {
            codes: [ 'أكتب ("مرحبا بالعالم!")؛' ],
		}
    },
    created() {
        this.setTitle();
    },
    computed: {
        isArabic() {
            return this.$store.getters['lang'] == 'ar';
        }
    },
    methods: {
        setTitle() {
		    window.document.title = (this.isArabic)? 'أبجد -كتابة أول برنامج' : 'ABJAD - Your First Program';
        },
        anchorHashCheck() {
			scroll.anchorHashCheck(this);
		}
    },
    watch: {
        isArabic: function () {
            this.setTitle();
        }
    }
}