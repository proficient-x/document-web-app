import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'authoring',
  exposes: {
    './Routes': 'apps/authoring/src/app/remote-entry/entry.routes.ts',
  },
  remotes: ['editor'],
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
