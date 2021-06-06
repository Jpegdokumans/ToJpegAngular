import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(mod => mod.AdminLayoutModule)
      }
    ]
  }, 
  {
    path: "**",
    redirectTo: "dashboard"
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    BrowserModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
