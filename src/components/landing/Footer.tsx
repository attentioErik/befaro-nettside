import BefaroLogo from "./BefaroLogo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="flex items-center gap-2">
            <BefaroLogo size="sm" />
          </a>

          <nav className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="transition-colors hover:text-foreground">
              Personvern
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Vilkår
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Kontakt
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8 text-center text-sm text-muted-foreground">
          &copy; 2026 Befaro. Laget av Attentio.
        </div>
      </div>
    </footer>
  );
}
