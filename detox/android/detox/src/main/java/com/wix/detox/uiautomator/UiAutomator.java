package com.wix.detox.uiautomator;

import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.uiautomator.UiDevice;
import androidx.test.uiautomator.UiSelector;
import android.util.Log;

/**
 * Created by rotemm on 30/08/2017.
 */

public class UiAutomator {
    public static final String TAG = "detoxDebug";

    private UiAutomator() {}

    public static UiDevice uiDevice() {
        Log.i(TAG, "call uiDevice method!");
        return UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
    }

    public static UiSelector uiSelectorByText(String text) {
      Log.i(TAG, "call uiSelectorByText method with : " + text);
      return new UiSelector().text(text);
    }
}
