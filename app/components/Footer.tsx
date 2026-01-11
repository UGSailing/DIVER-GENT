import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-silver/10 border-t border-yellow/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-yellow mb-4">DIVER-GENT</h3>
            <p className="text-silver/80 text-sm">
              Een overkoepelende organisatie voor Gentse studentenprojecten en verenigingen.
            </p>
          </div>
          
          <div>
            <h4 className="text-yellow font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-silver/80 hover:text-yellow transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-silver/80 hover:text-yellow transition-colors text-sm">
                  Over Ons
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-silver/80 hover:text-yellow transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-yellow font-semibold mb-4">Contact</h4>
            <p className="text-silver/80 text-sm">
              Gent, België
            </p>
            <p className="text-silver/80 text-sm mt-2">
              <Link href="/contact" className="hover:text-yellow transition-colors">
                Neem contact op
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-yellow/20 text-center text-silver/60 text-sm">
          <p>&copy; {new Date().getFullYear()} DIVER-GENT. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
