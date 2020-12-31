<template>
  <section class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <template v-if="isArabic">
        جدول الضرب
      </template>
      <template v-else>
        Multiplication Table
      </template>
    </h2>

    <p v-if="isArabic">
      المثال التالي يكتب جدول الضرب للأرقام 1 إلى 10.
    </p>
    <p v-else>
      The following example prints the muplication table for the numbers 1 to 10.
    </p>
    
    <code-area :codes="codes" />

    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./MultiplicationTable.js"></script>

<style lang="scss" scoped>
  @import '@/styles/_headings.scss';
</style>