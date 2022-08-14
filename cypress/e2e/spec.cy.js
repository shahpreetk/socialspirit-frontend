describe("Visit SociaSpirit Website (FE)", () => {
  it("Visits the SocialSpirit Frontend", () => {
    // eslint-disable-next-line no-undef
    cy.visit("https://socialspirit.netlify.app/");
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

describe("Check Footer", () => {
  it("Check Footer", () => {
    // eslint-disable-next-line no-undef
    cy.get(".footer").contains(
      "Copyright © 2022 - All rights reserved"
    );
    // eslint-disable-next-line no-undef
    cy.get(".footer").contains(
      "Made with ♥ by Preet Shah for MSc. Dissertation"
    );
  });
});

describe("Check Get all events", () => {
  it("Checks get all events from backend", () => {
    // eslint-disable-next-line no-undef
    cy.request("https://socialspirit-backend.herokuapp.com/api/events").then(
      (res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0]).to.have.property("name", "another event");
      }
    );
  });
});

describe("Visit Volunteer Login (FE)", () => {
  it("Visits the Volunteer Login page", () => {
    // eslint-disable-next-line no-undef
    cy.visit("https://socialspirit.netlify.app/v/login");
  });
});

describe("Visit Volunteer Registration (FE)", () => {
  it("Visits the Volunteer Registration page", () => {
    // eslint-disable-next-line no-undef
    cy.visit("https://socialspirit.netlify.app/v/register");
  });
});

describe("Check 404 page (FE)", () => {
  it("Visits 404 page", () => {
    // eslint-disable-next-line no-undef
    cy.visit("https://socialspirit.netlify.app/404");
  });
});

describe("Check Volunteer Login", () => {
  it("Checks if volunteer can login successfully", () => {
    // eslint-disable-next-line no-undef
    cy.request(
      "POST",
      "https://socialspirit-backend.herokuapp.com/api/v/login",
      { email: "test@gmail.com", password: "12345678" }
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("name", "person 1");
    });
  });
});

describe("Check Volunteer Login Error Handling", () => {
  it("Checks if volunteer login gives error on wrong credentials", () => {
    // eslint-disable-next-line no-undef
    cy.request({
      failOnStatusCode: false,
      url: "https://socialspirit-backend.herokuapp.com/api/v/login",
      method: "POST",
      body: {
        email: "wrong@email.com",
        password: "12345678",
      },
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).to.have.property("message", "Invalid credentials");
    });
  });
});
describe("Check Organisation Login", () => {
  it("Checks if organisation can login successfully", () => {
    // eslint-disable-next-line no-undef
    cy.request(
      "POST",
      "https://socialspirit-backend.herokuapp.com/api/o/login",
      { email: "leo@gmail.com", password: "12345678" }
    ).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("name", "Lions Club of Walkeshwar");
    });
  });
});

describe("Check Organisation Login Error Handling", () => {
  it("Checks if organisation login gives error on wrong credentials", () => {
    // eslint-disable-next-line no-undef
    cy.request({
      failOnStatusCode: false,
      url: "https://socialspirit-backend.herokuapp.com/api/o/login",
      method: "POST",
      body: {
        email: "wrong@email.com",
        password: "12345678",
      },
    }).then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).to.have.property("message", "Invalid credentials");
    });
  });
});

describe("Check Get all volunteer profiles", () => {
  it("Checks get all profiles from backend", () => {
    // eslint-disable-next-line no-undef
    cy.request("https://socialspirit-backend.herokuapp.com/api/v/profiles").then(
      (res) => {
        expect(res.status).to.eq(200);
        expect(res.body[0]).to.have.property("name", "person 3");
      }
    );
  });
});