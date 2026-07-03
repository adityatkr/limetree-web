import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | LimeTree Hotels",
  description: "Read the Terms & Conditions governing your use of LimeTree Hotels' website, booking platform, and hotel services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream pt-16">
      <section className="bg-dark py-16">
        <div className="container-luxury max-w-3xl">
          <h1 className="font-display font-bold text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-white/60 text-sm">Last updated: 1 July 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury max-w-3xl space-y-8 text-sm text-dark-600 leading-relaxed">

          <p>These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the LimeTree Hotels website, mobile applications, and all hotel services provided by LimeTree Hotels Private Limited (&ldquo;LimeTree&rdquo;). By accessing our website or making a reservation, you agree to be bound by these Terms.</p>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">1. Eligibility</h2>
            <p>You must be at least 18 years of age to make a reservation or use our services. By making a reservation, you represent that you have the legal capacity to enter into a binding agreement.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">2. Reservations &amp; Bookings</h2>
            <p className="mb-3">All reservations are subject to availability and confirmation. A reservation is only confirmed upon receipt of a booking confirmation email with a reference number.</p>
            <p className="mb-3">Rates displayed are in Indian Rupees (INR) and include applicable taxes unless stated otherwise. Rates are dynamic and may change until a booking is confirmed.</p>
            <p>LimeTree reserves the right to refuse any reservation at its sole discretion without providing reasons.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">3. Cancellation &amp; Refund Policy</h2>
            <ul className="space-y-2">
              <li><strong className="text-dark">Standard Flexible Rate:</strong> Free cancellation up to 24 hours before check-in. Cancellations within 24 hours are charged one night&apos;s accommodation.</li>
              <li><strong className="text-dark">Non-Refundable Rate:</strong> Full payment is charged at booking. No refunds for cancellations or no-shows.</li>
              <li><strong className="text-dark">Early Bird Rate:</strong> Cancellations 7+ days before check-in receive a 50% refund. Within 7 days is non-refundable.</li>
              <li><strong className="text-dark">Corporate Flexi Rate:</strong> Free cancellation up to 6 hours before check-in.</li>
            </ul>
            <p className="mt-3">All refunds are processed to the original payment method within 5–10 business days.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">4. Check-in &amp; Check-out</h2>
            <p className="mb-3">Standard check-in time is 2:00 PM and check-out is 12:00 PM. Early check-in and late check-out are subject to availability and may incur additional charges.</p>
            <p>Valid government-issued photo ID is mandatory for all guests at check-in. International guests must present a valid passport.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">5. Payment</h2>
            <p className="mb-3">We accept credit cards, debit cards, UPI, net banking, and corporate billing. All transactions are processed through PCI-DSS compliant payment gateways.</p>
            <p>LimeTree is not responsible for any bank charges for international transactions or currency conversions.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">6. Hotel Policies</h2>
            <ul className="space-y-2">
              <li><strong className="text-dark">Smoking:</strong> LimeTree properties are non-smoking. A deep-cleaning charge of ₹5,000 will be levied for violation.</li>
              <li><strong className="text-dark">Pets:</strong> Pets are not permitted unless explicitly stated for a specific property.</li>
              <li><strong className="text-dark">Damage:</strong> Guests are responsible for any damage to hotel property. Costs will be charged to the registered credit card.</li>
              <li><strong className="text-dark">Noise:</strong> Excessive noise is not permitted between 10:00 PM and 7:00 AM to ensure all guests&apos; comfort.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">7. Restaurant &amp; Banquet</h2>
            <p className="mb-3">Restaurant reservations are subject to availability. LimeTree reserves the right to seat guests at its discretion.</p>
            <p>Banquet and event bookings are governed by separate Event Agreements. In case of conflict, the Event Agreement prevails over these Terms for banquet services.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">8. Intellectual Property</h2>
            <p>All content on the LimeTree website — including text, images, logos, and software — is the property of LimeTree Hotels Private Limited and is protected by Indian and international copyright laws. Reproduction without prior written consent is prohibited.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">9. Limitation of Liability</h2>
            <p className="mb-3">To the maximum extent permitted by law, LimeTree shall not be liable for indirect, incidental, special, or consequential damages arising from your use of our services.</p>
            <p>Our total liability for any claim shall not exceed the total amount you paid for the specific reservation in question.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">10. Governing Law &amp; Disputes</h2>
            <p className="mb-3">These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Jaipur, Rajasthan.</p>
            <p>We encourage you to contact our customer support team first to resolve any disputes amicably.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">11. Modifications</h2>
            <p>LimeTree reserves the right to modify these Terms at any time. Changes will be effective upon posting with an updated date. Continued use of our services after changes constitutes acceptance of the revised Terms.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">12. Contact</h2>
            <p>
              <strong className="text-dark">Legal Team</strong><br />
              LimeTree Hotels Private Limited<br />
              Sansar Chandra Road, Jaipur, Rajasthan 302001<br />
              legal@limetreehotels.com
            </p>
          </div>

          <div className="pt-6 border-t border-dark-100 flex flex-wrap gap-4">
            <Link href="/privacy" className="text-primary-600 hover:text-primary-700 text-sm font-medium">Privacy Policy →</Link>
            <Link href="/faq" className="text-primary-600 hover:text-primary-700 text-sm font-medium">FAQ →</Link>
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 text-sm font-medium">Contact Us →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
