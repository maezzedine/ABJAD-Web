import codeArea from '@/components/codeArea/codeArea.vue';
import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';

export default {
	components: { codeArea, contentThumbnail },
	data() {
		return {
			codes: [ 'أكتب ("مرحبا بالعالم!")؛' ],
			links: [
				{ id: 'introduction', level: 1, ar: 'المقدمة', en: 'Introduction' },
				{ id: 'what-is-abjad', level: 2, ar: 'ما هي أبجد؟', en: 'What is ABJAD?' },
				{ id: 'abjad-is-arabic-programming-language', level: 3, ar: 'أبجد لغةُ برمجةٍ عربية', en: 'ABJAD is an Arabic Programming Language' },
				{ id: 'abjad-is-scripting-language', level: 3, ar: 'أبجد لغةُ برمجةٍ نصية', en: 'ABJAD is a Scripting Language' },
				{ id: 'abjad-is-interpreted-language', level: 3, ar: 'أبجد لغةُ برمجةٍ مُفسرة', en: 'ABJAD is an Interpreted Language' },
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
			window.document.title = (this.isArabic)? 'أبجد - ما هي أبجد؟' : 'ABJAD - What is ABJAD?';
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