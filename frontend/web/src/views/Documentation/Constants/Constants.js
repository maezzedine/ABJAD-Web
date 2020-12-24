import scroll from '@/services/scroll.js';
import codeArea from '@/components/codeArea/codeArea.vue';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      links: [
        { id: 'constants', level: 1, ar: 'الثوابت', en: 'Constants' },
        { id: 'declaring-constant', level: 2, ar: 'تعريف الثابت', en: 'Declaring a Constant' },
        { id: 'using-constant', level: 2, ar: 'استخدام الثابت', en: 'Using a Constant' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/variables`, ar: 'المتغيرات', en: 'Variables' },
        next: { path: `/${this.$route.params.lang}/documentation/types`, ar: 'الأنواع', en: 'Types' },
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
      window.document.title = (this.isArabic)? 'أبجد - الثوابت' : 'ABJAD - Constants';
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