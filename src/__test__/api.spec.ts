import { app } from "../app";
import { Server } from "http";
import { User } from "../User";
import axios from "axios";

describe("Api test", () => {
  let server: Server;

  beforeAll(() => {
    server = app.listen(3001);
  });

  afterAll(done => {
    server.close(done);
  });

  it("gets a user - with a naive test", async () => {
    // what happens if we change the response, will it break something for a customer?
    const expected = User("foo", 22);
    const res = await axios.get("http://localhost:3001/users");
    const actual = res.data;
    expect(expected).toEqual(actual);
  });

  it("gets a user - with a less naive test", async () => {
    // if we think like the customer and design our tests like they would we will know if we broke the api
    // if we want to be advanced we would use the schemas in our swagger.yaml file in the test
    const expected = {
      name: "foo",
      age: 22
    };
    const res = await axios.get("http://localhost:3001/users");
    const actual = res.data;
    expect(expected).toEqual(actual);
  });

  it("creates a user - with a naive test", async () => {
    const user = User("foo", 22);
    const expected = User("foo", 22);
    // without a api version, how can we be sure we didn't break something for our users?
    const res = await axios.post("http://localhost:3001/users", user);
    const actual = res.data;
    expect(expected).toEqual(actual);
  });

  it("creates a user - with a less naive test", async () => {
    const user = {
      name: "foo",
      age: 22
    };
    const expected = user;
    // thanks to the api version we can add new features and still keep the old tests
    const res = await axios.post("http://localhost:3001/api/v1/users", user);
    const actual = res.data;
    expect(expected).toEqual(actual);
  });
});
