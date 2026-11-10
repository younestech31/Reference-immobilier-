package dz.referenceimmobilier.ui

import android.content.ClipData
import android.content.ClipboardManager
import android.content.Context
import android.content.Intent
import android.widget.Toast
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowDropDown
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material.icons.filled.Info
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.Share
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.LocalLayoutDirection
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.LayoutDirection
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import dz.referenceimmobilier.data.*
import dz.referenceimmobilier.domain.PriceCalculator
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import java.text.NumberFormat
import java.util.Locale

private fun tr(ar: String, fr: String, isAr: Boolean) = if (isAr) ar else fr

@Composable
fun ReferenceApp(
    canRequestAds: Boolean,
    privacyOptionsRequired: Boolean,
    onShowPrivacyOptions: () -> Unit
) {
    val context = LocalContext.current
    var language by rememberSaveable { mutableStateOf("ar") }
    val isAr = language == "ar"

    var wilayas by remember { mutableStateOf(emptyList<WilayaOption>()) }
    var wilayaCode by rememberSaveable { mutableStateOf("oran") }
    var modeName by rememberSaveable { mutableStateOf("sale") }
    val mode = if (modeName == "rent") ReferenceMode.RENT else ReferenceMode.SALE

    var dataset by remember { mutableStateOf<WilayaReference?>(null) }
    var isLoading by remember { mutableStateOf(true) }
    var hasError by remember { mutableStateOf(false) }
    var retryToken by remember { mutableIntStateOf(0) }

    var regionName by rememberSaveable { mutableStateOf("") }
    var categoryKey by rememberSaveable { mutableStateOf("") }
    var typeIndex by rememberSaveable { mutableIntStateOf(-1) }
    var zoneKey by rememberSaveable { mutableStateOf("") }
    var areaText by rememberSaveable { mutableStateOf("") }

    LaunchedEffect(Unit) {
        wilayas = withContext(Dispatchers.IO) {
            runCatching { ReferenceRepository.loadWilayas(context) }.getOrDefault(emptyList())
        }
    }

    LaunchedEffect(wilayaCode, modeName, retryToken) {
        isLoading = true
        hasError = false
        dataset = null
        try {
            val loaded = withContext(Dispatchers.IO) {
                ReferenceRepository.loadWilaya(context, wilayaCode, mode)
            }
            dataset = loaded
            regionName = loaded.regions.firstOrNull()?.commune.orEmpty()
            categoryKey = ""
            typeIndex = -1
            zoneKey = ""
            areaText = ""
        } catch (_: Exception) {
            hasError = true
        } finally {
            isLoading = false
        }
    }

    val region = dataset?.regions?.firstOrNull { it.commune == regionName }
    val category = region?.categories?.firstOrNull { it.key == categoryKey }
    val propertyType = category?.types?.getOrNull(typeIndex)
    val zone = propertyType?.zones?.firstOrNull { it.key == zoneKey }
    val area = areaText.replace(',', '.').toDoubleOrNull()
    val estimate = if (zone != null && area != null) PriceCalculator.calculate(zone.range, area) else null

    fun clearPropertySelection() {
        categoryKey = ""
        typeIndex = -1
        zoneKey = ""
        areaText = ""
    }

    CompositionLocalProvider(LocalLayoutDirection provides if (isAr) LayoutDirection.Rtl else LayoutDirection.Ltr) {
        Surface(Modifier.fillMaxSize(), color = MaterialTheme.colorScheme.background) {
            Column(
                Modifier.fillMaxSize()
                    .statusBarsPadding()
                    .navigationBarsPadding()
                    .verticalScroll(rememberScrollState())
                    .padding(horizontal = 18.dp)
                    .padding(bottom = 28.dp),
                verticalArrangement = Arrangement.spacedBy(16.dp)
            ) {
                Header(
                    isAr = isAr,
                    language = language,
                    onLanguageChange = { language = if (isAr) "fr" else "ar" },
                    onReset = { clearPropertySelection() }
                )

                HeroCard(isAr)

                // The inline native ad is visually separated from the calculator controls.
                NativeAdPlacement(
                    canRequestAds = canRequestAds,
                    isArabic = isAr
                )

                Column(verticalArrangement = Arrangement.spacedBy(9.dp)) {
                    SectionHeading(
                        number = "01",
                        title = tr("نوع العملية", "Opération", isAr),
                        subtitle = tr("اختر نوع المرجع الذي تريد الاطلاع عليه", "Choisissez le référentiel à consulter", isAr)
                    )
                    Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(10.dp)) {
                        ModeCard(
                            modifier = Modifier.weight(1f),
                            selected = mode == ReferenceMode.SALE,
                            title = tr("بيع", "Vente", isAr),
                            subtitle = tr("القيم المرجعية للبيع", "Prix de vente", isAr),
                            onClick = { modeName = "sale"; clearPropertySelection() }
                        )
                        ModeCard(
                            modifier = Modifier.weight(1f),
                            selected = mode == ReferenceMode.RENT,
                            title = tr("إيجار", "Location", isAr),
                            subtitle = tr("القيم المرجعية للإيجار", "Prix de location", isAr),
                            onClick = { modeName = "rent"; clearPropertySelection() }
                        )
                    }
                }

                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.extraLarge,
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
                ) {
                    Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(15.dp)) {
                        SectionHeading(
                            number = "02",
                            title = tr("موقع العقار", "Localisation du bien", isAr),
                            subtitle = tr("حدد الولاية ثم البلدية أو القطاع", "Sélectionnez la wilaya puis la commune ou le secteur", isAr)
                        )

                        ChoiceField(
                            label = tr("الولاية", "Wilaya", isAr),
                            value = wilayas.firstOrNull { it.code == wilayaCode }
                                ?.let { if (isAr) it.nameAr else it.nameFr }.orEmpty(),
                            options = wilayas.filter { it.isSupported }
                                .map { it.code to if (isAr) it.nameAr else it.nameFr },
                            enabled = wilayas.isNotEmpty(),
                            isAr = isAr,
                            onSelect = {
                                wilayaCode = it
                                regionName = ""
                                clearPropertySelection()
                            }
                        )

                        if (isLoading) {
                            LoadingState(isAr)
                        } else if (hasError) {
                            ErrorState(
                                isAr = isAr,
                                onRetry = { retryToken += 1 }
                            )
                        } else {
                            ChoiceField(
                                label = tr("البلدية / المنطقة", "Commune / Secteur", isAr),
                                value = region?.let { cleanRegion(it.commune) }.orEmpty(),
                                options = dataset?.regions?.map { it.commune to cleanRegion(it.commune) }.orEmpty(),
                                enabled = dataset?.regions?.isNotEmpty() == true,
                                isAr = isAr,
                                onSelect = {
                                    regionName = it
                                    clearPropertySelection()
                                }
                            )
                            Text(
                                tr(
                                    "البلديات المتاحة: ", "Communes disponibles : ", isAr
                                ) + (dataset?.regions?.size ?: 0),
                                style = MaterialTheme.typography.labelSmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        }
                    }
                }

                Card(
                    modifier = Modifier.fillMaxWidth(),
                    shape = MaterialTheme.shapes.extraLarge,
                    colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                    elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
                ) {
                    Column(Modifier.padding(18.dp), verticalArrangement = Arrangement.spacedBy(15.dp)) {
                        SectionHeading(
                            number = "03",
                            title = tr("خصائص العقار", "Caractéristiques du bien", isAr),
                            subtitle = tr("اختر الطبيعة والصنف والمنطقة العمرانية", "Précisez la nature, le type et la zone", isAr)
                        )

                        if (isLoading || hasError) {
                            Text(
                                tr("ستظهر الخيارات بعد تحميل بيانات الولاية.", "Les options apparaîtront après le chargement des données.", isAr),
                                style = MaterialTheme.typography.bodyMedium,
                                color = MaterialTheme.colorScheme.onSurfaceVariant
                            )
                        } else {
                            ChoiceField(
                                label = tr("طبيعة العقار", "Nature du bien", isAr),
                                value = category?.let { if (isAr) it.labelAr else it.labelFr }.orEmpty(),
                                options = region?.categories?.map { it.key to if (isAr) it.labelAr else it.labelFr }.orEmpty(),
                                enabled = region != null,
                                isAr = isAr,
                                onSelect = {
                                    categoryKey = it
                                    typeIndex = -1
                                    zoneKey = ""
                                    areaText = ""
                                }
                            )
                            ChoiceField(
                                label = tr("صنف العقار", "Type de bien", isAr),
                                value = propertyType?.label.orEmpty(),
                                options = category?.types?.mapIndexed { index, entry -> index.toString() to entry.label }.orEmpty(),
                                enabled = category != null,
                                isAr = isAr,
                                onSelect = {
                                    typeIndex = it.toIntOrNull() ?: -1
                                    zoneKey = ""
                                    areaText = ""
                                }
                            )
                            ChoiceField(
                                label = tr("المنطقة العمرانية", "Zone", isAr),
                                value = zone?.let { if (isAr) it.labelAr else it.labelFr }.orEmpty(),
                                options = propertyType?.zones?.map { it.key to if (isAr) it.labelAr else it.labelFr }.orEmpty(),
                                enabled = propertyType != null,
                                isAr = isAr,
                                onSelect = {
                                    zoneKey = it
                                    areaText = ""
                                }
                            )

                            OutlinedTextField(
                                value = areaText,
                                onValueChange = {
                                    areaText = it.filter { char -> char.isDigit() || char == '.' || char == ',' }.take(14)
                                },
                                modifier = Modifier.fillMaxWidth(),
                                enabled = zone != null,
                                singleLine = true,
                                shape = MaterialTheme.shapes.large,
                                label = {
                                    Text(
                                        if (propertyType?.unit?.contains("Ha", true) == true)
                                            tr("المساحة بالهكتار (Ha)", "Superficie en hectares (Ha)", isAr)
                                        else tr("المساحة بالمتر المربع (m²)", "Superficie en mètres carrés (m²)", isAr)
                                    )
                                },
                                placeholder = { Text(tr("مثال: 120", "Ex. : 120", isAr)) },
                                leadingIcon = {
                                    Text(
                                        if (propertyType?.unit?.contains("Ha", true) == true) "Ha" else "m²",
                                        style = MaterialTheme.typography.labelLarge,
                                        color = MaterialTheme.colorScheme.primary,
                                        fontWeight = FontWeight.Bold
                                    )
                                },
                                keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal)
                            )

                            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(7.dp)) {
                                Icon(
                                    Icons.Default.Info,
                                    contentDescription = null,
                                    tint = MaterialTheme.colorScheme.secondary,
                                    modifier = Modifier.size(16.dp)
                                )
                                Text(
                                    tr(
                                        "تُحفظ وحدة القياس الأصلية في المرجع، بما فيها الهكتار.",
                                        "L'unité d'origine du référentiel est conservée, y compris l'hectare.",
                                        isAr
                                    ),
                                    style = MaterialTheme.typography.bodySmall,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                        }
                    }
                }

                if (estimate != null && zone != null && propertyType != null) {
                    ResultCard(
                        result = estimate,
                        zone = zone,
                        type = propertyType,
                        mode = mode,
                        area = area ?: 0.0,
                        ar = isAr,
                        onCopy = {
                            val message = shareText(region, propertyType, zone, estimate, area ?: 0.0, mode, isAr)
                            val clipboard = context.getSystemService(Context.CLIPBOARD_SERVICE) as ClipboardManager
                            clipboard.setPrimaryClip(ClipData.newPlainText("Reference estimate", message))
                            Toast.makeText(
                                context,
                                tr("تم نسخ النتيجة", "Résultat copié", isAr),
                                Toast.LENGTH_SHORT
                            ).show()
                        },
                        onShare = {
                            val intent = Intent(Intent.ACTION_SEND).apply {
                                type = "text/plain"
                                putExtra(
                                    Intent.EXTRA_TEXT,
                                    shareText(region, propertyType, zone, estimate, area ?: 0.0, mode, isAr)
                                )
                            }
                            context.startActivity(
                                Intent.createChooser(intent, tr("مشاركة النتيجة", "Partager le résultat", isAr))
                            )
                        }
                    )
                } else if (zone != null && areaText.isNotBlank() &&
                    (area == null || !area.isFinite() || area <= 0.0)
                ) {
                    AreaValidationCard(isAr)
                } else {
                    GuidanceCard(isAr)
                }

                DisclaimerCard(isAr)

                Column(
                    Modifier.fillMaxWidth().padding(top = 3.dp),
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.spacedBy(4.dp)
                ) {
                    Text(
                        tr(
                            "المرجع العقاري الجزائري",
                            "Référentiel immobilier algérien",
                            isAr
                        ),
                        style = MaterialTheme.typography.labelLarge,
                        color = MaterialTheme.colorScheme.primary,
                        fontWeight = FontWeight.Bold
                    )
                    Text(
                        tr(
                            "بيانات مضمّنة • يعمل دون إنترنت",
                            "Données intégrées • Fonctionne hors connexion",
                            isAr
                        ),
                        style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    Text(
                        "Direction Générale des Impôts • Référentiel 2025–2026",
                        style = MaterialTheme.typography.labelSmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant,
                        textAlign = TextAlign.Center
                    )
                    if (privacyOptionsRequired) {
                        TextButton(onClick = onShowPrivacyOptions) {
                            Text(
                                tr(
                                    "خيارات الخصوصية والإعلانات",
                                    "Options de confidentialité et de publicité",
                                    isAr
                                )
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun Header(
    isAr: Boolean,
    language: String,
    onLanguageChange: () -> Unit,
    onReset: () -> Unit
) {
    Row(
        Modifier.fillMaxWidth().padding(top = 12.dp),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {
        Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(10.dp)) {
            Surface(
                modifier = Modifier.size(46.dp),
                shape = MaterialTheme.shapes.large,
                color = MaterialTheme.colorScheme.primary
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Text(
                        "DZ",
                        color = MaterialTheme.colorScheme.onPrimary,
                        fontWeight = FontWeight.ExtraBold,
                        style = MaterialTheme.typography.titleMedium
                    )
                }
            }
            Column(verticalArrangement = Arrangement.spacedBy(1.dp)) {
                Text(
                    tr("المرجع العقاري", "Référence immobilière", isAr),
                    fontWeight = FontWeight.Bold,
                    style = MaterialTheme.typography.titleSmall
                )
                Text(
                    tr("الجزائر", "Algérie", isAr),
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    style = MaterialTheme.typography.labelSmall
                )
            }
        }
        Row(verticalAlignment = Alignment.CenterVertically) {
            TextButton(onClick = onReset) {
                Icon(Icons.Default.Refresh, contentDescription = null, modifier = Modifier.size(16.dp))
                Spacer(Modifier.width(4.dp))
                Text(tr("إعادة ضبط", "Réinitialiser", isAr), style = MaterialTheme.typography.labelMedium)
            }
            TextButton(onClick = onLanguageChange) {
                Text(if (language == "ar") "FR" else "عربي", fontWeight = FontWeight.Bold)
            }
        }
    }
}

@Composable
private fun HeroCard(isAr: Boolean) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = MaterialTheme.shapes.extraLarge,
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primary)
    ) {
        Column(
            Modifier.fillMaxWidth().padding(22.dp),
            verticalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Surface(
                color = Color.White.copy(alpha = 0.15f),
                shape = MaterialTheme.shapes.medium
            ) {
                Text(
                    tr("أداة مرجعية رسمية", "Outil de référence administratif", isAr),
                    modifier = Modifier.padding(horizontal = 11.dp, vertical = 6.dp),
                    color = Color.White,
                    style = MaterialTheme.typography.labelMedium,
                    fontWeight = FontWeight.SemiBold
                )
            }
            Text(
                tr(
                    "قدّر القيمة المرجعية لعقارك",
                    "Estimez la valeur de référence de votre bien",
                    isAr
                ),
                style = MaterialTheme.typography.headlineSmall,
                lineHeight = 31.sp,
                color = Color.White,
                fontWeight = FontWeight.ExtraBold
            )
            Text(
                tr(
                    "ابحث في نطاقات الأسعار حسب الولاية والبلدية ونوع العقار، واحصل على تقدير إجمالي حسب المساحة.",
                    "Consultez les fourchettes par wilaya, commune et type de bien, puis obtenez une estimation selon la superficie.",
                    isAr
                ),
                style = MaterialTheme.typography.bodyMedium,
                lineHeight = 22.sp,
                color = Color.White.copy(alpha = 0.88f)
            )
            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(6.dp)) {
                Surface(
                    color = Color.White.copy(alpha = 0.16f),
                    shape = MaterialTheme.shapes.small
                ) {
                    Text(
                        tr("58 ولاية", "58 wilayas", isAr),
                        color = Color.White,
                        modifier = Modifier.padding(horizontal = 9.dp, vertical = 5.dp),
                        style = MaterialTheme.typography.labelSmall,
                        fontWeight = FontWeight.Bold
                    )
                }
                Surface(
                    color = Color.White.copy(alpha = 0.16f),
                    shape = MaterialTheme.shapes.small
                ) {
                    Text(
                        tr("دون إنترنت", "Hors connexion", isAr),
                        color = Color.White,
                        modifier = Modifier.padding(horizontal = 9.dp, vertical = 5.dp),
                        style = MaterialTheme.typography.labelSmall,
                        fontWeight = FontWeight.Bold
                    )
                }
            }
        }
    }
}

@Composable
private fun SectionHeading(number: String, title: String, subtitle: String) {
    Row(
        modifier = Modifier.fillMaxWidth(),
        verticalAlignment = Alignment.Top,
        horizontalArrangement = Arrangement.spacedBy(11.dp)
    ) {
        Surface(
            modifier = Modifier.size(34.dp),
            shape = MaterialTheme.shapes.medium,
            color = MaterialTheme.colorScheme.primaryContainer
        ) {
            Box(contentAlignment = Alignment.Center) {
                Text(
                    number,
                    color = MaterialTheme.colorScheme.primary,
                    style = MaterialTheme.typography.labelLarge,
                    fontWeight = FontWeight.ExtraBold
                )
            }
        }
        Column(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(3.dp)) {
            Text(title, style = MaterialTheme.typography.titleMedium, fontWeight = FontWeight.Bold)
            Text(subtitle, style = MaterialTheme.typography.bodySmall, color = MaterialTheme.colorScheme.onSurfaceVariant)
        }
    }
}

@Composable
private fun ModeCard(
    modifier: Modifier,
    selected: Boolean,
    title: String,
    subtitle: String,
    onClick: () -> Unit
) {
    val borderColor = if (selected) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.outline
    val containerColor = if (selected) MaterialTheme.colorScheme.primaryContainer else MaterialTheme.colorScheme.surface
    Card(
        modifier = modifier.clickable(onClick = onClick),
        shape = MaterialTheme.shapes.large,
        border = androidx.compose.foundation.BorderStroke(if (selected) 1.5.dp else 1.dp, borderColor),
        colors = CardDefaults.cardColors(containerColor = containerColor)
    ) {
        Column(
            Modifier.fillMaxWidth().padding(horizontal = 14.dp, vertical = 15.dp),
            verticalArrangement = Arrangement.spacedBy(4.dp)
        ) {
            Text(
                title,
                fontWeight = FontWeight.Bold,
                color = if (selected) MaterialTheme.colorScheme.primary else MaterialTheme.colorScheme.onSurface,
                style = MaterialTheme.typography.titleMedium
            )
            Text(
                subtitle,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                style = MaterialTheme.typography.labelSmall
            )
        }
    }
}

@Composable
private fun LoadingState(isAr: Boolean) {
    Row(
        Modifier.fillMaxWidth().padding(vertical = 9.dp),
        horizontalArrangement = Arrangement.Center,
        verticalAlignment = Alignment.CenterVertically
    ) {
        CircularProgressIndicator(Modifier.size(21.dp), strokeWidth = 2.dp)
        Spacer(Modifier.width(10.dp))
        Text(
            tr("جارٍ تحميل البيانات المحلية...", "Chargement des données locales...", isAr),
            style = MaterialTheme.typography.bodyMedium
        )
    }
}

@Composable
private fun ErrorState(isAr: Boolean, onRetry: () -> Unit) {
    Column(
        modifier = Modifier.fillMaxWidth(),
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        Text(
            tr(
                "تعذر تحميل بيانات الولاية. يمكنك إعادة المحاولة.",
                "Impossible de charger les données de cette wilaya. Réessayez.",
                isAr
            ),
            color = MaterialTheme.colorScheme.error,
            style = MaterialTheme.typography.bodyMedium
        )
        TextButton(onClick = onRetry) {
            Icon(Icons.Default.Refresh, contentDescription = null, modifier = Modifier.size(17.dp))
            Spacer(Modifier.width(5.dp))
            Text(tr("إعادة المحاولة", "Réessayer", isAr))
        }
    }
}

@Composable
private fun ChoiceField(
    label: String,
    value: String,
    options: List<Pair<String, String>>,
    enabled: Boolean = true,
    isAr: Boolean,
    onSelect: (String) -> Unit
) {
    var dialogOpen by remember { mutableStateOf(false) }
    var query by remember { mutableStateOf("") }
    val filteredOptions = remember(options, query) {
        val normalizedQuery = query.trim().lowercase(Locale.ROOT)
        if (normalizedQuery.isBlank()) options
        else options.filter { it.second.lowercase(Locale.ROOT).contains(normalizedQuery) }
    }

    Column(verticalArrangement = Arrangement.spacedBy(6.dp)) {
        Text(label, style = MaterialTheme.typography.labelLarge, fontWeight = FontWeight.SemiBold)
        Box(Modifier.fillMaxWidth()) {
            OutlinedTextField(
                value = value,
                onValueChange = {},
                readOnly = true,
                enabled = enabled,
                singleLine = true,
                shape = MaterialTheme.shapes.large,
                modifier = Modifier.fillMaxWidth(),
                placeholder = { Text(tr("اختر...", "Sélectionner...", isAr)) },
                trailingIcon = {
                    Icon(Icons.Default.ArrowDropDown, contentDescription = null)
                }
            )
            if (enabled) {
                Box(
                    Modifier.matchParentSize().clickable {
                        query = ""
                        dialogOpen = true
                    }
                )
            }
        }
    }

    if (dialogOpen) {
        AlertDialog(
            onDismissRequest = { dialogOpen = false },
            title = {
                Text(label, fontWeight = FontWeight.Bold)
            },
            text = {
                Column(verticalArrangement = Arrangement.spacedBy(9.dp)) {
                    OutlinedTextField(
                        value = query,
                        onValueChange = { query = it },
                        modifier = Modifier.fillMaxWidth(),
                        singleLine = true,
                        shape = MaterialTheme.shapes.large,
                        leadingIcon = {
                            Icon(Icons.Default.Search, contentDescription = null)
                        },
                        placeholder = {
                            Text(tr("ابحث في القائمة", "Rechercher dans la liste", isAr))
                        }
                    )
                    if (filteredOptions.isEmpty()) {
                        Text(
                            tr("لا توجد نتائج مطابقة.", "Aucun résultat correspondant.", isAr),
                            Modifier.padding(vertical = 18.dp),
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    } else {
                        Column(
                            Modifier.fillMaxWidth()
                                .heightIn(max = 350.dp)
                                .verticalScroll(rememberScrollState())
                        ) {
                            filteredOptions.forEach { option ->
                                TextButton(
                                    onClick = {
                                        onSelect(option.first)
                                        dialogOpen = false
                                    },
                                    modifier = Modifier.fillMaxWidth()
                                ) {
                                    Text(
                                        option.second,
                                        modifier = Modifier.fillMaxWidth(),
                                        textAlign = TextAlign.Start,
                                        color = MaterialTheme.colorScheme.onSurface
                                    )
                                }
                            }
                        }
                    }
                }
            },
            confirmButton = {
                TextButton(onClick = { dialogOpen = false }) {
                    Text(tr("إغلاق", "Fermer", isAr))
                }
            },
            shape = MaterialTheme.shapes.extraLarge
        )
    }
}

@Composable
private fun GuidanceCard(isAr: Boolean) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = MaterialTheme.shapes.large,
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant)
    ) {
        Row(
            Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
            Icon(Icons.Default.Info, contentDescription = null, tint = MaterialTheme.colorScheme.primary)
            Text(
                tr(
                    "أكمل اختيار الولاية والبلدية ونوع العقار والمنطقة، ثم أدخل المساحة لعرض النطاق المرجعي.",
                    "Sélectionnez la wilaya, la commune, le type et la zone, puis saisissez la superficie pour afficher la fourchette.",
                    isAr
                ),
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                style = MaterialTheme.typography.bodyMedium,
                lineHeight = 21.sp
            )
        }
    }
}


