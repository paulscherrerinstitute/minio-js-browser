/**
 * Simple ES6 wrapper around minio-browser.js
 * 
 * minio-browser.js is the output of the gulp task 'browserify' in the
 * original minio-js repository.
 * 
 * This wrapper cleans up the global window object after importing.
 */
import './minio-browser.js';          // step 1: side effect populates window object
const Minio = window.Minio;           // step 2: capture window.Minio
delete window.Minio;                  // step 3: clean up window object
export { Minio };                     // step 4: export to ES6 land
