import { categories, providers } from './object-data.js';
import { getSelectOptions } from './get-select-options.js'

let columnsCategories = [0, 1];
let columnsProviders = [0, 1];

getSelectOptions(categories, columnsCategories, '#categoria')
getSelectOptions(providers, columnsProviders, '#proveedor')