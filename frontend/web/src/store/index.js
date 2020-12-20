import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: '',
    arabic: {},
    english: {}
  },
  getters: {
    lang: state => {
      return state.language;
    },
    context: state => {
      return (state.language === 'ar')? state.arabic : state.english;
    }
  },
  mutations: {
    setLanguage(state, lang) {
      state.language = lang;
    },
    setArabicFile(state, file) {
      state.arabic = file;
    },
    setEnglishFile(state, file) {
      state.english = file;
    }
  },
  actions: {
    setLanguage(context, lang) {
      context.commit('setLanguage', lang);
      if (lang == 'en') {
        return 'ltr';
      } else if (lang == 'ar') {
        return 'rtl';
      }
    },
    setArabicFile(context, file) {
      context.commit('setArabicFile', file);
    },
    setEnglishFile(context, file) {
      context.commit('setEnglishFile', file);
    }
  },
  modules: {
  }
})
