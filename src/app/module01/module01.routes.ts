import { Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {Module01Component} from './module01.component'
import {Page01Component} from './page01/page01.component'

const routes:Routes =[
  {
    path:"",
    component:Module01Component,
    children:[
      {
        path:'page01',
        component:Page01Component
      },
      {
        path:'',
        redirectTo:'/page01',
        pathMatch:'full'
      }
    ]
  }
]

let moduleRouter:ModuleWithProviders  = RouterModule.forChild(routes)


export { moduleRouter }
