describe("Visit SociaSpirit Website (FE)", () => {
  it("Visits the SocialSpirit Frontend", () => {
    // eslint-disable-next-line no-undef
    cy.visit("http://localhost:3000/");
  });
});

describe("Check Hero Text", () => {
  it("Visits the SocialSpirit Frontend, Check Hero text", () => {
    // eslint-disable-next-line no-undef
    cy.contains(
      "Easily find volunteering events of your interests in your area!"
    );
  });
});

describe("Check Hamburger Menu", () => {
  it("Check Hamburger Menu", () => {
    // eslint-disable-next-line no-undef
    cy.get("#hamburger-menu").click();
  });
});

describe("Check Menu", () => {
  it("Check Menu", () => {
    // eslint-disable-next-line no-undef
    cy.get(".menu").contains("Login");
    // eslint-disable-next-line no-undef
    cy.get(".menu").contains("Register");
  });
});

describe("Check Get all events", () => {
  it("Checks get all events from backend", () => {
    // eslint-disable-next-line no-undef
    cy.request("https://socialspirit-backend.herokuapp.com/api/events").then(res => {
      expect(res.status).to.eq(200);
      expect(res.body[0]).to.have.property("name","another event");
    })
  });
});

describe("Visit Volunteer Login (FE)", () => {
  it("Visits the Volunteer Login page", () => {
    // eslint-disable-next-line no-undef
    cy.visit("http://localhost:3000/v/login");
  });
});

describe("Visit Volunteer Registration (FE)", () => {
  it("Visits the Volunteer Registration page", () => {
    // eslint-disable-next-line no-undef
    cy.visit("http://localhost:3000/v/register");
  });
});

describe("Check 404 page (FE)", () => {
  it("Visits 404 page", () => {
    // eslint-disable-next-line no-undef
    cy.visit("http://localhost:3000/kjdfwo");
  });
});

