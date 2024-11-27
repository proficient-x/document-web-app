import { Autoformat, Bold, Italic, List, Mention } from 'ckeditor5';

export const COMMENTS = {
  editorConfig: {
    extraPlugins: [Autoformat, Bold, Italic, List, Mention],
    mention: {
      feeds: [
        {
          marker: '@',
          feed: [
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#comments-with-mentions */
          ],
        },
      ],
    },
  },
};
