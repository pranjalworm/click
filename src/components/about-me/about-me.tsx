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
              I got my first camera when I was around 15. I soon realised that I liked to visualize the things around me inside an imaginary rectangular frame even when I did not have a camera on me. Starting out I primarily used to click leaves, trees, flowers and landscapes, but eventually I gravitated towards human subjects. A human presence in the photograph creates a bridge between the viewer and photograph and just makes it much more relatable.
            </p>
            <br />
            <p>
              I like shooting portraits, streets, landscapes and just about anything interesting, but I feel truly happy when I am creating silhouettes. The anonymous nature of a human silhouette against an interesting background allows the viewer to immerse into the picture and project her/himself into that scene. The picture is real yet dreamy at the same time.
            </p>
            <br />

            <p>
              For any enquiries regarding booking a photoshoot or buying prints of my photographs or if you just want to say Hi, you can send me a mail at <a href="mailto:hi@pranjaldubey.photography">hi@pranjaldubey.photography</a>.
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