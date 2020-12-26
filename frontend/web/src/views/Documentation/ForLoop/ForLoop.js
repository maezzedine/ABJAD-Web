import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'
import codeArea from '@/components/codeArea/codeArea.vue'

export default {
  components: { contentThumbnail, footerLinks, codeArea },
  data() {
    return {
      links: [
        { id: 'for-loop', level: 1, ar: 'حلقة التكرير', en: 'For Loop' },
        { id: 'syntax', level: 2, ar: 'الصياغة', en: 'Syntax' },
        { id: 'example', level: 2, ar: 'مثال', en: 'Example' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/while-loop`, ar: 'حلقة طالما', en: 'While Loop' },
        // next: { path: `/${this.$route.params.lang}/documentation/constants`, ar: 'الثوابت', en: 'Constants' },
      },
      codes: [
        'كرر (متغير س=0؛ س<10؛ س++) {',
        '   أكتب(س)؛',
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
      window.document.title = (this.isArabic)? 'أبجد - حلقة التكرير' : 'ABJAD - For Loop';
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