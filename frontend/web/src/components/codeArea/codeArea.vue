<template>
	<div class="code-container">
		<!-- Copy button -->
		<v-btn-toggle 
			v-if="!editable"
		 	dense class="mt-4"
		>
			<v-tooltip bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn type="button" 
						text icon
						v-bind="attrs" v-on="on"
						@click="copyCode()"
						:class="{ 'v-btn--left': !direction || direction == 'rtl', 'v-btn--right': direction == 'ltr'}"
					>
						<v-icon color="grey">mdi-content-copy</v-icon>
					</v-btn>
				</template>
				<span>
					<template v-if="isArabic">إنسخ الكود</template>
					<template v-else>Copy Code</template>
				</span>
			</v-tooltip>

			<v-btn
				text
				:class="{ 'v-btn--left': !direction || direction == 'rtl', 'v-btn--right': direction == 'ltr'}"
			>
				<router-link 
					@click.native="setSessionCode(code)"
					class="text-decoration-none grey--text text--darken-1" :to="`/${$route.params.lang}/editor`"
				>
					<template v-if="isArabic">جرّبه</template>
					<template v-else>Try it</template>
				</router-link>
			</v-btn>
		</v-btn-toggle>

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