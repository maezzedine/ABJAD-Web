import codeArea from '@/components/codeArea/codeArea.vue';

export default {
	components: { codeArea },
	data() {
		return {
            codes: [ 'أكتب ("مرحبا بالعالم!")؛' ],
		}
    },
    computed: {
        isArabic() {
            return this.$store.getters['lang'] == 'ar';
        }
    }
}