import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" }),
  ).toBeVisible();
});

test("rag-&-bone-jeans", async ({ page }) => {
  await page.goto(
    "https://www.rag-bone.com/p/fit-4-straight-jeans-RX0426S2RMI.html",
  );

  const price = await page.getByText("$").first();
  console.log(price);
});

test("nike-air-max-95", async ({ page }) => {
  await page.goto(
    "https://www.nike.com/t/air-max-95-big-bubble-mens-shoes-2xNsHz6W/IB6830-001",
  );

  const price = await page.getByText("$").first().textContent();
  console.log(price);
});
