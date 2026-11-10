package dz.referenceimmobilier.data

data class WilayaOption(
    val code: String,
    val nameAr: String,
    val nameFr: String,
    val isSupported: Boolean
)

enum class ReferenceMode(val assetName: String, val labelAr: String, val labelFr: String) {
    SALE("sale", "بيع العقار", "Vente immobilière"),
    RENT("rent", "إيجار العقار", "Location immobilière")
}

data class PriceRange(val min: Double, val max: Double)
data class PriceZoneOption(val key: String, val labelAr: String, val labelFr: String, val range: PriceRange)
data class PriceType(val label: String, val unit: String, val zones: List<PriceZoneOption>)
data class PriceCategory(val key: String, val labelAr: String, val labelFr: String, val types: List<PriceType>)
data class CommuneReference(val commune: String, val region: String?, val categories: List<PriceCategory>)
data class WilayaReference(val code: String, val mode: ReferenceMode, val regions: List<CommuneReference>)
data class PriceEstimate(val unitMin: Double, val unitMax: Double, val totalMin: Double, val totalMax: Double)

object ReferenceLabels {
    val categoryOrder = listOf(
        Triple("individuels", "سكن فردي", "Individuels"),
        Triple("collectifsSemiCollectifs", "سكن جماعي وشبه جماعي", "Collectifs et semi-collectifs"),
        Triple("locauxCommerciaux", "محلات تجارية", "Locaux commerciaux"),
        Triple("locauxUsageProfessionnels", "محلات للاستعمال المهني", "Locaux professionnels"),
        Triple("hangars", "مستودعات وهناجر", "Hangars"),
        Triple("terrainsNus", "أراضٍ عارية", "Terrains nus"),
        Triple("terrainsAgricolesPlaine", "أراضٍ فلاحية في السهول", "Terrains agricoles en plaine"),
        Triple("terrainsAgricolesPente", "أراضٍ فلاحية منحدرة", "Terrains agricoles en pente")
    )
    val zoneOrder = listOf(
        Triple("zoneResidentielle", "منطقة سكنية", "Zone résidentielle"),
        Triple("centreVille", "وسط المدينة", "Centre-ville"),
        Triple("zonePeripherique", "منطقة محيطية", "Zone périphérique"),
        Triple("zoneEloignement", "منطقة بعيدة", "Zone d'éloignement")
    )
}
