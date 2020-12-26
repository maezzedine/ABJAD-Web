import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'
import codeArea from '@/components/codeArea/codeArea.vue'

export default {
  components: { contentThumbnail, footerLinks, codeArea },
  data() {
    return {
      links: [
        { id: 'function', level: 1, ar: 'الدالّة', en: 'Function' },
        { id: 'syntax', level: 2, ar: 'الصياغة', en: 'Syntax' },
        { id: 'defining-function', level: 3, ar: 'تعريف الدالة', en: 'Defining a Function' },
        { id: 'calling-function', level: 3, ar: 'نداء الدالة', en: 'Calling on a Function' },
        { id: 'example', level: 2, ar: 'الصياغة', en: 'Example' },
        { id: 'returning', level: 2, ar: 'الإرجاع', en: 'Returning' },
        { id: 'recursion', level: 2, ar: 'نداء ذاتي', en: 'Recursion' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/for-loop`, ar: 'حلقة التكرار', en: 'For Loop' },
        next: { path: `/${this.$route.params.lang}/documentation/class`, ar: 'الملف', en: 'Class' },
      },
      codes: {
        ex1: [
          'دالة جامعة (أ، ب) {',
          '   متغير نتيجة = أ + ب؛',
          '   أكتب(نتيجة)؛',
          '}',
        ],
        ex2: [
          'كرر (متغير س = 0؛ س < 10؛ س++) {',
          '   جامعة(س، س + 1)؛',
          '}',
        ],
        ex3: [
          'دالة جامعة (أ، ب) {',
          '   أرجع أ + ب؛',
          '}',
          'متغير جواب = جامعة(14،8)؛',
          'أكتب(جواب)؛',
        ],
        ex4: [
          'دالة احسب_الأس(عدد، أس) {',
          '	اذا (أس == 0) {',
          '		ارجع 1؛',
          '	}',
          '	ارجع عدد * احسب_الأس(عدد، أس - 1)؛',
          '}',
          'اكتب(احسب_الأس(2، 9))؛',
        ],
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