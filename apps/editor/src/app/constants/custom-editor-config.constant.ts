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
  initialData:
    '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n    You\'ve successfully created a CKEditor 5 project. This powerful text editor will enhance your application, enabling rich text editing\n    capabilities that are customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n    <li>\n        <strong>Integrate into your app</strong>: time to bring the editing into your application. Take the code you created and add to your\n        application.\n    </li>\n    <li>\n        <strong>Explore features:</strong> Experiment with different plugins and toolbar options to discover what works best for your needs.\n    </li>\n    <li>\n        <strong>Customize your editor:</strong> Tailor the editor\'s configuration to match your application\'s style and requirements. Or even\n        write your plugin!\n    </li>\n</ol>\n<p>\n    Keep experimenting, and don\'t hesitate to push the boundaries of what you can achieve with CKEditor 5. Your feedback is invaluable to us\n    as we strive to improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n    <li>📝 <a href="https://orders.ckeditor.com/trial/premium-features">Trial sign up</a>,</li>\n    <li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n    <li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n    <li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n    <li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n    See this text, but the editor is not starting up? Check the browser\'s console for clues and guidance. It may be related to an incorrect\n    license key if you use premium features or another feature-related requirement. If you cannot make it work, file a GitHub issue, and we\n    will help as soon as possible!\n</p>\n',
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
