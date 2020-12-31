import scroll from '@/services/scroll.js';
import contentThumbnail from '@/components/contentThumbnail/contentThumbnail.vue';
import footerLinks from '@/components/footerLinks/footerLinks.vue'
import codeArea from '@/components/codeArea/codeArea.vue'

export default {
  components: { contentThumbnail, footerLinks, codeArea },
  data() {
    return {
      links: [
        { id: 'about', level: 1, ar: 'استفسار', en: 'About' },
        { id: 'contributing', level: 2, ar: 'المساهمة', en: 'Contributing' },
        { id: 'copy-rights', level: 2, ar: 'حقوق النشر', en: 'Copyrights' },
        { id: 'share', level: 2, ar: 'النشر', en: 'Share' },
      ],
      linksFooter: { 
        prev: { path: `/${this.$route.params.lang}/keywords-reference`, ar: 'دليل كلمات المفتاح', en: 'Keywords Reference' },
      },
      base_url: process.env.VUE_APP_URL
    }
  },
  created() {
    this.setTitle();
  },
  mounted() {
    this.addLinkedInButton();
  },
  computed: {
    isArabic() {
      return this.$store.getters['lang'] == 'ar';
    }
  },
  methods: {
    setTitle() {
      window.document.title = (this.isArabic)? 'أبجد - عن أبجد' : 'ABJAD - About';
    },
    anchorHashCheck() {
      scroll.anchorHashCheck(this);
    },
    addLinkedInButton() {
      var div = document.getElementById('linked-in');

      var script_1 = document.createElement('script');
      script_1.setAttribute('src', "https://platform.linkedin.com/in.js");
      script_1.setAttribute('type', "text/javascript");
      script_1.innerText = "lang: en_US";

      var script_2 = document.createElement('script');
      script_2.setAttribute('data-url', this.base_url);
      script_2.setAttribute('type', "IN/Share");

      div.appendChild(script_1);
      div.appendChild(script_2);
    }
  },
  watch: {
    isArabic: function () {
      this.setTitle();
    }
  }
}