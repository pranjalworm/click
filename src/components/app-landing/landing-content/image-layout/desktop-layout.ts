import { Photograph } from "../../../../global/interfaces";

export default class DesktopLayout {

  static getLayoutWrappers(imageWrappers: HTMLElement[],
    _landspaceImages: Photograph[],
    _portraitImages: Photograph[]) {


    DesktopLayout.arrangeWrappers(imageWrappers);
  }


  private static arrangeWrappers(_imageWrappers: HTMLElement[]) {

  }
}