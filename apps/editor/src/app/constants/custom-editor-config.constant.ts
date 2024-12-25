import { type EditorConfig } from 'ckeditor5';

import { IMAGE } from './image.constant';
import { TABLE } from './table.constant';
import { MENTION } from './mention.constant';
import { COMMENTS } from './comments.constant';
import { TEMPLATE } from './template.constant';
import { LICENSE_KEY } from './license-keys.constant';
import { EXPORT_TO_PDF } from './export-pdf.constant';
import { EXPORT_TO_WORD } from './export-word.constant';
import { EXTRA_PLUGINS, PLUGINS } from './plugins.constant';
import { BLOCK_TOOLBAR, TOOLBAR } from './toolbar.constant';
import { KEY_MAPPING_CONFIG } from './key-mapping-config.constant';
import { REVISION_HISTORY } from './revision-history.constant';

export const CUSTOM_EDITOR_CONFIG: EditorConfig = {
  initialData: '',
  placeholder: 'Type or paste your content here!',
  [KEY_MAPPING_CONFIG.TOOLBAR]: { ...TOOLBAR, ...BLOCK_TOOLBAR },
  [KEY_MAPPING_CONFIG.PLUGINS]: [...PLUGINS],
  // [KEY_MAPPING_CONFIG.EXTRA_PLUGINS]: [...EXTRA_PLUGINS],
  // [KEY_MAPPING_CONFIG.LICENSE_KEY]: LICENSE_KEY,
  // [KEY_MAPPING_CONFIG.BLOCK_TOOLBAR]: BLOCK_TOOLBAR,
  [KEY_MAPPING_CONFIG.COMMENTS]: COMMENTS,
  [KEY_MAPPING_CONFIG.MENTION]: MENTION,
  [KEY_MAPPING_CONFIG.EXPORT_TO_PDF]: EXPORT_TO_PDF,
  [KEY_MAPPING_CONFIG.EXPORT_TO_WORD]: EXPORT_TO_WORD,
  [KEY_MAPPING_CONFIG.IMAGE]: IMAGE,
  [KEY_MAPPING_CONFIG.REVISION_HISTORY]: REVISION_HISTORY,
  [KEY_MAPPING_CONFIG.TEMPLATE]: TEMPLATE,
  [KEY_MAPPING_CONFIG.TABLE]: TABLE,
  fontFamily: {
    supportAllValues: true,
  },
  fontSize: {
    options: [10, 12, 14, 'default', 18, 20, 22],
    supportAllValues: true,
  },
  heading: {
    options: [
      {
        model: 'paragraph',
        title: 'Paragraph',
        class: 'ck-heading_paragraph',
      },
      {
        model: 'heading1',
        view: 'h1',
        title: 'Heading 1',
        class: 'ck-heading_heading1',
      },
      {
        model: 'heading2',
        view: 'h2',
        title: 'Heading 2',
        class: 'ck-heading_heading2',
      },
      {
        model: 'heading3',
        view: 'h3',
        title: 'Heading 3',
        class: 'ck-heading_heading3',
      },
      {
        model: 'heading4',
        view: 'h4',
        title: 'Heading 4',
        class: 'ck-heading_heading4',
      },
      {
        model: 'heading5',
        view: 'h5',
        title: 'Heading 5',
        class: 'ck-heading_heading5',
      },
      {
        model: 'heading6',
        view: 'h6',
        title: 'Heading 6',
        class: 'ck-heading_heading6',
      },
    ],
  },
  htmlSupport: {
    allow: [
      {
        name: /^.*$/,
        styles: true,
        attributes: true,
        classes: true,
      },
    ],
  },
  link: {
    addTargetToExternalLinks: true,
    defaultProtocol: 'https://',
    decorators: {
      toggleDownloadable: {
        mode: 'manual',
        label: 'Downloadable',
        attributes: {
          download: 'file',
        },
      },
    },
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true,
    },
  },
  mergeFields: {
    /* Read more: https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html#configuration */
  },
  style: {
    definitions: [
      {
        name: 'Article category',
        element: 'h3',
        classes: ['category'],
      },
      {
        name: 'Title',
        element: 'h2',
        classes: ['document-title'],
      },
      {
        name: 'Subtitle',
        element: 'h3',
        classes: ['document-subtitle'],
      },
      {
        name: 'Info box',
        element: 'p',
        classes: ['info-box'],
      },
      {
        name: 'Side quote',
        element: 'blockquote',
        classes: ['side-quote'],
      },
      {
        name: 'Marker',
        element: 'span',
        classes: ['marker'],
      },
      {
        name: 'Spoiler',
        element: 'span',
        classes: ['spoiler'],
      },
      {
        name: 'Code (dark)',
        element: 'pre',
        classes: ['fancy-code', 'fancy-code-dark'],
      },
      {
        name: 'Code (bright)',
        element: 'pre',
        classes: ['fancy-code', 'fancy-code-bright'],
      },
    ],
  },
};
