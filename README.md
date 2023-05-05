
WIIFM?
    Better collaboration / Improved code quality

TDD: Test-Driven Development is an software development process that follow a simple iterative cycle.

    TDD Cycle - Red > Write a test that fails > 
                Green > Make the code work > 
                Refactor > Eliminate redundancy
                Repeat ~ 

Types of Testing:
- Unit: Checks the functionality of an individual unit of code.
        EX) Check functionality of function or a class

    Step by step breakdown
        1. Read the problem.
        2. Identify expectations.
        3. Write pseudocode.
        4. Translate pseudocode to real code.

- Integration: Combining individual modules and testing them as they work together 
        EX) Check the integration between the mailbox and spam mail module - select mail should move to spam
- Functional: User scenarios on the browser itself by controlling the browser programmatically
        EX) e2e testing / End to end testing
- Acceptance: Application meets the identified requirements 
        EX) Alpha and beta releases of applications or software

Testing Libraries 
    - Mocha
    - Jasmine
    - Cypress
    - Jest (will be using in class) https://jestjs.io/docs/getting-started

    Helpful content:
        - https://jestjs.io/docs/getting-started
        - https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing

    Setting Expectations 
        Happy path = Perfect code
        Unhappy path = Bugs 


In Action 
        EX pseudocode) We expect the function to:
        - multiply
        - (x,y)
        - product = x*y
        - return product 

        EX code) 
            const multiply = (x,y) => {
                const product = x * y;
                return product;
            }

            multiply (5,10)