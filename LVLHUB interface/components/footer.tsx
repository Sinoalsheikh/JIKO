import Link from "next/link"

export function Footer() {
  const links = [
    { name: "About", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms", href: "#" },
    { name: "Advertising", href: "#" },
    { name: "Cookies", href: "#" },
  ]

  return (
    <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
      <nav className="space-x-4">
        {links.map((link) => (
          <Link key={link.name} href={link.href} className="hover:underline">
            {link.name}
          </Link>
        ))}
      </nav>
      <p className="mt-2">&copy; {new Date().getFullYear()} LVLHub Business Suite. All rights reserved.</p>
    </footer>
  )
}

