import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../components/home-page/home-page.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { OrdersComponent } from '../../components/orders/orders.component';
import { CartComponent } from '../../components/cart/cart.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ProductsByCategoryComponent } from '../../components/products-by-category/products-by-category.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { LoginComponent } from '../../components/login/login.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { ProductsCategoryAddComponent } from '../../farmer/components/products-category-add/products-category-add.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'chatbot', component: ChatBotComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'specific-product', component: ProductsByCategoryComponent },
  { path: 'products-category', component: ProductsCategoryAddComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
