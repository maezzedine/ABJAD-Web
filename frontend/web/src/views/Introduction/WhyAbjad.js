import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
	components: { contentThumbnail, footerLinks },
	data() {
		return {
			links: [
				{ id: 'why-abjad', level: 1, ar: 'لماذا أبجد؟', en: 'Why ABJAD?'},
			],
			linksFooter: {
				prev: { path: `/${this.$route.params.lang}/introduction/what-is-abjad`, ar: 'ما هي أبجد؟', en: 'What is ABJAD?' },
				next: { path: `/${this.$route.params.lang}/getting-started/installation`, ar: 'التحميل', en: 'Installation' },
			}
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