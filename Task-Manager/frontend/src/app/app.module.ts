import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [HttpClientModule],
})
export class AppModule {}
