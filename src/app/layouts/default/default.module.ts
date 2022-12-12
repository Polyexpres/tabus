import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { PollsComponent } from 'src/app/modules/polls/polls.component';
import { PollsEditComponent } from 'src/app/modules/polls/polls-edit/polls-edit.component';
import { PollsAddComponent } from 'src/app/modules/polls/polls-add/polls-add.component';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from '../../translate';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    DefaultComponent,
    TranslatePipe,
    DashboardComponent,
    PostsComponent,
    PollsComponent,
    PollsEditComponent,
    PollsAddComponent,
    DashboardService,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [
    TRANSLATION_PROVIDERS, TranslateService, DashboardService
  ]
})

export class DefaultModule { }
