export const EXPORT_TO_WORD = {
  stylesheets: [
    /* This path should point to application stylesheets. */
    /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word.html */
    './app.component.css',
    /* Export Word needs access to stylesheets that style the content. */
    'https://cdn.ckeditor.com/ckeditor5/43.3.1/ckeditor5.css',
    'https://cdn.ckeditor.com/ckeditor5-premium-features/43.3.1/ckeditor5-premium-features.css',
  ],
  fileName: 'export-word-demo.docx',
  converterOptions: {
    document: {
      orientation: 'portrait',
      size: 'Tabloid',
      margins: {
        top: '20mm',
        bottom: '20mm',
        right: '24mm',
        left: '24mm',
      },
    },
  },
};
