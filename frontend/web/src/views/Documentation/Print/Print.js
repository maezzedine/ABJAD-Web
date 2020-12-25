import scroll from '@/services/scroll.js';
import codeArea from '@/components/codeArea/codeArea.vue';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      links: [
        { id: 'printing', level: 1, ar: 'الكتابة', en: 'Printing' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/types`, ar: 'الأنواع', en: 'Types' },
        next: { path: `/${this.$route.params.lang}/documentation/operations`, ar: 'العمليات', en: 'Operations' },
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
      window.document.title = (this.isArabic)? 'أبجد - الكتابة' : 'ABJAD - Printing';
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