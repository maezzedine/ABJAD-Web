import codeArea from '@/components/codeArea/codeArea.vue';
import api from '../../services/api';

export default {
  components: { codeArea },
  data: () => ({
    code: '',
    output: '',
    error: '',
    loading: false
  }),
  created() {
    this.setTitle();
  },
  beforeDestroy() {
    sessionStorage.setItem('abjad-code', this.code);
  },
  computed: {
    isArabic() {
      return this.$store.getters['lang'] == 'ar';
    }
  },
  methods: {
    setTitle() {
      window.document.title = (this.isArabic)? 'أبجد - محول برمجي' : 'ABJAD - Online Editor';
    },
    updateCode(c) {
      this.$store.commit("setCode", c);
      this.code = c;
    },
    run() {
      this.loading = true;
      api.interpret(this.code)
        .then(r => {
          if (r.ok) {
            r.text()
              .then(d => this.setOutput(d)
            );
          } else {
            r.json()
              .then(d => this.setError(d)
            );
          }
        })
        .finally(() => {
          new Promise((r) => setTimeout(() => {
            this.loading = false
          }, 100))
        });
    },
    setOutput(data) {
      this.output = data;
      this.error = '';
    },
    setError(data) {
      this.error = data[this.$store.getters.lang];
      this.output = '';
    }
  },
  watch: {
    isArabic: function () {
      this.setTitle();
    }
  }
}