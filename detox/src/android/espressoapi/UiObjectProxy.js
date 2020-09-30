const uiObject = require('./UIObject');
const uiAutomaton = require('./UIAutomator');
const invoke = require('../../invoke');

class UiObjectProxy {

  constructor(invocationManager) {
    this.invocationManager = invocationManager;
  }

  byText(text) {
   return new Proxy(uiObject, {
      get: (target, prop) => {
        if (target[prop] !== undefined) {
          return async (...params) => {
            const call = target[prop](invoke.callDirectly(uiAutomaton.findObjectByText(text)), ...params);
            const invokeResult = await this.invocationManager.execute(call);
            if (invokeResult && invokeResult && invokeResult.result) {
                return invokeResult.result;
            }
          }
        }
      }
    });
  }

  containsText(text) {
   return new Proxy(uiObject, {
      get: (target, prop) => {
        if (target[prop] !== undefined) {
          return async (...params) => {
            const call = target[prop](invoke.callDirectly(uiAutomaton.findObjectContainsText(text)), ...params);
            const invokeResult = await this.invocationManager.execute(call);
            if (invokeResult && invokeResult && invokeResult.result) {
                return invokeResult.result;
            }
          }
        }
      }
    });
  }

  byClassName(text) {
   return new Proxy(uiObject, {
      get: (target, prop) => {
        if (target[prop] !== undefined) {
          return async (...params) => {
            const call = target[prop](invoke.callDirectly(uiAutomaton.findObjectByClassName(text)), ...params);
            const invokeResult = await this.invocationManager.execute(call);
            if (invokeResult && invokeResult && invokeResult.result) {
                return invokeResult.result;
            }
          }
        }
      }
    });
  }

  byPackageName(text) {
   return new Proxy(uiObject, {
      get: (target, prop) => {
        if (target[prop] !== undefined) {
          return async (...params) => {
            const call = target[prop](invoke.callDirectly(uiAutomaton.findObjectByPackageName(text)), ...params);
            const invokeResult = await this.invocationManager.execute(call);
            if (invokeResult && invokeResult && invokeResult.result) {
                return invokeResult.result;
            }
          }
        }
      }
    });
  }

  byResourceId(id) {
   return new Proxy(uiObject, {
      get: (target, prop) => {
        if (target[prop] !== undefined) {
          return async (...params) => {
            const call = target[prop](invoke.callDirectly(uiAutomaton.findObjectByResourceId(id)), ...params);
            const invokeResult = await this.invocationManager.execute(call);
            if (invokeResult && invokeResult && invokeResult.result) {
                return invokeResult.result;
            }
          }
        }
      }
    });
  }

  fromSiblingParent(text, resId, packageName, level) {
   return new Proxy(uiObject, {
      get: (target, prop) => {
        if (target[prop] !== undefined) {
          return async (...params) => {
            const call = target[prop](invoke.callDirectly(uiAutomaton.findObjectFromSiblingParent(text, resId, packageName, level)), ...params);
            const invokeResult = await this.invocationManager.execute(call);
            if (invokeResult && invokeResult && invokeResult.result) {
                return invokeResult.result;
            }
          }
        }
      }
    });
  }

}

module.exports = UiObjectProxy;
