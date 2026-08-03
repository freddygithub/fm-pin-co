import Image from "next/image";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/content/site";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main className="page-shell">
      <section className="profile" aria-labelledby="page-title">
        <Image
          className="logo"
          src="/fm-pin-co-logo.png"
          alt="F&M Pin Co. castle logo"
          width={1258}
          height={1258}
          priority
        />

        <div className="intro">
          <p className="eyebrow">Collectible pins · Live sales</p>
          <h1 id="page-title">F&M Pin Co.</h1>
          <p>{site.description}</p>
        </div>

        <div className="stream-card">
          <div>
            <span>Next live stream</span>
            <strong>{site.nextStream.date}</strong>
          </div>
          <span className="sparkle" aria-hidden="true">✦</span>
        </div>

        <div className="links" aria-label="F&M Pin Co. links">
          {site.shops.map((link) => (
            <a href={link.href} key={link.name} target="_blank" rel="noreferrer">
              <span><small>Shop on</small>{link.name}</span><Arrow />
            </a>
          ))}
          {site.social.map((link) => (
            <a href={link.href} key={link.name} target="_blank" rel="noreferrer">
              <span><small>Follow us on</small>{link.name}</span><Arrow />
            </a>
          ))}
          <a href="#contact"><span><small>Questions?</small>Contact us</span><span aria-hidden="true">↓</span></a>
        </div>

        <section className="contact" id="contact">
          <div className="contact-heading">
            <p className="eyebrow">Get in touch</p>
            <h2>Send us a note.</h2>
          </div>
          <ContactForm email={site.email} endpoint={site.contactFormEndpoint} />
        </section>

        <footer>© {new Date().getFullYear()} {site.name}</footer>
      </section>
    </main>
  );
}
