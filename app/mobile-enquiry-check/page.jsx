import styles from "../legal.module.css";

export const metadata = {
  title: "£99 Enquiry-path fix",
  description:
    "This retired £79 mobile enquiry check has moved to Linshi Studio's current £99 enquiry-path fix.",
  alternates: { canonical: "/project-guide/" },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RetiredMobileEnquiryCheckPage() {
  return (
    <main className={styles.page}>
      {/* GitHub Pages is static hosting. This is a client-facing redirect; a true HTTP 301 requires a Cloudflare redirect rule. */}
      <meta httpEquiv="refresh" content="0; url=/project-guide/#enquiry-path-fix" />
      <section className={styles.section}>
        <p className={styles.eyebrow}>Linshi Studio</p>
        <h1>This offer has moved</h1>
        <p>
          The £79 mobile enquiry check is retired. Linshi Studio&apos;s current
          fixed-scope offer is the £99 Enquiry-path fix.
        </p>
        <p>
          If you are not redirected automatically,{" "}
          <a href="/project-guide/#enquiry-path-fix">view the current £99 offer</a>.
        </p>
      </section>
    </main>
  );
}
