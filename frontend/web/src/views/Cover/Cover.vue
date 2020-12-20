<template>
	<div class="cover">
		<div class="logo-container mb-16">
			<!-- <v-img src="@/assets/abjad-800.png"/> -->
			<abjad-logo />
			<span class="name">
					<div class="en mr-2">ABJAD</div> - 
					<div color="cyan" class="ar ml-2">أبجد</div>
			</span>
		</div>
		<v-btn-toggle class="languages">
            <!-- <router-link to="/en" tag="button"
				color="blue-grey white--text">
                English
			</router-link> -->
			<v-btn to="/en"
				color="blue-grey white--text">
                English
			</v-btn>
			<v-btn to="/ar"
				color="cyan darken-2 white--text text-h6" 
				@click="reveal = true">
                العربية
			</v-btn>
		</v-btn-toggle>
	</div>
</template>

<script>
    import abjadLogo from '@/components/svgs/abjadLogo.vue';

    export default {
        name: 'Cover',
        components: {
            abjadLogo
        },
    }
</script>

<style lang="scss" src="./Cover.scss"></style>