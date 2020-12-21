<template>
	<v-app-bar 
	elevate-on-scroll 
	  outlined 
	  class="app-bar" 
	  app 
	  clipped-left 
	  clipped-right
	>
		<abjad-logo />

		<v-spacer></v-spacer>
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
import language from '@/services/language.js';

export default {
	name: 'AppBar',
	components: {
			abjadLogo
	},
	methods: {
		toggleLanguage: function() {
			language.toggle(this);
		}
	}
}
</script>

<style lang="scss" src="./appBar.scss" scoped></style>