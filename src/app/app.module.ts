import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './core/containers/main/main.component';
import { RootComponent } from './core/containers/root/root.component';
import { RouterModule, Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/mock-feature/mock-feature.module').then(m => m.MockFeatureModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }

]

@NgModule({
  declarations: [
    MainComponent,
    RootComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([...APP_ROUTES])
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
