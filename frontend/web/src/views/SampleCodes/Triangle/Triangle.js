import scroll from '@/services/scroll.js';
import codeArea from '@/components/codeArea/codeArea.vue';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/sample-codes/sum-numbers`, ar: 'كود عيني: جمع الأعداد', en: 'Sample Code: Sum Numbers' },
        next: { path: `/${this.$route.params.lang}/about`, ar: 'استفسار', en: 'About' },
      },
      codes: [
        'كرر (متغير س = 1؛ س < 10؛ س++) {',
        '  متغير مثلث = ""؛',
        '  كرر (متغير ش = 1؛ ش < س؛ ش++) {',
        '   مثلث += " *"؛',
        '  }',
        '  أكتب(مثلث)؛',
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
      window.document.title = (this.isArabic)? 'أبجد - عينة: مثلث النجوم' : 'ABJAD - Sample: Stars Triangle';
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