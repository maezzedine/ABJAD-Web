<template>
  <section id="types" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#types"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        أنواع البيانات
      </template>
      <template v-else>
        Data Types
      </template>
    </h2>

    <p v-if="isArabic">
      للمتغيرات والثوابت في <span class="abjad">أبجد</span> واحد من أربعة أنواع:
      <ul>
        <li><code>مقطع</code> أي الكتابة النصية العادية</li>
        <li><code>رقم</code> ويشمل جميع الأعداد الصحيحة وذات الكسور</li>
        <li><code>منطقي</code> أي شرط.</li>
        <li>نوع مُحددٌ من قبل المُستخدم.</li>
      </ul>
    </p>
    <p v-else>
      Variables and constants in <span class="abjad">ABJAD</span> can have one of four
      main types.
      <ul>
        <li><code>مقطع</code>: text or string</li>
        <li><code>رقم</code>: number, including all the natural and decimal numbers</li>
        <li><code>منطقي</code>: boolean</li>
        <li>User defined type</li>
      </ul>
    </p>

    <section id="string" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#string"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          مقطع
        </template>
        <template v-else>
          String
        </template>
      </h2>

      <p v-if="isArabic">
        كل قيمة من نوع مقطع يجب أن تُحاط بمزدوجين.
        مثال: <code>"مرحبا بالعالم!"</code>
      </p>
      <p v-else>
        A string value must be enclosed by two double quotations.
        e.g. <code>"!مرحبا بالعالم"</code>
      </p>
    </section>

    <section id="number" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#number"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          رقم
        </template>
        <template v-else>
          Number
        </template>
      </h2>

      <p v-if="isArabic">
        النوع <code>رقم</code> يشمل جميع الأرقام الصحيحة وذات الكسور بين ±5.0 × 10<span class="power">-324</span> و ±1.7 × 10<span class="power">308</span>
        مثال: <code>12.3</code>
      </p>
      <p v-else>
        A number value includes natural and decimal values between ±5.0 × 10<span class="power">−324</span> and ±1.7 × 10<span class="power">308</span>
        e.g. <code>12.3</code>
      </p>
    </section>

    <section id="boolean" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#boolean"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          منطقي
        </template>
        <template v-else>
          Boolean
        </template>
      </h2>

      <p v-if="isArabic">
       للنوع <code>منطقي</code> قيمة واحدة من اثنتين، إما <code>صحيح</code> أو <code>خطأ</code>
      </p>
      <p v-else>
        A boolean value can have one of two values <code>صحيح</code> (true) or <code>خطأ</code> (false)
      </p>
    </section>

    <section id="user-defined-types" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#user-defined-types"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          نوع مُحددٌ من قبل المُستخدم
        </template>
        <template v-else>
          User Defined Types
        </template>
      </h2>

      <p v-if="isArabic">
        سنناقشه لاحقا في
        <router-link
          :to="`/${$route.params.lang}/documentation/class`"
        >
          الأصناف
        </router-link>.
      </p>
      <p v-else>
        Discussed later in
        <router-link
          :to="`/${$route.params.lang}/documentation/class`"
        >
          classes
        </router-link>.
      </p>
    </section>

    <section id="get-type" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#get-type"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          استخراج نوع القيمة
        </template>
        <template v-else>
          Get The Type of a Value
        </template>
      </h2>

      <p v-if="isArabic">
        يمكننا استخراج نوع القيمة عبر استخدام الكلمة المفتاح <code>نوع</code>
        يليها قوسين داخلهما القيمة نفسها. <br />
        مثال: الكود التالي يكتب الجواب: <code>رقم</code>
      </p>
      <p v-else>
        You can get the type of the value using the <code>نوع</code> keyword followed by
        parentheses enclosing the value itself. <br />
        e.g. This code will print <code>رقم</code>
      </p>
      <code-area :codes="['ثابت باي = 3.14؛', 'أكتب(نوع(باي))؛']" />
    </section>

    <section id="converting" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#converting"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          التحويل
        </template>
        <template v-else>
          Conversions
        </template>
      </h2>

      <p v-if="isArabic">
        يمكن التحويل بين الأنواع إن توافرت بعض الشروط.
      </p>
      <p v-else>
        Conversion is allowed between some of the types under some conditions.
      </p>

      <section id="number-to-string" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#number-to-string"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            من رقم إلى مقطع
          </template>
          <template v-else>
            Number to String
          </template>
        </h2>

        <p v-if="isArabic">
          يمكن التحويل من رقم إلى مقطع عبر نجاء الدالة <code>مقطع</code>
          مُطينها رقمًا. <br />
          مثال: قيمة <code>س</code> تساوي "10".
        </p>
        <p v-else>
          Conversion is possible from Number data type to String data type
          by calling on the function <code>مقطع</code> and passing it a number. <br />
          e.g. <code>س</code> will have the value of "10".
        </p>
        <code-area :codes="['متغير س = مقطع(10)؛']" />
      </section>

      <section id="string-to-number" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#string-to-number"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            من مقطع إلى رقم
          </template>
          <template v-else>
            String to Number
          </template>
        </h2>

        <p v-if="isArabic">
          لتحويل قيمة من نوع مقطع إلى نوع رقم يجب نداء الدالة
          <code>رقم</code> مُعطينها مقطعًا <br />
          مثال: قيمة <code>ش</code> تساوي 5.
        </p>
        <p v-else>
          Converting a String data type to Number data type happens
          by calling on the function <code>رقم</code> and passing it a string. <br />
          e.g. <code>ش</code> will have the value of 5. 
        </p>
        <code-area :codes="['متغير س = رقم(&quot;5&quot;)؛']" />
      </section>

      <section id="bool-to-string" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#bool-to-string"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            من منطقي إلى مقطع
          </template>
          <template v-else>
            Boolean to String
          </template>
        </h2>

        <p v-if="isArabic">
          لتحويل قيمة من نوع منطقي إلى نوع مقطع يجب نداء الدالة
          <code>مقطع</code> مُعطينها شرطًا منطقيًا <br />
          مثال: قيمة <code>م</code> تساوي "صحيح".
        </p>
        <p v-else>
          Converting a Boolean to Number happens by calling on the function 
          <code>مقطع</code> and passing it a boolean. <br />
          e.g. <code>م</code> will have the value of "صحيح". 
        </p>
        <code-area :codes="['متغير م = مقطع(صحيح)؛']" />
      </section>

      <section id="string-to-bool" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#string-to-bool"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            من مقطع إلى منطقي
          </template>
          <template v-else>
            String to Boolean
          </template>
        </h2>

        <p v-if="isArabic">
          لتحويل مقطع إلى النوع منطقي يجب نداء الدالة
          <code>منطق</code> مُعطينها مقطعًا<br />
          مثال: قيمة <code>ق</code> تساوي خطأ.
        </p>
        <p v-else>
          Converting a String to Boolean happens by calling on the function 
          <code>منطق</code> and passing it a string. <br />
          e.g. <code>ق</code> will have the value of خطأ. 
        </p>
        <code-area :codes="['متغير ق = منطق(&quot;خطأ&quot;)؛']" />
      </section>
    </section>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Types.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>