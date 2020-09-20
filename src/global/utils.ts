export namespace Utils {

  export const isMobileScreen = () => {

    const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    return width < 780;
  }


  //The min and max are both inclusive
  export const getRandomNumber = (min: number, max: number) => {

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  /**
   * returns true if website is running locally
   */
  export const isRunningLocally = () => {

    return window.location.href.includes('localhost');
  }
}