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
							children: [
								{ id: 7, name: 'Windows' },
								{ id: 8, name: 'MacOS' },
								{ id: 9, name: 'Linux' },
							],
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
					close: 'mdi-file-document-outline'
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