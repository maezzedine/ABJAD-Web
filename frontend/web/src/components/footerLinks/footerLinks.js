export default {
  props: {
    links: Object
  },
  computed: {
		isArabic() {
			return this.$store.getters['lang'] == 'ar';
    },
    width () {
      return screen.width;
    }
	}
}