import scroll from '@/services/scroll.js';
import codeArea from '@/components/codeArea/codeArea.vue';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/sample-codes/even-odd`, ar: 'كود عيني: الأعداد المفردة والمزدوجة', en: 'Sample Code: Even/Odd Numbers' },
        next: { path: `/${this.$route.params.lang}/sample-codes/sum-numbers`, ar: 'كود عيني: جمع الأعداد', en: 'Sample Code: Sum Numbers' },
      },
      codes: [
        'دالة هل_عدد_أولي (ن) {',
        '  كرر (متغير س = 2؛ س<ن؛ س++) {',
        '    إذا (ن % س == 0) {',
        '      أرجع خطأ؛',
        '    }',
        '  }',
        '  أرجع صحيح؛',
        '}',
        'كرر (متغير س = 1؛ س < 100؛ س++) {',
        '  إذا (هل_عدد_أولي(س)) {',
        '    أكتب(س)؛',
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
      window.document.title = (this.isArabic)? 'أبجد - عينة: الأرقام الأولية' : 'ABJAD - Sample: Prime Numbers';
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