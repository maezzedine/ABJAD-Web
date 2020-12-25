import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'
import codeArea from '@/components/codeArea/codeArea.vue'

export default {
  components: { contentThumbnail, footerLinks, codeArea },
  data() {
    return {
      links: [
        { id: 'comments', level: 1, ar: 'التعليقات', en: 'Comments' },
        { id: 'syntax', level: 2, ar: 'الصياغة', en: 'Syntax' },
        { id: 'effect', level: 2, ar: 'التأثير', en: 'Effect' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/operations`, ar: 'العمليات الحسابية', en: 'Operations' },
        next: { path: `/${this.$route.params.lang}/documentation/conditionals`, ar: 'الشَّرطيات', en: 'Conditionals' },
      },
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
      window.document.title = (this.isArabic)? 'أبجد - التعليقات' : 'ABJAD - Comments';
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