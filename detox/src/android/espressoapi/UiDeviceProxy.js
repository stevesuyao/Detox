const uiDevice = require('./UIDevice');
const uiAutomaton = require('./UIAutomator');
const UiObjectProxy = require('./UiObjectProxy');
const invoke = require('../../invoke');

class UiDeviceProxy {

  constructor(invocationManager) {
    this.invocationManager = invocationManager;
    this.getUIDevice = this.getUIDevice.bind(this);
  }

  getUIDevice() {
   return new Proxy(uiDevice, {
      get: (target, prop) => {
        if (prop === 'findObject') {
          return (...params) => {
            return new UiObjectProxy(this.invocationManager);
          }
        }
        if (target[prop] !== undefined) {
          return async (...params) => {
            const call = target[prop](invoke.callDirectly(uiAutomaton.uiDevice()), ...params);
            console.warn('call', call);
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

module.exports = UiDeviceProxy;
