import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module01Component } from './module01.component';
import { Page01Component } from './page01/page01.component';
import { moduleRouter} from './module01.routes';

@NgModule({
  imports: [
    CommonModule,
    moduleRouter
  ],
  declarations: [Module01Component, Page01Component]
})
export class Module01Module { }
