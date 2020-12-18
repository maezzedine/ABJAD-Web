<template>
    <div class="home">
        <!--<abjad-logo />-->
        <div>
            <v-carousel v-model="model">
                <v-carousel-item v-for="(color, i) in colors"
                                 :key="color">
                    <v-sheet :color="color"
                             height="100%"
                             tile>
                        <v-row class="fill-height"
                               align="center"
                               justify="center">
                            <div class="display-3">
                                Slide {{ i + 1 }}
                            </div>
                        </v-row>
                    </v-sheet>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<script>
    import abjadLogo from '@/components/svgs/abjadLogo.vue';

    export default {
        name: 'Home',
        components: {
            abjadLogo
        },
        data: () => ({
            model: 0,
            colors: [
                'primary',
                'secondary',
                'yellow darken-2',
                'red',
                'orange',
            ],
        }),
    }
</script>

<style lang="scss" src="./Home.scss"></style>
