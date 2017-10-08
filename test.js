'use strict';

const vows = require('perjury'),
      assert = vows.assert;

vows.describe('has-scheme module').addBatch({
	'when we require the module': {
		topic: function() {
			return require('./index');
		},
		'it works': function(err, hasScheme) {
			assert.ifError(err);
			assert.isFunction(hasScheme);
		},
		'and we call it with a bare domain': {
			topic: function(hasScheme) {
				return hasScheme('example.com');
			},
			'we get false': function(err, ret) {
				assert.isFalse(ret);
			}
		},
		'and we call it with an HTTP URL': {
			topic: function(hasScheme) {
				return hasScheme('http://example.com');
			},
			'we get true': function(err, ret) {
				assert.isTrue(ret);
			}
		},
		'and we call it with an HTTPS URL': {
			topic: function(hasScheme) {
				return hasScheme('https://example.com');
			},
			'we get true': function(err, ret) {
				assert.isTrue(ret);
			}
		},
		'and we call it with a non-HTTP(S) URL': {
			topic: function(hasScheme) {
				return hasScheme('irc://irc.example.com/channel');
			},
			'we get true': function(err, ret) {
				assert.isTrue(ret);
			}
		},
		'and we call it with a URL scheme that doesn\'t use a colon and two slashes': {
			topic: function(hasScheme) {
				return hasScheme('xmpp:alice@example.com');
			},
			'we get true': function(err, ret) {
				assert.isTrue(ret);
			}
		}
	}
}).export(module);
