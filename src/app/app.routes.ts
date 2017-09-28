import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core'
const routes: Routes = [
  {
    path: "module01",
    loadChildren: "app/module01/module01.module#Module01Module"
  },
  {
    path: '',
    redirectTo: '/module01',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/module01',
    pathMatch: 'full'
  },
]

let appRouter: ModuleWithProviders = RouterModule.forRoot(routes)

export { appRouter }
