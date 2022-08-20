import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FaceSnapListComponent} from "./face-snap-list/face-snap-list.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";


// list of root routes of application
const routes: Routes = [
  {path: 'facesnaps', component: FaceSnapListComponent },
  {path: '', component: LandingPageComponent }

];

@NgModule({
  //to register routes in the router
  imports: [
    RouterModule.forRoot(routes)
  ],
  //to export modules routes configured
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
