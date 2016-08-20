/**
 * Created by yxin on 8/18/2016.
 */
import { NgModule,
  ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
// import * as PrimengMoudule from 'primeng/primeng';
// import {Column} from 'primeng/primeng';

@NgModule({
  imports:      [ CommonModule ],
  // declarations: [ AwesomePipe, HighlightDirective, TitleComponent ],
  exports:      [
    CommonModule, FormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      // providers: [ UserService ]
    };
  }
}
