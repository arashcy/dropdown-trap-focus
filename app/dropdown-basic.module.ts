import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { A11yModule } from '@angular/cdk/a11y';
import { NgbdDropdownBasic } from './dropdown-basic';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    A11yModule,
    RouterModule.forRoot([
      { path: 'list', component: ListComponent },
      { path: '**', redirectTo: '/list', pathMatch: 'full' },
    ]),
  ],
  declarations: [NgbdDropdownBasic, ListComponent],
  exports: [NgbdDropdownBasic],
  bootstrap: [NgbdDropdownBasic],
})
export class NgbdDropdownBasicModule {}
