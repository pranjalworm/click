/**
 * Page to display all blogs' card links
 */

import { h, Component, ComponentInterface, Prop, Listen } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { CardListType, CardListMode, BlogPostId } from '../../global/interfaces';
import { CardListConfig } from '../card-list/card-list';


@Component({
  tag: 'blog-page',
  styleUrl: 'blog-page.scss',
  shadow: true
})
export class BlogPage implements ComponentInterface {

  @Prop() history: RouterHistory;
  @Prop() match: MatchResults;


  @Listen('card-link-clicked')
  cardLinkClickedHandler(event: CustomEvent) {

    const blogPost = event.detail;
    this.openBlogPost(blogPost);
  }


  openBlogPost(blogPostId: BlogPostId) {

    this.history.push(`/blog-post/${blogPostId}`);
  }


  render() {

    const cardListConfig: CardListConfig = {
      cardListType: CardListType.Blog,
      cardListMode: CardListMode.Page
    }

    return (
      <div id="blog-page-root">
        <card-list config={cardListConfig}></card-list>
      </div>
    )
  }
}