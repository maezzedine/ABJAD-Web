<template>
	<v-navigation-drawer 
		class="drawer"
		app
		clipped
		:right="$store.getters.context['dir'] === 'rtl'"
		activatable
	>
		<v-treeview
			hoverable
			activatable
			transition
			:items="items"
			:open="initiallyOpen"
			item-key="name"
		>
			<template slot="label" slot-scope="props">
				<router-link 
					v-if="props.item.link" 
					:to="props.item.link"
					class="text-decoration-none">
					<v-icon>
						{{ props.open ? props.item.open : props.item.close }}
					</v-icon>
					{{props.item.name}}
				</router-link>
				<div v-else>
					<v-icon>
						{{ props.open ? props.item.open : props.item.close }}
					</v-icon>
					{{props.item.name}}
				</div>
				
			</template>
		</v-treeview>
	</v-navigation-drawer>
</template>

<script>
export default {
	name: 'Drawer',
	computed: {
		initiallyOpen() {
			return [this.$store.getters.context['introduction']];
		},
		items() {
			return [
				{
					id: 1,
					name: this.$store.getters.context['introduction'],
					children: [
						{ id: 2, name: this.$store.getters.context['what-is-abjad'], link: `/${this.$store.getters.lang}/introduction/what-is-abjad` },
						{ id: 3, name: this.$store.getters.context['why-abjad'], link: `/${this.$store.getters.lang}/introduction/why-abjad`  },
					],
					open: 'mdi-script-text',
					close: 'mdi-script-text-outline'
				},
				{
					id: 5,
					name: this.$store.getters.context['getting-started'],
					children: [
						{
							id: 6,
							name: this.$store.getters.context['installation'],
							link: `/${this.$store.getters.lang}/getting-started/installation`
						},
						{
							id: 7,
							name: this.$store.getters.context['first-program'],
							link: `/${this.$store.getters.lang}/getting-started/first-program`
						},
						{ id: 10, name: this.$store.getters.context['online-editor'] },
					],
					open: 'mdi-speedometer',
					close: 'mdi-speedometer-medium'
				},
				{
					id: 15,
					name: this.$store.getters.context['documentation'],
					open: 'mdi-file-document',
					close: 'mdi-file-document-outline',
					children: [
						{
							id: 17,
							name: this.$store.getters.context['variables'],
							link: `/${this.$store.getters.lang}/documentation/variables`
						},
					]
				},
				{
					id: 16,
					name: this.$store.getters.context['running-abjad'],
					open: 'mdi-play',
					close: 'mdi-play-outline',
				},
				{
					id: 19,
					name: this.$store.getters.context['about']
				},
			];
		}
	}
}
</script>

<style lang="scss" src="./drawer.scss" scoped></style>