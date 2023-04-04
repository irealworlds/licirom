import {NgModule, Optional, SkipSelf} from '@angular/core';
import {environment} from 'src/environments/environment';
import {EnvironmentConfig} from 'src/app/core/environment/environment-config.model';


@NgModule({
  providers: [
    {
      provide: EnvironmentConfig,
      useValue: environment,
    },
  ]
})
export class CoreModule {
  /**
   * Constructor
   */
  constructor(
    @Optional() @SkipSelf() parentModule?: CoreModule
  ) {
    // Do not allow multiple injections
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
    }
  }
}
