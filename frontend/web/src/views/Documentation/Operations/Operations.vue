<template>
  <section id="operations" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#operations"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        العمليات
      </template>
      <template v-else>
        Operations
      </template>
    </h2>

    <p v-if="isArabic">
      هناك بعص العمليات الحسابية المسموح استخدامها مع كل نوع من أنواع البيانات.
      بعضُ هذه العمليات أُحادي، أي يتطلب مُعطى واحدًا، وبعضها الآخر ثنائيٌ
      أي يتطلب مُعطيين اثنين.
    </p>
    <p v-else>
      There are set of valid operations that you can use with each data type. Some 
      of which are unary operations, i.e. require one parameter, and others are 
      binary operations, i.e. require two parameters.
    </p>

    <section id="numbers" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#numbers"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          العمليات الحسابية على الأرقام
        </template>
        <template v-else>
          Numbers Operations
        </template>
      </h2>

      <section id="binary-numbers-oper" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#binary-numbers-oper"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            العمليات الثنائية
          </template>
          <template v-else>
            Binary Operations
          </template>
        </h2>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="row ma-0">
                <th class="col-2 py-2">
                  <template v-if="isArabic">الرمز</template>
                  <template v-else>Operation</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">اسم العملية</template>
                  <template v-else>Name</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">الوظيفة</template>
                  <template v-else>Function</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">نوع الحاصل</template>
                  <template v-else>Return Type</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">مثال</template>
                  <template v-else>Example</template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="row ma-0"
                v-for="oper in operations.numbers.binary"
                :key="oper.id"  
              >
                <td class="col-2 py-2 py-2">{{oper.sign}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].name}}</td>
                <td class="col-3 py-2">{{oper[$store.getters.lang].function}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].return_type}}</td>
                <td class="col-3 py-2" dir="rtl">
                  <code v-for="line in oper.example" :key="line">
                    {{line}} <br />
                  </code>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </section>
      <section id="unary-numbers-oper" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#unary-numbers-oper"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            العمليات الأحادية
          </template>
          <template v-else>
            Unary Operations
          </template>
        </h2>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="row ma-0">
                <th class="col-2 py-2">
                  <template v-if="isArabic">الرمز</template>
                  <template v-else>Operation</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">اسم العملية</template>
                  <template v-else>Name</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">الوظيفة</template>
                  <template v-else>Function</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">نوع الحاصل</template>
                  <template v-else>Return Type</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">مثال</template>
                  <template v-else>Example</template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="row ma-0"
                v-for="oper in operations.numbers.unary"
                :key="oper.id"  
              >
                <td class="col-2 py-2 py-2">{{oper.sign}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].name}}</td>
                <td class="col-3 py-2">{{oper[$store.getters.lang].function}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].return_type}}</td>
                <td class="col-3 py-2" dir="rtl">
                  <code v-for="line in oper.example" :key="line">
                    {{line}} <br />
                  </code>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </section>
    </section>

    <section id="boolean" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#boolean"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          العمليات الحسابية على الشروط
        </template>
        <template v-else>
          Boolean Operations
        </template>
      </h2>

      <section id="binary-boolean-oper" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#binary-boolean-oper"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            العمليات الثنائية
          </template>
          <template v-else>
            Binary Operations
          </template>
        </h2>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="row ma-0">
                <th class="col-2 py-2">
                  <template v-if="isArabic">الرمز</template>
                  <template v-else>Operation</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">اسم العملية</template>
                  <template v-else>Name</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">الوظيفة</template>
                  <template v-else>Function</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">نوع الحاصل</template>
                  <template v-else>Return Type</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">مثال</template>
                  <template v-else>Example</template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="row ma-0"
                v-for="oper in operations.boolean.binary"
                :key="oper.id"  
              >
                <td class="col-2 py-2 py-2">{{oper.sign}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].name}}</td>
                <td class="col-3 py-2">{{oper[$store.getters.lang].function}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].return_type}}</td>
                <td class="col-3 py-2" dir="rtl">
                  <code v-for="line in oper.example" :key="line">
                    {{line}} <br />
                  </code>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </section>
      <section id="unary-boolean-oper" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#unary-boolean-oper"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            العمليات الأحادية
          </template>
          <template v-else>
            Unary Operations
          </template>
        </h2>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="row ma-0">
                <th class="col-2 py-2">
                  <template v-if="isArabic">الرمز</template>
                  <template v-else>Operation</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">اسم العملية</template>
                  <template v-else>Name</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">الوظيفة</template>
                  <template v-else>Function</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">نوع الحاصل</template>
                  <template v-else>Return Type</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">مثال</template>
                  <template v-else>Example</template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="row ma-0"
                v-for="oper in operations.boolean.unary"
                :key="oper.id"  
              >
                <td class="col-2 py-2 py-2">{{oper.sign}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].name}}</td>
                <td class="col-3 py-2">{{oper[$store.getters.lang].function}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].return_type}}</td>
                <td class="col-3 py-2" dir="rtl">
                  <code v-for="line in oper.example" :key="line">
                    {{line}} <br />
                  </code>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </section>
    </section>

    <section id="strings" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#strings"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          العمليات الحسابية على المقاطع
        </template>
        <template v-else>
          Strings Operations
        </template>
      </h2>

      <section id="binary-strings-oper" class="page-body mt-10 mb-5">
        <h2 class="v-heading text-h6 text-sm-h6 mb-3">
          <a href="#binary-strings-oper"
            class="text-decoration-none text-right text-md-left">#</a>
          <template v-if="isArabic">
            العمليات الثنائية
          </template>
          <template v-else>
            Binary Operations
          </template>
        </h2>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr class="row ma-0">
                <th class="col-2 py-2">
                  <template v-if="isArabic">الرمز</template>
                  <template v-else>Operation</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">اسم العملية</template>
                  <template v-else>Name</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">الوظيفة</template>
                  <template v-else>Function</template>
                </th>
                <th class="col-2 py-2">
                  <template v-if="isArabic">نوع الحاصل</template>
                  <template v-else>Return Type</template>
                </th>
                <th class="col-3 py-2">
                  <template v-if="isArabic">مثال</template>
                  <template v-else>Example</template>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="row ma-0"
                v-for="oper in operations.strings.binary"
                :key="oper.id"  
              >
                <td class="col-2 py-2 py-2">{{oper.sign}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].name}}</td>
                <td class="col-3 py-2">{{oper[$store.getters.lang].function}}</td>
                <td class="col-2 py-2">{{oper[$store.getters.lang].return_type}}</td>
                <td class="col-3 py-2" dir="rtl">
                  <code v-for="line in oper.example" :key="line">
                    {{line}} <br />
                  </code>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </section>
    </section>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Operations.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>