export namespace Utils {

  export const isMobileScreen = () => {

    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    return width < 780;
  }
}