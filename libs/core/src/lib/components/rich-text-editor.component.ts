import {
  AfterViewInit,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ILoadMfeConfig, LoadMfeUtils } from '@dwa/core/load-mfe';

import { getRemoteUrl } from '../utils/environment.utils';
import { ROUTE_CONFIG } from '../constants/route-config.constants';

@Component({
  selector: 'lib-rich-text-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rich-text-editor.component.html',
  styleUrl: './rich-text-editor.component.scss',
})
export class RichTextEditorComponent implements AfterViewInit {
  @Input() data: any;

  @ViewChild('ckEditorContainer', { read: ViewContainerRef })
  ckEditorContainer!: ViewContainerRef;

  ngAfterViewInit() {
    this._loadEditor(this.data.description);
  }

  private _loadEditor(content = '') {
    const remoteRoutes: ILoadMfeConfig = {
      mfe: {
        remotePath: '',
        remoteEntryUrl: getRemoteUrl(ROUTE_CONFIG.EDITOR),
        remoteName: 'editor',
        exposes: './CkEditor',
        ngTypeName: 'EditorComponent',
      },
      component: {
        inputs: { content },
        outputs: {},
      },
    };

    LoadMfeUtils.loadRemoteComponent(
      remoteRoutes,
      this.ckEditorContainer,
      false
    );

    /**** Old logic to load component
      setRemoteDefinitions({ editor: environment.editor });
      const { EditorComponent } = await loadRemoteModule('editor', './CkEditor');

      // Uncomment this line to clear the container before loading the editor
      // this.ckEditorContainer.clear();
      const factory = this._resolver.resolveComponentFactory(EditorComponent);
      const componentRef: ComponentRef<typeof EditorComponent> =
        this.ckEditorContainer.createComponent(factory);
    */

    /*** Another way to set input property of remote component.
      const remoteComponent: ComponentRef<IRemoteMfeComponent> | null =
        await LoadMfeUtils.loadRemoteComponent(
          remoteRoutes,
          this.ckEditorContainer,
          false
        );

      if (remoteComponent) {
      remoteComponent.instance['content'] = content;
      }
     */
  }
}
