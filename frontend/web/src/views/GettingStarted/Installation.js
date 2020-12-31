import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
	components: { contentThumbnail, footerLinks },
	data() {
		return {
			tab: null,
			links: [
				{ id: 'installation', level: 1, ar: 'التحميل', en: 'Installation' }
			],
			linksFooter: {
				prev: { path: `/${this.$route.params.lang}/introduction/why-abjad`, ar: 'لماذا أبجد؟', en: 'Why ABJAD?' },
				next: { path: `/${this.$route.params.lang}/getting-started/first-program`, ar: 'كتابة أول برنامج', en: 'Writing Your First Program' }
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
			window.document.title = (this.isArabic)? 'أبجد - التحميل' : 'ABJAD - Installation';
		},
		anchorHashCheck() {
			scroll.anchorHashCheck(this);
		},
	},
	watch: {
		isArabic: function () {
			this.setTitle();
		}
	}
}