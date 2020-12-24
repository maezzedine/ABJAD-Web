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
		    window.document.title = (this.isArabic)? 'أبجد - ما هي أبجد؟' : 'ABJAD - What is ABJAD?';
        },
        anchorHashCheck() {
			scroll.anchorHashCheck(this);
		}
    },
    watch: {
        isArabic: function () {
            console.log('hey');
            this.setTitle();
        }
    }
}