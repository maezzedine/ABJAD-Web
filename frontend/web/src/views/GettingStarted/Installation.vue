<template>
	<section id="installation" class="mt-10 mb-5 page-body">
		<h2 class="v-heading text-h4 text-sm-h4 mb-3">
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
</template>

<script src="./Installation.js"></script>
<style lang="scss" scoped src="./GettingStarted.scss"></style>