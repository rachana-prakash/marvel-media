import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const mainRoutes: Routes = [
  {path: '', redirectTo: 'marvelNews', pathMatch: 'full'},
  {
    path: 'marvelNews',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {path: '**', redirectTo: '/marvelNews'}
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
