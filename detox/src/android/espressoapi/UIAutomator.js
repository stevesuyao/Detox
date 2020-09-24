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
}

module.exports = UiAutomator;
