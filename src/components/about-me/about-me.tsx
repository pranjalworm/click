import { h, Component, ComponentInterface, getAssetPath } from '@stencil/core';
import { Photograph } from '../../global/interfaces';
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
          <div>
            <p>
              I got my first camera when I was around 15. I have been hooked ever since.
            </p>
            <br />
            <p>
              I like shooting portraits
            </p>
            <br />
          </div>
        </div>


        <div id="image-div">
          <img src={imageSrc} alt={this.image.alt} />
        </div>

      </div>
    )
  }
}