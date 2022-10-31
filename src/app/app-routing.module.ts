import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./pages/user_management/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user_management/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'add-role',
    loadChildren: () => import('./pages/role_management/add-role/add-role.module').then( m => m.AddRolePageModule)
  },
  {
    path: 'role-list',
    loadChildren: () => import('./pages/role_management/role-list/role-list.module').then( m => m.RoleListPageModule)
  },
  {
    path: 'role-permission',
    loadChildren: () => import('./pages/role_management/role-permission/role-permission.module').then( m => m.RolePermissionPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
