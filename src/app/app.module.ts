import { IsLogged } from './login/loggedIn.guard.service';
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
import { SuiModule } from 'ng2-semantic-ui';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SuiModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'menu', pathMatch: 'full'},
      { path: 'login', component: LoginComponent, canActivate: [IsLogged]},
      { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] }
    ])
  ],
  providers: [
    MenuDataService,
    AuthGuard,
    IsLogged
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
