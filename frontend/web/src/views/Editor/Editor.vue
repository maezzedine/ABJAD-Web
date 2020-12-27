<template>
  <div class="page-body">
    <v-btn
      dark outlined icon
      elevation="2" class="mb-2"
      color="teal" @click="run"
    >
      <v-icon>mdi-play</v-icon>
    </v-btn>

    <code-area 
      :editable="true"
      :autoStyleLineNumbers="true"
      @code-change="updateCode"
    ></code-area>

    <v-card
      :loading="loading"
      v-if="output != '' || loading"
      class="pa-4 mt-6 output"
      elevation="2"
      outlined
      dir="rtl"
    >
      <v-card-title :dir="isArabic? 'rtl' : 'ltr'">
        <template v-if="isArabic">
          الحاصل:
        </template>
        <template v-else >
          Output
        </template>
      </v-card-title>
      <v-card-text>{{output}}</v-card-text>
    </v-card>

    <v-alert
      v-if="error != ''"
      class="pa-4 mt-6"
      dense
      outlined
      type="error"
    >
      {{error}}
    </v-alert>
  </div>
</template>

<script src="./Editor.js"></script>

<style lang="scss" scoped>
  .output {
    white-space: pre-line; 
  }
</style>