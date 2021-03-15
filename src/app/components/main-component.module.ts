import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrimaryFooterComponent} from './primary-footer/primary-footer.component';
import {CardViewComponent} from './card-view/card-view.component';
import {PrimaryHeaderComponent} from './primary-header/primary-header.component';
import {NotificationBarComponent} from './notification-bar/notification-bar.component';
import {LoaderComponent} from './loader/loader.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [PrimaryFooterComponent, CardViewComponent, PrimaryHeaderComponent, NotificationBarComponent, LoaderComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [PrimaryFooterComponent, CardViewComponent, PrimaryHeaderComponent, NotificationBarComponent, LoaderComponent]
})
export class MainComponentModule {
}
