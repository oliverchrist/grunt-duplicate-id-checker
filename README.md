# grunt-duplicate-id-checker

> Duplicate id checker for HTML Markup.

## Getting Started
This plugin requires Grunt

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-duplicate-id-checker --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-duplicate-id-checker');
```

## The "duplicateIdChecker" task

### Overview
In your project's Gruntfile, add a section named `duplicateIdChecker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
    duplicateIdChecker: {
        options: {
            haltOnError: true,
            validators: {
                duplicateId: true
            }
        },
        dist: {
            files: [{
                src: [
                    'dist/*.html',
                    '!dist/index.html'
                ]
            }]
        }
    }
});
```

### Options

#### options.haltOnError
Type: `Boolean`
Default value: `false`

Set to true to abort grunt run on validation error.

#### options.validators
Type: `Object`

Activate the needed validation rules.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
