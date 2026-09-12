import { Github, Linkedin, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <>
      <footer id="contact" className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#">
              <span>
                <img src="/assets/logo-text.png" alt="Logo" />
              </span>
            </a>
            <p>
              Curated tools, technologies, and resources for developers buliding
              modern software.
            </p>
            <div className="socials">
              <a href="#" aria-label="GitHub">
                <Github />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>
          <FooterLinks
            title="PRODUCT"
            links={["Home", "Technologies", "Projects"]}
          />
          <FooterLinks
            title="COMPANY"
            links={["About", "Contact", "Careers"]}
          />
          <FooterLinks
            title="LEGAL"
            links={["Privacy Policy", "Terms of Use"]}
          />
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Dev Stack. All rights reserved.</span>
          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </>
  );
}
function FooterLinks({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="footer-links">
      <h4>{title}</h4>
      {links.map((l) => (
        <a key={l} href={`#${l.toLowerCase().replaceAll(" ", "-")}`}>
          {l}
        </a>
      ))}
    </div>
  );
}
