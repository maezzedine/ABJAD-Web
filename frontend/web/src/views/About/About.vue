<template>
  <section id="about" class="page-body mt-10 mb-5">
    <h2 class="v-heading text-h4 text-sm-h4 mb-3">
      <a href="#about"
        class="text-decoration-none text-right text-md-left">#</a>
      <template v-if="isArabic">
        استفسار
      </template>
      <template v-else>
        About
      </template>
    </h2>

    <p v-if="isArabic">
      لا تزل <span class="abjad">أبجد</span> في مراحلها الأولى، بالوقت الذي تخضع فيه للفحص والتطور المستمر.
      لذلك، في حال واجهتكم أي مشكلة خلال استعمالك <span class="abjad">أبجد</span>، أو إن كان لديكم
      أي اقتراح، قوموا بطرحه 
      <a target="_blank" href="https://github.com/mezdn/ABJAD/issues">هنا <v-icon x-small>mdi-subdirectory-arrow-left</v-icon></a>.
    </p>
    <p v-else>
      <span class="abjad">ABJAD</span> is still in its early versions and under
      testing and continuous development. In case you face any issue with coding in 
      <span class="abjad">ABJAD</span>, or if you have any suggestions, or complains, 
      feel free to submit them 
      <a target="_blank" href="https://github.com/mezdn/ABJAD/issues">here <v-icon x-small>mdi-subdirectory-arrow-right</v-icon></a>.
    </p>

    <section id="contributing" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#contributing"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          المساهمة
        </template>
        <template v-else>
          Contributing
        </template>
      </h2>

      <p v-if="isArabic">
        <span class="abjad">أبجد</span> برنامج مفتوح المصدر مكتوب بلغة #C.
        لذلك، إن كنت تودُّ\تودّين المُساهمة في بنائها، قوموا بزيارة صفحة المشروع في موقع
        <a target="_blank" href="https://github.com/mezdn/ABJAD">Github <v-icon x-small>mdi-subdirectory-arrow-left</v-icon></a>.
      </p>
      <p v-else>
        <span class="abjad">ABJAD</span> is an open-source project written with C#.
        If you would like to contribute in it, feel free to visit its 
        <a target="_blank" href="https://github.com/mezdn/ABJAD">Github page <v-icon x-small>mdi-subdirectory-arrow-right</v-icon></a>.
      </p>
    </section>

    <section id="copy-rights" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#copy-rights"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          حقوق النشر
        </template>
        <template v-else>
          Copyrights
        </template>
      </h2>

      <p v-if="isArabic">
        حقوق النشر محفوظة. <a target="_blank" href="https://github.com/mezdn/ABJAD/blob/master/LICENSE.md">للمزيد <v-icon x-small>mdi-subdirectory-arrow-left</v-icon></a>. <br />
      </p>
      <p v-else>
        All Copyrights are reserved. <a target="_blank" href="https://github.com/mezdn/ABJAD/blob/master/LICENSE.md">more info <v-icon x-small>mdi-subdirectory-arrow-right</v-icon></a>. <br />
      </p>
      Copyright &copy; 2020 Mohammed Ezzedine
    </section>

    <section id="share" class="page-body mt-10 mb-5">
      <h2 class="v-heading text-h5 text-sm-h5 mb-3">
        <a href="#share"
          class="text-decoration-none text-right text-md-left">#</a>
        <template v-if="isArabic">
          النشر
        </template>
        <template v-else>
          Share
        </template>
      </h2>

      <div v-if="isArabic">
        إذا أحببتَ <span class="abjad">أبجد</span> قُم بمشاركتها مع الآخرين على مواقع التواصل الإجتماعي، كي تصل إلى جمهور أكبر! <br />
        
        <div class="row ma-0">
          <a href="https://twitter.com/intent/tweet?button_hashtag=ABJAD_أبجد&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-related="mezdn" data-lang="ar" data-show-count="false">Tweet #ABJAD_أبجد</a>
          <div class="fb-share-button mx-2" :data-href="base_url" data-layout="button_count" data-size="small">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fabjad.dev%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
          </div>
          <div id="linked-in"></div>
        </div>
      </div>
      <div v-else>
        If you like <span class="abjad">ABJAD</span>, share it on social media to let more people know about it! <br />

        <div class="row ma-0">
          <div class="widget mt-auto">
            <a href="https://twitter.com/intent/tweet?button_hashtag=ABJAD_أبجد&ref_src=twsrc%5Etfw" class="twitter-hashtag-button" data-related="mezdn" data-show-count="false">Tweet #ABJAD_أبجد</a>
          </div>
          <div class="fb-share-button mx-2 mt-auto" :data-href="base_url" data-layout="button_count" data-size="small">
            <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fabjad.dev%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a>
          </div>
          <div class="mt-auto" id="linked-in"></div>
        </div>
      </div>
    </section>

    <content-thumbnail :links="links" />
    <footer-links :links="linksFooter" />
  </section>
</template>

<script src="./About.js"></script>

<style lang="scss" scoped>
  @import '@/styles/_headings';

  .widget {
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
</style>