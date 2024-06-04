import { test, expect, type Page } from "@playwright/test";

const homePath = "http://localhost:3000";
const withSuspensePath = "http://localhost:3000/with-suspense";
const withoutSuspensePath = "http://localhost:3000/without-suspense";

test("has title", async ({ page }) => {
  await page.goto(homePath);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Riordan's Zip Hackerrank Test");
});

test.describe("Navbar links work", () => {
  const testLink = async (page: Page, path: string, linkName: string) => {
    await page.goto(homePath);

    await page.getByRole("link", { name: linkName }).click();

    await expect(page).toHaveURL(path);
  };
  test("with suspense", async ({ page }) => {
    await testLink(page, withSuspensePath, "With Suspense");
  });
  test("without suspense", async ({ page }) => {
    await testLink(page, withoutSuspensePath, "Without Suspense");
  });
});

test.describe("Search reduces number of merchants", () => {
  const testSearch = async (page: Page, path: string) => {
    await page.goto(path);
    const merchantsBeforeSearch = await page
      .getByTestId("merchant-card")
      .count();
    // use a search query that will reduce the number of merchants without removing all of them
    await page.fill("input", "ea");
    // wait for the search text to be updated
    await page.waitForSelector(`input[value="ea"]`);
    await page.waitForRequest(/.*/);
    await page.waitForSelector(`[data-testid="merchant-card"]`);
    const merchantsAfterSearch = await page
      .getByTestId("merchant-card")
      .count();
    expect(merchantsAfterSearch).toBeLessThan(merchantsBeforeSearch);
    expect(merchantsAfterSearch).toBeGreaterThan(0);
  };

  test("with suspense", async ({ page }) => {
    await testSearch(page, withSuspensePath);
  });
  test("without suspense", async ({ page }) => {
    await testSearch(page, withoutSuspensePath);
  });
});

test("Search with no results", async ({ page }) => {
  await page.goto(withSuspensePath);
  await page.fill("input", "no results");
  await page.waitForSelector(`input[value="no results"]`);
  await page.waitForRequest(/.*/);
  const locator = page.locator('text="loading"');
  await expect(locator).toHaveCount(0);
  await expect(page.getByTestId("merchant-card")).toHaveCount(0);
  await expect(page.locator('text="No results match"')).toHaveCount(1);
});
