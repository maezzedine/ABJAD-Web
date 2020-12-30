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
    },
    url() {
      return `${process.env.VUE_APP_URL}${this.$route.path}`
    }
	}
}