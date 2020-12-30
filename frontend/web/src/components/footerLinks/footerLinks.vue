<template>
  <div class="pt-4">
    <v-divider></v-divider>
    <v-footer class="pt-6 px-0" color="white">
      <v-btn
        outlined text :block="width < 600"
        v-if="links.prev" 
        class="pa-5 mb-2"
        :class="{ 'ml-auto' : isArabic, 'mr-auto' : !isArabic}"
      >
        <v-icon>
          {{isArabic? 'mdi-chevron-right': 'mdi-chevron-left'}}
        </v-icon>
        <router-link 
          class="text-decoration-none text-h6"
          :to="links.prev.path">
          <template v-if="isArabic">{{links.prev.ar}}</template>
          <template v-else>{{links.prev.en}}</template>
        </router-link>
      </v-btn>
      
      <v-btn 
        outlined text :block="width < 600"
        v-if="links.next"
        class="pa-5" 
        :class="{ 'mr-auto' : isArabic, 'ml-auto' : !isArabic}">
        <router-link 
          class="text-decoration-none text-h6"
          :to="links.next.path">
          <template v-if="isArabic">{{links.next.ar}}</template>
          <template v-else>{{links.next.en}}</template>
        </router-link>
        <v-icon>
          {{isArabic? 'mdi-chevron-left': 'mdi-chevron-right'}}
        </v-icon>
      </v-btn>
    </v-footer>

    <div class="fb-comments mt-16" :data-href="url" data-width="" data-numposts="5"></div>
  </div>
</template>

<script src="./footerLinks.js"></script>