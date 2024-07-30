import { getQueryParams } from "../api/posts";
import {
  posts,
  recievedPosts,
  testPreparedData,
  testRecievedPreparedData,
} from "./mock-data";

describe("Jest tes", () => {
  beforeAll(() => {
    localStorage.clear();
  });

  afterAll(() => {
    sessionStorage.clear();
  });

  afterEach(() => {
    // ...что-то, что будет выполняться после каждого теста
  });

  test("Test sum function", () => {
    const sum = (a, b) => {
      return a + b;
    };

    expect(sum(0, 0)).toBe(0);
    expect(sum(1, 1)).toBe(2);
    expect(sum(55, 11)).toBe(66);
    expect(sum(-4, 0)).toBe(-4);
    expect(sum(-4, -17)).toBe(-21);
    expect(sum(1, 1)).not.toBe(3);
  });

  test("Test filter posts", () => {
    const filterPosts = (posts) => {
      return posts.filter((item) => item.image);
    };

    expect(filterPosts(posts)).toEqual(recievedPosts);
  });

  test("Test arrays", () => {
    const filterPosts = (posts) => {
      return posts.filter((item) => item > 4);
    };

    expect(filterPosts([1, 2, 70, -4, 15, 99, 0])).toEqual([70, 15, 99]);
    expect(filterPosts([0, 0, 0])).toEqual([]);
  });

  test("Test arrays", () => {
    const filterPosts = (posts) => {
      return posts.filter((item) => item > 4);
    };

    expect(filterPosts([1, 2, 70, -4, 15, 99, 0])).toEqual([70, 15, 99]);
    expect(filterPosts([0, 0, 0])).toEqual([]);
  });

  test("Test getQueryParams", () => {
    expect(getQueryParams("", "title", 12, 0)).toBe(
      `?limit=12&offset=0&ordering=title`
    );
    expect(getQueryParams("", "date", 1, 24)).toBe(
      `?limit=1&offset=24&ordering=date`
    );
    expect(getQueryParams("b2", "date", 12, 44)).toBe(
      `?limit=12&offset=44&search=b2&ordering=date`
    );
    expect(getQueryParams(0, null, 0, 0)).toBe(
      `?limit=0&offset=0&ordering=null`
    );
  });

  test("Test makeNewUserList", () => {
    // TDD - сначала пием тесты, а потом под них пишем функционал,
    // а BDD - наоборот (90% имено так и происходит)
    const makeNewUserList = (userList) => {
      return userList.map((item) => ({
        ...item,
        isFullAge: item.age >= 18,
        email: `${item.user.toLowerCase()}-${item.age}@gmail.com`,
      }));
    };

    expect(makeNewUserList(testPreparedData)).toEqual(testRecievedPreparedData);
  });
});
