const lengthOfItems = 5;
let tasksCounter = 0;
let createdTasksCounter = 0;
let finishedTasksCounter = 0;
let doLaterTasksCounter = 0;

describe("Full testing of all app functionality", () => {
  it(`Test No. 1 In this test we will actually check that the application loads properly`, () => {
    cy.visit("/");
  });
});
