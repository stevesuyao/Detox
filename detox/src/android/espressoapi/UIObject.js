/**

	This code is generated.
	For more information see generation/README.md.
*/



class UiObject {
  static getChildCount(element) {
    return {
      target: element,
      method: "getChildCount",
      args: []
    };
  }

  static dragTo(element, destX, destY, steps) {
    if (typeof destX !== "number") throw new Error("destX should be a number, but got " + (destX + (" (" + (typeof destX + ")"))));
    if (typeof destY !== "number") throw new Error("destY should be a number, but got " + (destY + (" (" + (typeof destY + ")"))));
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: element,
      method: "dragTo",
      args: [{
        type: "Integer",
        value: destX
      }, {
        type: "Integer",
        value: destY
      }, {
        type: "Integer",
        value: steps
      }]
    };
  }

  static swipeUp(element, steps) {
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: element,
      method: "swipeUp",
      args: [{
        type: "Integer",
        value: steps
      }]
    };
  }

  static swipeDown(element, steps) {
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: element,
      method: "swipeDown",
      args: [{
        type: "Integer",
        value: steps
      }]
    };
  }

  static swipeLeft(element, steps) {
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: element,
      method: "swipeLeft",
      args: [{
        type: "Integer",
        value: steps
      }]
    };
  }

  static swipeRight(element, steps) {
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: element,
      method: "swipeRight",
      args: [{
        type: "Integer",
        value: steps
      }]
    };
  }

  static click(element) {
    return {
      target: element,
      method: "click",
      args: []
    };
  }

  static clickAndWaitForNewWindow(element) {
    return {
      target: element,
      method: "clickAndWaitForNewWindow",
      args: []
    };
  }

  static clickTopLeft(element) {
    return {
      target: element,
      method: "clickTopLeft",
      args: []
    };
  }

  static longClickBottomRight(element) {
    return {
      target: element,
      method: "longClickBottomRight",
      args: []
    };
  }

  static clickBottomRight(element) {
    return {
      target: element,
      method: "clickBottomRight",
      args: []
    };
  }

  static longClick(element) {
    return {
      target: element,
      method: "longClick",
      args: []
    };
  }

  static longClickTopLeft(element) {
    return {
      target: element,
      method: "longClickTopLeft",
      args: []
    };
  }

  static getText(element) {
    return {
      target: element,
      method: "getText",
      args: []
    };
  }

  static getClassName(element) {
    return {
      target: element,
      method: "getClassName",
      args: []
    };
  }

  static getContentDescription(element) {
    return {
      target: element,
      method: "getContentDescription",
      args: []
    };
  }

  static setText(element, text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
    return {
      target: element,
      method: "setText",
      args: [text]
    };
  }

  static clearTextField(element) {
    return {
      target: element,
      method: "clearTextField",
      args: []
    };
  }

  static isChecked(element) {
    return {
      target: element,
      method: "isChecked",
      args: []
    };
  }

  static isSelected(element) {
    return {
      target: element,
      method: "isSelected",
      args: []
    };
  }

  static isCheckable(element) {
    return {
      target: element,
      method: "isCheckable",
      args: []
    };
  }

  static isEnabled(element) {
    return {
      target: element,
      method: "isEnabled",
      args: []
    };
  }

  static isClickable(element) {
    return {
      target: element,
      method: "isClickable",
      args: []
    };
  }

  static isFocused(element) {
    return {
      target: element,
      method: "isFocused",
      args: []
    };
  }

  static isFocusable(element) {
    return {
      target: element,
      method: "isFocusable",
      args: []
    };
  }

  static isScrollable(element) {
    return {
      target: element,
      method: "isScrollable",
      args: []
    };
  }

  static isLongClickable(element) {
    return {
      target: element,
      method: "isLongClickable",
      args: []
    };
  }

  static getPackageName(element) {
    return {
      target: element,
      method: "getPackageName",
      args: []
    };
  }

  static getVisibleBounds(element) {
    return {
      target: element,
      method: "getVisibleBounds",
      args: []
    };
  }

  static getBounds(element) {
    return {
      target: element,
      method: "getBounds",
      args: []
    };
  }

  static exists(element) {
    return {
      target: element,
      method: "exists",
      args: []
    };
  }

  static pinchOut(element, percent, steps) {
    if (typeof percent !== "number") throw new Error("percent should be a number, but got " + (percent + (" (" + (typeof percent + ")"))));
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: element,
      method: "pinchOut",
      args: [{
        type: "Integer",
        value: percent
      }, {
        type: "Integer",
        value: steps
      }]
    };
  }

  static pinchIn(element, percent, steps) {
    if (typeof percent !== "number") throw new Error("percent should be a number, but got " + (percent + (" (" + (typeof percent + ")"))));
    if (typeof steps !== "number") throw new Error("steps should be a number, but got " + (steps + (" (" + (typeof steps + ")"))));
    return {
      target: element,
      method: "pinchIn",
      args: [{
        type: "Integer",
        value: percent
      }, {
        type: "Integer",
        value: steps
      }]
    };
  }

}

module.exports = UiObject;