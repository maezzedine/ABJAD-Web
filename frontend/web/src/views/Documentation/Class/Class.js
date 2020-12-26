import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'
import codeArea from '@/components/codeArea/codeArea.vue'

export default {
  components: { contentThumbnail, footerLinks, codeArea },
  data() {
    return {
      links: [
        { id: 'class', level: 1, ar: 'الملف', en: 'Class' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/function`, ar: 'الدالّة', en: 'Function' },
        // next: { path: `/${this.$route.params.lang}/documentation/class`, ar: 'الملف', en: 'Class' },
      },
      codes: []
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
      window.document.title = (this.isArabic)? 'أبجد - الدالّة' : 'ABJAD - Function';
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