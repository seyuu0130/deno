import { assertEquals } from "./deps.ts";
import { addNum } from "./addNum.ts";

Deno.test("add(0) is 100", () => {
  const result = addNum(0);
  assertEquals(result, 100);
});
