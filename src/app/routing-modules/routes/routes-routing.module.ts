import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../components/home-page/home-page.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { OrdersComponent } from '../../components/orders/orders.component';
import { CartComponent } from '../../components/cart/cart.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { ProductsByCategoryComponent } from '../../components/products-by-category/products-by-category.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'chatbot', component: ChatBotComponent },
  { path: 'cart', component: CartComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'specific-product', component: ProductsByCategoryComponent },
  { path: '', pathMatch: 'full', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
