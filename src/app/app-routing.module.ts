import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelformComponent } from './modelform/modelform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  { path: 'templateform', component: TemplateformComponent},
  { path: 'reactiveform', component: ReactiveformComponent},
  { path: 'modelform', component: ModelformComponent},
  { path: 'observable', component: ObservableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
