import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BangladeshComponent } from './bangladesh/bangladesh.component';
import { WorldComponent } from './world/world.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes= [
  { path: '', component: HomeComponent},
  { path: 'bangladesh', component: BangladeshComponent},
  { path: 'world', component: WorldComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent}
  

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BangladeshComponent,
    WorldComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
