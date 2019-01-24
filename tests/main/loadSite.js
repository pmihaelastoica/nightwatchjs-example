module.exports = {
  'Loading site': function (browser) {
    browser
      .url("http://www.youtube.com/")
      .pause(2000)
      browser.expect.element('body').to.be.present;
      //browser.console.log("Hey! This is a test!");
      
  },
  after: function (browser) {
    browser
      .end();
  }
};
