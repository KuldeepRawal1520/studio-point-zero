import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { SocialLinks } from "@/components/social-links";
import { studio } from "@/lib/studio";

export const metadata: Metadata = { title: "Contact", description: "Contact Studio Point Zero about interior design and turnkey solutions in Ahmedabad." };

export default function ContactPage() {
  const { phone, email, whatsapp, mapsUrl } = studio;
  const map = mapsUrl ?? "https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C%20India";
  return (
    <>
      <div className="contact-editorial">
        <header className="wrap contact-opening"><p className="eyebrow">A conversation is a beginning</p><h1>Every space starts<br />with <em>you.</em></h1><p>Tell us what home means to you.<br />We’ll start with a conversation.</p></header>
        <section className="wrap contact-workspace" aria-label="Contact the studio">
          <div className="contact-salon">
            <div className="contact-arch" aria-hidden="true"><div className="contact-sun" /><div className="contact-pedestal" /><div className="contact-sphere" /></div>
            <div className="contact-salon-copy"><p className="eyebrow">Studio Point Zero</p><h2>Come with an idea.<br /><em>Leave with possibilities.</em></h2>
              {whatsapp && <a className="button button-light" href={`https://wa.me/${whatsapp}`}>Let’s talk on WhatsApp</a>}
            </div>
            <div className="contact-directory">
              <div><span>Visit the studio</span><p>{studio.address}</p><a href={map} className="text-link">{mapsUrl ? "Get directions" : "View Ahmedabad"}</a></div>
              <div><span>Studio hours</span><p>{studio.hours}</p><span className="directory-secondary">{studio.location}</span></div>
            </div>
          </div>
          <div className="contact-writing"><p className="eyebrow">Your next chapter</p><EnquiryForm /><div className="contact-direct">
            <p>Prefer a personal conversation?</p>
            {phone && <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a>}
            {email && <a href={`mailto:${email}`}>{email}</a>}
          </div><section className="contact-social" aria-labelledby="contact-social-heading"><h3 id="contact-social-heading">Find us online</h3><SocialLinks labelled /></section></div>
        </section>
      </div>
    </>
  );
}
