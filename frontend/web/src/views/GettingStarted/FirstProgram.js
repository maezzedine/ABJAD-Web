import codeArea from '@/components/codeArea/codeArea.vue';
import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
	components: { codeArea, contentThumbnail, footerLinks },
	data() {
		return {
			codes: [ 'أكتب ("مرحبا بالعالم!")؛' ],
			links: [
				{ id: 'first-program', level: 1, ar: 'كتابة أول برنامج أبجد', en: 'Writing Your First ABJAD Program'},
				{ id: 'text-editor', level: 2, ar: 'محرر نصوص', en: 'RTL Text Editor'},
				{ id: 'notepad-installation', level: 3, ar: 'التحميل', en: 'Installation'},
				{ id: 'notepad-configuration', level: 3, ar: 'ضبط اتجاه الكتابة في المحرر', en: 'Configuring The Text Direction'},
				{ id: 'hello-world-app', level: 2, ar: 'برنامج يكتب "مرحبا بالعالم!"', en: 'Hello World Program'},
				{ id: 'running-app', level: 3, ar: 'تشغيل البرنامج', en: 'Running The Program'}
			],
			linksFooter: {
				prev: { path: `/${this.$route.params.lang}/getting-started/installation`, ar: 'التحميل', en: 'Installation' },
				next: { path: `/${this.$route.params.lang}/documentation/syntax`, ar: 'الصياغة', en: 'Syntax' }
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
			window.document.title = (this.isArabic)? 'أبجد - كتابة أول برنامج' : 'ABJAD - Your First Program';
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