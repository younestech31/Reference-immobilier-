package dz.referenceimmobilier.data

import android.content.Context
import org.json.JSONArray
import org.json.JSONObject

object ReferenceRepository {
    fun loadWilayas(context: Context): List<WilayaOption> {
        val text = readAsset(context, "reference/wilayas.json")
        val items = JSONArray(text)
        return buildList {
            for (index in 0 until items.length()) {
                val item = items.getJSONObject(index)
                add(WilayaOption(
                    code = item.getString("code"),
                    nameAr = item.getString("nameAr"),
                    nameFr = item.getString("nameFr"),
                    isSupported = item.optBoolean("isSupported", true)
                ))
            }
        }
    }

    fun loadWilaya(context: Context, code: String, mode: ReferenceMode): WilayaReference {
        val fileName = "reference/" + code + "-" + mode.assetName + ".json"
        val root = JSONObject(readAsset(context, fileName))
        val regionsArray = root.getJSONArray("regions")
        val regions = buildList {
            for (index in 0 until regionsArray.length()) {
                val regionObject = regionsArray.getJSONObject(index)
                val categories = ReferenceLabels.categoryOrder.mapNotNull category@ { category ->
                    val typesArray = regionObject.optJSONArray(category.first) ?: return@category null
                    val types = buildList {
                        for (typeIndex in 0 until typesArray.length()) {
                            val typeObject = typesArray.getJSONObject(typeIndex)
                            val zones = ReferenceLabels.zoneOrder.mapNotNull zone@ { zone ->
                                val rangeObject = typeObject.optJSONObject(zone.first) ?: return@zone null
                                val min = rangeObject.optDouble("min", Double.NaN)
                                val max = rangeObject.optDouble("max", Double.NaN)
                                if (!min.isFinite() || !max.isFinite() || min <= 0.0 || max <= 0.0 || min > max) return@zone null
                                PriceZoneOption(zone.first, zone.second, zone.third, PriceRange(min, max))
                            }
                            if (zones.isNotEmpty()) {
                                add(PriceType(
                                    label = typeObject.optString("label"),
                                    unit = typeObject.optString("unit", "DA/m²"),
                                    zones = zones
                                ))
                            }
                        }
                    }
                    if (types.isEmpty()) null
                    else PriceCategory(category.first, category.second, category.third, types)
                }
                add(CommuneReference(
                    commune = regionObject.optString("commune"),
                    region = regionObject.optString("region").takeIf { it.isNotBlank() },
                    categories = categories
                ))
            }
        }
        return WilayaReference(code, mode, regions)
    }

    private fun readAsset(context: Context, path: String): String =
        context.assets.open(path).bufferedReader(Charsets.UTF_8).use { it.readText() }
}
