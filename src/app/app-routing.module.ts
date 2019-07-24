import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" },
  // {
  //   path: "menu",
  //   component: MenuComponent,
  //   children: [
  //     { path: "dashboard", component: DashboardComponent },
  //     { path: "fuel", component: FuelComponent },
  //     { path: "users", component: UsersComponent }
  //   ],
  //   runGuardsAndResolvers: "always"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent];