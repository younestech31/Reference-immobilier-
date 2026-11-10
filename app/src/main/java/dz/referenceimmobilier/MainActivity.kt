package dz.referenceimmobilier

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.runtime.mutableStateOf
import com.google.android.gms.ads.MobileAds
import com.google.android.ump.ConsentInformation
import com.google.android.ump.ConsentRequestParameters
import com.google.android.ump.UserMessagingPlatform
import dz.referenceimmobilier.ui.ReferenceApp
import dz.referenceimmobilier.ui.theme.ReferenceTheme

class MainActivity : ComponentActivity() {
    private val canRequestAds = mutableStateOf(false)
    private val privacyOptionsRequired = mutableStateOf(false)
    private var adsInitializationStarted = false
    private var consentInformation: ConsentInformation? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            ReferenceTheme {
                ReferenceApp(
                    canRequestAds = canRequestAds.value,
                    privacyOptionsRequired = privacyOptionsRequired.value,
                    onShowPrivacyOptions = ::showPrivacyOptions
                )
            }
        }

        requestConsentAndInitializeAds()
    }

    private fun requestConsentAndInitializeAds() {
        val information = UserMessagingPlatform.getConsentInformation(this)
        consentInformation = information

        val parameters = ConsentRequestParameters.Builder().build()
        information.requestConsentInfoUpdate(
            this,
            parameters,
            {
                refreshPrivacyOptionsVisibility(information)
                initializeAdsIfAllowed(information)

                UserMessagingPlatform.loadAndShowConsentFormIfRequired(this) {
                    refreshPrivacyOptionsVisibility(information)
                    initializeAdsIfAllowed(information)
                }
            },
            {
                // UMP can use the previous session's consent state if the update request fails.
                refreshPrivacyOptionsVisibility(information)
                initializeAdsIfAllowed(information)
            }
        )
    }

    private fun initializeAdsIfAllowed(information: ConsentInformation) {
        if (!information.canRequestAds() || adsInitializationStarted) return

        adsInitializationStarted = true
        MobileAds.initialize(this) {
            runOnUiThread {
                canRequestAds.value = true
            }
        }
    }

    private fun refreshPrivacyOptionsVisibility(information: ConsentInformation) {
        privacyOptionsRequired.value =
            information.privacyOptionsRequirementStatus ==
                ConsentInformation.PrivacyOptionsRequirementStatus.REQUIRED
    }

    private fun showPrivacyOptions() {
        val information = consentInformation ?: return
        UserMessagingPlatform.showPrivacyOptionsForm(this) {
            refreshPrivacyOptionsVisibility(information)
            initializeAdsIfAllowed(information)
        }
    }
}
