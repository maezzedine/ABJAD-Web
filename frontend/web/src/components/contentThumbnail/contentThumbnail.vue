<template>
  <v-navigation-drawer
    id="default-toc"
    :right="$store.getters.context['dir'] !== 'rtl'"
    floating
    clipped
    app
    class="pa-3"
  >
    <template v-slot:prepend>
      <div class="mb-2 text-h6 font-weight-medium text--primary" path="contents">
        <template v-if="isArabic">المحتوى</template>
        <template v-else>Contents</template>
      </div>
    </template>

    <ul>
      <router-link 
        v-for="link in links"
        :key="`${$route.params.lang}-${link.id}`"
        tag="li"
        :to="`#${link.id}`" 
        @click.native="anchorHashCheck()"
        :class="getPadding(link.level)"
        class="transition-swing text-body-2 py-1 font-weight-regular text--disabled"
      > 
        <a :href="`#${link.id}`" class="text-decoration-none">
          <template v-if="isArabic">
            {{link.ar}}
          </template>
          <template v-else>
            {{link.en}}
          </template>
        </a>
      </router-link>
    </ul>
  </v-navigation-drawer>
</template>

<script src="./contentThumbnail.js"></script>
<style lang="scss" scoped src="./contentThumbnail.scss"></style>