import scroll from '@/services/scroll.js';
import codeArea from '@/components/codeArea/codeArea.vue';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/running-code`, ar: 'تشغيل برنامج أبجد', en: 'Running ABJAD Code' },
        next: { path: `/${this.$route.params.lang}/sample-codes/prime-numbers`, ar: 'كود عيني: الأعداد الأولية', en: 'Sample Code: Prime Numbers' },
      },
      codes: [
        'كرر (متغير س = 1؛ س < 100؛ س++) {',
        '  إذا (س % 2 == 0) {',
        '    أكتب(مقطع(س) + " مزدوج")؛',
        '  } وإلا {',
        '    أكتب(مقطع(س) + " مفرد")؛',
        '  }',
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
      window.document.title = (this.isArabic)? 'أبجد - عينة: المفرد والمزدوج' : 'ABJAD - Sample: Even/Odd';
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