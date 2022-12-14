import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { PollsComponent } from './modules/polls/polls.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [
    {
      path: '',
      component: PollsComponent
    },{
      path: 'polls',
      component: PollsComponent
    },{
      path: 'dashboard',
      component: DashboardComponent
    },{
      path: 'posts',
      component: PostsComponent
  },]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
