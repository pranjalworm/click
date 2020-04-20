import {
  h,
  Component,
  ComponentInterface
} from '@stencil/core';


@Component({
  tag: 'app-spinner',
  styleUrl: 'app-spinner.scss',
  shadow: true
})
export class AppSpinner implements ComponentInterface {

  render() {

    return (

      <div id="spinner-root">

        <div id="ripple"><div></div><div></div></div>

      </div>

    );
  }
}
