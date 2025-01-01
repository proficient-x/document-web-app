import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoadMfeUtils, ILoadMfeConfig } from '@dwa/core/load-mfe';

import { environment } from '../../environments/environment';

import { DocumentOutlineComponent } from '../components/document-outline/document-outline.component';

import { DocumentDetailsService } from '../services/document-details.service';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, DocumentOutlineComponent],
  selector: 'app-authoring-authoring-entry',
  template: `<div class="row">
    <div class="col-md-3">
      <app-authoring-document-outline
        [documentDetails]="documentDetails"
      ></app-authoring-document-outline>
    </div>
    <div class="col-md-9">
      <!-- <router-outlet></router-outlet> -->
      <ng-template #ckEditorContainer></ng-template>
    </div>
  </div>`,
  styles: ['::ng-deep .p-tree-wrapper ul {padding-left:0rem;}'],
  providers: [DocumentDetailsService],
})
export class RemoteEntryComponent implements OnInit, AfterViewInit {
  documentDetails: any;

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('docId') private readonly _docId?: string;

  @ViewChild('ckEditorContainer', { read: ViewContainerRef })
  ckEditorContainer!: ViewContainerRef;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private _documentDetailsService: DocumentDetailsService
  ) {}

  ngOnInit(): void {
    if (this._docId) this._getDocumentDetails(+this._docId);
  }

  ngAfterViewInit(): void {
    // Comment out this line once data fetching is implemented
    // this._loadEditor();
  }

  private _getDocumentDetails(docId: number) {
    this._documentDetailsService
      .getDocumentDetailsByDocId(docId)
      .subscribe((documentDetails: any) => {
        console.log(documentDetails);
        this.documentDetails = documentDetails;
        this._showEditor([this.documentDetails]);
      });
  }

  private async _loadEditor(content = '') {
    const remoteRoutes: ILoadMfeConfig = {
      mfe: {
        remotePath: '',
        remoteEntryUrl: environment.editor,
        remoteName: 'editor',
        exposes: './CkEditor',
        ngTypeName: 'EditorComponent',
      },
      component: {
        inputs: { content },
        outputs: {},
      },
    };

    await LoadMfeUtils.loadRemoteComponent(
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

  private async _showEditor(section: any) {
    for (const sec of section) {
      await this._loadEditor(sec.description);
      if (sec.sections.length > 0) {
        await this._showEditor(sec.sections);
      }
    }
  }
}
