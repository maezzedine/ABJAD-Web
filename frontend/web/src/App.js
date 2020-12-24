import api from '@/services/api.js';
import scroll from '@/services/scroll.js';

export default {
	name: "App",
	created() {
		this.getLanguages();
	},
	mounted: function()
  {
		window.addEventListener("scroll", this.onScroll)
    setTimeout(() => this.anchorHashCheck(this.$route.hash), 1000);
  },
	methods: {
		getLanguages: function() {
			api.getLocalFile('en.json')
				.then(d => {
					this.$store.dispatch('setEnglishFile', d);
					api.getLocalFile('ar.json')
						.then(ar => {
							this.$store.dispatch('setArabicFile', ar);
						});
				})
				.catch(e => console.log(e));
		},
		anchorHashCheck() {
			scroll.anchorHashCheck(this);
		},
		onScroll() {
			scroll.onScroll(this);
		}
	}
}