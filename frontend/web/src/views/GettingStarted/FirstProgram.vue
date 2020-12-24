<template>
	<section id="first-program" class="mt-10 mb-5 page-body">
		<h2 class="v-heading text-h4 text-sm-h4 mb-3">
			<a href="#first-program"
			class="text-decoration-none text-right text-md-left">#</a>
			<template v-if="isArabic">
				كتابة أول برنامج <span class="abjad">أبجد</span>
			</template>
			<template v-else>
				Writing Your First <span class="abjad">ABJAD</span> Program
			</template>
		</h2>

		<section id="text-editor" class="mt-10 mb-5">
			<h2 class="v-heading text-h5 text-sm-h5 mb-3">
				<a href="#text-editor"
				class="text-decoration-none text-right text-md-left">#</a>
				<template v-if="isArabic">
						محرر نصوص
				</template>
				<template v-else>
						RTL Text Editor
				</template>
			</h2>

			<p v-if="isArabic">
				في البداية، ستحتاج لمحرر نصوص يدعم خاصية الكتابة من اليمين إلى اليسار. <br />
				يُمكنك استخدام ++Notepad، الذي بدورنا سنعتمد عليه في الشرح التالي. <br />
				<v-container>
					<v-alert
						text
						border="left"
						type="warning"
						elevation="2"
						icon="mdi-alert-outline"
						color="deep-orange"
					>
						ملاحظة: برنامج Microsoft Office Word لا يقوم بالمهمة المطلوبة هنا. 
					</v-alert>
				</v-container>
			</p>
			<p v-else>
				First things first, you are going to need a text editor that supports right-to-left direction. <br />
				Notepad++ is a good option, and we are going to be using it in this tutorial.
			</p>

			<section id="notepad-installation" class="mt-10 mb-5">
				<h2 class="v-heading text-h6 text-sm-h6 mb-3">
					<a href="#notepad-installation"
					class="text-decoration-none text-right text-md-left">#</a>
					<template v-if="isArabic">
							التحميل
					</template>
					<template v-else>
							Installation
					</template>
				</h2>

				<p v-if="isArabic">
					قم بتحميل النسخة الأخيرة من البرنامج ++Notepad عبر هذا
					<a target="_blank" href="https://notepad-plus-plus.org/downloads/">الرابط <v-icon x-small>mdi-subdirectory-arrow-left</v-icon></a>.
				</p>
				<p v-else>
					Install the latest version of Notepad++ from the following 
					<a target="_blank" href="https://notepad-plus-plus.org/downloads/">link <v-icon x-small>mdi-subdirectory-arrow-right</v-icon></a>.
				</p>
			</section>

			<section id="notepad-configuration" class="mt-10 mb-5">
				<h2 class="v-heading text-h6 text-sm-h6 mb-3">
					<a href="#notepad-configuration"
					class="text-decoration-none text-right text-md-left">#</a>
					<template v-if="isArabic">
						ضبط اتجاه الكتابة في المحرر
					</template>
					<template v-else>
						Configuring The Text Direction
					</template>
				</h2>

				<p v-if="isArabic">
					بعد أن يتم تنزيل البرنامج، قم بفتحه. في حال كان اتجاه الكتابة من اليسار إلى اليمين قم بالضغط على مفتاح "عرض" (View)
					من الشريط أعلى الصفحة، واختر الخيار "اتجاه النص من اليمين الى اليسار" (Text Direction RTL)، كما ترى في الصورة أدناه.
				</p>
				<p v-else>
					After you install Notepad++, open it. If the text direction was from left to right, click on the View tab, then 
					choose the option "Text Direction RTL", as you can see in the below picture.
				</p>

				<v-card class="mt-2">
					<v-img contain max-height="500" max-width="700" src="/first-app-step-1.png"></v-img>
				</v-card>
			</section>
		</section>

		<section id="hello-world-app" class="mt-10 mb-5">
			<h2 class="v-heading text-h5 text-sm-h5 mb-3">
				<a href="#hello-world-app"
				class="text-decoration-none text-right text-md-left">#</a>
				<template v-if="isArabic">
					برنامج يكتب "مرحبا بالعالم!"
				</template>
				<template v-else>
					Hello World Program
				</template>
			</h2>

			<p v-if="isArabic">
				الآن، وبعدما قمنا بضبط المحرر، أصبحنا جاهزين لكتابة أول برنامج باستخدام <span class="abjad">أبجد</span>. <br />
				انسخ الكود التلي واطبعه في المحرر عندك.
			</p>
			<p v-else>
				Now that we configured the text editor, we are ready to write our first <span class="abjad">ABJAD</span> program. <br />
				Copy the following code and paste it in your editor. 
			</p>
			<code-area :codes=codes />
			<p v-if="isArabic">
				قم بتحفيظ الملف تحت اسم <code>HelloWorld.abjad</code>.
			</p>
			<p v-else>
				Save the file and name it <code>HelloWorld.abjad</code>.
			</p>

			<section id="running-app" class="mt-10 mb-5">
				<h2 class="v-heading text-h6 text-sm-h6 mb-3">
					<a href="#running-app"
					class="text-decoration-none text-right text-md-left">#</a>
					<template v-if="isArabic">
						تشغيل البرنامج
					</template>
					<template v-else>
						Running The Program
					</template>
				</h2>

				<p v-if="isArabic">
					إفتح الملف الذي يحتوي على ملف أبجد الذي قمنا بتحفيظه للتو. إضغط على الرابط أعلى الصفحة، واكتب "cmd"،
					كما ترى في الصورة أدناه
				</p>
				<p v-else>
					Open the folder containing your abjad program file. Click on the path input and type the word "cmd",
					as you can see in the below picture. 
				</p>
				<v-card class="mt-2 mb-2">
					<v-img contain max-height="500" max-width="700" src="/first-app-step-2.png"></v-img>
				</v-card>

				<p v-if="isArabic">
					سيفتح لديك موجّه الأوامر في الحاسوب. أكتب داخله العبارة التالية
				</p>
				<p v-else>
					A command line interface should open. Type in it the below command
				</p>
				<code-area :codes="['abjad HelloWorld.abjad']" direction="ltr" />
				<v-card class="mt-2 mb-2">
					<v-img contain class="mx-auto" max-height="500" max-width="700" src="/first-app-step-3.png"></v-img>
				</v-card>

				<p v-if="isArabic">
					بعد تشغيل الأمر، سيظهر لديك ملف اسمه <code>HelloWorld.txt</code>
					<v-card class="mt-2 mb-2">
						<v-img contain class="mx-auto" max-height="500" max-width="700" src="/first-app-step-4.png"></v-img>
					</v-card>
					قم بفتحه، ستجد مكتوبا فيه عبارة <code>"مرحبا بالعالم!"</code>
				</p>
				<p v-else>
					After you run the command, a text file named <code>HelloWorld.txt</code> should appear in your folder.
					<v-card class="mt-2 mb-2">
						<v-img contain class="mx-auto" max-height="500" max-width="700" src="/first-app-step-4.png"></v-img>
					</v-card>
					Open the file, it should contain the text <code>"!مرحبا بالعالم"</code>
				</p>
			</section>
		</section>
		<footer-links :links="linksFooter" />
		<content-thumbnail :links="links" />
	</section>
</template>

<script src="./FirstProgram.js"></script>
<style lang="scss" scoped src="./GettingStarted.scss"></style>