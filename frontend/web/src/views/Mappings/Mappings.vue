<template>
  <section class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <template v-if="isArabic">
        دليل كلمات المفتاح
      </template>
      <template v-else>
        Keywords Reference
      </template>
    </h2>

    <v-simple-table dir="ltr">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              English
            </th>
            <th class="text-right">
              العربية
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(keyword, index) in keywords"
            :key="index"
          >
            <td class="text-left">{{ keyword.en }}</td>
            <td class="text-right" dir="rtl">{{ keyword.ar }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Mappings.js"></script>

<style lang="scss" scoped>
  @import '@/styles/_headings';

</style>