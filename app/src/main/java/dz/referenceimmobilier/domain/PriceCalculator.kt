package dz.referenceimmobilier.domain

import dz.referenceimmobilier.data.PriceEstimate
import dz.referenceimmobilier.data.PriceRange

object PriceCalculator {
    fun calculate(range: PriceRange, area: Double): PriceEstimate? {
        if (!area.isFinite() || area <= 0.0) return null
        if (!range.min.isFinite() || !range.max.isFinite() || range.min <= 0.0 || range.max < range.min) return null
        return PriceEstimate(
            unitMin = range.min,
            unitMax = range.max,
            totalMin = range.min * area,
            totalMax = range.max * area
        )
    }
}
