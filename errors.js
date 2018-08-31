/*
 *  errors.js
 *
 *  David Janes
 *  IOTDB.org
 *  2016-01-29
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

const util = require('util');

/**
 */
function Redirect(url) {
    Error.call(this);
    this.url = url;
    this.statusCode = 302;
}

util.inherits(Redirect, Error);

/**
 */
function NotFound(message, code_id) {
    Error.call(this);
    this.message = message || "not found";
    this.code_id = code_id || null;
    this.statusCode = 404;
}

util.inherits(NotFound, Error);

/**
 */
function NotAuthorized(message, code_id) {
    Error.call(this);
    this.message = message || "not authorized";
    this.code_id = code_id || null;
    this.statusCode = 401;
}

util.inherits(NotAuthorized, Error);

/**
 */
function NotModified(message, code_id) {
    Error.call(this);
    this.message = message || "not modified";
    this.code_id = code_id || null;
    this.statusCode = 304;
}

util.inherits(NotModified, Error);

/**
 *  Timestanp was out of date
 */
function Timestamp(message, code_id) {
    Error.call(this);
    this.message = message || "timestamp out of date";
    this.code_id = code_id || null;
    this.statusCode = 409;
}

util.inherits(Timestamp, Error);

/**
 *  e.g. expecting a thing and got a recipe
 */
function NotAppropriate(message, code_id) {
    Error.call(this);
    this.message = message || "not appropriate";
    this.code_id = code_id || null;
    this.statusCode = 403;
}

util.inherits(NotAppropriate, Error);

/**
 *  e.g. something is improperly formatted
 */
function Invalid(message, code_id) {
    Error.call(this);
    this.message = message || "invalid";
    this.code_id = code_id || null;
    this.statusCode = 403;
}

util.inherits(Invalid, Error);

/**
 *  e.g. doing a PUT on a model
 */
function MethodNotAllowed(message, code_id) {
    Error.call(this);
    this.message = message || "method not allowed";
    this.code_id = code_id || null;
    this.statusCode = 405;
}

util.inherits(MethodNotAllowed, Error);

/**
 *  waiting for some processing to happen
 */
function NotReady(message, code_id) {
    Error.call(this);
    this.message = message || "resource is not ready yet";
    this.code_id = code_id || null;
    this.statusCode = 423;
}

util.inherits(NotReady, Error);

/**
 *  Resource is Locked
 */
function Locked(message, code_id) {
    Error.call(this);
    this.message = message || "resource is locked"
    this.code_id = code_id || null;
    this.statusCode = 423;
}

util.inherits(Locked, Error);

/**
 *  e.g. we're connecting to Redis and it doesn't work
 */
function ServiceNotAvailable(message, code_id) {
    Error.call(this);
    this.message = message || "underlying service not available";
    this.code_id = code_id || null;
    this.statusCode = 503;
}

util.inherits(ServiceNotAvailable, Error);

/**
 *  Not implemented
 */
function NotImplemented(message, code_id) {
    Error.call(this);
    this.message = message || "not implemented";
    this.code_id = code_id || null;
    this.statusCode = 501;
}

util.inherits(NotImplemented, Error);

/**
 *  Not implemented
 */
function ShouldBeImplementedInSubclass(message, code_id) {
    Error.call(this);
    this.message = message || "should be implemented in subclass";
    this.code_id = code_id || null;
    this.statusCode = 501;
}

util.inherits(ShouldBeImplementedInSubclass, Error);

/**
 *  This is not implemented and never will be implemented
 */
function NeverImplemented(message, code_id) {
    Error.call(this);
    this.message = message || "never will be implemented";
    this.code_id = code_id || null;
    this.statusCode = 501;
}

util.inherits(NeverImplemented, Error);

/**
 *  Additional setup is required
 */
function SetupRequired(message, code_id) {
    Error.call(this);
    this.message = message || "setup required";
    this.code_id = code_id || null;
    this.statusCode = 500;
}

util.inherits(SetupRequired, Error);

/**
 *  Some sort of internal error
 */
function Internal(message, code_id) {
    Error.call(this);
    this.message = message || "internal error";
    this.code_id = code_id || null;
    this.statusCode = 500;
}

util.inherits(Internal, Error);

/**
 *  Can't do this right now
 */
function Unavailable(message, code_id) {
    Error.call(this);
    this.message = message || "temporarily unavailable";
    this.code_id = code_id || null;
    this.statusCode = 503;
}

util.inherits(Unavailable, Error);

/**
 *  Host is not found, e.g. bad address
 */
function HostNotFound(message, code_id) {
    Error.call(this);
    this.message = message || "host not found";
    this.code_id = code_id || null;
    this.statusCode = 400;
}

util.inherits(HostNotFound, Error);

/**
 *  API
 */
exports.Redirect = Redirect;

exports.NotFound = NotFound;
exports.NotAuthorized = NotAuthorized;
exports.NotModified = NotModified;
exports.Timestamp = Timestamp;
exports.NotAppropriate = NotAppropriate;
exports.Invalid = Invalid;
exports.MethodNotAllowed = MethodNotAllowed;
exports.NotReady = NotReady;
exports.Locked = Locked;
exports.ServiceNotAvailable = ServiceNotAvailable;
exports.NotImplemented = NotImplemented;
exports.ShouldBeImplementedInSubclass = ShouldBeImplementedInSubclass;
exports.NeverImplemented = NeverImplemented;
exports.SetupRequired = SetupRequired;
exports.Internal = Internal;
exports.Unavailable = Unavailable;
exports.HostNotFound = HostNotFound;
