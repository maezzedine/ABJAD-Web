import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

import { highlight, languages } from 'prismjs/components/prism-core';
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  components: { PrismEditor },
  props: {
    codes: Array,
    editable: Boolean,
		direction: String
	},
  data: () => ({
    snackbar: false,
			text: '',
			timeout: 2000,
			code: '',
      abjadHighlighter: {
      boolean: /(صحيح|خطأ)/,
      'class-name': {
        inside: {
          punctuation: /[.\\]/
        },
        lookbehind: true,
        pattern: /((?:(?:ملف|آنشئ|إنشئ|أنشئ|انشئ)\s+)|(?:catch\s+\())[\w.\\]+/i
      },
      comment: [ 
        {
          lookbehind: true,
          pattern: /(^|[^#:])#.*/
        }
      ],
      constant: /\b([\u0620-\u063A]|[\u0641-\u064A])([\u0620-\u063A]|[\u0641-\u064A]|\d_)*\b/,
      function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
      'function-variable': {
        alias: 'دالة',
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:دالة\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i
      },
      keyword: /(متغير|ثابت|ملف|دالة|إذا|وإلا|أرجع|ارجع|والا|عدم|طالما|كرر|كرّر|نوع|رقم|مقطع|منطقي|اكتب|أكتب|انشئ|أنشئ|إنشئ|صحيح|خطأ)/,
      number: /\d+/,
      operator: /-[-=]?|\+[+=]?|!=?|<=?|>=?|=(?:==?|>)?|&|\||\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
      punctuation: /[{}[\]؛()،.]/,
      string: {
        greedy: true,
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/g
      }
    }
  }),
  mounted() {
		this.code = this.codes.reduce((p, c) => p + "\n" + c);
	},
	methods: {
    highlighter(code) {
      return highlight(code, this.abjadHighlighter); //returns html
    },
		copyCode() {
			navigator.clipboard.writeText(this.code);
			this.text = this.$store.getters.context['copy-complete'];
			this.snackbar = true;
		}
	}
}