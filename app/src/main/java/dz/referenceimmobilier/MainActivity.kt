package dz.referenceimmobilier

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.runtime.mutableStateOf
import androidx.core.splashscreen.SplashScreen.Companion.installSplashScreen
import com.google.android.libraries.ads.mobile.sdk.MobileAds
import com.google.android.libraries.ads.mobile.sdk.initialization.InitializationConfig
import com.google.android.ump.ConsentInformation
import com.google.android.ump.ConsentRequestParameters
import com.google.android.ump.UserMessagingPlatform
import dz.referenceimmobilier.ui.ReferenceApp
import dz.referenceimmobilier.ui.theme.ReferenceTheme

class MainActivity : ComponentActivity() {
    private val canRequestAds = mutableStateOf(false)
    private val privacyOptionsRequired = mutableStateOf(false)

    private var adsInitializationStarted = false
    private var adsSdkInitialized = false
    private var consentInformation: ConsentInformation? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        installSplashScreen()
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

        // UMP may already hold a valid consent decision from the previous session.
        initializeAdsIfAllowed(information)
    }

    private fun initializeAdsIfAllowed(information: ConsentInformation) {
        if (!information.canRequestAds()) {
            canRequestAds.value = false
            return
        }

        if (adsSdkInitialized) {
            canRequestAds.value = true
            return
        }

        if (adsInitializationStarted) return
        adsInitializationStarted = true

        // GMA Next-Gen initialization must run off the main thread.
        Thread {
            MobileAds.initialize(
                applicationContext,
                InitializationConfig.Builder(ADMOB_APP_ID).build()
            ) {
                runOnUiThread {
                    adsSdkInitialized = true
                    // Re-check consent in case the user changed privacy options while initializing.
                    canRequestAds.value = consentInformation?.canRequestAds() == true
                }
            }
        }.start()
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

    private companion object {
        const val ADMOB_APP_ID = "ca-app-pub-4758243980765802~9676405305"
    }
}
