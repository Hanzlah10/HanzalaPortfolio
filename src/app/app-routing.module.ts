import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonPageComponent } from "./coming-soon-page/coming-soon-page.component";

export const routes: Routes = [
    {
        path: 'ComingSoon',
        component: ComingSoonPageComponent
    },
    {
        path: '', redirectTo: 'ComingSoon', pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'ComingSoon'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }