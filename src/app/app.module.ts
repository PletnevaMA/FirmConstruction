import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpinionComponent } from './opinion/opinion.component';
import { ContactComponent } from './contact/contact.component';
import { OobjectComponent} from './oobject/oobject.component';
import { OobjectService } from './oobject/oobject.service'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent,   
  },
  { 
    path: 'oobject',  
    component: OobjectComponent,
  },
  { 
    path: 'opinion',  
    component: OpinionComponent,
  },
  { 
    path: 'contact',  
    component: ContactComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    OobjectComponent,
    HomeComponent,
    OpinionComponent,
    ContactComponent,
   
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [OobjectService],
  bootstrap: [AppComponent],

})
export class AppModule { }
