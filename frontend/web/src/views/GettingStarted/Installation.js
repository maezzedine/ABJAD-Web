export default {
    data() {
        return {
            tab: null
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
		    window.document.title = (this.isArabic)? 'أبجد - التحميل' : 'ABJAD - Installation';
        }
    },
    watch: {
        isArabic: function () {
            console.log('hey');
            this.setTitle();
        }
    }
}