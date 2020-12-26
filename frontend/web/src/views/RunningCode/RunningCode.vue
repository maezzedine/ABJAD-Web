<template>
  <section id="running-code" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#running-code"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        تشغيل برنامج أبجد
      </template>
      <template v-else>
        Running ABJAD Code
      </template>
    </h2>

    <p v-if="isArabic">
      إن كنت تستخدم <span class="abjad">أبجد</span> على حاسوبك، فكل ما تحتاجه لتشغيل برنامج 
      هو أمر واحد.
    </p>
    <p v-else>
      If you are using <span class="abjad">ABJAD</span> on your desktop, then all what you need is one command to run it.
    </p>

    <code-area :codes="['abjad <your-file-name>.abjad -o <output-file>.txt']" :direction="'ltr'" />

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr class="row ma-0">
            <th class="col-3 py-2">
              <template v-if="isArabic">الكلمة</template>
              <template v-else>Word</template>
            </th>
            <th class="col-4 py-2">
              <template v-if="isArabic">معنى</template>
              <template v-else>Meaning</template>
            </th>
            <th class="col-2 py-2">
              <template v-if="isArabic">أساسي\اختياري</template>
              <template v-else>Required\Optional</template>
            </th>
            <th class="col-3 py-2">
              <template v-if="isArabic">قيمة بدائية</template>
              <template v-else>Default</template>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="row ma-0">
            <td class="col-3 py-2 py-2">abjad</td>
            <td class="col-4 py-2">
              <template v-if="isArabic">نداء مُفسر <span class="abjad">أبجد</span> الذي سبق وحمّلته على حاسوبك</template>
              <template v-else>Calling the <span class="abjad">ABJAD</span> interpreter you previously installed</template>
            </td>
            <td class="col-2 py-2">
              <template v-if="isArabic">أساسي</template>
              <template v-else>Required</template>
            </td>
            <td class="col-3 py-2">
              <template v-if="isArabic">-</template>
              <template v-else>-</template>
            </td>
          </tr>
          <tr class="row ma-0">
            <td class="col-3 py-2 py-2">&#60;your-file-name&#62;.abjad</td>
            <td class="col-4 py-2">
              <template v-if="isArabic">اسم الملف الذي يحتوي كود <span class="abjad">أبجد</span></template>
              <template v-else>The name of the <span class="abjad">ABJAD</span> code file</template>
            </td>
            <td class="col-2 py-2">
              <template v-if="isArabic">أساسي</template>
              <template v-else>Required</template>
            </td>
            <td class="col-3 py-2">
              <template v-if="isArabic">-</template>
              <template v-else>-</template>
            </td>
          </tr>
          <tr class="row ma-0">
            <td class="col-3 py-2 py-2">-o &#60;output-file&#62;.txt</td>
            <td class="col-4 py-2">
              <template v-if="isArabic">اسم الملف الذي تُريد أن يتم كتابة الأجوبة فيه</template>
              <template v-else>The file where you want the output to be written in</template>
            </td>
            <td class="col-2 py-2">
              <template v-if="isArabic">اختياري</template>
              <template v-else>Optional</template>
            </td>
            <td class="col-3 py-2">
              <template v-if="isArabic">اسم الملف الذي يحتوي هلى كود <span class="abjad">أبجد</span> مع ملحق <code>.txt</code></template>
              <template v-else>The name of the <span class="abjad">ABJAD</span> file, with <code>.txt</code> extension</template>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    
    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./RunningCode.js"></script>

<style lang="scss" scoped>
  @import '@/styles/_headings';
  td {
    height: unset !important;
    overflow-wrap: break-word;
  }

</style>