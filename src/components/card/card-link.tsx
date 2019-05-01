import { Component, Prop } from '@stencil/core';
import { Card } from '../../interfaces/Card';

@Component({
  tag: 'card-link',
  styleUrl: 'card-link.scss',
  shadow: false
})
export class CardLink {

  @Prop() card: Card = null;

  openLink() {
    console.log(`arya > open link`)
  }

  render() {

    return (
      <div class="card-root" onClick={() => { this.openLink() }}>
        <div class="card-image">
          <img src={this.card.imageUrl} alt={this.card.imageAlt} />
        </div>
        <div class="card-meta">
          <div class="card-description">
            <span>{this.card.description}</span>
            <span><i class="fas fa-chevron-right"></i></span>
          </div>
        </div>
      </div>
    );
  }
}
