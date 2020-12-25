<template>
  <section id="comments" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#comments"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        التعليقات
      </template>
      <template v-else>
        Comments
      </template>
    </h2>

    <p v-if="isArabic">
      عادة ما يكون توثيق الكود أمرًا مهمًا في سبيل تفسير المنطق
      وراءه عندما لا يكون الأمر واضحًا. لذلك، تُستعمل التعليقات كثيرًا 
      بهدف تلخيص عمل دالةٍ معينة، أو شرح المنطق وراء متغير معين أو 
      عملية حسابية معنية، إلخ.
    </p>
    <p v-else>
      Docutmenting your code is an important thing to do, in order to explain your logic when its is not obvious.
      This is why comments are often used to summarize the work of a function, the logic behind 
      some variables and computations, etc.
    </p>

    <section id="syntax" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
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
        صياغة التعليقات في <span class="abjad">أبجد</span> سهلة للغاية.
        فكل سطر يبدأ بعلامة <code>#</code> يُعتبر تعليقًا. <br />
        مثال:
      </p>
      <p v-else>
        The syntax of comments in <span class="abjad">ABAJD</span> is very simple.
        A line that begins with a hash <code>#</code> is considered a comment. <br />
        Example: 
      </p>

      <code-area :codes="['# هذا تعليق لا يؤثر في الكود', 'أكتب(&quot;مرحبا بالعالم&quot;)؛']" />
    </section>

    <section id="effect" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#effect"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          التأثير
        </template>
        <template v-else>
          Effect
        </template>
      </h2>

      <p v-if="isArabic">
        ليس للتعليقات أي أثر في الكود. هي فقط تُستعمل للتسهيل على القارئ فهم 
        الهدف من الكود.
      </p>
      <p v-else>
        Comments don't have any effect on the code itself, they are ignored when running.
        They are just used to help the readers understand the code.
      </p>
    </section>
    
    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Comments.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>