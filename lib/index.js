var BPromise = require('bluebird')
var highline = require('highline')
var Joi = require('joi')
var multimatch = require('multimatch')

var DEFAULT_PATTERN = '**/*.md'

var validator = Joi.object().keys({
    pattern: Joi.string().min(1),
    highline: Joi.object(),
})

module.exports = plugin

function plugin(options) {
    options = options || {}
    var err = validator.validate(options).error
    if (err) throw err
    var pattern = options.pattern || DEFAULT_PATTERN
    return function (files, metalsmith, done) {
        var jobs = Object.keys(files)
            .filter(function (key) {
                return multimatch(key, pattern).length > 0
            })
            .map(function (key) {
                return highline(files[key].contents.toString(), options.highline)
                    .then(function (output) {
                        files[key].contents = new Buffer(output, 'utf8')
                    })
            })
        BPromise.all(jobs).then(function () {
            return done()
        }, done)
    }
}
