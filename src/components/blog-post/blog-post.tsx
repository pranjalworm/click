/**
 * Page to display a single blog post
 */

import { h, Component, ComponentInterface, Prop, State, Listen, getAssetPath } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { Photograph, BlogPostId } from '../../global/interfaces';
import ImageLayout from '../../global/image-layout/image-layout';
import GalleryService from '../../services/gallery.service';
import { ImagesWrapperConfigsMap } from '../../global/image-layout/wrapper-configs-map';
import BlogService from '../../services/blog.service';


@Component({
  tag: 'blog-post',
  styleUrl: 'blog-post.scss',
  shadow: true,
  assetsDirs: ['../../assets']
})
export class BlogPost implements ComponentInterface {

  private blogPostId: BlogPostId;

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;

  @State() content: any;

  // @Listen('wrapper-image-clicked')
  // imageClickHandler(event: CustomEvent) {

  //   const id = event.detail;
  //   const index = BlogService.getIndexById(this.blogPostId, id);

  //   this.history.push(`/view-image/${this.blogPostId}/${index}`);
  // }


  async componentWillLoad() {

    this.content = this.showSpinner();
    this.content = await this.loadBlogPostContent();
  }


  showSpinner() {
    return (
      <div id="spinner-wrapper">
        <app-spinner></app-spinner>
      </div>
    )
  }

  async fetchImageWrapperConfigs(blogPostId: BlogPostId, images: Photograph[]) {

    // see if configs are already calculated for this blogpost
    let wrapperConfigs = ImagesWrapperConfigsMap.getConfigs(blogPostId);

    if (!wrapperConfigs) {

      const imageLayout = new ImageLayout();
      wrapperConfigs = await imageLayout.getImageWrapperConfigs(images);
      ImagesWrapperConfigsMap.saveConfigs(blogPostId, wrapperConfigs);
    }

    return wrapperConfigs;

  }


  processImageUrls(images: Photograph[]) {

    const imagesCopy: Photograph[] = JSON.parse(JSON.stringify(images));

    for (const image of imagesCopy) {

      image.url = getAssetPath(`../../assets/images/${image.url}`);
    }

    return imagesCopy;
  }


  async loadBlogPostContent() {

    this.blogPostId = this.match.params.blogPostId as BlogPostId;

    const images = GalleryService.getGalleryImages(this.blogPostId);
    const galleryImages = this.processImageUrls(images);
    const blogPostTitle = BlogService.getBlogPostTitle(this.blogPostId);
    const blogPostDescription = BlogService.getBlogPostDescription(this.blogPostId);
    const wrapperConfigs = await this.fetchImageWrapperConfigs(this.blogPostId, galleryImages);

    return (
      <div id="blog-post-content">
        <div id="blog-post-text">
          <div id="blog-post-title">
            {blogPostTitle}
          </div>
          <div id="blog-post-description">
            {blogPostDescription}
          </div>
        </div>
        <div id="blog-post-images-wrapper">
          {
            wrapperConfigs.map(config => {
              return (
                <images-wrapper
                  images={config.images}
                  style-class={config.styleClass}>
                </images-wrapper>
              )
            })
          }
        </div>
      </div>
    )
  }


  render() {

    return (
      <div id="blog-post-root">
        {this.content}
      </div>
    )
  }
}