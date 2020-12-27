<template>
	<div class="code-container">
		<prism-editor 
			v-if="!direction || direction == 'rtl'"
      class="my-editor" 
			:class="{ 'read-only': !editable }"
      v-model="code" 
      :highlight="highlighter" 
      line-numbers
    ></prism-editor>
		
		<div v-else class="abjad-bash">
			<code>
				{{code}}
			</code>
		</div>
		
		<!-- Copy button -->
		<button type="button" 
			v-if="!editable"
			@click="copyCode()"
			class="mt-n3 v-btn v-btn--absolute v-btn--flat v-btn--icon v-btn--round v-btn--top theme--light v-size--default" 
			:class="{ 'v-btn--left': !direction || direction == 'rtl', 'v-btn--right': direction == 'ltr'}"
		>
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

<script src="./codeArea.js"></script>
<style lang="scss" src="./codeArea.scss"></style>