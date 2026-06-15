import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const SUPPORT_EMAIL = 'support@smashfood.com';
const LAST_UPDATED = 'June 14, 2026';

export default function DataDeletion() {
  return (
    <Layout title="Account & Data Deletion">
      <p className="updated">Last updated: {LAST_UPDATED}</p>

      <p>
        Smashfood respects your right to control your personal data. This page explains how you can
        request deletion of your Smashfood Buyer account and associated data, as required by Google
        Play and applicable privacy laws.
      </p>

      <h2>What Gets Deleted</h2>
      <p>When your account is deleted, we remove or anonymize data linked to your account, including:</p>
      <ul>
        <li>Your profile and account credentials</li>
        <li>Saved delivery addresses (Home, Work, and custom places)</li>
        <li>Shopping cart contents</li>
        <li>Wallet balance records associated with your account</li>
        <li>Favorites and saved orders</li>
      </ul>
      <p>
        Some information may be retained where required by law (for example, completed order records
        for tax, accounting, or fraud prevention) for a limited period, after which it is deleted
        or anonymized.
      </p>

      <h2>How to Delete Your Account</h2>

      <div className="deletion-box">
        <h3>Option 1 — In the App (recommended)</h3>
        <ol>
          <li>Open the Smashfood app and sign in to your account.</li>
          <li>Go to <strong>Profile</strong>.</li>
          <li>Open account or security settings.</li>
          <li>Select <strong>Delete Account</strong> and confirm your request.</li>
        </ol>
        <p style={{ marginBottom: 0 }}>
          Your account and linked data will be deleted from our systems.
        </p>
      </div>

      <div className="deletion-box">
        <h3>Option 2 — Email request</h3>
        <p>
          If you cannot access the app, email us at{' '}
          <a href={`mailto:${SUPPORT_EMAIL}?subject=Account%20Deletion%20Request`} className="contact-email">
            {SUPPORT_EMAIL}
          </a>{' '}
          with the subject line <strong>&quot;Account Deletion Request&quot;</strong> and include:
        </p>
        <ul>
          <li>The phone number or email address linked to your Smashfood account</li>
          <li>Your full name (as shown in the app)</li>
          <li>A brief statement that you want your account and data deleted</li>
        </ul>
        <p style={{ marginBottom: 0 }}>
          We will verify your identity and process your request within <strong>30 days</strong>.
        </p>
      </div>

      <h2>Processing Time</h2>
      <p>
        Account deletion requests are typically processed within 7–30 days. You will receive a
        confirmation once deletion is complete. Until then, you may still sign in unless you have
        already initiated deletion.
      </p>

      <h2>Data That May Remain</h2>
      <p>
        After deletion, we may retain minimal records required for legal compliance, dispute
        resolution, or security (such as anonymized analytics or financial records tied to completed
        orders). These are not used to identify you or market to you.
      </p>

      <h2>Questions</h2>
      <p>
        For privacy-related questions or to check the status of a deletion request, contact{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="contact-email">
          {SUPPORT_EMAIL}
        </a>
        .
      </p>

      <p>
        See also our <Link to="/privacy-policy">Privacy Policy</Link>.
      </p>
    </Layout>
  );
}
