package com.wix.detox.uiautomator;

import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.uiautomator.UiDevice;
import androidx.test.uiautomator.UiSelector;
import androidx.test.uiautomator.By;
import androidx.test.uiautomator.BySelector;
import androidx.test.uiautomator.UiObject;
import androidx.test.uiautomator.UiObject2;
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
      Log.i(TAG, "call findObjectByText method with text: " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .text(text));
      return uiObject;
    }

    public static UiObject findObjectByDescription(String text) {
      Log.i(TAG, "call findObjectByDescription method with text: " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .description(text));
      return uiObject;
    }

    public static UiObject findObjectContainsText(String text) {
      Log.i(TAG, "call findObjectContainsText method with contained text: " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .textContains(text));
      return uiObject;
    }

    public static UiObject findObjectByClassName(String text) {
      Log.i(TAG, "call findObjectByClassName method with class name: " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .className(text));
      return uiObject;
    }

    public static UiObject findObjectByPackageName(String text) {
      Log.i(TAG, "call findObjectByPackageName method with package name: " + text);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .packageName(text));
      return uiObject;
    }

    public static UiObject findObjectByResourceId(String id) {
      Log.i(TAG, "call findObjectByResourceId method with id : " + id);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      UiObject uiObject = device.findObject(new UiSelector()
        .resourceId(id));
      return uiObject;
    }

    public static UiObject2 findObjectFromSiblingParent(String text, String resId, String packageName, int parentLevel) {
      /* Use the method to search a sibling item from two levels up parent as in the below layout
      LinearLayout
        LinearLayout
          relative layout
              text View
        LinearLayout
            item with resourceId/packageName to search
      */
      Log.i(TAG, "call findObjectFromSiblingParent method with : " + text + " " + resId + " " + packageName + " " + parentLevel);
      UiDevice device = UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
      BySelector selector = By.text(text);
      UiObject2 siblingObject = device.findObject(selector);
      UiObject2 parent;
      if (siblingObject != null) {
        parent = siblingObject.getParent();
        if (parent == null) {
          Log.i(TAG, "Failed to call findObjectFromSiblingParent method, sibling view has no parent.");
          return null;
        }
        if (parentLevel > 1) {
          for (int i = 1; i < parentLevel; i++) {
            Log.i(TAG, "level up");
            UiObject2 nextParent = parent.getParent();
            if (nextParent == null) {
              Log.i(TAG, "Failed to call findObjectFromSiblingParent method, sibling view has no mutilple levels parent.");
              return null;
            }
            parent = nextParent;
          }
        }
        try {
          BySelector selector2 = By.res(packageName, resId);
          UiObject2 uiObject = parent.findObject(selector2);
          if (uiObject == null) {
            Log.i(TAG, "Can not find target." + " " + packageName + " " + resId);
            return null;
          }
          Log.i(TAG, "Found target");
          return uiObject;
        }
        catch (Exception e) {
          Log.i(TAG, "Got error while calling findObjectFromSiblingParent method.");
          return null;
        }
      }
      Log.i(TAG, "Failed to call findObjectFromSiblingParent method, there was no sibling view has text " + text);
      return null;
    }

}
