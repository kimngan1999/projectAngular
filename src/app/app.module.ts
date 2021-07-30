import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestLinkComponent } from './test-link/test-link.component';
import { FilterVariableComponent } from './filter-variable/filter-variable.component';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { ApiService } from './Services/api.service';
import { CookieService } from 'ngx-cookie-service';

import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './auth/auth.component'; 


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    SigninComponent,
    ProductManageComponent,
    DashboardComponent,
    TestLinkComponent,
    FilterVariableComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    
    
  ],
  providers: [ CookieService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
