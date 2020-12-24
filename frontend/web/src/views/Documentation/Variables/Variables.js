import codeArea from '@/components/codeArea/codeArea.vue';
import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { codeArea, contentThumbnail, footerLinks },
  data() {
    return {
      links: [
        { id: 'variables', level: 1, ar: 'المتغيرات', en: 'Variables' },
        { id: 'what-are-variables', level: 2, ar: 'ما هي المتغيرات؟', en: 'What Are Variables?' },
        { id: 'declaring-variable', level: 2, ar: 'تعريف المتغير', en: 'Declaring a Variable' },
        { id: 'declaring-null-variable', level: 3, ar: 'تعريف متغير بدون قيمة', en: 'Declaring Variable Without a Value' },
        { id: 'using-variable', level: 2, ar: 'استخدام المتغير', en: 'Using a Variable' },
        { id: 'change-variable-value', level: 2, ar: 'تغير قيمة المتغير', en: 'Changing The Value of a Variable' },
      ],
      linksFooter: {
        prev: { path: `/${this.$route.params.lang}/documentation/syntax`, ar: 'الصياغة', en: 'Syntax' },
        next: { path: ``, ar: '', en: ''},
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
      window.document.title = (this.isArabic)? 'أبجد - المتغيرات' : 'ABJAD - Variables';
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