const uiDevice = require('./UIDevice');
const uiAutomaton = require('./UIAutomator');
const invoke = require('../../invoke');

class UiDeviceProxy {

  constructor(invocationManager) {
    this.invocationManager = invocationManager;
    this.getUIDevice = this.getUIDevice.bind(this);
  }

  getUIDevice() {
   return new Proxy(uiDevice, {
      get: (target, prop) => {
        if (target[prop] !== undefined) {
          if (prop === 'findObjectByText') {
            return async (...params) => {
              const call = target[prop](invoke.callDirectly(uiAutomaton.uiDevice()), invoke.callDirectly(uiAutomaton.uiSelectorByText(...params)));
              console.warn('call', call);
              const invokeResult = await this.invocationManager.execute(call);
              if (invokeResult && invokeResult && invokeResult.result) {
                  return invokeResult.result;
              }
            }
          }
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
