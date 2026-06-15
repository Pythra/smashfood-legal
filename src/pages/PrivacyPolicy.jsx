import Layout from '../components/Layout';

const SUPPORT_EMAIL = 'support@smashfood.com';
const LAST_UPDATED = 'June 14, 2026';

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy">
      <p className="updated">Last updated: {LAST_UPDATED}</p>

      <p>
        Smashfood (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Smashfood mobile
        application (the &quot;App&quot;). This Privacy Policy explains how we collect, use, and
        protect your information when you use our App to order food and related services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Account information:</strong> name, phone number, email address, and profile
          details you provide when creating an account.
        </li>
        <li>
          <strong>Delivery information:</strong> saved addresses (Home, Work, custom places),
          location data when you use GPS or map features, and delivery instructions.
        </li>
        <li>
          <strong>Order information:</strong> items ordered, order history, favorites, saved
          orders, and payment-related details processed through our wallet and payment partners.
        </li>
        <li>
          <strong>Device and usage data:</strong> device type, operating system, app version, and
          general usage information to improve performance and security.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>Create and manage your account</li>
        <li>Process and deliver food orders</li>
        <li>Show relevant restaurants and meals near your location</li>
        <li>Operate your in-app wallet and transaction history</li>
        <li>Send order updates, verification codes, and service notifications</li>
        <li>Improve the App, fix bugs, and prevent fraud or abuse</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Location Data</h2>
      <p>
        With your permission, we access your device location to show your delivery address, suggest
        nearby vendors, and improve order fulfillment. You can disable location access in your device
        settings, but some features may not work correctly.
      </p>

      <h2>4. Sharing Your Information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>Restaurants, vendors, and delivery partners to fulfill your orders</li>
        <li>Payment processors to complete transactions</li>
        <li>Cloud hosting and infrastructure providers that help us run the App</li>
        <li>Law enforcement or regulators when required by law</li>
      </ul>
      <p>We do not sell your personal information to third parties.</p>

      <h2>5. Data Retention</h2>
      <p>
        We keep your information for as long as your account is active or as needed to provide
        services, comply with legal obligations, resolve disputes, and enforce our agreements.
      </p>

      <h2>6. Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access, update, or delete your personal data</li>
        <li>Withdraw consent for location or marketing communications</li>
        <li>Request a copy of your data</li>
      </ul>
      <p>
        To delete your account and associated data, see our{' '}
        <a href="/data-deletion">Data Deletion</a> page or contact us at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-email">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <h2>7. Security</h2>
      <p>
        We use reasonable technical and organizational measures to protect your information.
        However, no method of transmission over the internet is 100% secure.
      </p>

      <h2>8. Children&apos;s Privacy</h2>
      <p>
        The App is not intended for children under 13. We do not knowingly collect personal
        information from children under 13.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the updated version on
        this page and update the &quot;Last updated&quot; date above.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, contact us at{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-email">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    </Layout>
  );
}
