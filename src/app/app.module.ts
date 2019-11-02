import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { FooterComponent } from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes : Routes = [
  { path:'tab-1', component: Tab1Component },
  { path:'tab-2', component: Tab2Component },
  { path:'tab-3', component: Tab3Component },
  { path:'', pathMatch: 'full', redirectTo: 'tab-1' },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TabsComponent,
    Tab1Component,
    FooterComponent,
    Tab2Component,
    Tab3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
