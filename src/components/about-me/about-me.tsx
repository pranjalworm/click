import { h, Component, ComponentInterface, getAssetPath } from '@stencil/core';
import { Photograph } from '../../global/interfaces';
import { getAboutMeContent } from '../../global/text-data';
import PhotographService from '../../services/photograph.service';

@Component({
  tag: 'about-me',
  styleUrl: 'about-me.scss',
  shadow: true,
  assetsDirs: ['../../assets']
})
export class AboutMe implements ComponentInterface {

  private image: Photograph;

  componentWillLoad() {
    this.image = PhotographService.getAboutMePageImage();
  }

  render() {

    const imageSrc = getAssetPath(`../../assets/images/${this.image.url}`);

    return (
      <div id="about-me-root">

        <div id="description">
          {getAboutMeContent()}
        </div>

        <div id="image-div">
          <img src={imageSrc} alt={this.image.alt} />
        </div>

      </div>
    )
  }
}