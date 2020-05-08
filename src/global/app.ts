import { StoreService, StoreProps } from "../services/store.service";
import { ThemeService } from "../services/theme.service";


export default async () => {
  /**
   * The code to be executed should be placed within a default function that is
   * exported by the global script. Ensure all of the code in the global script
   * is wrapped in the function() that is exported.
   */

  // initialising store
  const storeConfig = {
    [StoreProps.ViewingImage]: false
  };

  new StoreService(storeConfig);

  // initialising theme
  ThemeService.init();

};
