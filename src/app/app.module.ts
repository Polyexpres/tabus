import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { PollsEditComponent } from './modules/polls/polls-edit/polls-edit.component';
import { PollsAddComponent } from './modules/polls/polls-add/polls-add.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';


@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService,], //DashboardService],
  bootstrap: [AppComponent],
  entryComponents:[PollsEditComponent, PollsAddComponent, ConfirmDialogComponent]
})
export class AppModule { }
