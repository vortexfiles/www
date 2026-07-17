import { test, expect } from "@playwright/test"

test.describe("Home page", () => {
  test("loads and renders the main content", async ({ page }) => {
    await page.goto("/")

    await expect(page).toHaveTitle(/vortex/i)
    await expect(page.locator("main")).toBeVisible()
  })

  test("displays the navbar with navigation", async ({ page }) => {
    await page.goto("/")

    await expect(page.locator("nav").first()).toBeVisible()
  })

  test("displays the footer", async ({ page }) => {
    await page.goto("/")

    await expect(page.locator("footer").first()).toBeVisible()
  })

  test("has no console errors on load", async ({ page }) => {
    const errors: string[] = []
    page.on("console", (msg) => {
      if (msg.type() !== "error") return
      const url = msg.location().url
      // @vercel/analytics requests /_vercel/insights/script.js, which only
      // exists on Vercel hosting — it 404s on the self-hosted Docker deploy.
      if (url.includes("/_vercel/")) return
      errors.push(`${msg.text()} (${url})`)
    })

    await page.goto("/")
    await page.waitForLoadState("networkidle")

    expect(errors).toEqual([])
  })
})
