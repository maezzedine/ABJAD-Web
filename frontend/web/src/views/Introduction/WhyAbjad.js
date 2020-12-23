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
        }
    },
    watch: {
        isArabic: function () {
            this.setTitle();
        }
    }
}