import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'
import codeArea from '@/components/codeArea/codeArea.vue'

export default {
  components: { contentThumbnail, footerLinks, codeArea },
  data() {
    return {
      links: [
        { id: 'loops', level: 1, ar: 'الحلقات', en: 'Loops' },
        { id: 'while-loop', level: 2, ar: 'حلقة طالما', en: 'While Loop' },
        { id: 'syntax', level: 3, ar: 'الصياغة', en: 'Syntax' },
        { id: 'example', level: 3, ar: 'مثال', en: 'Example' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/conditionals`, ar: 'الشَّرطيات', en: 'Conditionals' },
        next: { path: `/${this.$route.params.lang}/documentation/for-loop`, ar: 'حلقة التكرير', en: 'For Loop' },
      },
      codes: [
        'متغير عداد = 1؛',
        'طالما (عداد <= 100) {',
        '   أكتب(عداد)؛',
        '   عداد++؛',
        '}',
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
      window.document.title = (this.isArabic)? 'أبجد - حلقة طالما' : 'ABJAD - While Loop';
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