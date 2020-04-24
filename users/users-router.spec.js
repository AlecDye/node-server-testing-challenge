const request = require("supertest");
const express = require("express");
const router = require("./users-router.js");
const server = require("../server.js");
const db = require("../data/db-config");

describe("users-router.js", () => {
  describe("GET /", () => {
    it("returns 200 OK", () => {
      return request(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("POST /", () => {
    it("returns 201 OK", () => {
      return request(server)
        .post("/api/users")
        .send({ username: "Joe" })
        .then((res) => {
          expect(res.status).toBe(201);
        });
    });
  });
});
