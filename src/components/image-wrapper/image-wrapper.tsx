import { h, Component, ComponentInterface, Prop } from '@stencil/core';
import { Photograph } from '../../global/interfaces';

@Component({
  tag: 'about-me',
  styleUrl: 'about-me.scss',
  shadow: true
})
export class AboutMe implements ComponentInterface {

  @Prop() images: Photograph[] = [];
  @Prop() classname: string;


  render() {

    for (const image of this.images) {


    }

    return (
      <div class={this.classname}>

      </div>
    )
  }
}