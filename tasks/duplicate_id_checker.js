/*
 * grunt-markup-validator
 * 
 *
 * Copyright (c) 2018 Oliver Christ
 * Licensed under the MIT license.
 */

'use strict';

var duplicateId = require('./lib/duplicateId');

module.exports = function (grunt) {

    grunt.registerMultiTask('duplicateIdChecker', 'Duplicate id checker for HTML Markup', function () {

        var options = this.options({
            haltOnError: false,
            validators: {
                duplicateId: false
            }
        });

        this.files.forEach(function (file) {
            file.src.map(function(filepath) {
                var markup = grunt.file.read(filepath),
                    validationOk = true;

                grunt.log.subhead(filepath);

                if (options.validators.duplicateId) {
                    validationOk = validationOk && duplicateId.validate(markup, filepath, grunt);
                }

                if (options.haltOnError && !validationOk) {
                    grunt.fail.warn('Markup validation unsuccessful!')
                }
            });
        });
    });
};
