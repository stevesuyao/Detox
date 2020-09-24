package com.wix.detox.uiautomator;

import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.uiautomator.UiDevice;
import androidx.test.uiautomator.UiSelector;
import androidx.test.uiautomator.UiObject;
import android.util.Log;

import android.content.res.Resources;

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

    public static UiObject findObjectByText(String text) {
      Log.i(TAG, "call findObjectByText method with : " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .text(text));
      return uiObject;
    }

    public static UiObject findObjectContainsText(String text) {
      Log.i(TAG, "call findObjectContainsText method with : " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .textContains(text));
      return uiObject;
    }

    public static UiObject findObjectByClassName(String text) {
      Log.i(TAG, "call findObjectByClassName method with : " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .className(text));
      return uiObject;
    }

    public static UiObject findObjectByPackageName(String text) {
      Log.i(TAG, "call findObjectByPackageName method with : " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .packageName(text));
      return uiObject;
    }

}
