<template>
  <section id="constants" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#constants"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الثوابت
      </template>
      <template v-else>
        Constants
      </template>
    </h2>

    <p v-if="isArabic">
      الثوابت شبيهة بالمتغيرات إلى حد كبير، يبقى الفرق الأساسي هو أن الثوابت لا يُمكن تغيير قيمتها.
    </p>
    <p v-else>
      Constants are very similar to variables, with one major difference is that constants cannot change their values.
    </p>

    <section id="declaring-constant" class="mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
          <a href="#declaring-constant"
          class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            تعريف الثابت
          </template>
          <template v-else>
            Declaring a Constant
          </template>
      </h2>

      <p v-if="isArabic">
        صياغة تعريف ثابت جديد تكون كالتالي:
        <ul>
          <li>الكلمة المفتاح <code>ثابت</code></li>
          <li>اسم الثابت</li>
          <li>علامة تعيين القيمة <code>=</code></li>
          <li>قيمة الثابت</li>
          <li>فاصلة منقوطة <code>؛</code> لانهاء الجملة</li>
        </ul>
        مثال على تعريف الثابت <code>باي</code> يحمل القيمة <code>3.14</code>:
      </p>
      <p v-else>
        The syntax for declaring a new constant is as the following:
        <ul>
          <li>The keyword <code>ثابت</code></li>
          <li>The name of the constant</li>
          <li>The assignment symbol <code>=</code></li>
          <li>The value of the constant</li>
          <li>A semicolon <code>؛</code> for ending the statement</li>
        </ul>
        An example of declaring a constant of name <code>باي</code> and value <code>3.14</code>:
      </p>
      <code-area :codes="['ثابت باي = 3.14؛']" />
    </section>
    <section id="using-constant" class="mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
          <a href="#using-constant"
          class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            استخدام الثابت
          </template>
          <template v-else>
            Using a Constant
          </template>
      </h2>

      <p v-if="isArabic">
        استخدام الثابت في الكود لا يختلف شيئًا عن استخدام متغير. <br />
        مثال على كتابة قيمة ثابت:
      </p>
      <p v-else>
        Using a constant doesn't differ than using a variable at all.<br />
        An example of printing the value of a constant:
      </p>
      <code-area :codes="['ثابت باي = 3.14؛', 'أكتب(باي)؛']" />
    </section>
  
    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Constants.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>