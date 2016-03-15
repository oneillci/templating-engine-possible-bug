//import 'bootstrap';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .globalResources(["./dist/click-to-edit"]);

  aurelia.start().then(() => aurelia.setRoot());
}
