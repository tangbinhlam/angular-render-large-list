import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularVirtialScrollingCdkComponent } from './angular-virtial-scrolling-cdk/angular-virtial-scrolling-cdk.component';

const routes: Routes = [
  {
    path: 'scrolling-cdk',
    component: AngularVirtialScrollingCdkComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
