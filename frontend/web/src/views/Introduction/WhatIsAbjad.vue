<template>
	<section id="introduction"
		class="container page-body pt-4 pt-sm-6 pt-md-8 container--fluid">
		<h1 class="v-heading text-h3 text-sm-h3 mb-3">
				<a href="#introduction"
				class="text-decoration-none text-right text-md-left">#</a>
				<template v-if="isArabic">المقدمة</template>
				<template v-else>Introduction</template>
		</h1>
		<p v-if="isArabic">
			تعلّم أكثر عن <span class="abjad">أبجد</span>، ما هي، كيف تعمل، وكيف تستعملها لكتابة برنامجك. بالإضافة إلى 
			استخدام المحول البرمجي في الموقع، وغيره الكثير.
		</p>
		<p v-else>
			Learn more about what <span class="abjad">ABJAD</span> is, how to create an <span class="abjad">ABJAD</span> program,
			try the Online Editor, and more.
		</p>

		<section id="what-is-abjad" class="mt-10 mb-5">
			<h2 class="v-heading text-h4 text-sm-h4 mb-3">
				<a href="#what-is-abjad"
				class="text-decoration-none text-right text-md-left">#</a>
				<template v-if="isArabic">
					ما هي <span class="abjad">أبجد</span>؟
				</template>
				<template v-else>
					What is <span class="abjad">ABJAD</span>?
				</template>
			</h2>

			<section id="abjad-is-arabic-programming-language">
					<h3 class="v-heading text-h5 text-sm-h5 mb-3">
							<a href="#abjad-is-arabic-programming-language"
							class="text-decoration-none text-right text-md-left">#</a>
							<template v-if="isArabic">
								<span class="abjad">أبجد</span> لغةُ برمجةٍ عربية
							</template>
							<template v-else>
								<span class="abjad">ABJAD</span> is an Arabic Programming Language
							</template>
					</h3>
					<p v-if="isArabic">
						جميع لغات البرمجة الأساسية مبنية على اللغة الإنجليزية، وبالتالي، تتطلب
						مهارةً ومعرفة مُسبقة باللغة. للّسان غير الإنجليزي، تُصبح الأمور صعبة وقد تكون حائلًا أمام تعلم البرمجة.
						لهذا الأمر، تكون لغة برمجةٍ عربيةٍ الحل الأمثل للمبتدئين العرب كي يتعلّموا أُسس البرمجة.
					</p>
					<p v-else>
							All of the main programming languages around the world are English-based languages,
							and using them requires prior knowledge of English. For non-English speakers, this 
							can be a major barrier that stops them from pursuing a path in programming.
							That's why having an Arabic programming langauge can help accomplish the baby steps
							for newbies from the Arab region to learn how to code.
					</p>
					<p v-if="isArabic">
						ليست الفكرةُ حديثة الولادة، فهناك بعض لغات البرمجة العربية المُتاحة للجميع.
						لكن، ما يُميّز <span class="abjad">أبجد</span> أنها تتشابه، كتابةً، مع لغة البرمجة المعروفة (JavaScript)،
						ما يجعل الأمر أسهل على المُبرجين العرب الانتقالُ من لغة برمجة عربية إلى لغة إنجليزية ذات استعمالٍ وانتشارٍ واسعيين.
					</p>
					<p v-else>
							The idea of having a local programming language when it comes to the Arab region
							isn't new, hence there are few Arabic programming languages out there.
							However, what makes <span class="abjad">ABJAD</span> different, is that it is very similar, 
							in syntax, to JavaScript, which makes it efficient for programmers who want to switch from
							Arabic programming language to an English-based language.
					</p>
			</section>

			<section id="abjad-is-scripting-language">
					<h3 class="v-heading text-h5 text-sm-h5 mb-3">
							<a href="#abjad-is-scripting-language"
							class="text-decoration-none text-right text-md-left">#</a>
							<template v-if="isArabic">
								<span class="abjad">أبجد</span> لغةُ برمجةٍ نصية
							</template>
							<template v-else>
								<span class="abjad">ABJAD</span> is a Scripting Language
							</template>
					</h3>
					<p v-if="isArabic">
						تندرج <span class="abjad">أبجد</span> في خانة لغات البرمجة النصية (Scripting Languages)، كما هي الحال مع العديد
						من اللغات الواسعة الانتشار، مثل JavaScript و Python وغيرها. ويعني ذلك
						أن كتابة برنامج باستخدام <span class="abjad">أبجد</span> لا يتطب الكثير من الكتابة.
					</p>
					<p v-else>
						Similar to other main languages, such as Python and JavaScript, 
						<span class="abjad">ABJAD</span> is a scripting language, which means
						that it requires minimal amount of code to start a program.
					</p>
					<p v-if="isArabic">
						أقصر برنامجٍ يُمكن كتابتُه باستخدام <span class="abjad">أبجد</span>، يقوم بكتابة عبارة
						"مرحبا بالعالم!" على الشاشة:
						<code-area :codes=codes />
					</p>
					<p v-else>
						The shortest <span class="abjad">ABJAD</span> code, that prints "Hello World! (In Arabic)" is:
						<code-area :codes=codes />
					</p>
			</section>

			<section id="abjad-is-interpreted-language">
					<h3 class="v-heading text-h5 text-sm-h5 mb-3">
							<a href="#abjad-is-interpreted-language"
							class="text-decoration-none text-right text-md-left">#</a>
							<template v-if="isArabic">
								<span class="abjad">أبجد</span> لغةُ برمجةٍ مُفسرة
							</template>
							<template v-else>
								<span class="abjad">ABJAD</span> is an Interpreted Language
							</template>
					</h3>
					<p v-if="isArabic">
						على عكس العديد من لغات البرمجة المُترجمة (Compiled Languages)، مثل C و ++C،
						فإن <span class="abjad">أبجد</span> لغةُ برمجة مُفسرة (Interpreted Language) 
						كما هي الحال مع عديد اللغات الأخرى، مثل Python و JavaScript.
					</p>
					<p v-else>
							Opposite to compiled languages, such as C and C++, <span class="abjad">ABJAD</span> is 
							an interpreted language, which puts it in the same class as Python and JavaScript.
					</p>
					<p v-if="isArabic">
						يكمنُ الفرقُ بين الصنفين في أن اللغة المُفسّرة تحتاج لمُحولٍ (مُفسّر) برمجي
						الذي يقوم بقراءة الكود كما هو ومن ثم يشغّلهُ. <br />
						في حين أن اللغة المُترجَمة تحتاج لمُترجم يقوم بقراءة الكود، ومن ثم يُنشئ منه
						كودًا خاصًا تفهمه الآلة فقط، حيث أن هذا الكود هو الذي يتم تشغيله.
					</p>
					<p v-else>
							The main difference between interpreted and compiled languages is that interpreted
							languages require an interpreter that takes a code as a text and runs it immediately, 
							without any further steps. <br />
							On the other hand, compiled languages, require a compiler, that takes a code, analyzes it,
							and constructs a machine code that resembles its functionality. This machine code is what the computer needs to execute.
						
					</p>
			</section>
		</section>

		<footer-links :links="linksFooter" />
		<content-thumbnail :links="links" />
	</section>

</template>

<script src="./WhatIsAbjad.js"></script>
<style lang="scss" src="./Introduction.scss" scoped></style>