<template>
  <section class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <template v-if="isArabic">
        مثلث نجوم
      </template>
      <template v-else>
        Triangle of Stars
      </template>
    </h2>

    <p v-if="isArabic">
      المثال التالي يرسم مثلثًا من النجوم.
    </p>
    <p v-else>
      The following example prints a triangle of stars.
    </p>
    
    <code-area :codes="codes" />

    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Triangle.js"></script>

<style lang="scss" scoped>
  @import '@/styles/_headings.scss';
</style>