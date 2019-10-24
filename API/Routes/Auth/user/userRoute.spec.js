const request = require("supertest");
const server = require("../../../server");
const db = require("../../../../config/dbConfig");
describe("User Route", () => {
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("POST /api/auth/user/login", () => {
    it("should login and store a token", () => {
      return request(server)
        .post("/login")
        .send({ username: "weddingPlaner", password: "password1234" })
        .then(res => {
          token = res.body.token;
        });
    });
  });
  describe("GET /api/auth/user", () => {
    // should return http status of 200
    it("should return http status of 200", () => {
      return request(server)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
    // should return json
    it("should return JSON", async () => {
      const response = await request(server).get("/");
      // toMatch uses a regular expression to check the value
      expect(response.type).toMatch(/json/i);
    });
  });
});
