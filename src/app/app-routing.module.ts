import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { TestLinkComponent } from './test-link/test-link.component';

const routes: Routes = [{path:'home', component: HomeComponent},
{path:"signin", component:SigninComponent},
{path:"register", component:RegisterComponent},
{path:'productmanage', component: ProductManageComponent},
{path:'dashboard', component:DashboardComponent},
{path:'links', component:TestLinkComponent},
{path:'', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
