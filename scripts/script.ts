import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(
    "https://www.nike.com/t/air-max-95-big-bubble-mens-shoes-2xNsHz6W/IB6830-001",
  );

  const price = await page.getByText("$").first().textContent();
  console.log(price);
})();
