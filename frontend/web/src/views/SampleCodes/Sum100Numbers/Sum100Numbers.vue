<template>
  <section class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <template v-if="isArabic">
        جمع الأرقام
      </template>
      <template v-else>
        Sum of Numbers
      </template>
    </h2>

    <p v-if="isArabic">
      المثال التالي يكتب جمع الأعداد من 1 إلى 100 ضمنًا.
    </p>
    <p v-else>
      The following example prints the sum of the numbers from 1 to 100 inclusive.
    </p>
    
    <code-area :codes="codes" />

    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Sum100Numbers.js"></script>

<style lang="scss" scoped>
  @import '@/styles/_headings.scss';
</style>