// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

function steamrollArray(arr) {
  let flatArray = [];
  let flattenFn = function flatten(arr, flatArray) {
    if (!arr || (arr && Array.isArray(arr) && arr.length == 0)) {
      return;
    } else {

      console.log('printing array');
      // while(arr.length > 0) {
      for (let i=0; i<arr.length; i++) {
				if(Array.isArray(arr[i])) {
        	flattenFn(arr[i], flatArray);
        } else {
        	flatArray.push(arr[i]);
        }
      }

      /* const firstElement = arr.unshift(arr) */;
      // }
    }
  }
  flattenFn(arr, flatArray);
  console.log('final flattened array', flatArray);
  return arr;
}
steamrollArray([1, {}, [3, [[4]]]]);
