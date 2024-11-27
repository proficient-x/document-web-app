export const EXPORT_TO_PDF = {
  stylesheets: [
    /* This path should point to application stylesheets. */
    /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-pdf.html */
    './app.component.css',
    /* Export PDF needs access to stylesheets that style the content. */
    'https://cdn.ckeditor.com/ckeditor5/43.3.1/ckeditor5.css',
    'https://cdn.ckeditor.com/ckeditor5-premium-features/43.3.1/ckeditor5-premium-features.css',
  ],
  fileName: 'export-pdf-demo.pdf',
  converterOptions: {
    format: 'Tabloid',
    margin_top: '20mm',
    margin_bottom: '20mm',
    margin_right: '24mm',
    margin_left: '24mm',
    page_orientation: 'portrait',
  },
};
