const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
let word
beforeEach(() => {
  word = new Word("webdeveu")
})

  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      //expect.fail("replace with your code");

expect(word).to.exist


    });
  
    it('should set the "word" property when a new word is created', function () {
      //expect.fail("replace with your code");

      expect(word).to.have.key(word)


    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      //expect.fail("replace with your code");
expect(word.removeVowels()).to.equal("wbdv")


    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      //expect.fail("replace with your code");



    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      //expect.fail("replace with your code");



    });
  });
});