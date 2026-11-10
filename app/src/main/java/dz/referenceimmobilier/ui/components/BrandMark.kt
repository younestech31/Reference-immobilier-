package dz.referenceimmobilier.ui.components

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.dp
import dz.referenceimmobilier.R

@Composable
fun BrandMark(
    modifier: Modifier = Modifier,
    tint: Color = MaterialTheme.colorScheme.onPrimary,
    containerColor: Color = MaterialTheme.colorScheme.primary,
    contentDescription: String? = null
) {
    Surface(
        modifier = modifier,
        shape = MaterialTheme.shapes.large,
        color = containerColor
    ) {
        Icon(
            painter = painterResource(R.drawable.ic_brand_mark),
            contentDescription = contentDescription,
            tint = tint,
            modifier = Modifier.fillMaxSize().padding(6.dp)
        )
    }
}
