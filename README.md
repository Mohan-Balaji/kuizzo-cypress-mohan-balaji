🚀 Kuizzo Cypress Automation Project
🧪 Applicant: Mohan B
🛠️ Role: Cypress Intern at Kuizzo
📁 Project Structure

KUZZIO-CYPRESS-MOHAN-B/
├── cypress/
│   ├── downloads/                  # Downloaded files (if any)
│   ├── e2e/
│   │   ├── addInstructor.cy.js     # Test: Add teacher & assign course
│   │   └── createCourse.cy.js      # Test: Register & create course with subjects & topics
│   ├── fixtures/
│   │   └── example.json            # Test data storage
│   ├── support/
│   │   ├── commands.js             # Custom commands
│   │   └── e2e.js                  # Global setup
├── .gitignore
├── cypress.config.js              # Cypress configuration
├── package.json                   # Project dependencies & scripts
├── package-lock.json
└── README.md                      # Project documentation

✅ Test Scenarios Covered
1. Institution Registration & Course Creation (createCourse.cy.js)

    Navigate to Kuizzo.com

    Sign up as an Institution

    Create a new course

    Add 2 subjects

    Under one subject, add 3 topics

2. Instructor Creation & Course Assignment (addInstructor.cy.js)

    Add a new teacher

    Assign the newly created course to the teacher

🧪 How to Run the Tests
1. Install Dependencies

npm install

2. Open Cypress GUI

npx cypress open

3. Run All Tests in Headless Mode

npx cypress run

🧱 Design Highlights

    Modular Structure: Separated test cases and support files for scalability.

    Fixtures: Externalized data in example.json.

    Custom Commands: Reusable actions in support/commands.js.

