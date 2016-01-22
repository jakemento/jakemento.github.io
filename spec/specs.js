describe('divisThree', function() {
  it("displays ping for numbers divisible by three", function() {
    expect(divisThree(6)).to.equal("ping")
  });
});

describe('divisFive', function() {
  it("displays pong for numbers divisible by five", function () {
    expect(divisFive(15)).to.equal("pong")
  });
});

describe('divisTeen', function() {
  it("displays pong for numbers divisible by fifteen", function () {
    expect(divisTeen(30)).to.equal("pingpong")
  });
});

describe('returnRange', function() {
  it("returns a range of numbers from 1 to the chosen number", function () {
    expect(returnRange(4)).to.equal([1,2,3,4])
  });
});
