import { EventEmitter, SimpleChange } from '@angular/core';

interface IInput {
  [key: string]: unknown;
}

interface IOutput {
  [key: string]: EventEmitter<any>;
}

export interface IMfeConfig {
  remotePath?: string;
  remoteEntryUrl: string;
  remoteName: string;
  exposes: string;
  ngTypeName: string;
}

export interface ILoadMfeConfig {
  mfe: IMfeConfig;
  module?: any;
  component: {
    inputs: IInput;
    outputs: IOutput;
  };
}

export interface IRemoteMfeComponent {
  [key: string]:
    | unknown
    | EventEmitter<unknown>
    | ((changes: { [key: string]: SimpleChange }) => void);
  ngOnChanges: (changes: SimpleChange) => void;
}
