<template>
   <section id="for-loop" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#for-loop"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        حلقة التكرار
      </template>
      <template v-else>
        For Loop
      </template>
    </h2>

    <p v-if="isArabic">
      حلقة التكرير هي حالة خاصة من حلقة طالما. فهي تقوم بتكرير فعلٍ مُعينٍ
      بالنسبة لتغير قيمة عدادٍ معين.  <br />
      كُل ما يُمكن قيامه باستخدام حلقة التكرير، يُمكن قيامه أيضا بالاعتماد 
      على حلقة طالما.
    </p>
    <p v-else>
      For loops are a special kind of while loops. They execute some process
      repeatedly with respect to a change in some counter. <br />
      Everything that is done using for-loops can be done by while-loops as well.
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
        صياغة حلقة التكرير تكون كالتالي:
        <ul>
          <li>الكلمة المفتاح <code>كرر</code></li>
          <li>فتح مزدوج <code>(</code></li>
          <li>
            تعريف المتغير عداد
            <ul>
              <li>الكلمة المفتاح <code>متغير</code></li>
              <li>اسم العداد</li>
              <li>علامة تعيين القيمة <code>=</code></li>
              <li>قيمة العداد</li>
              <li>فاصلة منقوطة <code>؛</code></li>
            </ul>
          </li>
          <li>الحد الأدنى\الأعلى لقيمة العداد</li>
          <li>فاصلة منقوطة <code>؛</code></li>
          <li>التغير الذي يجب أن يطرأ على قيمة العداد بعد كل جولة</li>
          <li>إغلاق القوس <code>)</code></li>
          <li>فتح حاوية <code>{</code></li>
          <li>كود</li>
          <li>إغلاق الحاوية <code>{</code></li>
        </ul>
      </p>
      <p v-else>
        The syntax for for-loops goes as the following:
        <ul>
          <li>The keyword <code>كرر</code></li>
          <li>An open parenthesis <code>(</code></li>
          <li>
            Declaring a counter variable
            <ul>
              <li>The keyword <code>متغير</code></li>
              <li>The name of the counter</li>
              <li>The assignment symbol <code>=</code></li>
              <li>The value of the counter</li>
              <li>A semicolon <code>؛</code></li>
            </ul>
          </li>
          <li>The The upper\lower limit of the counter</li>
          <li>A semicolon <code>؛</code></li>
          <li>The value change that should happen on the counter after each iteration</li>
          <li>A closing parenthesis <code>)</code></li>
          <li>An opening curly brace <code>{</code></li>
          <li>Some code</li>
          <li>A closing curly brace <code>{</code></li>
        </ul>
      </p>
    </section>
    <section id="example" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#example"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          مثال
        </template>
        <template v-else>
          Example
        </template>
      </h2>

      <p v-if="isArabic">
        المثال التالي يقوم بكتابة الأرقام من 0 إلى 9.
        <ol>
          <h2 class="text-h6 text-sm-h6 mt-3">
            الشرح:
          </h2>
          <li>نقوم بتعريف العداد <code>س</code> كمتغير بقيمة 0</li>
          <li>نقوم بضبط حلقتنا كي تعمل طالما قيمة <code>س</code> أصغر 10</li>
          <li>نقوم بضبط حلقتنا كي تزيد قيمة <code>س</code> 1 بعد كل جولة</li>
          <li>داخل جسم الحلقة، نقوم بكتابة قيمة <code>س</code></li>
        </ol>
      </p>
      <p v-else>
        The following example prints the numbers from 0 to 9.
        <ol>
          <h2 class="text-h6 text-sm-h6 mt-3">
            Explanation:
          </h2>
          <li>We are declaring the counter <code>س</code> as a variable with value 0</li>
          <li>We configured our loop to execute while the value of <code>س</code> is less than 10</li>
          <li>We configured our loop to increment <code>س</code> by 1 after eac iteration</li>
          <li>In the body, we are printing the value of <code>س</code></li>
        </ol>
      </p>
      <code-area :codes="codes" />
    </section>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./ForLoop.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>