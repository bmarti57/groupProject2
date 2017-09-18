"use strict";

var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("SongStudio", function() {
    var login = "#loginpage"

    this.timeout(30000);
    it("should require me to login", function(done) {
        Nightmare({ show: true })
        .goto("localhost:8080")
        .wait(login)
        .click(login)
        .evaluate(function() {
            return document.title;
        }).end()
        .then(function(title) {
            expect(title).to.equal("Guess That Song Studio");
            done();
        });
    });

    it("should ", function () {
        throw new Error(
            "Failed"
        );
    });
});