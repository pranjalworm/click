import { h, Component, ComponentInterface, getAssetPath } from '@stencil/core';
import { AnalyticsEvent, AnalyticsEventProp, AnalyticsEventValue } from '../../global/analytics';
import { Photograph } from '../../global/interfaces';
import AnalyticsService from '../../services/analytics.service';
import PhotographService from '../../services/photograph.service';
import { ROUTES, ROUTE_NAME } from '../../services/route.service';

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


  mailLinkClickHandler() {

    AnalyticsService.logEvent(AnalyticsEvent.SELECT_ITEM, {
      content_type: AnalyticsEventProp.IN_APP_LINK,
      content_id: AnalyticsEventValue.EMAIL_ID_CLICK
    });
  }

  render() {

    const imageSrc = getAssetPath(`../../assets/images/${this.image.url}`);

    return [
      <stencil-route-title pageTitle={`${ROUTES[ROUTE_NAME.ABOUT_ME].title}`}></stencil-route-title>,
      <div id="about-me-root">

        <div id="description">
          <div>
            <p>
              i got my first camera when i was around 15. i soon realised that i liked to visualize the things around me inside an imaginary rectangular frame even when i did not have a camera on me. starting out i primarily used to click leaves, trees, flowers and landscapes, but eventually i gravitated towards human subjects. a human presence in the photograph creates a bridge between the viewer and photograph and just makes it that much more relatable.
            </p>
            <br />
            <p>
              i like shooting portraits, streets, landscapes and just about anything interesting, but i feel truly happy when i am creating silhouettes. the anonymous nature of a human silhouette against an interesting background allows the viewer to immerse into the picture and project her/himself into that scene. the picture is real yet dreamy at the same time.
            </p>
            <br />

            <p>
              for any enquiries regarding booking a photoshoot or buying prints of my photographs or if you just want to say hi, you can send me a mail at <a onClick={() => this.mailLinkClickHandler()} href="mailto:hi@pranjaldubey.photography">hi@pranjaldubey.photography</a>.
            </p>
            <br />
          </div>
        </div>


        <div id="image-div">
          <img src={imageSrc} alt={this.image.alt} />
        </div>

      </div>
    ]
  }
}