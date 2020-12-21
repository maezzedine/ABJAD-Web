<template>
	<v-app class="home" app>
        <drawer />
        <app-bar />
        <v-main>
            <v-container fluid>
                <router-view class="window"/>
            </v-container>
        </v-main>
	</v-app>
</template>

<script src="./Home.js"></script>
<style lang="scss" src="./Home.scss" scoped></style>