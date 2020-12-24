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

<script src="./drawer.js"></script>
<style lang="scss" src="./drawer.scss" scoped></style>