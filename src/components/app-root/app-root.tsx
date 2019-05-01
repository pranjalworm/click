import { Component, EventEmitter, Event } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false
})
export class AppRoot {

  @Event() loaded: EventEmitter;

  componentDidLoad() {
    this.loaded.emit(true);
  }

  render() {
    return (

      <div id="app-root">

        <header>
          Pranjal Dubey
        </header>

        <main>
          {/* <stencil-router>
            <stencil-route-switch>
              <stencil-route url="/" component="landing-page"></stencil-route>
              <stencil-route url="/galleries" component="project-page"></stencil-route>
              <stencil-route url="/blog" component="blog-page"></stencil-route>
            </stencil-route-switch>
          </stencil-router> */}

          {/* <view-image></view-image> */}
          <landing-page></landing-page>
        </main>

      </div>
    );
  }
}
