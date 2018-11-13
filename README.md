# minio-js-browser

This repo contains the [browserify][] build of [minio-js][], so it
can be used by frontend (browser GUI) projects using [yarn][] or
[npm][] for dependency management.

On top it provides a very thin ES6 wrapper layer.

## Install dependency

    yarn add 'paulscherrerinstitute/minio-js-browser'

or

    npm install --save 'paulscherrerinstitute/minio-js-browser'

## Use in an ES6 module

If you are using ES6 (ES2015) you can use the wrapper like this:

    import { Minio } from 'minio-js-browser/minio-browser-es6.js';

## Use in HTML code (ES5)

If you are not using ES6 modules, you can load minio-js into the
browser's global `window` object like this:

    <script src="node_modules/minio-js-browser/minio-browser.js"></script>

And later you can use it like that:

    <script>
    function myFunc() {
        var minioClient = new Minio.Client( ... );
        // ...
    }
    </script>


## LICENSE

[minio-js][] is licensed under the [Apache 2.0 license](https://github.com/minio/minio-js/blob/master/LICENSE).


[browserify]: http://browserify.org/
[minio-js]: https://github.com/minio/minio-js/
[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
