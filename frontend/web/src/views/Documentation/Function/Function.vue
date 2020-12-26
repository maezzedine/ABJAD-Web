<template>
  <section id="function" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#function"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الدالّة
      </template>
      <template v-else>
        Function
      </template>
    </h2>

    <p v-if="isArabic">
      مبدأ الدالّة في عالم البرمجة شبيه إلى حدٍ ما بنظيره في عالم الرياضيات.
      إنها تحويلة تأخد مُعطًى وتُعيد الحاصل. <br />
      تُساعد الدالّات المُبرمجين في إعطاء تسميات للأكواد، الأمر الذي يُسهل عليهم فهمَها 
      وتحليلَها. تُساعد أيضا في إعادة استعمال الكود أكثر من مرة واحدة.
    </p>
    <p v-else>
      The concept of functions in programming is similar to that in Mathematics.
      It's map that takes some parameters and return some result. <br />
      Functions help programmers give names for their code, making it easier to 
      understand and analyze. They also help in abstracting things and reusing the code.
    </p>

    <section id="syntax" class="page-body mt-10">
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

      <section id="defining-function" class="page-body mt-5 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#defining-function"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            تعريف الدالة
          </template>
          <template v-else>
            Defining a Function
          </template>
        </h2>

        <p v-if="isArabic">
          صياغة تعريف الدالة تكون كالتالي:
          <ul>
            <li>الكلمة المفتاح <code>دالة</code></li>
            <li>اسم الدالة</li>
            <li>فتح قوس <code>(</code></li>
            <li>اسماء الُمعطيات، منفصلة بفاصلة</li>
            <li>إغلاق القوس <code>)</code></li>
            <li>فتح حاوية <code>{</code></li>
            <li>كود</li>
            <li>إغلاق الحاوية <code>}</code></li>
          </ul>
        </p>
        <p v-else>
          The syntax of defining a function goes as the following:
          <ul>
            <li>The keyword <code>دالة</code></li>
            <li>The name of the function</li>
            <li>An opening bracket <code>(</code></li>
            <li>Arbitrary number of variable names, seperated by commas</li>
            <li>A closing bracket <code>)</code></li>
            <li>An opening brace <code>{</code></li>
            <li>Some code</li>
            <li>A closing brace <code>}</code></li>
          </ul>
        </p>
      </section>
      <section id="calling-function" class="page-body mt-5 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#calling-function"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            نداء الدالة
          </template>
          <template v-else>
            Calling on a Function
          </template>
        </h2>

        <p v-if="isArabic">
          فقط عندما نقود بنداء دالة، يتم تشغيل الكود داخلها. <br />
          الصياغة تكون كالتالي:
          <ul>
            <li>اسم الدالة</li>
            <li>فتح قوس <code>(</code></li>
            <li>
              القيم التي نُريد أن نُعطيها 
              (يجب أن يتساوى عددُها مع عدد المُعطى الذي تأخذه الدالة،
              والذي يُعرّف عند تعريف الدالة).
            </li>
            <li>إغلاق القوس <code>)</code></li>
            <li>فاصلة منقوطة <code>؛</code></li>
          </ul>
        </p>
        <p v-else>
          Once we call on a function, it gets executed. <br />
          And the syntax for that goes as the following:
          <ul>
            <li>The name of the function</li>
            <li>An opening bracket <code>(</code></li>
            <li>
              The values we want to pass as parameters 
              (Their number should be equal to the number of parameters the function
              takes, which is defined in the function definition).
            </li>
            <li>A closing bracket <code>)</code></li>
            <li>A semicolon <code>؛</code></li>
          </ul>
        </p>
      </section>
      
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
        المثال التالي يُعرف دالة تأخد متغييرين كمُعطى، تجمعهما، ثم تكتب الحاصل.
      </p>
      <p v-else>
        The following example definesa function that takes two variables as
        parameters, and then prints their sum.
      </p>
      <code-area :codes="codes.ex1" />

      <p v-if="isArabic">
        الآن يمكننا مثلا جمع كل رقمين متتابعين من 0 إلى 9 عبر النداء على هذه الدالة
      </p>
      <p v-else>
        Now we cant print the sum of every two consecutive numbers from 0 to 9
        using this function.
      </p>
      <code-area :codes="codes.ex2" />

    </section>

    <section id="returning" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#returning"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          الإرجاع
        </template>
        <template v-else>
          Returning
        </template>
      </h2>

      <p v-if="isArabic">
        يُمكن للدالة أن تُعيد قيمة ما، وذلك عبر استخدام الكلمة المفتاح <code>أرجع</code>.
        فقط عندها، يمكن تعيين القيمة التي تُعيدها دالة معينة لمتغير معين. <br />
        مثال:
      </p>
      <p v-else>
        Functions can also return values by using the <code>أرجع</code> keyword.
        Just then, you can assign the value the function returns to a variable. <br />
        Example:
      </p>
      <code-area :codes="codes.ex3" />
    </section>

     <section id="recursion" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#recursion"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          نداء ذاتي
        </template>
        <template v-else>
          Recursion
        </template>
      </h2>

      <p v-if="isArabic">
        النداء الذاتي هو مبدأ مهم جدا في عالم البرمجة. يقوم على فكرة دالة تنادي نفسها
        في الجسم.<br /> للنداء الذاتي كي يعمل، يجب على الدالة أن تحتوي خطوة بدائية،
        بحيث تكون قادرة على إعطاء جواب بدون نداء نفسها، وإلا ستستمر بنداء نفسها إلى الأبد. <br />
        المثال التالي يقو بحساب الأس لرقم معين عبر استخدام مبدأ النداء الذاتي للدالة:
      </p>
      <p v-else>
        Recursion is a very powerful methodology in programming. It goes by 
        a function calling itself in its body. <br />
        For the recursion to work, the function should have a base step, where
        it will be able, at some point, to give a direct answer, instead of calling itself,
        otherwise, it will go forever to return a result. <br />
        The following example calculates the exponential of a number using recursion:
      </p>
      <code-area :codes="codes.ex4" />

      <ul>
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <template v-if="isArabic">
            الشرح:
          </template>
          <template v-else>
            Explanation:
          </template>
        </h2>
        <li>
          <template v-if="isArabic">
            الخطوة البدائية هنا تتمثل في الأسطر من 2 إلى 4. بحيث أن الأس إن كان 0،
            فالجواب مباشرة سيكون 1، ولا داعي للدالة أن تنادي نفسها.
          </template>
          <template v-else>
            The base step here is the lines 2 to 4. If the variable <code>أس</code>
            equals 0 we should return 1, and there is no need to call on the function recursively.
          </template>
        </li>
        <li>
          <template v-if="isArabic">
            القسم الرئيسي هو في السطر رقم 5، حيث أن الحاصل هو قيمة المتغير <code>عدد</code>
            مضروبة بالحاصل من النداء على الدالة نفسها، مع أس أصغر بواحد.
          </template>
          <template v-else>
            The magic happens at line 5: the value is the variable <code>عدد</code>
            multplied to the result from calling on the function with a degree less by one.
          </template>
        </li>
      </ul>
    </section>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Function.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>