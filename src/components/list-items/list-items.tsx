import { h, Component, Prop, ComponentInterface } from '@stencil/core';
import { RouterHistory, MatchResults } from '@stencil/router';
import { ROUTE_NAMES } from '../../services/routes.service';
import { ListItemProps } from '../../interfaces/ListItemProps';

@Component({
  tag: 'list-items',
  styleUrl: 'list-items.scss',
  shadow: true
})
export class ListItems implements ComponentInterface {

  @Prop() match: MatchResults;
  @Prop() listItemProps: ListItemProps = null;
  @Prop() history: RouterHistory;

  componentWillLoad() {

  }

  openLink() {
    // TODO: finish this
    this.history.push(ROUTE_NAMES.galleries, {});
  }

  render() {

    return (
      <div>list items</div>
    );
  }
}
