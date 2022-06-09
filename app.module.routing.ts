import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { MyfirstcomponentComponent } from './myfirstcomponent/myfirstcomponent.component';
import { MysecondcomponentComponent } from './mysecondcomponent/mysecondcomponent.component';



const routes: Routes = [
    { path: 'first-component', component: MyfirstcomponentComponent },
    { path: 'second-component', component: MysecondcomponentComponent},
]; // sets up routes constant where you define your routes


// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }