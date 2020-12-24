<template>
  <section id="printing" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#printing"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الكتابة
      </template>
      <template v-else>
        Printing
      </template>
    </h2>

    <p v-if="isArabic">
      تصوير نتائج الحسابات أمر أساسي في عالم البرمجة، وفي <span class="abjad">أبجد</span>،
      يكون ذلك عبر نداء الدالة <code>أكتب</code> للكتابة في الملف. <br />
      سنناقش أصل الدالات وكيفيكة ندائها، لكن في حالة الكتابة، فالصياغة تكون كالتالي:
       <ul>
        <li>الكلمة المفتاح <code>أكتب</code></li>
        <li>فتح مزدوج <code>(</code></li>
        <li>القيمة أو المتغير\الثابت المُراد كتابته</li>
        <li>إغلاق المزدوج <code>)</code></li>
        <li>فاصلة منقوطة <code>؛</code></li>
      </ul>

      أمثلة:
    </p>
    <p v-else>
      Visualizing the computations is a part of programming, and in <span class="abjad">ABJAD</span>,
      it's done through calling on the function <code>أكتب</code> to print the output in the output file. <br />
      The concept of calling a function will be discussed later on, but in case of printing values, 
      the synatx goes as the following:
      <ul>
        <li>The keyword <code>أكتب</code></li>
        <li>An opening parentheses <code>(</code></li>
        <li>The value or the variable/constant you want to print</li>
        <li>A closing parantheses <code>)</code></li>
        <li>A semicolon <code>؛</code></li>
      </ul>

      examples:
    </p>
    <code-area :codes="['أكتب(صحيح)؛', 'أكتب(3)؛', 'متغير س = &quot;مرحبا&quot;؛', 'أكتب(س)؛']" />

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Print.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>