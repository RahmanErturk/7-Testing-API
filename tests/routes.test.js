import server from "../main.js";
import request from "supertest";

describe("Hotel Routes Test", () => {
  describe("Get All Route", () => {
    let response = {};
    beforeAll(async () => {
      response = await request(server).get("/hotels?api_key=040");
    });

    // Unsere Route gibt Statuscode 200 zurück
    test("return 200", () => {
      expect(response.statusCode).toBe(200);
    });

    // Unsere Route gibt ein JSON zurück
    test("return JSON", () => {
      expect(response.type).toBe("application/json");
    });

    // Unsere Rückgabe ist ein Array
    test("return JSON", () => {
      expect(typeof response.body).toBe("object");
    });

    // Unsere Rückgabe hat Inhalt
    test("return JSON", () => {
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  // Wenn eine unbekannte Route aufgerufen wird, soll 404 zurück geben werden.
  test("unknown route return 404", async () => {
    const response = await request(server).get("/jkfakjdfkjadsf?api_key=040");

    expect(response.statusCode).toBe(404);
  });

  // Wenn kein oder ein falscher API-Key übermittelt wird, soll 401 zurück geben werden
  test("wrong API key return 401", async () => {
    const response = await request(server).get("/?api_key=egitarre");

    expect(response.statusCode).toBe(401);
  });
});
