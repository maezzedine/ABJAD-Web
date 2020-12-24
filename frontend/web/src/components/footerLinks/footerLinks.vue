<template>
  <div>
    <v-divider></v-divider>
    <v-footer class="pt-6">
      <div
        v-if="links.prev" 
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
      </div>
      
      <div 
        v-if="links.next" 
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
      </div>
    </v-footer>
  </div>
</template>

<script src="./footerLinks.js"></script>