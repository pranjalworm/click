import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {
  globalStyle: 'src/global/styles/global-master.scss',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/service-worker.js'
      }
    }
  ],
  plugins: [
    sass()
  ]
};
