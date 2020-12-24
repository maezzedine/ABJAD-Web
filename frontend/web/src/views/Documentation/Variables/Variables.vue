<template>
  <div class="page-body">
    <section id="variables" class="mt-10 mb-5">
      <h2 class="v-heading text-h4 text-sm-h4 mb-3">
				<a href="#variables"
				class="text-decoration-none text-right text-md-left">#</a>
				<template v-if="isArabic">
					المتغيرات
				</template>
				<template v-else>
					Variables
				</template>
			</h2>

      <section id="what-are-variables" class="mt-10 mb-5">
        <h2 class="v-heading text-h5 text-sm-h5 mb-3">
            <a href="#what-are-variables"
            class="text-decoration-none text-right text-md-left">#</a>
            <template v-if="isArabic">
              ما هي المتغيرات؟
            </template>
            <template v-else>
              What Are Variables?
            </template>
        </h2>

        <p v-if="isArabic">
          المتغيرات هي وسيلة لحفظ المعلومات. من الاسم نستنتج أن قيمة المتغير غير ثابتة،
          ويمكن تتغير مع الوقت.
        </p>
        <p v-else>
          Variables are containers that are used for storing data. From the name, we can infer
          that the value of a variable can change with time.
        </p>
      </section>
      <section id="declaring-variable" class="mt-10 mb-5">
        <h2 class="v-heading text-h5 text-sm-h5 mb-3">
            <a href="#declaring-variable"
            class="text-decoration-none text-right text-md-left">#</a>
            <template v-if="isArabic">
              تعريف المتغير
            </template>
            <template v-else>
              Declaring a Variable
            </template>
        </h2>

        <p v-if="isArabic">
          التعريف هو الإعلان عن متغيرٍ جديدٍ عبر منحه اسمًا وقيمة. <br />
          تركيب الجملة في تعريف متغير جديد يكون كالتالي:
          <ul>
            <li>الكلمة المفتاح <code>متغير</code></li>
            <li>اسم المتغير</li>
            <li>علامة تعيين القيمة <code>=</code></li>
            <li>قيمة المتغير</li>
            <li>فاصلة منقوطة <code>؛</code> لانهاء الجملة</li>
          </ul>
          مثال على تعريف متغير <code>س</code> يحمل القيمة <code>1</code>:
        </p>
        <p v-else>
          Declaration is creating a new variable, giving it a name and a value. <br />
          The syntax for declaring a new variable is as the following:
          <ul>
            <li>The keyword <code>متغير</code></li>
            <li>The name of the variable</li>
            <li>The assignment symbol <code>=</code></li>
            <li>The value of the variable</li>
            <li>A semicolon <code>؛</code> for ending the statement</li>
          </ul>
          An example of declaring a variable of name <code>س</code> and value <code>1</code>:
        </p>
        <code-area :codes="['متغير س = 1؛']" />
        <section id="declaring-null-variable" class="mt-10 mb-5">
          <h2 class="v-heading text-h6 text-sm-h6 mb-3">
              <a href="#declaring-null-variable"
              class="text-decoration-none text-right text-md-left">#</a>
              <template v-if="isArabic">
                تعريف متغير بدون قيمة
              </template>
              <template v-else>
                Declaring Variable Without a Value
              </template>
          </h2>

          <p v-if="isArabic">
            يتطلبُ تعريف متغيرٍ جديدٍ تحديد قيمة له، لذلك، إن لم تتوفر القيمة عند التعريف، يمكن
            منحه قيمة <code>عدم</code>
          </p>
          <p v-else>
            Declaring a new variable does require specifying its value, that's why
            when there is no value yet to give, you can assign it to null (<code>عدم</code>);
          </p>
          <code-area :codes="['متغير بدون_قيمة = عدم؛']" />
        </section>
      </section>
      <section id="using-variable" class="mt-10 mb-5">
        <h2 class="v-heading text-h5 text-sm-h5 mb-3">
            <a href="#using-variable"
            class="text-decoration-none text-right text-md-left">#</a>
            <template v-if="isArabic">
              استخدام المتغير
            </template>
            <template v-else>
              Using a Variable
            </template>
        </h2>

        <p v-if="isArabic">
          بمجرّد تعريف المتغير ومنحه قيمة، يُصبح بإمكاننا الدلالة عليه واستعماله مثله مثل أي لفظ آخر. <br />
          مثال على كتابة قيمة متغير:
        </p>
        <p v-else>
          Once a variable was declared with a value, it can be used in the code like
          any other literal. <br />
          An example of printing the value of a variable
        </p>
        <code-area :codes="['متغير ترحيب = &quot;مرحبا بالعالم!&quot;؛', 'أكتب(ترحيب)؛']" />
      </section>
      <section id="change-variable-value" class="mt-10 mb-5">
        <h2 class="v-heading text-h5 text-sm-h5 mb-3">
            <a href="#change-variable-value"
            class="text-decoration-none text-right text-md-left">#</a>
            <template v-if="isArabic">
              تغير قيمة المتغير
            </template>
            <template v-else>
              Changing The Value of a Variable
            </template>
        </h2>

        <p v-if="isArabic">
          بمجرّد تعريف المتغير ومنحه قيمة، يُصبح بإمكاننا الدلالة عليه واستعماله مثله مثل أي لفظ آخر. <br />
          مثال على كتابة قيمة متغير:
        </p>
        <p v-else>
          Changing the value of a variable is very similar, in syntax, to declaring one, just without
          the <code>متغير</code> keyword, that is limited to declaration only.
        </p>
        <code-area :codes="['متغير ج = عدم؛', 'ج = &quot;مرحبا&quot;؛', 'أكتب(ج)؛']" />
      </section>
    </section>

    <content-thumbnail :links="links" />
  </div>
</template>

<script src="./Variables.js"></script>
<style lang="scss" scoped src="../Documentation.scss"></style>