import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'
import codeArea from '@/components/codeArea/codeArea.vue'

export default {
  components: { contentThumbnail, footerLinks, codeArea },
  data() {
    return {
      links: [
        { id: 'running-code', level: 1, ar: 'تشغيل برنامج أبجد', en: 'Running ABJAD Code' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/class`, ar: 'الصنف', en: 'Class' },
        next: { path: `/${this.$route.params.lang}/sample-codes/even-odd`, ar: 'كود عيني: مفرد\\مزدوج', en: 'Sample Code: Even/Odd' },
        // next: { path: `/${this.$route.params.lang}/about`, ar: 'استفسار', en: 'About' },
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
      window.document.title = (this.isArabic)? 'أبجد - تشغيل برنامج أبجد' : 'ABJAD - Running ABJAD Code';
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