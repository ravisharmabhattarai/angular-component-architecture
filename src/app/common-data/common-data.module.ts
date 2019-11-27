import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './items.service';
import { WidgetsService } from './widgets.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ItemsService,
    WidgetsService
  ]
})

export class CommonDataModule {
}
