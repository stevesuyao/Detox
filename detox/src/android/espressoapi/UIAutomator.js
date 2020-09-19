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

  static uiSelectorByText(text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.uiautomator.UiAutomator"
      },
      method: "uiSelectorByText",
      args: [text]
    };
  }

}

module.exports = UiAutomator;