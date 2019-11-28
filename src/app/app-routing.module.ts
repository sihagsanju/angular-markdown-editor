import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';


const routes: Routes = [
  { path: 'template-editor', component: EditorComponent },
  { path: '', redirectTo: '/template-editor', pathMatch: 'full' },
  { path: '**', redirectTo: '/template-editor', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
