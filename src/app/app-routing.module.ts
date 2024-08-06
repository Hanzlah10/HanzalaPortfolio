import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonPageComponent } from "./coming-soon-page/coming-soon-page.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleProjectComponent } from "./single-project/single-project.component";

export const routes: Routes = [
    {
        path: 'ComingSoon',
        component: ComingSoonPageComponent
    },
    // {
    //     path: '',
    //     component: LandingPageComponent
    // },
    // {
    //     path: 'projects/:id',
    //     component: SingleProjectComponent
    // },
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