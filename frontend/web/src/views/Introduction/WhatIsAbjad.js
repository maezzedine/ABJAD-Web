import codeArea from '@/components/codeArea/codeArea.vue';

export default {
	components: { codeArea },
	data() {
		return {
            codes: [ 'أكتب ("مرحبا بالعالم!")؛' ],
		}
    },
    computed: {
        lang() {
            return this.$store.getters['lang'];
        },
        isArabic() {
            return this.lang == 'ar';
        },
        context() {
            return this.$store.getters.context['what-is-abjad'];
        }
    }
}