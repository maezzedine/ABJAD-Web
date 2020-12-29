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
        pattern: /((?:(?:صنف|آنشئ|إنشئ|أنشئ|انشئ)\s+)|(?:catch\s+\())[\w.\\]+/i
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
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF_]*(?=\s*=\s*(?:دالة\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF_]*)\s*=>))/i
      },
      keyword: /(متغير|ثابت|صنف|دالة|إذا|وإلا|أرجع|ارجع|والا|عدم|طالما|كرر|كرّر|نوع|رقم|مقطع|منطقي|اكتب|أكتب|انشئ|أنشئ|إنشئ|صحيح|خطأ)/,
      number: /\d+/,
      operator: /-[-=]?|\+[+=]?|!=?|<=?|>=?|=(?:==?|>)?|&|\||\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/,
      punctuation: /[{}[\]؛()،.]/,
      string: {
        greedy: true,
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/g
      }
    }
  }),
  computed: {
    isArabic() {
      return this.$store.getters['lang'] == 'ar';
    },
    storeCode() {
      return this.$store.getters.code;
    }
  },
  mounted() {
    this.fillCode();
    this.updateCode();
	},
	methods: {
    highlighter(code) {
      return highlight(code, this.abjadHighlighter); //returns html
    },
		copyCode() {
			navigator.clipboard.writeText(this.code);
			this.text = this.$store.getters.context['copy-complete'];
			this.snackbar = true;
    },
    updateCode() {
      if (this.editable) {
        this.$emit("code-change", this.code);
      }
    },
    setSessionCode(code) {
      // console.log('set');
      this.$store.commit("setCode", code);
      // sessionStorage.setItem("abjad-code", code);
    },
    fillCode() {
      if (this.codes) {
        this.code = this.codes.reduce((p, c) => p + "\n" + c);
      } else {
        var codesFromStore = this.$store.getters.code;
        if (codesFromStore) {
          this.code = codesFromStore;
        } else {
          var codesFromSession = sessionStorage.getItem("abjad-code");
          if (codesFromSession) {
            sessionStorage.removeItem('abjad-code');
            this.code = codesFromSession;
          }
        }
      }
    }
  },
  watch: {
    code: function () {
      this.updateCode();
    },
    $route: function () {
      this.fillCode();
    },
    storeCode:  function() {
      this.fillCode();
    }
  }

}