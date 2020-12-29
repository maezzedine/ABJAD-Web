<template>
  <section class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <template v-if="isArabic">
        الأرقام الأولية
      </template>
      <template v-else>
        Prime Numbers
      </template>
    </h2>

    <p v-if="isArabic">
      الأعداد الأولية هي الأعداد التي لا يمكن قسمتها على أي عدد غير العدد 1. <br />
      المثال التالي يكتب جميع الأعداد الأولية من 1 إلى 100.
    </p>
    <p v-else>
      Prime numbers are the numbers that are not multiple of any number other than 1. <br />
      The following example prints the prime numbers between 1 and 100.
    </p>
    
    <code-area :codes="codes" />

    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./PrimeNumbers.js"></script>

<style lang="scss" scoped>
  @import '@/styles/_headings.scss';
</style>