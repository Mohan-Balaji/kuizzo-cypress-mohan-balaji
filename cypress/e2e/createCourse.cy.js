//Test Case (Task)
// Test Case:  Create Two Course with 2 Topics and 3 Subjects




describe('Course Management with Subjects and Topics', () => {
  before(() => {
    cy.loginAsInstitution(); // Login detials from support/commands.js
  });

  beforeEach(() => {
    cy.session('institution', () => {
      cy.loginAsInstitution();
    });
  });

  it('Creates an AI Engineering course with comprehensive subjects and topics', () => {
    cy.visit('https://www.kuizzo.com/mohantest/institution-dashboard/create-new-courses');
    
    cy.get('input[placeholder="Enter Course Name"]', { timeout: 10000 }).should('be.visible');
    
    // Course Information 
    cy.get('input[placeholder="Enter Course Name"]')
      .should('be.visible')
      .clear()
      .type('AI Engineering', { force: true });
    
    cy.get('textarea[placeholder="Enter Course Description"]')
      .should('be.visible')
      .clear()
      .type('This is an advanced course on AI.', { force: true });
    
    cy.get('textarea[placeholder="Enter Course Objectives"]')
      .should('be.visible')
      .clear()
      .type('Understand AI concepts and apply them.', { force: true });
    
    cy.get('input[placeholder="Enter Youtube Link"]')
      .should('be.visible')
      .clear()
      .type('https://youtube.com/course/ai', { force: true });

    cy.contains('Next').should('be.visible').click();

    // two Course Subject

    // Subject 1 - Machine Learning 
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('input[placeholder="Enter Subject Name"]').eq(0).should('be.visible').clear().type('Machine Learning', { force: true });
    cy.get('textarea[placeholder="Enter Subject Description"]').eq(0).should('be.visible').clear().type('Concepts covering supervised and unsupervised learning.', { force: true });

    // Subject 2 - Deep Learning 
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('input[placeholder="Enter Subject Name"]').eq(1).should('be.visible').clear().type('Deep Learning', { force: true });
    cy.get('textarea[placeholder="Enter Subject Description"]').eq(1).should('be.visible').clear().type('Focus on neural networks and their architectures.', { force: true });

    cy.contains('Next').should('be.visible').click();

    // total 3 topics - course 1  

    // 1st Topic - Machine Learning Topic -1 
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('select[name="topics[0].selectedSubject"]').should('be.visible').select('Machine Learning');
    cy.get('input[placeholder="Enter Topic Name"]').eq(0).should('be.visible').clear().type('Introduction to Machine Learning', { force: true });
    cy.get('textarea[placeholder="Enter Topic Description"]').eq(0).should('be.visible').clear().type('Basic concepts and types of machine learning algorithms', { force: true });

    // 2nd Topic - Deep Learning 
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('select[name="topics[1].selectedSubject"]').should('be.visible').select('Deep Learning');
    cy.get('input[placeholder="Enter Topic Name"]').eq(1).should('be.visible').clear().type('Neural Networks Basics', { force: true });
    cy.get('textarea[placeholder="Enter Topic Description"]').eq(1).should('be.visible').clear().type('Understanding neural network architecture and training', { force: true });

    // 3rd Topic - Machine Learning (since we only have 2 subjects)
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('select[name="topics[2].selectedSubject"]').should('be.visible').select('Machine Learning');
    cy.get('input[placeholder="Enter Topic Name"]').eq(2).should('be.visible').clear().type('Supervised Learning', { force: true });
    cy.get('textarea[placeholder="Enter Topic Description"]').eq(2).should('be.visible').clear().type('Understanding and implementing supervised learning algorithms', { force: true });

    cy.contains('Next').should('be.visible').click();

    //Publish Course click button
    cy.get('button.inline-flex.items-center.justify-center.whitespace-nowrap.text-pure-white.rounded-button-border-radius.bg-app-green.px-10.py-\\[14px\\].w-48.mt-4')
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });

    cy.intercept('POST', '/api/proxy-assistants').as('publishCourse');
    cy.wait('@publishCourse');
    cy.url().should('include', '/institution-dashboard', { timeout: 15000 });
    cy.wait(2000);
  });

  it('Creates a comprehensive networking course with subjects and topics', () => {
    cy.wait(1000);
    
    cy.visit('https://www.kuizzo.com/mohantest/institution-dashboard/create-new-courses');

    // 2 nd Course
    cy.get('input[placeholder="Enter Course Name"]').should('be.visible').clear().type('Computer Networking', { force: true });
    cy.get('textarea[placeholder="Enter Course Description"]').should('be.visible').clear().type('A comprehensive course covering fundamental and advanced networking concepts.', { force: true });
    cy.get('textarea[placeholder="Enter Course Objectives"]').should('be.visible').clear().type('Master networking protocols, security, and infrastructure design.', { force: true });
    cy.get('input[placeholder="Enter Youtube Link"]').should('be.visible').clear().type('https://youtube.com/course/networking', { force: true });

    cy.contains('Next').should('be.visible').click();

    // 1st Subject
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('input[placeholder="Enter Subject Name"]').eq(0).should('be.visible').clear().type('Network Fundamentals', { force: true });
    cy.get('textarea[placeholder="Enter Subject Description"]').eq(0).should('be.visible').clear().type('Core concepts of networking including OSI model and TCP/IP protocols.', { force: true });

    // 2nd Subject
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('input[placeholder="Enter Subject Name"]').eq(1).should('be.visible').clear().type('Network Security', { force: true });
    cy.get('textarea[placeholder="Enter Subject Description"]').eq(1).should('be.visible').clear().type('Security protocols, firewalls, and network defense strategies.', { force: true });

    cy.contains('Next').should('be.visible').click();

    // three - Course Topics
    // 1st topic - Network Fundamentals Topic
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('select[name="topics[0].selectedSubject"]').should('be.visible').select('Network Fundamentals');
    cy.get('input[placeholder="Enter Topic Name"]').eq(0).should('be.visible').clear().type('OSI Model and TCP/IP', { force: true });
    cy.get('textarea[placeholder="Enter Topic Description"]').eq(0).should('be.visible').clear().type('Understanding the seven layers of OSI model and TCP/IP protocol suite', { force: true });

    // 2nd topic - Network Security Topic
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('select[name="topics[1].selectedSubject"]').should('be.visible').select('Network Security');
    cy.get('input[placeholder="Enter Topic Name"]').eq(1).should('be.visible').clear().type('Firewall Configuration', { force: true });
    cy.get('textarea[placeholder="Enter Topic Description"]').eq(1).should('be.visible').clear().type('Setting up and managing network firewalls for security', { force: true });

    // 3rd topic - Network Fundamentals (since we only have 2 subjects)
    cy.get('div.flex.justify-center.cursor-pointer').should('be.visible').click();
    cy.get('select[name="topics[2].selectedSubject"]').should('be.visible').select('Network Fundamentals');
    cy.get('input[placeholder="Enter Topic Name"]').eq(2).should('be.visible').clear().type('Network Protocols', { force: true });
    cy.get('textarea[placeholder="Enter Topic Description"]').eq(2).should('be.visible').clear().type('Understanding common network protocols and their applications', { force: true });

    cy.contains('Next').should('be.visible').click();

    // Publish Course button click
    cy.get('button.inline-flex.items-center.justify-center.whitespace-nowrap.text-pure-white.rounded-button-border-radius.bg-app-green.px-10.py-\\[14px\\].w-48.mt-4')
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });

    cy.intercept('POST', '/api/proxy-assistants').as('publishCourse');
    cy.wait('@publishCourse');
    cy.url().should('include', '/institution-dashboard', { timeout: 15000 });
  });
});
