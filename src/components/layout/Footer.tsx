import Link from "next/link";

const services = [
  { label: "60 Ad Creatives", href: "/services" },
  { label: "AI Content Factory", href: "/services" },
  { label: "Media Buying", href: "/services" },
  { label: "Brand Strategy", href: "/services" },
  { label: "Talent Management", href: "/talent" },
];

const pages = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Talent", href: "/talent" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/">
              <span className="font-display text-3xl font-bold text-text-primary">
                Grow<span className="text-gold"> N</span> Co
              </span>
            </Link>
            <p className="mt-4 font-body text-muted text-sm leading-relaxed max-w-xs">
              A global performance marketing agency operating across Africa, Europe, and the Americas.
              We build brands, scale e-commerce, and develop talent.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {["instagram", "tiktok", "linkedin", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-muted hover:text-gold hover:border-gold/40 transition-colors duration-200"
                  aria-label={social}
                >
                  <span className="font-mono text-xs uppercase">{social.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-5">Navigate</h4>
            <ul className="space-y-3">
              {pages.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-body text-sm text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="font-body text-sm text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-gold mb-3">Divisions</h4>
              <p className="font-body text-xs text-muted">E-Commerce Marketing</p>
              <p className="font-body text-xs text-muted mt-1">Traditional Brand Marketing</p>
              <p className="font-body text-xs text-muted mt-1">Talent Management</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted/60">
            © {new Date().getFullYear()} Grow N Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="font-mono text-xs text-muted/60 hover:text-muted transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="font-mono text-xs text-muted/60 hover:text-muted transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
