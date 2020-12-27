import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: '',
    arabic: {},
    english: {},
    code: '',
  },
  getters: {
    lang: state => {
      return state.language;
    },
    context: state => {
      return (state.language === 'ar')? state.arabic : state.english;
    },
    code: state => {
      return state.code;
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
    },
    setCode(state, code) {
      state.code = code;
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
    },
    setCode(context, code) {
      context.commit('setCode', code);
    }
  },
  modules: {
  }
})
