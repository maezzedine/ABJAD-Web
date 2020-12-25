import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'

export default {
  components: { contentThumbnail, footerLinks },
  data() {
    return {
      links: [
        { id: 'operations', level: 1, ar: 'العمليات', en: 'Operations' },
        { id: 'numbers', level: 2, ar: 'العمليات الحسابية على الأرقام', en: 'Numbers Operations' },
        { id: 'binary-numbers-oper', level: 3, ar: 'العمليات الثنائية', en: 'Binary Operations' },
        { id: 'boolean', level: 2, ar: 'العمليات الحسابية على الشروط', en: 'Boolean Operations' },
        { id: 'binary-boolean-oper', level: 3, ar: 'العمليات الثنائية', en: 'Binary Operations' },
        { id: 'unary-boolean-oper', level: 3, ar: 'العمليات الأحادية', en: 'Unary Operations' },
        { id: 'strings', level: 2, ar: 'العمليات الحسابية على المقاطع', en: 'Strings Operations' },
        { id: 'binary-strings-oper', level: 3, ar: 'العمليات الثنائية', en: 'Binary Operations' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/documentation/print`, ar: 'الكتابة', en: 'Printing' },
        next: { path: `/${this.$route.params.lang}/documentation/comments`, ar: 'التعليقات', en: 'Comments' },
      },
      operations: {
        numbers: {
          binary: [
            { 
              id: 1, 
              sign: '+',
              example: ['متغير واحد = 1؛', 'متغير ثلاثة = واحد + 2؛'],
              ar: {
                name: 'جمع', 
                function: 'تجمع عددين وتعيد الحاصل',
                return_type: 'رقم'
              },
              en: {
                name: 'Addition', 
                function: 'Adds two numbers and returns the result',
                return_type: 'Number'
              },
            },
            { 
              id: 2, 
              sign: '-',
              example: ['متغير س = 10؛', 'ثابت د = 2؛', 'متغير ع = س - د؛'],
              ar: {
                name: 'طرح', 
                function: 'تطرح عددين وتعيد الحاصل',
                return_type: 'رقم'
              },
              en: {
                name: 'Subtraction', 
                function: 'Subtract two numbers and returns the result',
                return_type: 'Number'
              },
            },
            { 
              id: 3, 
              sign: '*',
              example: ['ثابت س = 7 * 3؛'],
              ar: {
                name: 'ضرب', 
                function: 'تضرب عددين وتعيد الحاصل',
                return_type: 'رقم'
              },
              en: {
                name: 'Multiplication', 
                function: 'Multiplies two numbers and returns the result',
                return_type: 'Number'
              }
            },
            { 
              id: 4, 
              sign: '\\',
              example: ['متغير ص = 1\\3؛'],
              ar: {
                name: 'قسمة', 
                function: 'تقسم عددين وتعيد الحاصل',
                return_type: 'رقم'
              },
              en: {
                name: 'Division', 
                function: 'Divides two numbers and returns the result',
                return_type: 'Number'
              }
            },
            { 
              id: 5, 
              sign: '>',
              example: ['متغير أول = 4؛', 'متغير ثاني = 5 * 3؛', 'أكتب(أول > ثاني)؛'],
              ar: {
                name: 'أكبر من', 
                function: 'تفحص الرقمين، إن كان الرقم الأول أكبر من الثاني تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Greater Than', 
                function: 'Checks if the first number is greater than the second and returns the result',
                return_type: 'Boolean'
              }
            },
            { 
              id: 6, 
              sign: '<',
              example: ['متغير عشرة_أصغر_من_عشرين = 10 < 20؛'],
              ar: {
                name: 'أصغر من', 
                function: 'تفحص الرقمين، إن كان الرقم الأول أصغر من الثاني تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Less Than', 
                function: 'Checks if the first number is less than the second and returns the result',
                return_type: 'Boolean'
              }
            },
            { 
              id: 7, 
              sign: '>=',
              example: ['أكتب(10 >= 10)؛'],
              ar: {
                name: 'أكبر من أو يساوي', 
                function: 'تفحص الرقمين، إن كان الرقم الأول أكبر من الثاني أو يُساويه تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Greater Than or Equal', 
                function: 'Checks if the first number is greater than or equal to the second and returns the result',
                return_type: 'Boolean'
              }
            },
            { 
              id: 8, 
              sign: '<=',
              example: ['أكتب(10 <= 11)؛'],
              ar: {
                name: 'أصغر من أو يساوي', 
                function: 'تفحص الرقمين، إن كان الرقم الأول أصغر من الثاني أو يُساويه تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Less Than or Equal', 
                function: 'Checks if the first number is less than or equal to the second and returns the result',
                return_type: 'Boolean'
              }
            },
            { 
              id: 9, 
              sign: '==',
              example: ['أكتب(10 == 10)؛'],
              ar: {
                name: 'يساوي', 
                function: 'تفحص الرقمين، إن كانا يُساويان بعضهما تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Equal', 
                function: 'Checks if the first number is equal to the second and returns the result',
                return_type: 'Boolean'
              }
            },
            { 
              id: 10, 
              sign: '!=',
              example: ['أكتب(10 != 11)؛'],
              ar: {
                name: 'لا يساوي', 
                function: 'تفحص الرقمين، إن كانا مختلفين تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Not Equal', 
                function: 'Checks if the first number is not equal to the second and returns the result',
                return_type: 'Boolean'
              }
            }
          ]
        },
        boolean: {
          binary: [
            { 
              id: 11, 
              sign: '&&',
              example: ['متغير شرط_1 = 1 > 0؛', 'متغير شرط_2 = 10 == 10؛', 'أكتب(شرط_1 && شرط_2)؛'],
              ar: {
                name: 'أيضا', 
                function: 'تعيد "صحيح" إن كان كِلا الشرطين صحيحان، و"خطأ" غير ذلك',
                return_type: 'منطقي'
              },
              en: {
                name: 'AND', 
                function: 'Returns true if both conditions are true, false otherwise.',
                return_type: 'Boolean'
              },
            },
            { 
              id: 12, 
              sign: '||',
              example: ['متغير شرط_1 = 1 > 0؛', 'أكتب(شرط_1 || خطأ)؛'],
              ar: {
                name: 'أو', 
                function: 'تعيد "خطأ" إن كان كِلا الشرطين غير صحيحين، و"صحيح" غير ذلك',
                return_type: 'منطقي'
              },
              en: {
                name: 'OR', 
                function: 'Returns false if both conditions are false, true otherwise.',
                return_type: 'Boolean'
              },
            },
            { 
              id: 13, 
              sign: '==',
              example: ['متغير شرط_1 = 1 > 0؛', 'أكتب(شرط_1 == صحيح)؛'],
              ar: {
                name: 'يساوي', 
                function: 'تفحص الشرطين، إن كانا يُساويان بعضهما تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Equal', 
                function: 'Checks if the first condition is equal to the second and returns the result',
                return_type: 'Boolean'
              },
            },
            { 
              id: 14, 
              sign: '!=',
              example: ['متغير شرط_1 = 1 > 0؛', 'أكتب(شرط_1 != خطأ)؛'],
              ar: {
                name: 'لا يساوي', 
                function: 'تفحص الشرطين، إن كانا يُساويان بعضهما تُعيد "خطأ" أما العكس، فتُعيد "صحيح"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Not Equal', 
                function: 'Checks if the first condition is not equal to the second and returns the result',
                return_type: 'Boolean'
              },
            },
          ],
          unary: [
            { 
              id: 15, 
              sign: '!',
              example: ['متغير شرط = 1 > 0؛', 'أكتب(!شرط)؛'],
              ar: {
                name: 'ليس', 
                function: 'تعكس نتيجة الشرط. إن كانت "صحيح" تصبح "خطأ" والعكس كذلك.',
                return_type: 'منطقي'
              },
              en: {
                name: 'NOT', 
                function: 'Reverses the result of a condition. If it is true, it returns false, and vice versa',
                return_type: 'Boolean'
              },
            },
          ]
        },
        strings: {
          binary: [
            { 
              id: 16, 
              sign: '+',
              example: ['متغير ترحيب = "مرحبا"؛', 'متغير بالعالم = "بالعالم"؛', 'أكتب(ترحيب + " " + بالعالم)؛'],
              ar: {
                name: 'توحيد', 
                function: 'تجمع مقطعين وتُعيد الحاصل.',
                return_type: 'مقطع'
              },
              en: {
                name: 'Concatenation', 
                function: 'Adds two strings together, and returns the result.',
                return_type: 'String'
              },
            },
            { 
              id: 17, 
              sign: '==',
              example: ['متغير مقطع_1 = "أبجد"؛', 'متغير مقطع_2 = "أبجـــد"؛', 'أكتب(مقطع_1 == مقطع_2)؛'],
              ar: {
                name: 'يساوي', 
                function: 'تفحص المقطعين، إن كانا يُساويان بعضهما تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Equal', 
                function: 'Checks if the first string is equal to the second and returns the result',
                return_type: 'Boolean'
              },
            },
            { 
              id: 18, 
              sign: '!=',
              example: ['متغير مقطع_1 = "أبجد"؛', 'متغير مقطع_2 = "_أبجد"؛', 'أكتب(مقطع_1 != مقطع_2)؛'],
              ar: {
                name: 'لا يساوي', 
                function: 'تفحص المقطعين، إن كانا يُساويان بعضهما تُعيد "خطأ" أما العكس، فتُعيد "صحيح"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Not Equal', 
                function: 'Checks if the first string is not equal to the second and returns the result',
                return_type: 'Boolean'
              },
            },
            { 
              id: 19, 
              sign: '>',
              example: ['متغير مقطع_1 = "أبجد"؛', 'متغير مقطع_2 = "هوز"؛', 'أكتب(مقطع_1 > مقطع_2)؛'],
              ar: {
                name: 'أكبر من', 
                function: 'تفحص الرقمين، إن كان المقطع الأول يأتي في الأبجدية بعد الثاني تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Greater Than', 
                function: 'Checks if the first strings comes after the second and returns the result',
                return_type: 'Boolean'
              }
            },
            { 
              id: 20, 
              sign: '<',
              example: ['متغير مقطع_1 = "أبجد"؛', 'متغير مقطع_2 = "هوز"؛', 'أكتب(مقطع_1 < مقطع_2)؛'],
              ar: {
                name: 'أصغر من', 
                function: 'تفحص الرقمين، إن كان المقطع الأول يأتي في الأبجدية قبل الثاني تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Less Than', 
                function: 'Checks if the first strings comes before the second and returns the result',
                return_type: 'Boolean'
              }
            },
            { 
              id: 21, 
              sign: '>=',
              example: ['متغير مقطع_1 = "أبجد"؛', 'متغير مقطع_2 = "هوز"؛', 'أكتب(مقطع_1 >= مقطع_2)؛'],
              ar: {
                name: 'أكبر من أو يساوي', 
                function: 'تفحص الرقمين، إن كان المقطع الأول يأتي في الأبجدية بعد الثاني أو بنفس ترتيبه تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Greater Than or Equal', 
                function: 'Checks if the first strings comes after or at the same order with the second and returns the result',
                return_type: 'Boolean'
              }
            },
            { 
              id: 22, 
              sign: '<=',
              example: ['متغير مقطع_1 = "أبجد"؛', 'متغير مقطع_2 = "هوز"؛', 'أكتب(مقطع_1 <= مقطع_2)؛'],
              ar: {
                name: 'أصغر من أو يساوي', 
                function: 'تفحص الرقمين، إن كان المقطع الأول يأتي في الأبجدية قبل الثاني أو بنفس ترتيبه تُعيد "صحيح" أما العكس، فتُعيد "خطأ"',
                return_type: 'منطقي'
              },
              en: {
                name: 'Less Than or Equal', 
                function: 'Checks if the first strings comes before or at the same order with the second and returns the result',
                return_type: 'Boolean'
              }
            },
          ],
        }
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
      window.document.title = (this.isArabic)? 'أبجد - العمليات' : 'ABJAD - Operations';
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