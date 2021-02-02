/**

	This code is generated.
	For more information see generation/README.md.
*/



class UiAutomator {
  static uiDevice() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "uiDevice",
      args: []
    };
  }

  static findObjectByText(text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "findObjectByText",
      args: [text]
    };
  }

  static findObjectByDescription(text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "findObjectByDescription",
      args: [text]
    };
  }

  static findObjectContainsText(text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "findObjectContainsText",
      args: [text]
    };
  }

  static findObjectByClassName(text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "findObjectByClassName",
      args: [text]
    };
  }

  static findObjectByPackageName(text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "findObjectByPackageName",
      args: [text]
    };
  }

  static findObjectByResourceId(id) {
    if (typeof id !== "string") throw new Error("id should be a string, but got " + (id + (" (" + (typeof id + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "findObjectByResourceId",
      args: [id]
    };
  }

  static findObjectFromSiblingParent(text, resId, packageName, parentLevel) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    if (typeof resId !== "string") throw new Error("resId should be a string, but got " + (resId + (" (" + (typeof resId + ")"))));
    if (typeof packageName !== "string") throw new Error("packageName should be a string, but got " + (packageName + (" (" + (typeof packageName + ")"))));
    if (typeof parentLevel !== "number") throw new Error("parentLevel should be a number, but got " + (parentLevel + (" (" + (typeof parentLevel + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "findObjectFromSiblingParent",
      args: [text, resId, packageName, {
        type: "Integer",
        value: parentLevel
      }]
    };
  }

}

module.exports = UiAutomator;
