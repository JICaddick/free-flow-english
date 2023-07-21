// navigation array for ease of changin / removing links etc. 
const navigation = [
{name: 'About', href: '#'},
{name: 'Shop', href: '#'},
{name: 'Contact', href: '#'},
{name: 'Terms and Conditions', href: '#'}
]

export default function Footer() {
  return (
    <footer className="bg-sky-100">
        <div className="px-4 py-4 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8"> 
            <nav className="flex flex-wrap justify-center">
                {
                    navigation.map((item, i) => (
                        <div key={i}className="px-6 py-2 ">
                            <a href={item.href} className="text-gray-500 hover:text-gray-900">
                                {item.name}
                            </a>
                        </div>
                    ))
                }
            </nav>
            <p className="mt-8 text-center text-gray-400">&copy;2023 Free Flow English, All rights reserved.</p>
        </div>
    </footer>
  )
}
