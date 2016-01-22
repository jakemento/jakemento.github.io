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
  it("displays pong for numbers divisible by five", function () {
    expect(divisTeen(30)).to.equal("pingpong")
  });
});
