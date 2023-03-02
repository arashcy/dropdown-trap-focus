import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { A11yModule } from '@angular/cdk/a11y';
import { NgbdDropdownBasic } from './dropdown-basic';
import { GuidesAndFaqsComponent } from './guides-and-faqs/guides-and-faqs.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    A11yModule,
    RouterModule.forRoot([
      { path: 'list', component: ListComponent },
      { path: 'guide-faq', component: GuidesAndFaqsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: '**', redirectTo: '/list', pathMatch: 'full' },
    ]),
  ],
  declarations: [
    NgbdDropdownBasic,
    GuidesAndFaqsComponent,
    ContactUsComponent,
    FeedbackComponent,
    ListComponent,
  ],
  exports: [NgbdDropdownBasic],
  bootstrap: [NgbdDropdownBasic],
})
export class NgbdDropdownBasicModule {}
