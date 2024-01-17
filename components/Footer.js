// navigation array for ease of changin / removing links etc.
const navigation = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/Contact" },
  { name: "Terms and Conditions", href: "/termsandconditions" },
]

export default function Footer() {
  return (
    <footer className="border border-gray-300 bg-sky-100">
      <div className="px-4 py-2 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.map((item, i) => (
            <div key={i} className="px-6 py-2 ">
              <a href={item.href} className="text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-2 text-center text-gray-400">
          &copy;2023 Free Flow English, All rights reserved.
        </p>
      </div>
    </footer>
  )
}
