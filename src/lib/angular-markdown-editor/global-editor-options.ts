import { EditorOption } from './models/editorOption.interface';

export const GlobalEditorOptions: EditorOption = {
  autofocus: false,
  disabledButtons: [],
  dropZoneOptions: null,
  enableDropDataUri: false,
  footer: '',
  height: 'inherit',
  hiddenButtons: [],
  hideable: false,
  iconlibrary: 'glyph',
  initialstate: 'editor',
  language: 'fr',
  additionalButtons: [
    [
    {
      name: 'groupMisc',
      data: [{
        name: 'cmdTable',
        toggle: false,
        title: 'Table',
        icon: {
          fa: 'fa fa-table',
          glyph: 'glyphicon glyphicon-th'
        },
        callback: (e) => {
          // Replace selection with some drinks
          let chunk;
          let cursor;
          const selected = e.getSelection();

          chunk = '\n| Tables        | Are           | Cool  | \n'
            + '| ------------- |:-------------:| -----:| \n'
            + '| col 3 is      | right-aligned | $1600 | \n'
            + '| col 2 is      | centered      |   $12 | \n'
            + '| zebra stripes | are neat      |    $1 |';

          // transform selection and set the cursor into chunked text
          e.replaceSelection(chunk);
          cursor = selected.start;

          // Set the cursor
          e.setSelection(cursor, cursor + chunk.length);
        }
      }]
    }]
  ]
};
