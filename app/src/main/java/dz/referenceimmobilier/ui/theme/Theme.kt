package dz.referenceimmobilier.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

/**
 * Brand Design Tokens — Reference Immobilier / المرجع العقاري
 *
 * Deep Forest Green  #173B34  → primary
 * Muted Green        #31594E  → primaryContainer / secondary accents
 * Charcoal           #202925  → onBackground / high-contrast text
 * Matte Gold         #B69A62  → secondary (limited use)
 * Warm Off-White     #F5F4EF  → background
 * Neutral Grey       #7A827C  → onSurfaceVariant
 * Soft Border        #DDE1DC  → outline
 */

private val BrandPrimary = Color(0xFF173B34)
private val BrandMutedGreen = Color(0xFF31594E)
private val BrandCharcoal = Color(0xFF202925)
private val BrandMatteGold = Color(0xFFB69A62)
private val BrandOffWhite = Color(0xFFF5F4EF)
private val BrandNeutralGrey = Color(0xFF7A827C)
private val BrandSoftBorder = Color(0xFFDDE1DC)

private val ReferenceColors = lightColorScheme(
    primary = BrandPrimary,
    onPrimary = Color(0xFFFFFFFF),
    primaryContainer = Color(0xFFD6E5DF),
    onPrimaryContainer = BrandCharcoal,
    secondary = BrandMatteGold,
    onSecondary = BrandCharcoal,
    secondaryContainer = Color(0xFFF3EBD9),
    onSecondaryContainer = Color(0xFF3D2E12),
    tertiary = BrandMutedGreen,
    onTertiary = Color(0xFFFFFFFF),
    tertiaryContainer = Color(0xFFD6E5DF),
    onTertiaryContainer = BrandCharcoal,
    background = BrandOffWhite,
    onBackground = BrandCharcoal,
    surface = Color(0xFFFFFFFF),
    onSurface = BrandCharcoal,
    surfaceVariant = Color(0xFFE8EEEA),
    onSurfaceVariant = BrandNeutralGrey,
    outline = BrandSoftBorder,
    outlineVariant = Color(0xFFE8EEEA),
    error = Color(0xFFB3261E),
    errorContainer = Color(0xFFF9DEDC),
    onErrorContainer = Color(0xFF410E0B)
)

@Composable
fun ReferenceTheme(content: @Composable () -> Unit) {
    MaterialTheme(
        colorScheme = ReferenceColors,
        content = content
    )
}
