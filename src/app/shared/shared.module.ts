import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from '../common-component/common-header/common-header.component';
// Material module start
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
// Material module end
import { ProgressBarModule } from 'angular-progress-bar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgSelectModule } from '@ng-select/ng-select'; // angular dropdown
import { CommonFooterComponent } from '../common-component/common-footer/common-footer.component';
@NgModule({
  declarations: [
    CommonHeaderComponent, //header component share
    CommonFooterComponent, //footer component share
  ],
  imports: [
    CommonModule,
    // Material module start
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule,
    MatRippleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // Material module end
    ProgressBarModule,
    NgApexchartsModule,
    NgSelectModule // angular dropdown
  ],
  exports: [
    CommonHeaderComponent, //header component share
    CommonFooterComponent, //footer component share
    // Material module start
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatButtonModule,
    MatRippleModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // Material module end
    ProgressBarModule,
    NgApexchartsModule,
    NgSelectModule // angular dropdown
  ]
})
export class SharedModule { }
