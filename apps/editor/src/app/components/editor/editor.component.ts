import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { BalloonEditor, type EditorConfig } from 'ckeditor5';
import { CUSTOM_EDITOR_CONFIG } from '../../constants/custom-editor-config.constant';

@Component({
  selector: 'app-editor-editor',
  standalone: true,
  imports: [CommonModule, CKEditorModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
})
export class EditorComponent implements AfterViewInit {
  public isLayoutReady = false;

  public Editor = BalloonEditor;

  public config: EditorConfig = {};

  @ViewChild('editorOutlineElement')
  private editorOutline!: ElementRef<HTMLDivElement>;
  @ViewChild('editorAnnotationsElement')
  private editorAnnotations!: ElementRef<HTMLDivElement>;
  @ViewChild('editorContainerElement')
  private editorContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('editorRevisionHistoryElement')
  private editorRevisionHistory!: ElementRef<HTMLDivElement>;
  @ViewChild('editorRevisionHistoryEditorElement')
  private editorRevisionHistoryEditor!: ElementRef<HTMLDivElement>;
  @ViewChild('editorRevisionHistorySidebarElement')
  private editorRevisionHistorySidebar!: ElementRef<HTMLDivElement>;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.config = {
      ...CUSTOM_EDITOR_CONFIG,
      documentOutline: {
        container: this.editorOutline.nativeElement,
      },
      revisionHistory: {
        editorContainer: this.editorContainer.nativeElement,
        viewerContainer: this.editorRevisionHistory.nativeElement,
        viewerEditorElement: this.editorRevisionHistoryEditor.nativeElement,
        viewerSidebarContainer: this.editorRevisionHistorySidebar.nativeElement,
        resumeUnsavedRevision: true,
      },
      sidebar: {
        container: this.editorAnnotations.nativeElement,
      },
    };
    console.log(this.config);
    console.log();

    this.isLayoutReady = true;
    this.changeDetector.detectChanges();
  }
}
