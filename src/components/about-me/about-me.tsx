import { h, Component, ComponentInterface } from '@stencil/core';
import { Photograph } from '../../global/interfaces';
import PhotographService from '../../services/photograph.service';

@Component({
  tag: 'about-me',
  styleUrl: 'about-me.scss',
  shadow: true
})
export class AboutMe implements ComponentInterface {

  private image: Photograph;

  componentWillLoad() {
    this.image = PhotographService.getAboutMePageImage();
  }

  render() {
    return (
      <div id="about-me-root">

        <div id="description">
          <div>
            <p>
              I am Pranjal Dubey, full-time programmer, part-time photographer, die hard reader.
              The quick brown fox jumps right over the lazy dog.
              The quick brown fox jumps right over the lazy dog.
            </p>
            <br />
            <p>
              The quick brown fox jumps right over the lazy dog.
              The quick brown fox jumps right over the lazy dog.
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
          <img src={this.image.url} alt={this.image.alt} />
        </div>

      </div>
    )
  }
}