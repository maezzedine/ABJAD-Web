module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "src/styles/_variables.scss"
                `
            },
            scss: {
                prependData: `
                @import "src/styles/_variables.scss";
                `
            }
        }
    }
}