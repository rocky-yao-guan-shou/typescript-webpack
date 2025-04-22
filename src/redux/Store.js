import {init} from "@rematch/core";

import * as models from "./models";

export const createStore = (global) => {
  const newModels = {};
   
  for (const key in models) {
    // if (models.hasOwnProperty(key)) {
    newModels[key] = models[key](global);
    // }
  }
   
  // 文档： https://www.icode9.com/content-4-1343821.html
  return init({
    models: newModels
  });
};

let $global = {};
try {
  if (window) {
    $global = window;
  }
} catch (error) {
  //
  $global = {};
}

export default createStore($global); // (global || {})
