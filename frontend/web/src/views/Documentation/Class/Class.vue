<template>
   <section id="class" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#class"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        الملف
      </template>
      <template v-else>
        Class
      </template>
    </h2>

    <p v-if="isArabic">
    </p>
    <p v-else>
    </p>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./Class.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>