var assertDir = require('assert-dir-equal')
var plugin = require('../')
var markdown = require('metalsmith-markdown')
var Metalsmith = require('metalsmith')

describe('the plugin', function () {

    it('should replace the links', function (done) {
        (new Metalsmith('test/fixtures/basic'))
            .use(plugin())
            .use(markdown({
                gfm: true,
            }))
            .build(function (err) {
                if (err) return done(err)
                assertDir('test/fixtures/basic/expected', 'test/fixtures/basic/build')
                return done(null)
            })
    })

})
