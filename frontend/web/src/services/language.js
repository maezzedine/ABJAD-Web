export class Language {
    toggle(component) {
        var lang = component.$store.getters['lang'];
			var lang = (lang == 'en')? 'ar' : 'en';
			localStorage.setItem('abjad-lang', lang);
			component.$store.dispatch('setLanguage', lang)
				.then(dir => {
					document.body.dir = dir;
                    document.body.lang = lang;
					component.$router.push({ name: component.$route.name, params: { lang: lang } });
					component.$vuetify.rtl = dir === 'rtl';
				});
    }

    initialize(component) {
        var lang = component.$route?.params?.lang;
        if (lang) {
            localStorage.setItem('abjad-lang', lang);
            component.$store.dispatch('setLanguage', lang)
                .then(dir => {
                    document.body.dir = dir;
                    document.body.lang = lang;
                    component.$vuetify.rtl = dir === 'rtl';
                });
        }
    }
}

export default new Language();