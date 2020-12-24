<template>
	<section id="why-abjad" class="mt-10 mb-5 page-body">
		<h2 class="v-heading text-h4 text-sm-h4 mb-3">
			<a href="#why-abjad"
			class="text-decoration-none text-right text-md-left">#</a>
			<template v-if="isArabic">
				لماذا <span class="abjad">أبجد</span>؟
			</template>
			<template v-else>
				Why <span class="abjad">ABJAD</span>?
			</template>
		</h2>

		<p v-if="isArabic">
			إن كلمة <span class="abjad">أبجد</span> مشتقةٌ من الكلمة العربية ذات الأصل الفينيقي (الأبجدية).
			فالفينيقيّون كانوا السبّاقين في وضع الأحرف واستخدامه للكتابة. <br />
			لذلك ارتأينا أن نمنح لغتنا الجديدة شرف الاسم.
		</p>
		<p v-else>
			The name <span class="abjad">ABJAD</span> is taken from an Arabic word (أبجدية) of Phoenician origin
			and it means the alphabets. <br />
			The Phoenicians were the first people to discover the letters and use them to write, this is why, we gave our new 
			programming language the honor of the name.
		</p>
		
		<footer-links :links="linksFooter" />
		<content-thumbnail :links="links" />
	</section>
</template>

<script src="./WhyAbjad.js"></script>

<style lang="scss" src="./Introduction.scss" scoped></style>