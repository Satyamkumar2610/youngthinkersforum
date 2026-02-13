export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen bg-background py-24 sm:py-32 overflow-hidden">
      <div className="fixed inset-0 bg-jaali opacity-[0.02] pointer-events-none" />
      <div className="mx-auto max-w-3xl px-6 lg:px-8 relative">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground tilak-heading tilak-heading-animated">
          Privacy Policy
        </h1>
        <p className="mt-6 text-muted-foreground leading-7">
          This is a placeholder privacy policy page. Replace this text with your organization’s
          real policy (data collection, cookies, analytics, contact email, and retention).
        </p>
        <div className="mt-10 rounded-2xl border border-border bg-white/70 backdrop-blur p-6 shadow-subtle">
          <h2 className="font-heading font-semibold text-foreground">Coming soon</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Add sections like “What we collect”, “Why we collect”, “Sharing”, “Security”, and
            “Your rights”.
          </p>
        </div>
      </div>
    </div>
  );
}

