import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConferenceComponent } from './conference/conference.component';
import { AboutComponent } from './about/about.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '', component: ConferenceComponent
  },
  {
    path: 'conference', component: ConferenceComponent
  },
  {
    path: 'speaker', component: SpeakerComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path : 'blog', component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
