/*
 * grunt-duplicate-id-checker
 * 
 *
 * Copyright (c) 2018 Oliver Christ
 * Licensed under the MIT license.
 */

'use strict';

exports.validate = function(markup, filepath, grunt) {

    var allOk = true;

    grunt.log.write('Checking for duplicate id\'s: ');

    if (checkForDuplicateIds(markup, grunt)) {
        grunt.log.ok();
    } else {
        grunt.log.error();
        allOk = false;
    }

    return allOk;
};

var removeScriptBlock = function(markup) {
    return markup.replace(/<script[\s\S]*?<\/script>/g);
};

var checkForDuplicateIds = function(markup, grunt) {

    var ids = {};
    var noDuplicates = true;
    var idsArray = removeScriptBlock(markup).match(/id="([^{}]*?)"/g);

    if (idsArray === null) {
        return true;
    }

    for (var i = 0; i < idsArray.length; i++) {
        var id = idsArray[i];

        if (id) {
            if (ids[id]) {
                grunt.log.write(id + ', ');

                noDuplicates = false;
            } else {
                ids[id] = true;
            }
        }
    }

    return noDuplicates;
};
