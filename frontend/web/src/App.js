import api from '@/services/api.js';

export default {
	name: "App",
	created() {
		this.getLanguages();
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
		}
	}
}