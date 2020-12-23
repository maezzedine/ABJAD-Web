<template>
	<div class="page-body">
		<section id="installation" class="mt-10 mb-5">
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

			<!-- <hr /> -->
			<v-divider></v-divider>
			<v-footer class="pt-6">
				<div 
					:class="{ 'ml-auto' : isArabic, 'mr-auto' : !isArabic}"
				>
					<v-icon>
						{{isArabic? 'mdi-chevron-right': 'mdi-chevron-left'}}
					</v-icon>
					<router-link 
						class="text-decoration-none text-h6"
						:to="`/${$route.params.lang}/introduction/why-abjad`">
						<template v-if="isArabic">لماذا <span class="abjad">أبجد</span>؟</template>
						<template v-else>Why <span class="abjad">ABJAD</span>?</template>
					</router-link>
				</div>
				
				<div 
					:class="{ 'mr-auto' : isArabic, 'ml-auto' : !isArabic}">
					<router-link 
						class="text-decoration-none text-h6"
						:to="`/${$route.params.lang}/getting-started/first-program`">
						<template v-if="isArabic">كتابة أول برنامج</template>
						<template v-else>Writing Your First Program</template>
					</router-link>
					<v-icon>
						{{isArabic? 'mdi-chevron-left': 'mdi-chevron-right'}}
					</v-icon>
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
					to="#installation" 
					class="transition-swing text-body-2 py-1 font-weight-regular text--disabled"
					:class="{'pl-3' : !isArabic, 'pr-3': isArabic}"
				>
					<a href="#installation" class="text-decoration-none">
						<template v-if="isArabic">
							التحميل
						</template>
						<template v-else>
							Installation
						</template>
					</a>
				</router-link>
			</ul>
		</v-navigation-drawer>
	</div>
</template>

<script src="./Installation.js"></script>
<style lang="scss" scoped src="./GettingStarted.scss"></style>