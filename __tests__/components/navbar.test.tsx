import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Navbar } from "@/components/navbar"

vi.mock("next/link", () => ({
  default: ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <a href={href} className={className}>
      {children}
    </a>
  ),
}))

describe("Navbar", () => {
  beforeEach(() => {
    // Provide scrollIntoView for jsdom
    Element.prototype.scrollIntoView = vi.fn()
  })

  it("renders without crashing", () => {
    render(<Navbar />)
  })

  it("renders the brand name", () => {
    render(<Navbar />)
    expect(screen.getByText("Vortex")).toBeInTheDocument()
  })

  it("renders login buttons", () => {
    render(<Navbar />)
    const loginButtons = screen.getAllByText("Se connecter")
    expect(loginButtons.length).toBeGreaterThan(0)
  })

  it("renders download buttons", () => {
    render(<Navbar />)
    const downloadButtons = screen.getAllByText("Télécharger")
    expect(downloadButtons.length).toBeGreaterThan(0)
  })

  it("renders desktop navigation links", () => {
    render(<Navbar />)
    const featuresLinks = screen.getAllByText("Fonctionnalités")
    expect(featuresLinks.length).toBeGreaterThan(0)
  })

  it("mobile menu is hidden by default", () => {
    render(<Navbar />)
    // Mobile menu links should only exist once (desktop) when closed
    const tariffs = screen.getAllByText("Tarifs")
    expect(tariffs.length).toBe(1)
  })

  it("clicking hamburger button opens mobile menu", () => {
    render(<Navbar />)
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    fireEvent.click(toggleButton)
    // After opening, nav links appear twice (desktop + mobile)
    const tariffs = screen.getAllByText("Tarifs")
    expect(tariffs.length).toBe(2)
  })

  it("clicking hamburger button again closes mobile menu", () => {
    render(<Navbar />)
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    fireEvent.click(toggleButton)
    fireEvent.click(toggleButton)
    const tariffs = screen.getAllByText("Tarifs")
    expect(tariffs.length).toBe(1)
  })

  it("clicking a nav link triggers smooth scroll and closes mobile menu", () => {
    const getElementById = vi.spyOn(document, "getElementById").mockReturnValue(null)
    render(<Navbar />)
    // Open mobile menu first
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    fireEvent.click(toggleButton)
    // Click a link in the mobile menu
    const tariffLinks = screen.getAllByText("Tarifs")
    fireEvent.click(tariffLinks[tariffLinks.length - 1])
    // Mobile menu should be closed
    expect(screen.getAllByText("Tarifs").length).toBe(1)
    getElementById.mockRestore()
  })

  it("smooth scroll calls scrollIntoView when element exists", () => {
    const mockElement = { scrollIntoView: vi.fn() }
    vi.spyOn(document, "getElementById").mockReturnValue(mockElement as unknown as HTMLElement)
    render(<Navbar />)
    const toggleButton = screen.getByRole("button", { name: /toggle menu/i })
    fireEvent.click(toggleButton)
    const tariffLinks = screen.getAllByText("Tarifs")
    fireEvent.click(tariffLinks[tariffLinks.length - 1])
    expect(mockElement.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    })
    vi.restoreAllMocks()
  })
})
