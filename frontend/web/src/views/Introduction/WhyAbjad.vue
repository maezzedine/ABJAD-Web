<template>
	<div id="introduction" class="row">
		<section id="why-abjad" class="mt-10 mb-5">
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
			<hr />

			<v-footer class="pt-6">
				<div 
					:class="{ 'ml-auto' : isArabic, 'mr-auto' : !isArabic}"
				>
					<v-icon>
						{{isArabic? 'mdi-chevron-right': 'mdi-chevron-left'}}
					</v-icon>
					<router-link 
						class="text-decoration-none text-h6"
						:to="`/${$route.params.lang}/introduction/what-is-abjad`">
						<template v-if="isArabic">ما هي <span class="abjad">أبجد</span>؟</template>
						<template v-else>What is <span class="abjad">ABJAD</span>?</template>
					</router-link>
				</div>
			</v-footer>
		</section>

		<v-navigation-drawer
			id="default-toc"
			:right="$store.getters.context['dir'] !== 'rtl'"
			floating
			clipped
			app
			class="pa-3"
		>
			<template v-slot:prepend>
        <div class="mb-2 text-h6 font-weight-medium text--primary" path="contents">
					<template v-if="isArabic">المحتوى</template>
					<template v-else>Contents</template>
				</div>
      </template>

				<ul>
					<router-link 
						tag="li"
						to="#what-is-abjad" 
						class="transition-swing text-body-2 py-1 font-weight-regular text--disabled"
						:class="{'pl-3' : !isArabic, 'pr-3': isArabic}"
					>
						<a href="#why-abjad" class="text-decoration-none">
							<template v-if="isArabic">
								لماذا <span class="abjad">أبجد</span>؟
							</template>
							<template v-else>
								Why <span class="abjad">ABJAD</span>?
							</template>
						</a>
					</router-link>
				</ul>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
    computed: {
        isArabic() {
            return this.$store.getters['lang'] == 'ar';
        }
    }
}
</script>

<style lang="scss" src="./Introduction.scss" scoped></style>