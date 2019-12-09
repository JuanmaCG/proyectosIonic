import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'proyecto',
    children: [
      {
        path: '',
        loadChildren: './proyecto/proyecto.module#ProyectoPageModule'
      },
      {
        path: 'detail/:proyectoId',
        loadChildren: './proyecto-detail/proyecto-detail.module#ProyectoDetailPageModule'
      },
      {
        path: 'edit/:proyectoId',
        loadChildren: './proyecto-edit/proyecto-edit.module#ProyectoEditPageModule'
      },
      {
        path: 'create',
        loadChildren: () => import('./proyecto-create/proyecto-create.module').then( m => m.ProyectoCreatePageModule)
      }
    ]
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
