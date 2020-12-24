import scroll from '@/services/scroll.js';

export default {
  props: {
    links: Array
  },
  methods: {
    getPadding(n) {
      var p = 3 * n;
      return this.isArabic? `pr-${p}` : `pl-${p}`;
    },
    anchorHashCheck() {
      scroll.anchorHashCheck(this);
    }
  },
  computed: {
    isArabic() {
        return this.$store.getters['lang'] == 'ar';
    }
  },
}