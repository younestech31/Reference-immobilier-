package dz.referenceimmobilier.ui

import android.graphics.Typeface
import android.os.Handler
import android.os.Looper
import android.graphics.drawable.GradientDrawable
import android.view.Gravity
import android.view.View
import android.widget.Button
import android.widget.ImageView
import android.widget.LinearLayout
import android.widget.TextView
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.key
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.viewinterop.AndroidView
import androidx.compose.ui.unit.dp
import androidx.compose.ui.graphics.toArgb
import androidx.compose.material3.MaterialTheme
import com.google.android.libraries.ads.mobile.sdk.common.LoadAdError
import com.google.android.libraries.ads.mobile.sdk.nativead.NativeAd
import com.google.android.libraries.ads.mobile.sdk.nativead.NativeAdLoader
import com.google.android.libraries.ads.mobile.sdk.nativead.NativeAdLoaderCallback
import com.google.android.libraries.ads.mobile.sdk.nativead.NativeAdRequest
import com.google.android.libraries.ads.mobile.sdk.nativead.NativeAdView
import dz.referenceimmobilier.BuildConfig

/**
 * A single inline native ad, placed between the introduction and the calculator form.
 * Debug builds use Google's dedicated test unit; release builds use the publisher's unit.
 */
@Composable
fun NativeAdPlacement(
    canRequestAds: Boolean,
    isArabic: Boolean
) {
    if (!canRequestAds) return

    val context = LocalContext.current
    val surfaceColor = MaterialTheme.colorScheme.surface.toArgb()
    val outlineColor = MaterialTheme.colorScheme.outline.toArgb()
    val textColor = MaterialTheme.colorScheme.onSurface.toArgb()
    val secondaryTextColor = MaterialTheme.colorScheme.onSurfaceVariant.toArgb()
    val primaryColor = MaterialTheme.colorScheme.primary.toArgb()
    val nativeAdState = remember { mutableStateOf<NativeAd?>(null) }

    DisposableEffect(context, canRequestAds) {
        var isDisposed = false
        val adUnitId = BuildConfig.NATIVE_AD_UNIT_ID

        val adRequest = NativeAdRequest.Builder(
            adUnitId,
            listOf(NativeAd.NativeAdType.NATIVE)
        ).build()

        val adCallback = object : NativeAdLoaderCallback {
            override fun onNativeAdLoaded(loadedAd: NativeAd) {
                // GMA Next-Gen callbacks may run off the main thread. Compose state and
                // Android views are touched only after posting to the UI thread.
                Handler(Looper.getMainLooper()).post {
                    // The native advanced policy requires a visible headline and call-to-action.
                    if (isDisposed || loadedAd.headline.isNullOrBlank() ||
                        loadedAd.callToAction.isNullOrBlank()
                    ) {
                        loadedAd.destroy()
                    } else {
                        nativeAdState.value?.destroy()
                        nativeAdState.value = loadedAd
                    }
                }
            }

            override fun onAdFailedToLoad(error: LoadAdError) {
                // Keep the calculator usable when ads are unavailable or the device is offline.
            }
        }

        NativeAdLoader.load(adRequest, adCallback)

        onDispose {
            isDisposed = true
            nativeAdState.value?.destroy()
            nativeAdState.value = null
        }
    }

    nativeAdState.value?.let { ad ->
        key(isArabic, ad) {
            AndroidView(
                modifier = Modifier.fillMaxWidth(),
                factory = {
                    createNativeAdView(
                        context = it,
                        ad = ad,
                        isArabic = isArabic,
                        surfaceColor = surfaceColor,
                        outlineColor = outlineColor,
                        textColor = textColor,
                        secondaryTextColor = secondaryTextColor,
                        primaryColor = primaryColor
                    )
                }
            )
        }
    }
}

