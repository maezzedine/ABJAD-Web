<template>
  <section id="loops" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#loops"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الحلقات
      </template>
      <template v-else>
        Loops
      </template>
    </h2>

    <p v-if="isArabic">
      الحلقات هي مفهوم برمجي لتكرار فعلٍ معين بطريقة معينة.
      تخيل مثلا لو أنك تريد كتابة جميع الأرقام من 1 إلى 100.
      فِعلُ هذا يدويًّا ليس بطريقة ذكية.
    </p>
    <p v-else>
      Loops are a programming concept for repeating a process under some 
      mechanism. Imagine you want to write the numbers from 1 to 100. Doing 
      it manually would be insane!
    </p>

    <section id="while-loop" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#while-loop"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          حلقة طالما
        </template>
        <template v-else>
          While Loop
        </template>
      </h2>

      <p v-if="isArabic">
        حلقة طالما هي واحدةٌ من هذه الحلقات البرمجية. هي قائمة على
        تكرار فعلٍ مُعينٍ حتى يُصبح جواب شرط معيّنٍ خطأ. أو بصياغة أخرى،
        تكرّره "طالما" جواب الشرط صحيح.
      </p>
      <p v-else>
        While loop is one of these programmatic loops. It goes by repeating
        a process until some condition becomes false. In other wrods, it 
        repeats the process "while" the condition is true.
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
          صياغة حلقة طالما تكون كالتالي:
          <ul>
            <li>الكلمة المفتاح <code>طالما</code></li>
            <li>فتح قوس <code>(</code></li>
            <li>شرط</li>
            <li>إغلاق القوس <code>)</code></li>
            <li>فتح حاصرة <code>{</code></li>
            <li>الكود المُراد تكرير تشغيله</li>
            <li>إغلاق الحاصرة <code>}</code></li>
          </ul>
        </p>
        <p v-else>
          The syntax of a while loop goes as the following:
          <ul>
            <li>The keyword <code>طالما</code></li>
            <li>An opening parentheses <code>(</code></li>
            <li>A condition</li>
            <li>A closing parentheses <code>)</code></li>
            <li>An opening curly brace <code>{</code></li>
            <li>Some code to be executed repeatedly</li>
            <li>A closing curly brace <code>}</code></li>
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
          المثال التالي يكتب الأرقام من 1 إلى 100 بـ 5 أسطر!
        </p>
        <p v-else>
          The following example prints the numbers from 1 to 100 in 5 lines!
        </p>
        <code-area :codes="codes" />

        <v-container>
          <v-alert
            text
            border="left"
            type="warning"
            elevation="2"
            icon="mdi-alert-outline"
            color="deep-orange"
          >
            <template v-if="isArabic">
              لو نسينا السطر الرابع حيث نزيد 1 على العداد، لما أنهت الحلقة عملها،
              ولاستمرت في الكتابة إلى الأبد!
            </template>
            <template v-else>
              If we forgot to add the line number 4, our loop wouldn't have finished its 
              work, and it would've gone forever to terminate!
            </template>
            
          </v-alert>
        </v-container>
      </section>

    </section>
 
    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./WhileLoop.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>