import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockContainerComponent } from './containers/mock-container/mock-container.component';
import { RouterModule, Routes } from '@angular/router';

const MOCK_FEATURE_ROUTES: Routes = [
  {
    path: '',
    component: MockContainerComponent
  }
];

@NgModule({
  declarations: [
    MockContainerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOCK_FEATURE_ROUTES)
  ]
})
export class MockFeatureModule { }
