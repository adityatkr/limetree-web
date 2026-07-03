import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | LimeTree Hotels",
  description: "Read LimeTree Hotels' Privacy Policy to understand how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream pt-16">
      <section className="bg-dark py-16">
        <div className="container-luxury max-w-3xl">
          <h1 className="font-display font-bold text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: 1 July 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-luxury max-w-3xl space-y-8 text-sm text-dark-600 leading-relaxed">

          <p>LimeTree Hotels Private Limited (&ldquo;LimeTree&rdquo;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, share, and safeguard your personal information when you use our website, mobile applications, or any of our services.</p>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">1. Information We Collect</h2>
            <ul className="space-y-2">
              <li><strong className="text-dark">Personal Identification:</strong> Name, email, phone, date of birth, and government-issued ID details collected at check-in.</li>
              <li><strong className="text-dark">Booking Information:</strong> Check-in/out dates, room preferences, guest count, special requests, and payment details.</li>
              <li><strong className="text-dark">Usage Data:</strong> IP address, browser type, pages visited — collected automatically via cookies and analytics tools.</li>
              <li><strong className="text-dark">Communication Data:</strong> Records of your interactions with customer support, feedback forms, and surveys.</li>
              <li><strong className="text-dark">Location Data:</strong> Approximate location (with your consent) to show nearby properties.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">2. How We Use Your Information</h2>
            <ul className="space-y-2">
              <li>To process and manage your hotel reservations.</li>
              <li>To communicate booking confirmations, updates, and pre-arrival information.</li>
              <li>To provide customer support and respond to your inquiries.</li>
              <li>To personalize your experience and remember your preferences.</li>
              <li>To send promotional offers and newsletters (you may opt out at any time).</li>
              <li>To analyze usage patterns and improve our services.</li>
              <li>To comply with legal obligations under Indian law (Information Technology Act, 2000).</li>
              <li>To prevent fraud and ensure platform security.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">3. Sharing Your Information</h2>
            <p className="mb-3">We do not sell your personal information to third parties. We may share your data with:</p>
            <ul className="space-y-2">
              <li><strong className="text-dark">Service Partners:</strong> Payment gateways, email/SMS providers, and analytics services necessary to deliver our services.</li>
              <li><strong className="text-dark">Hotel Staff:</strong> Limited personal information is shared with property teams to fulfill your reservation.</li>
              <li><strong className="text-dark">Legal Authorities:</strong> When required by law, court order, or government regulation.</li>
              <li><strong className="text-dark">Business Transfers:</strong> In the event of a merger or acquisition — we will notify you before this occurs.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">4. Cookies and Tracking</h2>
            <p className="mb-3">We use cookies to enhance your browsing experience. Types of cookies:</p>
            <ul className="space-y-2">
              <li><strong className="text-dark">Essential Cookies:</strong> Required for the website to function (session management, security).</li>
              <li><strong className="text-dark">Analytics Cookies:</strong> Help us understand visitor interactions (Google Analytics).</li>
              <li><strong className="text-dark">Marketing Cookies:</strong> Used to deliver relevant advertisements (only with consent).</li>
            </ul>
            <p className="mt-3">You can control cookies through your browser settings.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">5. Data Security</h2>
            <p>We implement industry-standard security measures including SSL/TLS encryption, encrypted storage for sensitive data, regular security audits, and strict access controls. While we strive to protect your data, no method of internet transmission is 100% secure.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">6. Data Retention</h2>
            <p>Booking records are retained for 7 years as required by Indian tax regulations. Marketing data is retained until you unsubscribe or request deletion.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">7. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-2">
              <li><strong className="text-dark">Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong className="text-dark">Correction:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong className="text-dark">Deletion:</strong> Request deletion of your data, subject to legal retention requirements.</li>
              <li><strong className="text-dark">Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
            </ul>
            <p className="mt-3">To exercise these rights, email us at privacy@limetreehotels.com.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">8. Children&apos;s Privacy</h2>
            <p>Our services are not directed to children under 18. We do not knowingly collect personal information from minors. If you believe we have done so inadvertently, please contact us immediately.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new policy with an updated date. Continued use of our services after changes constitutes acceptance.</p>
          </div>

          <div>
            <h2 className="font-display font-bold text-xl text-dark mb-4">10. Contact</h2>
            <p>
              <strong className="text-dark">Data Protection Officer</strong><br />
              LimeTree Hotels Private Limited<br />
              Sansar Chandra Road, Jaipur, Rajasthan 302001<br />
              Email: privacy@limetreehotels.com
            </p>
          </div>

          <div className="pt-6 border-t border-dark-100">
            <Link href="/contact" className="text-primary-600 hover:text-primary-700 text-sm font-medium">Contact Us with Questions →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
