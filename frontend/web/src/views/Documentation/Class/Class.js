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
        { id: 'syntax', level: 2, ar: 'الصياغة', en: 'Syntax' },
        { id: 'defining-class', level: 3, ar: 'تعريف ملف', en: 'Defining a Class' },
        { id: 'defining-class-example', level: 4, ar: 'مثال', en: 'Example' },
        { id: 'instantiating-class', level: 3, ar: 'إنشاء قيمة من نوع ملف', en: 'Instantiating a Class' },
        { id: 'instantiating-class-example', level: 4, ar: 'مثال', en: 'Example' },
        { id: 'accessing-fields-and-functions', level: 3, ar: 'الوصول إلى خصائص ودالات الملف', en: "Accessing a Class's fields and functions" },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/function`, ar: 'الدالّة', en: 'Function' },
        // next: { path: `/${this.$route.params.lang}/documentation/class`, ar: 'الملف', en: 'Class' },
      },
      codes: {
        ex1: [
          'صنف إنسان {',
          '	متغير إسم_أول = عدم؛',
          '	متغير إسم_أخير = عدم؛',
          '	متغير عمر = عدم؛',
          '	دالة إنسان(إسم، عائلة، _عمر) {',
          '		إسم_أول = إسم؛',
          '		إسم_أخير = عائلة؛',
          '		عمر = _عمر؛',
          '	}',
          '	دالة تعديل_العمر(جديد) {',
          '		عمر = جديد؛',
          '	}',
          '}',
        ],
        ex2: [
          'متغير محمد = انشئ إنسان("محمد"، "عزالدين"، 20)؛',
        ],
        ex3: [
          'أكتب(محمد.إسم_أول)؛',
          'محمد.تعديل_العمر(محمد.عمر + 1)؛',
          'أكتب(محمد.عمر)؛',
        ]
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