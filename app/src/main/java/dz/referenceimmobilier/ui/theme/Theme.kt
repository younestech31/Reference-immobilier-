package dz.referenceimmobilier.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val ReferenceColors = lightColorScheme(
    primary = Color(0xFF0B654B),
    onPrimary = Color(0xFFFFFFFF),
    primaryContainer = Color(0xFFDCEFE7),
    onPrimaryContainer = Color(0xFF123D30),
    secondary = Color(0xFF9B642A),
    onSecondary = Color(0xFFFFFFFF),
    secondaryContainer = Color(0xFFF4E7D6),
    onSecondaryContainer = Color(0xFF583812),
    tertiary = Color(0xFF3D6574),
    onTertiary = Color(0xFFFFFFFF),
    tertiaryContainer = Color(0xFFDCEBF0),
    onTertiaryContainer = Color(0xFF183944),
    background = Color(0xFFF3F7F4),
    onBackground = Color(0xFF15251E),
    surface = Color(0xFFFFFFFF),
    onSurface = Color(0xFF15251E),
    surfaceVariant = Color(0xFFE9F0EB),
    onSurfaceVariant = Color(0xFF52635A),
    outline = Color(0xFFD0DCD4),
    outlineVariant = Color(0xFFE0E8E2),
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
