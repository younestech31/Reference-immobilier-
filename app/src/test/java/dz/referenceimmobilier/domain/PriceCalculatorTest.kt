package dz.referenceimmobilier.domain

import dz.referenceimmobilier.data.PriceRange
import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class PriceCalculatorTest {
    @Test
    fun calculatesReferenceTotal() {
        val result = PriceCalculator.calculate(PriceRange(120_000.0, 150_000.0), 100.0)
        requireNotNull(result)
        assertEquals(12_000_000.0, result.totalMin, 0.0)
        assertEquals(15_000_000.0, result.totalMax, 0.0)
    }

    @Test
    fun hectareRangesUseTheEnteredHectaresWithoutConversion() {
        val result = PriceCalculator.calculate(PriceRange(4_000_000.0, 6_000_000.0), 2.5)
        requireNotNull(result)
        assertEquals(10_000_000.0, result.totalMin, 0.0)
        assertEquals(15_000_000.0, result.totalMax, 0.0)
    }

    @Test
    fun rejectsNonPositiveArea() {
        assertNull(PriceCalculator.calculate(PriceRange(100.0, 200.0), 0.0))
        assertNull(PriceCalculator.calculate(PriceRange(100.0, 200.0), -1.0))
    }

    @Test
    fun rejectsReversedRange() {
        assertNull(PriceCalculator.calculate(PriceRange(200.0, 100.0), 10.0))
    }
}
