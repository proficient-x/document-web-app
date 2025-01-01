import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FocusEvent } from '@ckeditor/ckeditor5-angular';

import { ILoadMfeConfig, LoadMfeUtils } from '@dwa/core/load-mfe';

import { getRemoteUrl } from '../utils/environment.utils';
import { ROUTE_CONFIG } from '../constants/route-config.constants';
import { OnHoverDirective } from '../directives/on-hover.directive';

@Component({
  selector: 'lib-rich-text-editor',
  standalone: true,
  imports: [CommonModule, OnHoverDirective],
  templateUrl: './rich-text-editor.component.html',
  styleUrl: './rich-text-editor.component.scss',
})
export class RichTextEditorComponent implements AfterViewInit {
  @Input() data: any;

  @Output() focusEditor: EventEmitter<FocusEvent> = new EventEmitter();

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
        outputs: {
          _focusEditor: this.focusEditor,
        },
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
