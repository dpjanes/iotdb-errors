/*
 *  test_errors.js
 *
 *  David Janes
 *  IOTDB.org
 *  2016-08-18
 *
 *  Copyright [2013-2016] [David P. Janes]
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

"use strict";

const errors = require('../errors');
const assert = require('assert');

const _my_message = "my message";

describe('test_errors', function() {
    it('NotFound', function() {
        const error_class = errors.NotFound;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 404);
    });


    it('NotAuthorized', function() {
        const error_class = errors.NotAuthorized;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 401);
    });


    it('Timestamp', function() {
        const error_class = errors.Timestamp;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 409);
    });


    it('NotAppropriate', function() {
        const error_class = errors.NotAppropriate;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 403);
    });


    it('Invalid', function() {
        const error_class = errors.Invalid;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 403);
    });


    it('MethodNotAllowed', function() {
        const error_class = errors.MethodNotAllowed;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 405);
    });


    it('ServiceNotAvailable', function() {
        const error_class = errors.ServiceNotAvailable;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 503);
    });


    it('NotImplemented', function() {
        const error_class = errors.NotImplemented;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 501);
    });


    it('ShouldBeImplementedInSubclass', function() {
        const error_class = errors.ShouldBeImplementedInSubclass;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 501);
    });


    it('NeverImplemented', function() {
        const error_class = errors.NeverImplemented;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 501);
    });


    it('SetupRequired', function() {
        const error_class = errors.SetupRequired;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 500);
    });


    it('Internal', function() {
        const error_class = errors.Internal;
        const error = new error_class(_my_message);

        assert.strictEqual(error.message, _my_message);
        assert.ok(error instanceof error_class);
        assert.ok(error instanceof Error);
        assert.strictEqual(error.code, 500);
    });
});