private fun createNativeAdView(
    context: android.content.Context,
    ad: NativeAd,
    isArabic: Boolean,
    surfaceColor: Int,
    outlineColor: Int,
    textColor: Int,
    secondaryTextColor: Int,
    primaryColor: Int
): NativeAdView {
    fun dp(value: Int): Int = (value * context.resources.displayMetrics.density).toInt()

    val adView = NativeAdView(context).apply {
        layoutDirection = if (isArabic) View.LAYOUT_DIRECTION_RTL else View.LAYOUT_DIRECTION_LTR
        background = GradientDrawable().apply {
            setColor(surfaceColor)
            cornerRadius = dp(18).toFloat()
            setStroke(dp(1), outlineColor)
        }
        clipToOutline = true
        contentDescription = if (isArabic) "إعلان" else "Advertisement"
    }

    val content = LinearLayout(context).apply {
        orientation = LinearLayout.VERTICAL
        layoutDirection = if (isArabic) View.LAYOUT_DIRECTION_RTL else View.LAYOUT_DIRECTION_LTR
        setPadding(dp(10), dp(8), dp(10), dp(8))
        isClickable = false
        isFocusable = false
    }
    adView.addView(
        content,
        android.widget.FrameLayout.LayoutParams(
            android.widget.FrameLayout.LayoutParams.MATCH_PARENT,
            android.widget.FrameLayout.LayoutParams.WRAP_CONTENT
        )
    )

    // Keep the badge at the physical left so the SDK's AdChoices overlay has clear space
    // in the top-right corner. The overlay itself is inserted by NativeAdView.
    val attributionRow = LinearLayout(context).apply {
        orientation = LinearLayout.HORIZONTAL
        layoutDirection = View.LAYOUT_DIRECTION_LTR
        gravity = Gravity.CENTER_VERTICAL
    }
    val attribution = TextView(context).apply {
        text = if (isArabic) "إعلان" else "Ad"
        textSize = 12f
        setTextColor(android.graphics.Color.WHITE)
        gravity = Gravity.CENTER
        minWidth = dp(34)
        minHeight = dp(24)
        setPadding(dp(7), dp(3), dp(7), dp(3))
        background = GradientDrawable().apply {
            setColor(primaryColor)
            cornerRadius = dp(5).toFloat()
        }
        textDirection = View.TEXT_DIRECTION_FIRST_STRONG
    }
    attributionRow.addView(
        attribution,
        LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.WRAP_CONTENT,
            LinearLayout.LayoutParams.WRAP_CONTENT
        )
    )
    content.addView(
        attributionRow,
        LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.MATCH_PARENT,
            LinearLayout.LayoutParams.WRAP_CONTENT
        ).apply { bottomMargin = dp(6) }
    )

    val titleRow = LinearLayout(context).apply {
        orientation = LinearLayout.HORIZONTAL
        gravity = Gravity.CENTER_VERTICAL
        layoutDirection = if (isArabic) View.LAYOUT_DIRECTION_RTL else View.LAYOUT_DIRECTION_LTR
    }

    ad.icon?.drawable?.let { drawable ->
        val iconView = ImageView(context).apply {
            setImageDrawable(drawable)
            scaleType = ImageView.ScaleType.CENTER_CROP
            contentDescription = if (isArabic) "شعار المعلن" else "Advertiser icon"
        }
        titleRow.addView(
            iconView,
            LinearLayout.LayoutParams(dp(36), dp(36)).apply {
                if (isArabic) leftMargin = dp(8) else rightMargin = dp(8)
            }
        )
        adView.iconView = iconView
    }

    val headlineView = TextView(context).apply {
        text = ad.headline
        textSize = 15f
        setTextColor(textColor)
        typeface = Typeface.DEFAULT_BOLD
        textDirection = View.TEXT_DIRECTION_FIRST_STRONG
        gravity = if (isArabic) Gravity.RIGHT else Gravity.LEFT
        maxLines = 2
        ellipsize = android.text.TextUtils.TruncateAt.END
        setLineSpacing(dp(1).toFloat(), 1f)
    }
    titleRow.addView(
        headlineView,
        LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
    )
    adView.headlineView = headlineView
    content.addView(
        titleRow,
        LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.MATCH_PARENT,
            LinearLayout.LayoutParams.WRAP_CONTENT
        ).apply { bottomMargin = dp(6) }
    )

    ad.body?.takeIf { it.isNotBlank() }?.let { body ->
        val bodyView = TextView(context).apply {
            text = body
            textSize = 12f
            maxLines = 2
            ellipsize = android.text.TextUtils.TruncateAt.END
            setTextColor(secondaryTextColor)
            textDirection = View.TEXT_DIRECTION_FIRST_STRONG
            gravity = if (isArabic) Gravity.RIGHT else Gravity.LEFT
            setLineSpacing(dp(2).toFloat(), 1f)
        }
        adView.bodyView = bodyView
        content.addView(
            bodyView,
            LinearLayout.LayoutParams(
                LinearLayout.LayoutParams.MATCH_PARENT,
                LinearLayout.LayoutParams.WRAP_CONTENT
            ).apply { bottomMargin = dp(10) }
        )
    }

    val actionRow = LinearLayout(context).apply {
        orientation = LinearLayout.HORIZONTAL
        gravity = Gravity.CENTER_VERTICAL
        layoutDirection = if (isArabic) View.LAYOUT_DIRECTION_RTL else View.LAYOUT_DIRECTION_LTR
    }

    ad.advertiser?.takeIf { it.isNotBlank() }?.let { advertiser ->
        val advertiserView = TextView(context).apply {
            text = advertiser
            textSize = 11f
            setTextColor(secondaryTextColor)
            textDirection = View.TEXT_DIRECTION_FIRST_STRONG
        }
        adView.advertiserView = advertiserView
        actionRow.addView(
            advertiserView,
            LinearLayout.LayoutParams(0, LinearLayout.LayoutParams.WRAP_CONTENT, 1f)
        )
    } ?: run {
        actionRow.addView(
            View(context),
            LinearLayout.LayoutParams(0, dp(1), 1f)
        )
    }

    val callToActionView = Button(context).apply {
        text = ad.callToAction
        isAllCaps = false
        textSize = 12f
        minHeight = dp(36)
        setTextColor(android.graphics.Color.WHITE)
        backgroundTintList = android.content.res.ColorStateList.valueOf(primaryColor)
        // Deliberately no click listener: the registered NativeAdView asset handles clicks.
    }
    adView.callToActionView = callToActionView
    actionRow.addView(
        callToActionView,
        LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.WRAP_CONTENT,
            dp(38)
        )
    )
    content.addView(
        actionRow,
        LinearLayout.LayoutParams(
            LinearLayout.LayoutParams.MATCH_PARENT,
            LinearLayout.LayoutParams.WRAP_CONTENT
        )
    )

    // Register the native ad after all displayed assets have been registered.
    adView.registerNativeAd(ad, null)
    return adView
}
