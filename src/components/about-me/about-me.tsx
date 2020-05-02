import { h, Component, ComponentInterface, getAssetPath } from '@stencil/core';
import { Photograph } from '../../global/interfaces';
import PhotographService from '../../services/photograph.service';

@Component({
  tag: 'about-me',
  styleUrl: 'about-me.scss',
  shadow: true,
  assetsDir: '../../assets'
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
              I am a full-time programmer, part-time photographer, die hard reader.
            </p>
            <br />
            <p>
              I like traveling. I love eating Pizza.
            </p>
            <br />
            <p>
              The quick brown fox jumps right over the lazy dog.
              The quick brown fox jumps right over the lazy dog.
            </p>
          </div>

          <div>
            I built this website myself, checkout the source code <a target="_blank" id="source-link" href="https://github.com/pranjalworm/click">here on Github</a>.
          </div>
        </div>


        <div id="image-div">
          <img src={imageSrc} alt={this.image.alt} />
        </div>

      </div>
    )
  }
}