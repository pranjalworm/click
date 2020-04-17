import { h, Component, ComponentInterface } from '@stencil/core';
import ImageService from '../../services/image.service';
import { Image } from '../../global/interfaces';

@Component({
  tag: 'app-landing',
  styleUrl: 'app-landing.scss',
  shadow: true
})
export class AppLanding implements ComponentInterface {

  private bannerImage: Image = null;
  private landingImages: Image[] = [];


  componentWillLoad() {

    this.bannerImage = ImageService.getBannerImage();
    this.landingImages = ImageService.getLandingImages();
  }

  handleImageClick(image: Image, index: number) {
    console.log(`arya > index: ${index}`)
    console.log(image);
  }


  render() {

    return (
      <div id="landing-root">

        <div id="landing-section">
          <div id="banner-image">
            <img src={this.bannerImage.url} alt={this.bannerImage.alt} />
          </div>
          <div id="banner-caption">
            <span>{this.bannerImage.caption}</span>
          </div>
        </div>

        <div id="landing-images-parent">
          {
            this.landingImages.map((image: Image, index: number) => {
              return (
                <img onClick={() => this.handleImageClick(image, index)}
                  src={image.url}
                  alt={image.alt} />
              )
            })
          }
        </div>

      </div>
    );
  }
}
