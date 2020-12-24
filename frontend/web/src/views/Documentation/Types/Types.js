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
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/constants`, ar: 'الثوابت', en: 'Constants' },
        next: { path: ``, ar: '', en: '' },
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