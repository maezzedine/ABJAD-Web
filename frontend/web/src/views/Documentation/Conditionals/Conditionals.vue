<template>
  <section id="conditionals" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#conditionals"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الشَّرطيات
      </template>
      <template v-else>
        Conditionals
      </template>
    </h2>

    <p v-if="isArabic">
      الشَّرطيات وسيلةٌ لجعل البرنامج يأخذ واحدًا من عدة مسارات مختلفة، وذلك 
      بناءًا على شرطٍ مُعرفٍ مُسبقًا.  <br />
      لذلك، نستعمل في <span class="abjad">أبجد</span> الجمل الشرطية مستخدمين
      الكلمة المفتاح <code>إذا</code> و <code>وإلا</code>
    </p>
    <p v-else>
      Conditionals are ways to allow the program to take one of different
      actions depending on some predefined condition. <br />
      The conditionals in <span class="abjad">ABJAD</span> are represented by 
      if-statements and the if-else statements.
    </p>

    <section id="what-do-they-consist-of" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-5 text-sm-h5 mb-3">
        <a href="#what-do-they-consist-of"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          مِمّا تتألف؟
        </template>
        <template v-else>
          What Do They Consist Of?
        </template>
      </h2>

      <p v-if="isArabic">
        تتألّف الجمل الشرطية من ثلاثة عناصر:
      </p>
      <p v-else>
        Conditionals consist of three parts:
      </p>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr class="row mx-0">
              <th class="col-2 py-2">
                <template v-if="isArabic">العنصر</template>
                <template v-else>Part</template>
              </th>
              <th class="col-2 py-2">
                <template v-if="isArabic">أساسي\اختياري</template>
                <template v-else>Required/Optional</template>
              </th>
              <th class="col-2 py-2">
                <template v-if="isArabic">نوعه</template>
                <template v-else>Type</template>
              </th>
              <th class="col-6 py-2">
                <template v-if="isArabic">وظيفته</template>
                <template v-else>Functoin</template>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="row mx-0">
              <td class="col-2 py-2">
                <template v-if="isArabic">الشرط</template>
                <template v-else>Condition</template>
              </td>
              <td class="col-2 py-2">
                <template v-if="isArabic">أساسي</template>
                <template v-else>Required</template>
              </td>
              <td class="col-2 py-2">
                <template v-if="isArabic">منطقي</template>
                <template v-else>Boolean</template>
              </td>
              <td class="col-6 py-2">
                <template v-if="isArabic">يُحدد مسار سير تشغيل البرنامج</template>
                <template v-else>Decides the execution path of the program</template>
              </td>
            </tr>
            <tr class="row mx-0">
              <td class="col-2 py-2">
                <template v-if="isArabic">حُكم-إذا</template>
                <template v-else>If-clause</template>
              </td>
              <td class="col-2 py-2">
                <template v-if="isArabic">أساسي</template>
                <template v-else>Required</template>
              </td>
              <td class="col-2 py-2">
                <template v-if="isArabic">وحدة تجميعية</template>
                <template v-else>Block</template>
              </td>
              <td class="col-6 py-2">
                <template v-if="isArabic">تحتوي على الكود الذي يتم تشغيله في حال كان جواب الشرط <code>صحيح</code></template>
                <template v-else>Is executed when the condition is True</template>
              </td>
            </tr>
            <tr class="row mx-0">
              <td class="col-2 py-2">
                <template v-if="isArabic">حُكم-وإلا</template>
                <template v-else>Else-clause</template>
              </td>
              <td class="col-2 py-2">
                <template v-if="isArabic">اختياري</template>
                <template v-else>Optional</template>
              </td>
              <td class="col-2 py-2">
                <template v-if="isArabic">وحدة تجميعية</template>
                <template v-else>Block</template>
              </td>
              <td class="col-6 py-2">
                <template v-if="isArabic">تحتوي على الكود الذي يتم تشغيله في حال كان جواب الشرط <code>حطأ</code></template>
                <template v-else>Is executed when the condition is False</template>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </section>

    <section id="how-they-work" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-5 text-sm-h5 mb-3">
        <a href="#how-they-work"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          كيف تعمل؟
        </template>
        <template v-else>
          How They Work?
        </template>
      </h2>

      <p v-if="isArabic">
        <vue-mermaid :nodes="chartData.ar" type="graph RL" />
      </p>
      <p v-else>
        <vue-mermaid :nodes="chartData.en" type="graph LR" />
      </p>
    </section>

    <section id="syntax" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-5 text-sm-h5 mb-3">
        <a href="#syntax"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          الصياغة
        </template>
        <template v-else>
          Syntax
        </template>
      </h2>

      <section id="without-else" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-6 text-sm-h6 mb-3">
          <a href="#without-else"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            بدون حُكم-وإلا
          </template>
          <template v-else>
            Without Else-Clause
          </template>
        </h2>
        <code-area :codes="codes.without_else" />
      </section>
      <section id="with-else" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-6 text-sm-h6 mb-3">
          <a href="#with-else"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            مع حُكم-وإلا
          </template>
          <template v-else>
            With Else-Clause
          </template>
        </h2>
        <code-area :codes="codes.with_else" />
      </section>
      <section id="nesting" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-6 text-sm-h6 mb-3">
          <a href="#nesting"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            تداخل الجمل الشرطية
          </template>
          <template v-else>
            Nesting If-Else Statements
          </template>
        </h2>
        <code-area :codes="codes.nesting" />
      </section>
    </section>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Conditionals.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>