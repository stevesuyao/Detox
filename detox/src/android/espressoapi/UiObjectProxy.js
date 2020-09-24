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
            console.warn('findObjectByText', call);
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
            console.warn('findObjectByText', call);
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
            console.warn('findObjectByText', call);
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
            console.warn('findObjectByText', call);
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
