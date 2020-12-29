import scroll from '@/services/scroll.js';
import codeArea from '@/components/codeArea/codeArea.vue';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/sample-codes/prime-numbers`, ar: 'كود عيني: الأعداد الأولية', en: 'Sample Code: Prime Numbers' },
        // next: { path: `/${this.$route.params.lang}/documentation/print`, ar: 'الكتابة', en: 'Printing' },
      },
      codes: [
        'متغير عداد = 0؛',
        'كرر (متغير س = 1؛ س < 101؛ س++) {',
        '  عداد += س؛',
        '}',
        'أكتب(عداد)؛',
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
      window.document.title = (this.isArabic)? 'أبجد - عينة: جمع الأرقام' : 'ABJAD - Sample: Sum of Numbers';
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