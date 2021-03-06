describe('pingPonger', function () {
  it("displays pingpong for numbers divisible by fifteen", function() {
    expect(pingPonger(15)).to.eql([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"pingpong"])
  });
  it("displays ping for numbers divisible by three", function() {
    expect(pingPonger(3)).to.eql([1,2,"ping"])
  });
  it("displays pong for numbers divisible by five", function() {
    expect(pingPonger(5)).to.eql([1,2,"ping",4,"pong"])
  });
  it("displays all the numbers leading up to your number with pings and pongs", function() {
    expect(pingPonger(4)).to.eql([1,2,"ping",4])
  });
});
