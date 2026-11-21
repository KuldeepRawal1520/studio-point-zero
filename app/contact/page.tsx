import type { Metadata } from "next";
import { PageIntro } from "@/components/editorial";
import { EnquiryForm } from "@/components/enquiry-form";
import { studio } from "@/lib/studio";

export const metadata: Metadata = { title: "Contact", description: "Contact Studio Point Zero about interior design and turnkey solutions in Ahmedabad." };

export default function ContactPage() {
  const { phone, email, whatsapp, mapsUrl } = studio;
  const map = mapsUrl ?? "https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C%20India";
  return (
    <>
      <PageIntro label="Contact" title="Let’s talk about your space.">Planning a renovation or starting with an empty room? Tell us what you have in mind for your consultation.</PageIntro>
      <section className="wrap section project-index split">
        <div className="contact-details">
          <h2>Studio enquiries</h2>
          <p>{studio.location}</p>
          <ul className="contact-links">
            {phone && <li><a className="text-link" href={`tel:${phone.replace(/[^+\d]/g, "")}`}>{phone}</a></li>}
            {email && <li><a className="text-link" href={`mailto:${email}`}>{email}</a></li>}
            <li><a className="text-link" href={map}>{mapsUrl ? "Find the studio on Google Maps" : "View Ahmedabad on Google Maps"}</a></li>
          </ul>
          {whatsapp && <a className="button" href={`https://wa.me/${whatsapp}`}>Enquire on WhatsApp</a>}
        </div>
        <EnquiryForm />
      </section>
    </>
  );
}
