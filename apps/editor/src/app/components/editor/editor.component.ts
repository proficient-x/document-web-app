import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { InlineEditor, type EditorConfig } from 'ckeditor5';
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

  public Editor = InlineEditor;

  public config: EditorConfig = {};

  @Input() content = '';

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
      initialData: this.content,
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

    this.isLayoutReady = true;
    this.changeDetector.detectChanges();
  }
}
