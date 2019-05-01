import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';


export const config: Config = {
  globalStyle: 'src/global/styles/app.scss',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ],
  plugins: [
    sass()
  ]
};
