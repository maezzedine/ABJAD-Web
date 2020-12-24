import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';

export default {
	components: { contentThumbnail },
	data() {
		return {
			tab: null,
			links: [
				{ id: 'installation', level: 1, ar: 'التحميل', en: 'Installation' }
			]
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
		},
		anchorHashCheck() {
			scroll.anchorHashCheck(this);
		},
	},
	watch: {
		isArabic: function () {
			console.log('hey');
			this.setTitle();
		}
	}
}