import { createLab } from '@islavi/ng-component-lab';
import { ComponentsModule } from './../stories/ng-component-lab/components.module';

const themeName: string = 'default';
// const themeName:string = '1802';

// Select the theme
if (themeName === '1802') {
  require('./themes/ng-component-lab-theme-1802.scss');
} else {
  // Default theme
  require('./ng-component-lab.scss');
}

createLab({
  /**
   * NgModule to import. All components and pipes must be exported
   * by this module to be useable in your experiments
   */
  ngModule: ComponentsModule,
  /**
   * Function that returns an array of experiments.
   *
   * Here is an example using webpack's `require.context` to
   * load all modules ending in `.exp.ts` and returning thier
   * default exports as an array:
   */
  loadExperiments() {
    const context = (require as any).context('./../stories/ng-component-lab', true, /\.exp\.ts/);
    const result = context.keys().map(context).map(mod => mod.default);
    context.keys().forEach(key => {
      console.log("Going to require: " + key);
    });
    return result;
  }
});
