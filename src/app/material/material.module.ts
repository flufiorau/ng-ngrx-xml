import {NgModule} from '@angular/core';
import {
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
  MatGridListModule, MatToolbarModule
} from '@angular/material';

export const MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatToolbarModule
];

@NgModule({
  imports: [
    MATERIAL_MODULES
  ],
  exports: [
    MATERIAL_MODULES
  ]
})
export class MaterialModule {
}
