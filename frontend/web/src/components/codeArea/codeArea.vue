<template>
	<div class="app-code overflow-hidden v-sheet v-sheet--outlined theme--light rounded grey lighten-5" dir="rtl">
		
		<!-- Code goeas here -->
		<pre class="language-bash">
			<code v-for="code in codes" :key="code"
				class="language-bash">{{code}}
			</code>
		</pre>

		<!-- Copy button -->
		<button type="button" 
			@click="copyCode()"
			class="v-btn--copy mr-n2 mt-n2 v-btn v-btn--absolute v-btn--flat v-btn--icon v-btn--left v-btn--round v-btn--top theme--light v-size--default" 
			style="background-color: inherit;">
			<span class="v-btn__content">
				<span aria-hidden="true" class="v-icon notranslate theme--light grey--text">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg">
						<path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path>
					</svg>
				</span>
			</span>
		</button>

		<!-- Snackbar for inforoming about copy completion -->
		<v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
					icon
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>mdi-close-circle-outline</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
	</div>
</template>

<script>
export default {
	props: {
		codes: Array,
	},
	data() {
		return {
			snackbar: false,
			text: '',
			timeout: 2000
		}
	},
	methods: {
		copyCode() {
			var code = this.codes.reduce((p, c) => p + c);
			navigator.clipboard.writeText(code);
			this.text = this.$store.getters.context['copy-complete'];
			this.snackbar = true;
		}
	}
}
</script>

<style lang="scss" scoped>
	.v-sheet.app-code {
		margin: 16px 0;
		position: relative;
		padding: 12px 50px 12px 16px;
	}

	.v-sheet.app-code code[class*=language], .v-sheet.app-code pre[class*=language] {
		background: none;
		display: flex;
		flex-direction: column;
		font-family: Consolas,monospace;
		font-weight: light;
		font-size: 1rem;
		-webkit-hyphens: none;
		-ms-hyphens: none;
		hyphens: none;
		line-height: 1.5;
		margin: 0;
		padding: 0;
		-moz-tab-size: 4;
		tab-size: 4;
		text-align: inherit;
		text-shadow: none;
		white-space: pre;
		word-break: normal;
		word-spacing: normal;
		word-wrap: normal;
		color: $color-cyan-main;
	}

	.content-stepper {
		width: 256px;
	}
</style>