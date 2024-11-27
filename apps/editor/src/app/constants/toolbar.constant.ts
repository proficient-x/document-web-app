import { KEY_MAPPING_CONFIG } from './key-mapping-config.constant';
import { TOOLBAR_ITEMS } from './toolbar-items.constant';

export const TOOLBAR = {
  [KEY_MAPPING_CONFIG.ITEMS]: TOOLBAR_ITEMS,
  shouldNotGroupWhenFull: false,
};

export const BLOCK_TOOLBAR = [
  'comment',
  '|',
  'fontSize',
  'fontColor',
  'fontBackgroundColor',
  '|',
  'bold',
  'italic',
  '|',
  'link',
  'insertTable',
  '|',
  'bulletedList',
  'numberedList',
  'outdent',
  'indent',
];
