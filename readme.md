# Test-driven Development with Jest Lab

## Getting started

1. Fork and clone this repository.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

First, complete the following steps to prepare your application to use Jest.

1. Install `jest` as a developer dependency.

1. Create a `__tests__` folder with two files: `concessions.test.js` and `tickets.test.js`.

1. Create a `"test"` script in your `package.json` file that will run your tests.

1. Update your `.gitignore` file to ignore the `coverage/` directory.

Next, you will need to write tests for the four functions that are in the `concessions.test.js` file and `tickets.test.js` file. _Each function should have a minimum of two tests associated with it._ You will need to connect all of the relevant files so that the tests will run appropriately. You should also aim for 100% coverage of the four functions.

You should test different types of inputs and outputs. For example, if a function expects an array, try writing some tests that include an empty array as the argument as well as a complete array.

You may use the data in the `data/` directory as either a model for your tests or for direct import into your tests.

> **Note**: You should not need to modify the functions at all. They all work as expected.
