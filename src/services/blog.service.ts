// import { Photograph } from "../global/interfaces";

import { BlogPostId, Photograph, BlogPost } from "../global/interfaces";
import * as ImageData from '../global/image-data';
import { Utils } from "../global/utils";
import { GokarnaContent, MysoreContent, PrideParadeContent, SilhouettesContent } from "../global/text-data";


// only these blogs will be shown throughout the app
export enum EnabledBlogPostId {
  Mysore = 'mysore',
  Gokarna = 'gokarna',
  PrideParade = 'pride-parade',
  Silhouettes = 'silhouettes'
}


export default class BlogService {

  /**
   * @param cardCount number of cards required
   */
  static getBlogCards(cardCount?: number): BlogPost[] {

    let blogPostCards: BlogPost[] = [];
    let counter = 0;

    for (let blogPostId in BlogPostId) {

      if (isNaN(Number(blogPostId)) && blogPostId in EnabledBlogPostId) {

        if (cardCount && counter === cardCount) {
          break;
        }

        const id = BlogPostId[blogPostId];
        const blogPostCardConfig = BlogService.createBlogPost(id);

        blogPostCards.push(blogPostCardConfig);
        counter++;
      }
    }

    return blogPostCards;
  }


  private static createBlogPost(blogPostId: BlogPostId): BlogPost {

    return {
      image: BlogService.getBlogPostBanner(blogPostId),
      title: BlogService.getBlogPostTitle(blogPostId),
      description: BlogService.getBlogPostDescription(blogPostId),
      id: blogPostId
    }
  }


  static getBlogPostTitle(blogPostId: BlogPostId): string {

    switch (blogPostId) {
      case BlogPostId.Gokarna:
        return GokarnaContent.getTitle();

      case BlogPostId.Mysore:
        return MysoreContent.getTitle();

      case BlogPostId.PrideParade:
        return PrideParadeContent.getTitle();

      case BlogPostId.Silhouettes:
        return SilhouettesContent.getTitle();

      default:
        console.error(`BlogService > getBlogTitle > blogPostId: ${blogPostId} not found!`);
    }
  }


  static getBlogPostDescription(blogPostId: BlogPostId): string {

    switch (blogPostId) {
      case BlogPostId.Gokarna:
        return GokarnaContent.getDescription();

      case BlogPostId.Mysore:
        return MysoreContent.getDescription();

      case BlogPostId.PrideParade:
        return PrideParadeContent.getDescription();

      case BlogPostId.Silhouettes:
        return SilhouettesContent.getDescription();

      default:
        console.error(`BlogService > getBlogTitle > blogPostId: ${blogPostId} not found!`);
    }
  }


  static getBlogPostContent(blogPostId: BlogPostId): string {

    switch (blogPostId) {
      case BlogPostId.Gokarna:
        return GokarnaContent.getContent();

      case BlogPostId.Mysore:
        return MysoreContent.getContent();

      case BlogPostId.PrideParade:
        return PrideParadeContent.getContent();

      case BlogPostId.Silhouettes:
        return SilhouettesContent.getContent();

      default:
        console.error(`BlogService > getBlogPostContent > blogPostId: ${blogPostId} not found!`);
    }
  }


  /**
   * fetches the banner image for the specified blogpost according to the
   * user's device
   */
  static getBlogPostBanner(blogPostId: BlogPostId): Photograph {

    const viewingOnMobile = Utils.isMobileScreen();

    switch (blogPostId) {
      case BlogPostId.Gokarna:
        return viewingOnMobile ? ImageData.GokarnaBannerMobile :
          ImageData.GokarnaBannerDesktop;

      case BlogPostId.Mysore:
        return viewingOnMobile ? ImageData.MysoreBannerMobile :
          ImageData.MysoreBannerDesktop;

      case BlogPostId.PrideParade:
        return viewingOnMobile ? ImageData.PrideParadeBannerMobile :
          ImageData.PrideParadeBannerDesktop;

      case BlogPostId.Silhouettes:
        return viewingOnMobile ? ImageData.SilhouettesBannerMobile :
          ImageData.SilhouettesBannerDesktop;

      default:
        console.error(`BlogService > getBlogPostBanner > blogPostId: ${blogPostId} not found!`);
    }
  }

}