@Composable
private fun AreaValidationCard(isAr: Boolean) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = MaterialTheme.shapes.large,
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.errorContainer)
    ) {
        Text(
            tr(
                "أدخل مساحة صحيحة أكبر من صفر لاحتساب القيمة الإجمالية.",
                "Saisissez une superficie valide supérieure à zéro pour calculer la valeur totale.",
                isAr
            ),
            modifier = Modifier.padding(16.dp),
            color = MaterialTheme.colorScheme.onErrorContainer,
            style = MaterialTheme.typography.bodyMedium
        )
    }
}

@Composable
private fun ResultCard(
    result: PriceEstimate,
    zone: PriceZoneOption,
    type: PriceType,
    mode: ReferenceMode,
    area: Double,
    ar: Boolean,
    onCopy: () -> Unit,
    onShare: () -> Unit
) {
    val unit = if (ar) {
        (if (type.unit.contains("Ha", true)) "دج/هكتار" else "دج/م²") +
            if (mode == ReferenceMode.RENT) "/شهرياً" else ""
    } else {
        (if (type.unit.contains("Ha", true)) "DZD/Ha" else "DZD/m²") +
            if (mode == ReferenceMode.RENT) "/mois" else ""
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = MaterialTheme.shapes.extraLarge,
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.primary),
        elevation = CardDefaults.cardElevation(defaultElevation = 3.dp)
    ) {
        Column(
            Modifier.padding(20.dp),
            verticalArrangement = Arrangement.spacedBy(14.dp)
        ) {
            Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                Text(
                    tr("نتيجة التقدير المرجعي", "Résultat de l'estimation", ar),
                    color = Color.White.copy(alpha = 0.85f),
                    style = MaterialTheme.typography.labelLarge
                )
                Text(
                    tr("القيمة الإجمالية التقديرية", "Valeur totale estimative", ar),
                    color = Color.White,
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold
                )
            }

            Surface(
                modifier = Modifier.fillMaxWidth(),
                shape = MaterialTheme.shapes.large,
                color = Color.White
            ) {
                Column(
                    Modifier.padding(17.dp),
                    verticalArrangement = Arrangement.spacedBy(6.dp)
                ) {
                    Text(
                        tr("النطاق الإجمالي", "Fourchette totale", ar),
                        style = MaterialTheme.typography.labelMedium,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                    Text(
                        formatNumber(result.totalMin, ar) + " – " + formatNumber(result.totalMax, ar),
                        style = MaterialTheme.typography.headlineSmall,
                        color = MaterialTheme.colorScheme.primary,
                        fontWeight = FontWeight.ExtraBold
                    )
                    Text(
                        if (ar) "دج" else "DZD",
                        style = MaterialTheme.typography.labelLarge,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Column(verticalArrangement = Arrangement.spacedBy(5.dp)) {
                Text(
                    tr("سعر الوحدة المرجعي", "Prix de référence unitaire", ar),
                    color = Color.White.copy(alpha = 0.88f),
                    style = MaterialTheme.typography.labelMedium
                )
                Text(
                    formatNumber(result.unitMin, ar) + " – " + formatNumber(result.unitMax, ar),
                    color = Color.White,
                    style = MaterialTheme.typography.titleLarge,
                    fontWeight = FontWeight.Bold
                )
                Text(unit, color = Color.White.copy(alpha = 0.88f), style = MaterialTheme.typography.bodySmall)
            }

            HorizontalDivider(color = Color.White.copy(alpha = 0.25f))

            Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
                Text(
                    (if (ar) zone.labelAr else zone.labelFr) + " • " + type.label,
                    color = Color.White,
                    style = MaterialTheme.typography.bodyMedium,
                    fontWeight = FontWeight.SemiBold
                )
                Text(
                    tr("المساحة: ", "Superficie : ", ar) + formatNumber(area, ar) +
                        if (type.unit.contains("Ha", true)) " Ha" else " m²",
                    color = Color.White.copy(alpha = 0.82f),
                    style = MaterialTheme.typography.bodySmall
                )
            }

            Row(horizontalArrangement = Arrangement.spacedBy(9.dp)) {
                OutlinedButton(
                    onClick = onCopy,
                    modifier = Modifier.weight(1f),
                    colors = ButtonDefaults.outlinedButtonColors(
                        contentColor = Color.White
                    ),
                    border = androidx.compose.foundation.BorderStroke(1.dp, Color.White.copy(alpha = 0.55f))
                ) {
                    Icon(Icons.Default.ContentCopy, contentDescription = null, modifier = Modifier.size(17.dp))
                    Spacer(Modifier.width(6.dp))
                    Text(tr("نسخ", "Copier", ar))
                }
                Button(
                    onClick = onShare,
                    modifier = Modifier.weight(1f),
                    colors = ButtonDefaults.buttonColors(
                        containerColor = Color.White,
                        contentColor = MaterialTheme.colorScheme.primary
                    )
                ) {
                    Icon(Icons.Default.Share, contentDescription = null, modifier = Modifier.size(17.dp))
                    Spacer(Modifier.width(6.dp))
                    Text(tr("مشاركة", "Partager", ar), fontWeight = FontWeight.Bold)
                }
            }
        }
    }
}

@Composable
private fun DisclaimerCard(isAr: Boolean) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = MaterialTheme.shapes.large,
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface)
    ) {
        Column(Modifier.padding(17.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.spacedBy(7.dp)) {
                Icon(Icons.Default.Info, contentDescription = null, tint = MaterialTheme.colorScheme.secondary)
                Text(
                    tr("تنبيه مهم", "Avis important", isAr),
                    color = MaterialTheme.colorScheme.secondary,
                    fontWeight = FontWeight.Bold,
                    style = MaterialTheme.typography.titleSmall
                )
            }
            Text(
                tr(
                    "تعرض هذه الأداة نطاقات القيم الواردة في المرجع الإداري للمديرية العامة للضرائب للفترة 2025–2026، وفق البيانات المضمّنة في التطبيق. النتائج استرشادية فقط وليست تقييماً فردياً أو سعراً ملزماً، ولا تحتسب ضريبة IRG أو حقوق التسجيل أو أتعاب الموثق. يرجى الرجوع إلى المرجع الرسمي والإدارة الجبائية المختصة.",
                    "Cet outil présente les fourchettes du référentiel administratif de la Direction Générale des Impôts pour 2025–2026, selon les données intégrées à l'application. Les résultats sont indicatifs et ne constituent ni une évaluation individuelle ni un prix obligatoire. L'outil ne calcule pas l'IRG, les droits d'enregistrement ou les honoraires du notaire. Consultez le référentiel officiel et le service fiscal compétent.",
                    isAr
                ),
                style = MaterialTheme.typography.bodySmall,
                color = MaterialTheme.colorScheme.onSurfaceVariant,
                lineHeight = 20.sp
            )
        }
    }
}

