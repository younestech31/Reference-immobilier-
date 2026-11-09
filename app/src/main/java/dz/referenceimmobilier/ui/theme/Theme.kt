package dz.referenceimmobilier.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val ReferenceColors = lightColorScheme(
    primary = Color(0xFF0C6B52),
    onPrimary = Color.White,
    primaryContainer = Color(0xFFD8F2E8),
    onPrimaryContainer = Color(0xFF073D30),
    secondary = Color(0xFFB7792D),
    onSecondary = Color.White,
    background = Color(0xFFF5F7F5),
    onBackground = Color(0xFF17231E),
    surface = Color.White,
    onSurface = Color(0xFF17231E),
    surfaceVariant = Color(0xFFEAF0EC),
    onSurfaceVariant = Color(0xFF53645B),
    outline = Color(0xFFD5DED8)
)

@Composable
fun ReferenceTheme(content: @Composable () -> Unit) {
    MaterialTheme(colorScheme = ReferenceColors, content = content)
}
