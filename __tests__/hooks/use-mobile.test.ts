import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useIsMobile } from "@/hooks/use-mobile"

describe("useIsMobile()", () => {
  const addEventListenerSpy = vi.fn()
  const removeEventListenerSpy = vi.fn()

  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1024,
    })

    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: addEventListenerSpy,
      removeEventListener: removeEventListenerSpy,
      dispatchEvent: vi.fn(),
    }))
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("returns false for desktop width (1024px)", () => {
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it("returns true for mobile width (375px)", () => {
    Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 375 })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it("returns false exactly at breakpoint (768px)", () => {
    Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 768 })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it("returns true just below breakpoint (767px)", () => {
    Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 767 })
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it("registers and removes a matchMedia listener", () => {
    const { unmount } = renderHook(() => useIsMobile())
    expect(addEventListenerSpy).toHaveBeenCalledWith("change", expect.any(Function))
    unmount()
    expect(removeEventListenerSpy).toHaveBeenCalledWith("change", expect.any(Function))
  })

  it("updates when matchMedia fires a change event", () => {
    let capturedHandler: (() => void) | null = null
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      addEventListener: (_: string, fn: () => void) => {
        capturedHandler = fn
      },
      removeEventListener: removeEventListenerSpy,
      dispatchEvent: vi.fn(),
    }))

    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    act(() => {
      Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: 375 })
      capturedHandler?.()
    })

    expect(result.current).toBe(true)
  })
})
