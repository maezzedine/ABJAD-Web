import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'
import codeArea from '@/components/codeArea/codeArea.vue'

export default {
  components: { contentThumbnail, footerLinks, codeArea },
  data() {
    return {
      links: [
        { id: 'conditionals', level: 1, ar: 'الشَّرطيات', en: 'Conditionals' },
        { id: 'what-do-they-consist-of', level: 2, ar: 'مِمّا تتألف؟', en: 'What Do They Consist Of?' },
        { id: 'how-they-work', level: 2, ar: 'كيف تعمل؟', en: 'How They Work?' },
        { id: 'syntax', level: 2, ar: 'الصياغة', en: 'Syntax' },
        { id: 'without-else', level: 3, ar: 'بدون حُكم-وإلا', en: 'Without Else-Clause' },
        { id: 'with-else', level: 3, ar: 'مع حُكم-وإلا', en: 'With Else-Clause' },
        { id: 'nesting', level: 3, ar: 'تداخل الجمل الشرطية', en: 'Nesting If-Else Statements' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/comments`, ar: 'التعليقات', en: 'Comments' },
        // next: { path: `/${this.$route.params.lang}/documentation/constants`, ar: 'الثوابت', en: 'Constants' },
      },
      chartData: {
        ar: [
          {id:'1',text:'\u0634\u0631\u0637',edgeType:'rhombus',next:['2', '3']},
          {id:'2',text:'\u0635\u062d\u064a\u062d',edgeType:'circle',next:['4'], link:'-- \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u064a\u0624\u062e\u0630 \u0628\u062d\u0627\u0644 \u0643\u0627\u0646 \u062c\u0648\u0627\u0628 \u0627\u0644\u0634\u0631\u0637 \u0635\u062d\u064a\u062d ---'},
          {id:'3',text:'\u062e\u0637\u0623',edgeType:'circle',next:['5'], link:'-- \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0631 \u064a\u0624\u062e\u0630 \u0628\u062d\u0627\u0644 \u0643\u0627\u0646 \u062c\u0648\u0627\u0628 \u0627\u0644\u0634\u0631\u0637 \u062e\u0637\u0623 ---'},
          {id:'4',text:'\u062d\u0643\u0645\u002d\u0625\u0630\u0627',edgeType:'round'},
          {id:'5',text:'\u062d\u0643\u0645\u002d\u0648\u0625\u0644\u0627',edgeType:'round'},
        ],
        en: [
          {id:'1',text:'Condition',edgeType:'rhombus',next:['2', '3']},
          {id:'2',text:'True',edgeType:'circle',next:['4'], link:'-- this executes when the condition is true ---'},
          {id:'3',text:'False',edgeType:'circle',next:['5'], link:'-- this executes when the condition is false ---'},
          {id:'4',text:'If-Clause',edgeType:'round'},
          {id:'5',text:'Else-Clause',edgeType:'round'},
        ]
      },
      codes: {
        without_else: [
          'متغير عشرة_إيجاب = 10 > 0؛',
          'إذا(عشرة_إيجاب) {',
          '   أكتب("الرقم عشرة إيجابي")؛',
          '}',
        ],
        with_else: [
          'متغير عشرة_إيجاب = 10 > 0؛',
          'إذا(عشرة_إيجاب) {',
          '   أكتب("الرقم عشرة إيجابي")؛',
          '} وإلا {',
          '   أكتب("الرقم عشرة سلبي")؛',
          '}',
        ],
        nesting: [
          'متغير أول = 10؛',
          'متغير ثاني = 20؛',
          'إذا(أول > ثاني ) {',
          '   أكتب("الرقم " + أول + " أكبر من " + ثاني)؛',
          '} وإلا {',
          '   إذا(أول == ثاني ) {',
          '     أكتب("الرقم " + أول + " يساوي " + ثاني)؛',
          '   } وإلا {',
          '     أكتب("الرقم " + أول + " أصغر من " + ثاني)؛',
          '   }',
          '}',
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
      window.document.title = (this.isArabic)? 'أبجد - الشَّرطيات' : 'ABJAD - Conditionals';
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