<template>
  <section id="syntax" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#syntax"
      class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الصياغة
      </template>
      <template v-else>
        Syntax
      </template>
    </h2>

    <p v-if="isArabic">
      تُشبه <span class="abjad">أبجد</span> في صياغتها اللغة JavaScript من ناحية
      استعمال القوسين <code>{}</code> لحصر مقط الكود. كما وتعتمد بشكل أساسي
      على استعمال الفاصلة المنقوطة <code>؛</code> لإنهاء الجملة.
    </p>
    <p v-else>
      <span class="abjad">ABJAD</span> is similar in syntax to JavaScript.
      It resembles the C-family languages by using the curly braces <code>{}</code> to enclose blocks,
      and a semicolon <code>؛</code> at the end of each statement.
    </p>

    <p v-if="isArabic">
      لا يجوز استخدام الشرطة <code>-</code> أو مساحة بيضاء في الأسماء. في حين، يُحبذ اعتماد التسطير السفلي <code>_</code>
      في الأسماء المؤلفة من عدة كلمات.<br />
      مثال: <code>مقطع_كتابي</code>
    </p>
    <p v-else>
      Names and literals shall not contain dashes or white spaces. Perhaps, an underscore <code>_</code> is recommended for 
      names that consist of more than one word. <br />
      e.g. <code>مقطع_كتابي</code>
    </p>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Syntax.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>