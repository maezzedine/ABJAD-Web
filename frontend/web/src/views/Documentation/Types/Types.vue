<template>
  <section id="types" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#types"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الأنواع
      </template>
      <template v-else>
        Types
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
        سنناقشه لاحقا في الملفات.
      </p>
      <p v-else>
        Discussed later in classes.
        <!-- TODO: Add link -->
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

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Types.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>