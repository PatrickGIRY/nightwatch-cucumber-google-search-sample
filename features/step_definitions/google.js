const { client } = require('nightwatch-cucumber')
const { When, Then } = require('cucumber')

When('I open Google\'s search page', () => {
  return client
    .url('http://www.google.com')
    .waitForElementVisible("body", 10000)
});

Then('the title is {string}', (title) => {
  return client.assert.title(title)
});

Then('the Google search form exists', () => {
  return client.assert.visible('input[name="q"]')
})
