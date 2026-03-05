import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn()", () => {
  it("returns empty string for no arguments", () => {
    expect(cn()).toBe("")
  })

  it("returns a single class unchanged", () => {
    expect(cn("foo")).toBe("foo")
  })

  it("joins multiple classes", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("filters falsy values", () => {
    expect(cn("foo", undefined, null, false, "bar")).toBe("foo bar")
  })

  it("merges conflicting Tailwind classes (last wins)", () => {
    expect(cn("p-4", "p-8")).toBe("p-8")
  })

  it("handles conditional object syntax", () => {
    expect(cn({ "font-bold": true, "text-red-500": false })).toBe("font-bold")
  })

  it("handles array syntax", () => {
    expect(cn(["text-sm", "font-medium"])).toBe("text-sm font-medium")
  })
})
