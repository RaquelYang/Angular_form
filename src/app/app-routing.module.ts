import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelformComponent } from './modelform/modelform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component'

const routes: Routes = [
  { path: 'templateform', component: TemplateformComponent},
  { path: 'reactiveform', component: ReactiveformComponent},
  { path: 'modelform', component: ModelformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
