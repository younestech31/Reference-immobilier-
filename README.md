# المرجع العقاري الجزائري | Algerian Real Estate Reference

تطبيق Android أصلي لعرض نطاقات الأسعار المرجعية للعقار في الجزائر، اعتماداً على بيانات مرجع المديرية العامة للضرائب للفترة 2025–2026.

## ما ينجزه التطبيق
- البحث حسب الولاية والبلدية أو القطاع.
- الاختيار بين البيع والإيجار.
- اختيار طبيعة العقار وصنفه والمنطقة العمرانية.
- عرض حدود السعر المرجعي الدنيا والعليا وحساب المجموع وفق المساحة.
- الحفاظ على وحدات المصدر الأصلية، بما فيها DA/m² وDA/Ha.
- واجهة عربية RTL وفرنسية LTR، ونسخ النتيجة ومشاركتها.
- بيانات مضمّنة في APK للعمل دون إنترنت.

## التقنية
Kotlin + Jetpack Compose، Android Gradle Plugin 9.4، Gradle 9.6، وملفات JSON محلية مولّدة من المصدر TypeScript.

## البيانات ومصدرها
الملفات الأصلية في data/source/ نُقلت من https://github.com/younestech31/Lattab عند commit:
fc2e85f0cb4d20fd3eb2961a95a5aed42cca3309

المحوّل scripts/export-reference-data.cjs يتحقق من وجود ملفات الأسعار الـ116 ويحوّلها إلى JSON داخل app/src/main/assets/reference/ دون إعادة حساب القيم.

## البناء
يتطلب JDK 17 وAndroid SDK API 37.
~~~bash
npm install
npm run export:reference
gradle wrapper --gradle-version 9.6.0 --distribution-type bin
./gradlew testDebugUnitTest assembleDebug
~~~
مسار APK: app/build/outputs/apk/debug/app-debug.apk

## تنبيه
النطاقات إدارية استرشادية وليست تقييماً فردياً أو سعراً مضموناً، ولا تمثل أتعاب الموثق أو الضرائب والرسوم المستحقة.
