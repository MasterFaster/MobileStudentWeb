import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes, AppRoutingModule } from './app-routing.module';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DemoMaterialModule } from './material-module';
import { PresenceCheckComponent } from './presence-check/presence-check.component';
import { GradesComponent } from './grades/grades.component';
import { CancelClassesComponent } from './cancel-classes/cancel-classes.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PresenceCheckComponent,
    GradesComponent,
    CancelClassesComponent
  ],
  imports: [
    RouterModule.forRoot(
      AppRoutes,
      {enableTracing: true} ),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