private fun cleanRegion(name: String): String {
    var result = name.trim()
    if (result.contains(":")) {
        val parts = result.split(":")
        val before = parts.first().trim()
        val after = parts.drop(1).joinToString(":").trim()
        val prefixOnly = before.isBlank() ||
            Regex("^(COMMUNES?\\s*(DE)?\\s*)?$", RegexOption.IGNORE_CASE).matches(before)
        result = if (prefixOnly) after else before
    }
    result = result.replace(Regex("^(COMMUNES?\\s+DE\\s+|COMMUNES?\\s+)", RegexOption.IGNORE_CASE), "")
    result = result.replace(Regex("^[dD]['’\\s]+"), "")
    return result.trimEnd('.').replace(Regex("\\s+"), " ")
}

private fun formatNumber(value: Double, ar: Boolean): String =
    NumberFormat.getNumberInstance(if (ar) Locale("ar", "DZ") else Locale("fr", "DZ"))
        .apply { maximumFractionDigits = 2 }.format(value)

private fun shareText(
    region: CommuneReference?,
    type: PriceType,
    zone: PriceZoneOption,
    result: PriceEstimate,
    area: Double,
    mode: ReferenceMode,
    ar: Boolean
): String {
    val location = cleanRegion(region?.commune.orEmpty())
    val unit = if (type.unit.contains("Ha", true)) "Ha" else "m²"
    val operationAr = if (mode == ReferenceMode.SALE) "بيع" else "إيجار"
    val operationFr = if (mode == ReferenceMode.SALE) "Vente" else "Location"

    return if (ar) {
        "المرجع العقاري الجزائري — " + operationAr + "\n" +
            "المنطقة: " + location + "\nالصنف: " + type.label + "\nالموقع: " + zone.labelAr + "\n" +
            "سعر الوحدة: من " + formatNumber(result.unitMin, true) + " إلى " + formatNumber(result.unitMax, true) + "\n" +
            "المساحة: " + formatNumber(area, true) + " " + unit + "\n" +
            "القيمة الإجمالية: من " + formatNumber(result.totalMin, true) + " إلى " + formatNumber(result.totalMax, true) + " دج\n" +
            "نتيجة استرشادية وفق مرجع المديرية العامة للضرائب 2025–2026."
    } else {
        "Référentiel immobilier algérien — " + operationFr + "\n" +
            "Secteur : " + location + "\nType : " + type.label + "\nZone : " + zone.labelFr + "\n" +
            "Prix unitaire : de " + formatNumber(result.unitMin, false) + " à " + formatNumber(result.unitMax, false) + "\n" +
            "Superficie : " + formatNumber(area, false) + " " + unit + "\n" +
            "Valeur totale : de " + formatNumber(result.totalMin, false) + " à " + formatNumber(result.totalMax, false) + " DZD\n" +
            "Estimation indicative selon le référentiel DGI 2025–2026."
    }
}
