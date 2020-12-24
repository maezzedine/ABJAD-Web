import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';

export default {
	components: { contentThumbnail },
	data() {
		return {
			links: [
				{ id: 'why-abjad', level: 1, ar: 'لماذا أبجد؟', en: 'Why ABJAD?'},
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
			window.document.title = (this.isArabic)? 'أبجد - لماذا أبجد؟' : 'ABJAD - Why ABJAD?';
		},
		anchorHashCheck() {
			scroll.anchorHashCheck(this);
		}
	},
	watch: {
		isArabic: function () {
			this.setTitle();
		}
	}
}