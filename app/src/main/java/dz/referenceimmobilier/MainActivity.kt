package dz.referenceimmobilier

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import dz.referenceimmobilier.ui.ReferenceApp
import dz.referenceimmobilier.ui.theme.ReferenceTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent { ReferenceTheme { ReferenceApp() } }
    }
}
