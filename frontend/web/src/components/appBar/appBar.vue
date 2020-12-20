<template>
	<v-app-bar 
      elevate-on-scroll outlined class="app-bar" app>
		<abjad-logo />
		
		<v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
					text
          v-bind="attrs"
          v-on="on"
				 	medium
        >v2.0 <v-icon>expand_more</v-icon>
          <!-- <v-toolbar-title>v2.0</v-toolbar-title> -->
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

		<v-spacer></v-spacer>
		<v-btn
			elevation="0"
			tile
		>
			{{$store.getters.context['about']}}
		</v-btn>
		<v-btn
			elevation="0"
			tile
		>
			{{$store.getters.context['online-editor']}}
		</v-btn>
		<v-divider
			inset
			vertical
		></v-divider>

		<v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
				<v-btn 
					text
					tile
          v-bind="attrs"
          v-on="on"
					@click="toggleLanguage()"
				>
					<v-icon>translate</v-icon>
				</v-btn>
      </template>
      <span>{{$store.getters.context['second-language']}}</span>
    </v-tooltip>
		
	</v-app-bar>
</template>

<script>
import abjadLogo from '@/components/svgs/abjadLogo.vue';

export default {
	name: 'AppBar',
	components: {
			abjadLogo
	},
	data: () => ({
      items: [
        { title: '1.0' },
        { title: '1.1' },
        { title: '1.3' },
      ],
    }),
	methods: {
		toggleLanguage: function() {
			var lang = this.$store.getters['lang'];
			var lang = (lang == 'en')? 'ar' : 'en';
			localStorage.setItem('abjad-lang', lang);
			this.$store.dispatch('setLanguage', lang)
				.then(dir => {
					document.body.dir = dir;
					document.body.lang = lang;
					this.$router.push({ name: this.$route.name, params: { lang: lang } });
				});
		}
	}
}
</script>

<style lang="scss" src="./appBar.scss" scoped></style>