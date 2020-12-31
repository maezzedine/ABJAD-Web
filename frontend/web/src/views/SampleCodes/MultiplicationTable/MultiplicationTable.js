import scroll from '@/services/scroll.js';
import codeArea from '@/components/codeArea/codeArea.vue';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/sample-codes/stars-triangle`, ar: 'كود عيني: مثلث نجوم', en: 'Sample Code: Stars Triangle' },
        next: { path: `/${this.$route.params.lang}/keywords-reference`, ar: 'دليل كلمات المفتاح', en: 'Keywords Reference' },
      },
      codes: [
        'كرر (متغير أ = 1؛ أ <= 10؛ أ++) {',
        '  كرر (متغير ب = 1؛ ب <= 10؛ ب++) {',
        '    أكتب (مقطع(أ) + " * " + مقطع(ب) + " = " + مقطع(أ * ب))؛',
        '  }',
        '  أكتب("-----------")؛',
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
      window.document.title = (this.isArabic)? 'أبجد - عينة: Multiplication Table' : 'ABJAD - Sample: Multiplication Table';
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