import { loadRemoteModule, setRemoteDefinitions } from '@nx/angular/mf';
import {
  ComponentRef,
  EventEmitter,
  Injectable,
  OnDestroy,
  SimpleChange,
  Type,
  ViewContainerRef,
} from '@angular/core';

import {
  ILoadMfeConfig,
  IMfeConfig,
  IRemoteMfeComponent,
} from '../interface/mfe-config.interface';
import { SubSink } from '@dwa/core';

@Injectable()
export class LoadMfeUtils implements OnDestroy {
  private static _subs = new SubSink();

  public static getAllRemoteRoutes(mfeConfigs: IMfeConfig[]) {
    return mfeConfigs.map((mfeConfig) => this._loadRemote(mfeConfig));
  }

  private static _loadRemote(mfeConfig: IMfeConfig) {
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

  public static loadRemoteComponent(
    loadMfeConfig: ILoadMfeConfig,
    viewContainerRef: ViewContainerRef,
    isClearContainer = true
  ) {
    setRemoteDefinitions({
      [loadMfeConfig.mfe.remoteName]: loadMfeConfig.mfe.remoteEntryUrl,
    });

    return loadRemoteModule(
      loadMfeConfig.mfe.remoteName,
      loadMfeConfig.mfe.exposes
    ).then((m: any) => {
      let remoteComponent: ComponentRef<IRemoteMfeComponent> | null = null;
      const remoteComponentClass: IRemoteMfeComponent =
        m[loadMfeConfig.mfe.ngTypeName];

      if (isClearContainer) {
        viewContainerRef.clear();
      }

      if (remoteComponentClass && viewContainerRef) {
        remoteComponent = viewContainerRef.createComponent(
          remoteComponentClass as unknown as Type<IRemoteMfeComponent>
        );

        if (remoteComponent) {
          this._loadInputsOutputs(remoteComponent, loadMfeConfig);
        }
      }

      return remoteComponent;
    });
  }

  private static _loadInputsOutputs(
    remoteComponent: ComponentRef<IRemoteMfeComponent>,
    loadMfeConfig: ILoadMfeConfig
  ) {
    Object.keys(loadMfeConfig.component?.inputs).forEach((input) => {
      this._updateComponentInputValue(
        remoteComponent,
        input,
        loadMfeConfig.component?.inputs[input]
      );
    });

    Object.keys(loadMfeConfig.component?.outputs).forEach((output) => {
      this._listenComponentOutputEvents(remoteComponent, loadMfeConfig, output);
    });
  }

  private static _updateComponentInputValue(
    remoteComponent: ComponentRef<IRemoteMfeComponent>,
    key: string,
    value: unknown
  ) {
    const changes: { [key: string]: SimpleChange } = {};

    if (remoteComponent.instance) {
      changes[key] = new SimpleChange(
        remoteComponent.instance[key],
        value,
        false
      );
      remoteComponent.instance[key] = value;

      if (remoteComponent.instance.ngOnChanges)
        remoteComponent.instance.ngOnChanges(changes[key]);
    }
  }

  private static _listenComponentOutputEvents(
    remoteComponent: ComponentRef<IRemoteMfeComponent>,
    loadMfeConfig: ILoadMfeConfig,
    key: string
  ) {
    if (remoteComponent.instance && remoteComponent.instance[key]) {
      this._subs.sink = (
        remoteComponent.instance[key] as EventEmitter<unknown>
      ).subscribe(loadMfeConfig.component.outputs[key]);
    } else {
      console.error(
        `Output event ${key} is not available in the remote component`
      );
    }
  }

  ngOnDestroy() {
    LoadMfeUtils._subs.unsubscribe();
  }
}
