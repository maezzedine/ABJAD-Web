import codeArea from '@/components/codeArea/codeArea.vue';

export default {
  components: { codeArea },
  data: () => ({
    code: 'أكتب("مرحبا بالعالم!")؛\n# هذا تعليق\nأكتب("مرحبا")؛\nملف ملفي {\n\n}\nمتغير شرط_1 = صحيح؛',
  }),
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
      window.document.title = (this.isArabic)? 'أبجد - محول برمجي' : 'ABJAD - Online Editor';
    },
  },
  watch: {
    isArabic: function () {
      this.setTitle();
    }
  }
}