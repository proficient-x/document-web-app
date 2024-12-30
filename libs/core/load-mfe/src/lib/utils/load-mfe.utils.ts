import { loadRemoteModule, setRemoteDefinitions } from '@nx/angular/mf';

import { MfeConfig } from '../interface/mfe-config.interface';

export class LoadMfeUtils {
  public static getAllRemoteRoutes(mfeConfigs: MfeConfig[]) {
    return mfeConfigs.map((mfeConfig) => LoadMfeUtils._loadRemote(mfeConfig));
  }

  private static _loadRemote(mfeConfig: MfeConfig) {
    console.log('loadRemoteModule', mfeConfig);

    return {
      path: mfeConfig.remotePath,
      loadChildren: () => {
        setRemoteDefinitions({
          [mfeConfig.remoteName]: mfeConfig.remoteEntryUrl,
        });

        return loadRemoteModule(mfeConfig.remoteName, mfeConfig.exposes).then(
          (m: any) => m[mfeConfig.ngTypeName]
        );
      },
    };
  }
}
