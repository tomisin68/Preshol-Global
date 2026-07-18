import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Cookie Policy | Preshol Global',
  description: 'How Preshol Global uses cookies on presholGlobal.org.',
  alternates: { canonical: '/cookies-policy' },
};

export default function CookiesPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className={styles.wrap}>
        <div className={`container ${styles.inner}`}>
          <h1>Cookie Policy</h1>
          <p className={styles.updated}>Last updated: 18 July 2026</p>

          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files that a website stores on your device. They help the
            site remember your preferences and function correctly across visits.
          </p>

          <h2>How We Use Cookies</h2>
          <ul>
            <li>
              <strong>Essential cookies</strong> — necessary for the site to function correctly,
              such as remembering your cookie preference and enabling basic navigation.
            </li>
            <li>
              <strong>Preference cookies</strong> — remember choices you make on the site so we
              don&apos;t need to ask again on your next visit.
            </li>
            <li>
              <strong>Analytics and advertising cookies</strong> — Preshol Global does not
              currently use analytics, advertising, or tracking cookies of any kind. If this
              changes in the future, we will update this policy before doing so.
            </li>
          </ul>

          <h2>Managing Cookies</h2>
          <p>
            Most browsers let you control cookies through their settings, including blocking or
            deleting them. Restricting essential cookies may affect how parts of the site
            function. For questions about this policy, contact us at{' '}
            <a href="mailto:info@presholglobal.com">info@presholglobal.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
