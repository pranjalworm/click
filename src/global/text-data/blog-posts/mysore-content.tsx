import { h } from '@stencil/core';

export namespace MysoreContent {

  export const getTitle = () => {
    return 'Mysore title';
  };

  export const getDescription = () => {
    return 'mysore description';
  };

  export const getContent = () => {
    return (
      <div>Dummy mysore content</div>
    )
  };

}