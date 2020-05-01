import { h, Component, ComponentInterface, Prop } from '@stencil/core';
import { ToastMessageType } from '../../global/interfaces';

export interface ToastConfig {
  message: string;
  toastMessageType: ToastMessageType;
}

@Component({
  tag: 'app-toast',
  styleUrl: 'app-toast.scss',
  shadow: true
})
export class AppToast implements ComponentInterface {

  @Prop() toastConfig: ToastConfig;

  toastContent() {

    if (!this.toastConfig) {
      return;
    }

    const styleClass = this.toastConfig.toastMessageType === ToastMessageType.Success ?
      'success' : 'failure';

    return (
      <div id="app-toast-root" class={styleClass}>
        {this.toastConfig.message}
      </div>
    )
  }

  render() {

    return this.toastContent()

  }
}