import { AuthGuard } from './login/auth.guard.service';
import { Http } from '@angular/http';
import { MenuDataService } from './../providers/menu-data/menu-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path: 'login', component: LoginComponent},
      { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [
    MenuDataService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
