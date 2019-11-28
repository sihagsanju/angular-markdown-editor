import { Component, OnInit, ViewEncapsulation, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MarkdownService } from 'ngx-markdown';
import { EditorInstance, EditorLocale, EditorOption } from '../../lib/angular-markdown-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  bsEditorInstance: EditorInstance;
  markdownText: string;
  showEditor = true;
  templateForm: FormGroup;
  editorOptions: EditorOption;
  locale: EditorLocale = {
    language: 'fr',
    dictionary: {
      'Bold': 'Gras',
      'Italic': 'Italique',
      'Heading': 'Titre',
      'Image': '',
      'List': 'Liste à puces',
      'Ordered List': 'Liste ordonnée',
      'Unordered List': 'Liste non-ordonnée',
      'Code': 'Code',
      'Quote': 'Citation',
      'Preview': 'Preview',
      'Table': 'Table',
      'strong text': 'texte important',
      'emphasized text': 'texte souligné',
      'heading text': 'texte d\'entête',
    }
  };

  constructor( private fb: FormBuilder,
               private markdownService: MarkdownService) { }

  ngOnInit() {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      onShow: (e) => this.bsEditorInstance = e,
      parser: (val) => this.parse(val)
    };

    // put the text completely on the left to avoid extra white spaces
    this.markdownText =
`### Markdown example
---
This is an **example** where we bind a variable to the \`markdown\` component that is also bind to a textarea.
#### example.component.ts
\`\`\`javascript
function hello() {
  alert('Hello World');
}
\`\`\`
#### example.component.css
\`\`\`css
.bold {
  font-weight: bold;
}
\`\`\``;

    this.buildForm(this.markdownText);
  }

  buildForm(markdownText) {
    this.templateForm = this.fb.group({
      body: [markdownText],
      isPreview: [true]
    });
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  hidePreview() {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }

  showFullScreen(isFullScreen: boolean) {
    if (this.bsEditorInstance && this.bsEditorInstance.setFullscreen) {
      this.bsEditorInstance.showPreview();
      this.bsEditorInstance.setFullscreen(isFullScreen);
    }
  }

  parse(inputValue: string) {
    const markedOutput = this.markdownService.compile(inputValue.trim());
    this.highlight();

    return markedOutput;
  }

}
