import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BioComponent } from '../app/bio/bio.component';
import { AngularComponent } from './angular/angular.component';
import { JamzComponent } from './jamz/jamz.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', component: BioComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'angular', component: AngularComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
