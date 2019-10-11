import { h, Component, Prop } from '@stencil/core';
import { Card } from '../../interfaces/Card';
import { RouterHistory } from '@stencil/router';
import { ROUTE_NAMES } from '../../services/routes.service';

@Component({
  tag: 'card-link',
  styleUrl: 'card-link.scss',
  shadow: true
})
export class CardLink {

  @Prop() card: Card = null;
  @Prop() history: RouterHistory;

  openLink() {
    this.history.push(ROUTE_NAMES[''], {});
  }

  render() {

    return (
      <div class="card-root" onClick={() => { this.openLink() }}>
        <div class="image">
          <img src={this.card.imageUrl} alt={this.card.imageAlt} />
        </div>
        <div class="meta">
          {
            this.card.title &&
            <div class="title">
              <span>{this.card.title}</span>
            </div>
          }
          {
            this.card.description &&
            <div class="description">
              <span>{this.card.description}</span>
            </div>
          }
        </div>
      </div>
    );
  }
}
