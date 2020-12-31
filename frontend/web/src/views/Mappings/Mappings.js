import scroll from '@/services/scroll.js';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { footerLinks },
  data() {
    return {
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/sample-codes/multiplication-table`, ar: 'جدول الضرب', en: 'Multiplication Table'  },
        next: { path: `/${this.$route.params.lang}/about`, ar: 'استفسار', en: 'About' },
      },
      keywords: [
        { ar: 'منطقي', en: 'Boolean' },
        { ar: 'صنف', en: 'Class' },
        { ar: 'ثابت', en: 'Constant' },
        { ar: 'وإلا', en: 'Else' },
        { ar: 'خطأ', en: 'False' },
        { ar: 'كرر', en: 'For' },
        { ar: 'دالة', en: 'Function' },
        { ar: 'إذا', en: 'If' },
        { ar: 'انشئ', en: 'new' },
        { ar: 'رقم', en: 'Number' },
        { ar: 'عدم', en: 'NULL' },
        { ar: 'أكتب', en: 'Print' },
        { ar: 'أرجع', en: 'Return' },
        { ar: 'مقطع', en: 'String' },
        { ar: 'منطق()', en: 'toBoolean()' },
        { ar: 'رقم()', en: 'toNumber()' },
        { ar: 'مقطع()', en: 'toString()' },
        { ar: 'صحيح', en: 'True' },
        { ar: 'نوع()', en: 'typeof()' },
        { ar: 'متغير', en: 'Variable' },
        { ar: 'طالما', en: 'While' },
        { ar: 'أكتب', en: 'Write' },
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
      window.document.title = (this.isArabic)? 'أبجد - الدليل' : 'ABJAD - Reference';
    }
  },
  watch: {
    isArabic: function () {
      this.setTitle();
    }
  }
}