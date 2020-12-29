<template>
	<section id="getting-started" class="mt-10 mb-5 page-body">
		<h2 class="v-heading text-h4 text-sm-h4 mb-3">
			<a href="#getting-started"
			class="text-decoration-none text-right text-md-left">#</a>
			<template v-if="isArabic">
				البداية
			</template>
			<template v-else>
				Getting Started
			</template>
		</h2>

		<p v-if="isArabic">
			لتشغيل برامج <span class="abjad">أبجد</span>، سوف تحتاج لتحميل المُفسر بالإضافة إلى مُحرّر نصي.
			سنقوم بتغطية تعليمات تحميل المحرر في الصفحة القدامة، أما لتحميل المُفسّر،
			فاتّبع التعليمات التالية.

			<v-alert
				text class="mt-4"
				color="primary"
			>
				هناك أيضا خيار استخدام 	
				<router-link
					:to="`/${this.$route.params.lang}/editor`"
				>
					المحرر البرمجي هنا
				</router-link>
				، بحيث لن تحتاج لتحميل شيء.
    	</v-alert>
		</p>
		<p v-else>
			To run <span class="abjad">ABJAD</span> code, you are going to need a text editor and the interpreter.
			In this section, we will cover the installation steps for the interpreter, while we will cover the text
			editor in our next section.
			
			<v-alert
				text class="mt-4"
				color="primary"
			>
				You can also use our 	
				<router-link
					:to="`/${this.$route.params.lang}/editor`"
				>
					Online Editor
				</router-link>
				, where you don't need to install anything.
    	</v-alert>
		</p>

		<section id="installation" class="mt-10 mb-5 page-body">
			<h2 class="v-heading text-h5 text-sm-h5 mb-3">
				<a href="#installation"
				class="text-decoration-none text-right text-md-left">#</a>
				<template v-if="isArabic">
					التحميل
				</template>
				<template v-else>
					Installation
				</template>
			</h2>

			<v-tabs grow v-model="tab">
				<v-tab key="windows">Windows</v-tab>
				<v-tab key="macos">MacOS</v-tab>
				<v-tab key="linux">Linux</v-tab>
			</v-tabs>

			<v-tabs-items v-model="tab">
				<v-tab-item key="windows">
					<v-card-text>
						<ol class="installation-steps">
							<li>
								<template v-if="isArabic">
									قم بتحميل النسخة الأخيرة من موقع 
									<a target="_blank" href="https://github.com/mezdn/ABJAD/releases">GitHub <v-icon x-small>mdi-subdirectory-arrow-left</v-icon></a> 
								</template>
								<template v-else>
									Install the latest version zipped file from 
									<a target="_blank" href="https://github.com/mezdn/ABJAD/releases">GitHub <v-icon x-small>mdi-subdirectory-arrow-right</v-icon></a> 
								</template>
								<v-card class="mt-2">
									<v-img class="mx-auto" max-width="700" src="/installation-step-1.PNG"></v-img>
								</v-card>
							</li>
							<li>
								<template v-if="isArabic">
									قم باختيار ملف في الحاسوب، وقم بفك الضعط عن الملف الذي قمت بتحميله فيه، كما ترى في الصورى أدناه.
								</template>
								<template v-else>
									Choose a directory in your machine, and unnzip the installed folder in it.
								</template>
								<v-card class="mt-2">
									<v-img class="mx-auto" width="700" src="/installation-step-2.PNG" />
								</v-card>
							</li>
							<li>
								<template v-if="isArabic">
									قم بنسخ موقع الملف الذي اخترته سابقا، وأضفه إلى متغير البيئة PATH كما ترى في الصور أدناه. <br />
									يمكنك أيضا اتباع التعليمات عبر 
									<a target="_blank" href="https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/">الرابط<v-icon x-small>mdi-subdirectory-arrow-left</v-icon></a>
								</template>
								<template v-else>
									Add the path of the chosen directory to the PATH environment variable. <br />
									Follow the screenchots for the steps, or check the following link for
									<a target="_blank" href="https://helpdeskgeek.com/windows-10/add-windows-path-environment-variable/">more info <v-icon x-small>mdi-subdirectory-arrow-right</v-icon></a>
								</template>
								<v-card class="mt-2">
									<v-img class="mx-auto" width="700" src="/installation-step-3.PNG" />
								</v-card>
								<v-card class="mt-2">
									<v-img class="mx-auto" width="700" src="/installation-step-4.PNG" />
								</v-card>
								<v-card class="mt-2">
									<v-img class="mx-auto" width="700" src="/installation-step-5.PNG" />
								</v-card>
								<v-card class="mt-2">
									<v-img class="mx-auto" width="700" src="/installation-step-6.PNG"/>
								</v-card>
							</li>
						</ol>
					</v-card-text>
				</v-tab-item>
				<v-tab-item key="macos">
					<v-card-text>
						<template v-if="isArabic">غير متوفر حاليا.</template>
						<template v-else>Not currently available.</template>
					</v-card-text>
				</v-tab-item>
				<v-tab-item key="linux">
					<v-card-text>
						<template v-if="isArabic">غير متوفر حاليا.</template>
						<template v-else>Not currently available.</template>
					</v-card-text>
				</v-tab-item>
			</v-tabs-items>

			<footer-links :links="linksFooter" />
			<content-thumbnail :links="links" />
		</section>
	</section>
</template>

<script src="./Installation.js"></script>
<style lang="scss" scoped src="./GettingStarted.scss"></style>