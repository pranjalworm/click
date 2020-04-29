import { ImagesWrapperConfig } from "../../components/images-wrapper/images-wrapper"
import { GalleryType } from "../interfaces";

export namespace ImagesWrapperConfigsMap {

  const map: Map<string, ImagesWrapperConfig[]> = new Map();

  export const saveConfigs = (galleryType: GalleryType, wrapperConfigs: ImagesWrapperConfig[]) => {

    const galleryTypeStr = String(galleryType);

    map.set(galleryTypeStr, wrapperConfigs);
  }

  export const getConfigs = (galleryType: GalleryType) => {

    const galleryTypeStr = String(galleryType);

    const configs = map.get(galleryTypeStr);

    return configs ? configs : null;
  }

}

