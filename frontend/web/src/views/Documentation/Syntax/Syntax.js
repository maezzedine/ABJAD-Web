import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { contentThumbnail, footerLinks },
  data() {
    return {
      links: [
        { id: 'syntax', level: 1, ar: 'الصياغة', en: 'Syntax' }
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/getting-started/first-program`, ar: 'أول برنامج', en: 'First Program' },
        next: { path: `/${this.$route.params.lang}/documentation/variables`, ar: 'المتغيرات', en: 'Variables' },
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
      window.document.title = (this.isArabic)? 'أبجد - الصياغة' : 'ABJAD - Syntax';
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