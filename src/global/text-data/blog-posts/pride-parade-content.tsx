import { h } from '@stencil/core';

export namespace PrideParadeContent {

  export const getTitle = () => {
    return 'PrideParade title';
  }


  export const getDescription = () => {
    return 'Pride parade description';
  };


  export const getContent = () => {
    return (
      <div>Dummy pride parade content</div>
    )
  }

}