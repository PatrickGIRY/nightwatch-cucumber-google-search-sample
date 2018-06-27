"use strict"

import { client } from 'nightwatch-cucumber'
import { When, Then } from 'cucumber'

When('I open Google\'s search page', async () => {
  await client
    .url('http://www.google.com')
    .waitForElementVisible("body", 10000)
});

Then('the title is {string}', async (title) => {
  await client.assert.title(title)
});

Then('the Google search form exists', async () => {
  await client.assert.visible('input[name="q"]')
})
