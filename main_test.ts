import { assertEquals } from "@std/assert";
import { complexCalculation } from "./complex_calculation.ts";

Deno.test(async function addTest() {
  assertEquals(await complexCalculation([2, 3]), 5);
});
