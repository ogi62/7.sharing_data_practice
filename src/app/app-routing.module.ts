import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent-child',
    loadChildren: () =>
      import('./feature/parent-child/parent-child.module').then(
        (m) => m.ParentChildModule
      ),
  },
  {
    path: 'child-parent',
    loadChildren: () =>
      import('./feature/child-parent/child-parent.module').then(
        (m) => m.ChildParentModule
      ),
  },
  {
    path: 'share-service',
    loadChildren: () =>
      import('./feature/share-service/share-service.module').then(
        (m) => m.ShareServiceModule
      ),
  },
  {
    path: '**',
    redirectTo: 'parent-child',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
