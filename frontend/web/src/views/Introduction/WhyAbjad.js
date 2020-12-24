import scroll from '@/services/scroll.js';

export default {
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
		    window.document.title = (this.isArabic)? 'أبجد - لماذا أبجد؟' : 'ABJAD - Why ABJAD?';
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