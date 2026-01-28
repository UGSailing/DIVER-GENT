import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-silver/10 border-t border-yellow/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image src="/DIVERGENT_transparant.png" alt="DIVER-GENT" width={200} height={200} />
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-silver hover:text-yellow transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-silver hover:text-yellow transition-colors text-sm">
                  Over Ons
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h4 className="text-foreground font-semibold mb-2">Volg ons</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/divergent.studentteams"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DIVER-GENT op Instagram"
                  className="text-foreground/80 hover:text-yellow transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/diver-gent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="DIVER-GENT op LinkedIn"
                  className="text-foreground/80 hover:text-yellow transition-colors"
                >
                  <FaLinkedinIn className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow/20 text-center text-silver text-sm">
          <p>&copy; {new Date().getFullYear()} DIVER-GENT. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
