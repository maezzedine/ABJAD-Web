import scroll from '@/services/scroll.js';
import codeArea from '@/components/codeArea/codeArea.vue';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      links: [
        { id: 'types', level: 1, ar: 'الأنواع', en: 'Types' },
        { id: 'string', level: 2, ar: 'مقطع', en: 'String' },
        { id: 'number', level: 2, ar: 'رقم', en: 'Number' },
        { id: 'boolean', level: 2, ar: 'منطقي', en: 'Boolean' },
        { id: 'user-defined-types', level: 2, ar: 'نوع مُحددٌ من قبل المُستخدم', en: 'User Defined Types' },
        { id: 'get-type', level: 2, ar: 'استخراج نوع القيمة', en: 'Get The Type of a Value' },
        { id: 'converting', level: 2, ar: 'التحويل', en: 'Conversions' },
        { id: 'number-to-string', level: 3, ar: 'من رقم إلى مقطع', en: 'Number to String' },
        { id: 'string-to-number', level: 3, ar: 'من مقطع إلى رقم', en: 'String to Number' },
        { id: 'bool-to-string', level: 3, ar: 'من منطقي إلى مقطع', en: 'Boolean to String' },
        { id: 'string-to-bool', level: 3, ar: 'من مقطع إلى منطقي', en: 'String to Boolean' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/constants`, ar: 'الثوابت', en: 'Constants' },
        next: { path: `/${this.$route.params.lang}/documentation/print`, ar: 'الكتابة', en: 'Printing' },
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
      window.document.title = (this.isArabic)? 'أبجد - الأنواع' : 'ABJAD - Types';
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