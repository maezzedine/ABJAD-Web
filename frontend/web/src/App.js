import api from '@/services/api.js';

export default {
	name: "App",
	created() {
		this.getLanguages();
	},
	mounted: function()
  {
    // From testing, without a brief timeout, it won't work.
    setTimeout(() => this.scrollFix(this.$route.hash), 10);
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
			if (window.location.hash === this.$route.hash) {
				const el = document.getElementById(this.$route.hash.slice(1))

				if (el) {
					window.scrollTo({
							left: 0, 
							top: el.offsetTop,
							behavior: 'smooth'
					})
				}
			}
		},
	},
	watch: {
		$route:  function() {
				this.anchorHashCheck();
		}
	}
}