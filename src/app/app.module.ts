import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { AngularMarkdownEditorModule } from '../lib/angular-markdown-editor/angular-markdown-editor.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({
      provide: MarkedOptions,
      useFactory: (): MarkedOptions => {
        return {
          renderer: new MarkedRenderer(),
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false,
        };
      },
    }),
    ReactiveFormsModule,
    AngularMarkdownEditorModule.forRoot({
      // add any Global Options/Config you might want
      // to avoid passing the same options over and over in each components of your App
      iconlibrary: 'glyph'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
