<template>
  <section class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <template v-if="isArabic">
        الأعداد المفردة والمزدوجة
      </template>
      <template v-else>
        Even/Odd Numbers
      </template>
    </h2>

    <p v-if="isArabic">
      الأعداد المزدوجة هي الأعداد التي يمكن قسمتها على 2، أما المفردة فهي العكس.. <br />
      المثال التالي يكتب لكل عدد من 1 إلى 100 إن كان مفردًا أو مزدوجًا.
    </p>
    <p v-else>
      Even numbers are the numbers that can be devided by 2, while odd numbers are the opposite. <br />
      The following example prints for each number between 1 and 100 if it is even or odd.
    </p>
    
    <code-area :codes="codes" />

    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./EvenNumbers.js"></script>

<style lang="scss" scoped>
  @import '@/styles/_headings.scss';
</style>