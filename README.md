# Render Large Lists in Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## 1. Virtual Scrolling

Use CDK's Scrolling module:

```
npm i @angular/cdk
```

Import the module:
```
import { ScrollingModule } from '@angular/cdk/scrolling';
@NgModule({
 ...
 imports: [ ScrollingModule, ...]
})
export class AppModule {}
```

Used:
```
<cdk-virtual-scroll-viewport itemSize="50" class="example-viewport">
  <app-employee-item *cdkVirtualFor="let item of employees" [employee]="item" class="example-item">{{item}}</app-employee-item>
</cdk-virtual-scroll-viewport>
```
