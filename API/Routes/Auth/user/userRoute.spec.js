const request = require("supertest");
const server = require("../../../server");
const db = require("../../../../config/dbConfig");

describe("User Route", () => {
  beforeAll(() => {
    return db.seed.run();
  });
  it("should set testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("POST /api/auth/user/login", () => {
    it("should login and store a token", () => {
      return request(server)
        .post("/api/auth/user/login")
        .send({ username: "weddingPlaner", password: "password1234" })
        .then(res => {
          token = res.body.token;
        });
    });
  });
  describe("POST /api/auth/user/register", () => {
    it("should register a new account", () => {
      return request(server)
        .post("/api/auth/user/register")
        .send({
          username: "testMan1",
          password: "password2222",
          name: "John Smith",
          phone: 18002341000,
          email: "te1stm@gmai.com",
          location: "Seattle, WA"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
  describe("GET /api/auth/user", () => {
    it("should return http status of 400 no token", () => {
      return request(server)
        .get("/api/auth/user/")
        .then(response => {
          expect(response.status).toBe(400);
        });
    });
    // should return json
    it("should return JSON", async () => {
      const response = await request(server).get("/api/auth/user/");
      // toMatch uses a regular expression to check the value
      expect(response.type).toMatch(/json/i);
    });
  });
});
