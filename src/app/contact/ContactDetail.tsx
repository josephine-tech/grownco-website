"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInUp from "@/components/ui/FadeInUp";

type FormStep = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1 - Who you are
  name: string;
  email: string;
  whatsapp: string;
  company: string;
  role: string;
  // Step 2 - Your brand
  industry: string;
  website: string;
  socialHandles: string;
  monthlyRevenue: string;
  monthlyAdSpend: string;
  // Step 3 - What you need
  services: string[];
  goals: string;
  timeline: string;
  budget: string;
  // Step 4 - Context
  biggestChallenge: string;
  whyNow: string;
  heardAboutUs: string;
}

const initialData: FormData = {
  name: "", email: "", whatsapp: "", company: "", role: "",
  industry: "", website: "", socialHandles: "", monthlyRevenue: "", monthlyAdSpend: "",
  services: [], goals: "", timeline: "", budget: "",
  biggestChallenge: "", whyNow: "", heardAboutUs: "",
};

const serviceOptions = [
  "60 Ad Creatives",
  "AI Content Factory",
  "Growth & Scale Strategy",
  "Media Buying",
  "Brand Package (Presence / Brand / Empire)",
  "Talent Management (Personal Creator)",
  "Talent Management (Brand Ideation)",
  "UGC & Influencer Matching",
  "Brand Foundation",
  "Not sure yet",
];

const revenueOptions = [
  "Pre-revenue",
  "$0 - $5K / mo",
  "$5K - $20K / mo",
  "$20K - $50K / mo",
  "$50K - $100K / mo",
  "$100K+ / mo",
];

const budgetOptions = [
  "Under $1,000 / mo",
  "$1,000 - $3,000 / mo",
  "$3,000 - $6,500 / mo",
  "$6,500 - $10,000 / mo",
  "$10,000+ / mo",
];

const timelineOptions = [
  "As soon as possible",
  "Within 2 weeks",
  "Within a month",
  "1 - 3 months",
  "Just exploring",
];

export default function ContactDetail() {
  const [step, setStep] = useState<FormStep>(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (field: keyof FormData, value: string | string[]) =>
    setData((d) => ({ ...d, [field]: value }));

  const toggleService = (svc: string) => {
    set("services", data.services.includes(svc)
      ? data.services.filter((s) => s !== svc)
      : [...data.services, svc]
    );
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    // Encode form data and send to Formspree or similar
    // For now, mailto fallback
    const body = `
GROW N CO - DISCOVERY FORM SUBMISSION

STEP 1: WHO YOU ARE
Name: ${data.name}
Email: ${data.email}
WhatsApp: ${data.whatsapp}
Company: ${data.company}
Role: ${data.role}

STEP 2: YOUR BRAND
Industry: ${data.industry}
Website: ${data.website}
Social Handles: ${data.socialHandles}
Monthly Revenue: ${data.monthlyRevenue}
Monthly Ad Spend: ${data.monthlyAdSpend}

STEP 3: WHAT YOU NEED
Services: ${data.services.join(", ")}
Goals: ${data.goals}
Timeline: ${data.timeline}
Budget: ${data.budget}

STEP 4: CONTEXT
Biggest Challenge: ${data.biggestChallenge}
Why Now: ${data.whyNow}
How They Found Us: ${data.heardAboutUs}
    `.trim();

    window.location.href = `mailto:josephine@grownco.uk?subject=Discovery Form - ${data.company || data.name}&body=${encodeURIComponent(body)}`;
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 500);
  };

  const stepTitles = [
    "Who are you?",
    "Tell us about your brand.",
    "What do you need?",
    "A little more context.",
  ];

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background pt-24 px-6">
        <motion.div
          className="text-center max-w-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full border border-gold/40 flex items-center justify-center mx-auto mb-6">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M5 14l6 6L23 8" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="font-display text-4xl font-bold text-text-primary mb-4">Your outreach is ready!!</h2>
          <p className="font-body text-muted leading-relaxed mb-2">
            Your discovery form is pre-filled and ready to send to josephine@grownco.uk.
          </p>
          <p className="font-body text-muted leading-relaxed">
            Alternatively, reach us on WhatsApp at{" "}
            <a href="https://wa.me/447405527430" className="text-gold hover:underline">+44 7405 527430</a>.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-10 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Discovery Form</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-text-primary leading-[0.9] mb-4">
              Let&apos;s Find Your<br />
              <span className="gradient-text italic">Desire.</span>
            </h1>
            <p className="font-body text-muted text-lg leading-relaxed">
              Fill in this form and we will be in touch to book your strategy call.
              The more detail you give, the better our first conversation will be.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress bar */}
      <div className="sticky top-[60px] z-30 bg-background/90 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-2">
            {([1, 2, 3, 4] as FormStep[]).map((s) => (
              <div key={s} className="flex-1 h-0.5 rounded-full bg-surface overflow-hidden">
                <div
                  className="h-full bg-gold transition-all duration-500"
                  style={{ width: step >= s ? "100%" : "0%" }}
                />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs text-muted">Step {step} of 4</p>
            <p className="font-body text-sm font-medium text-text-primary">{stepTitles[step - 1]}</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <section className="py-12 pb-24 bg-background">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatePresence mode="wait">
            {/* Step 1 */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <FadeInUp>
                  <p className="font-mono text-xs uppercase tracking-widest text-gold mb-6">Step 1 of 4</p>
                  <h2 className="font-display text-3xl font-bold text-text-primary mb-8">Who are you?</h2>
                </FadeInUp>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full Name *" value={data.name} onChange={(v) => set("name", v)} placeholder="Your full name" />
                  <Field label="Email Address *" value={data.email} onChange={(v) => set("email", v)} placeholder="you@company.com" type="email" />
                  <Field label="WhatsApp Number" value={data.whatsapp} onChange={(v) => set("whatsapp", v)} placeholder="+44 7XXX XXX XXX" />
                  <Field label="Company / Brand Name *" value={data.company} onChange={(v) => set("company", v)} placeholder="Your brand name" />
                  <Field label="Your Role" value={data.role} onChange={(v) => set("role", v)} placeholder="Founder, CMO, Marketing Manager..." className="sm:col-span-2" />
                </div>
              </motion.div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-gold mb-6">Step 2 of 4</p>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-8">Tell us about your brand.</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Industry / Niche" value={data.industry} onChange={(v) => set("industry", v)} placeholder="e.g. Fashion, Supplements, SaaS..." />
                  <Field label="Website" value={data.website} onChange={(v) => set("website", v)} placeholder="https://yourwebsite.com" />
                  <Field label="Social Handles" value={data.socialHandles} onChange={(v) => set("socialHandles", v)} placeholder="@yourbrand (Instagram, TikTok...)" className="sm:col-span-2" />
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Current Monthly Revenue</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {revenueOptions.map((opt) => (
                      <OptionButton key={opt} label={opt} selected={data.monthlyRevenue === opt} onClick={() => set("monthlyRevenue", opt)} />
                    ))}
                  </div>
                </div>

                <Field
                  label="Current Monthly Ad Spend (if any)"
                  value={data.monthlyAdSpend}
                  onChange={(v) => set("monthlyAdSpend", v)}
                  placeholder="e.g. $500/mo, nothing yet..."
                />
              </motion.div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-gold mb-6">Step 3 of 4</p>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-8">What do you need?</h2>

                <div className="mb-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Which services are you interested in? (Select all that apply)</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {serviceOptions.map((opt) => (
                      <OptionButton key={opt} label={opt} selected={data.services.includes(opt)} onClick={() => toggleService(opt)} />
                    ))}
                  </div>
                </div>

                <TextArea
                  label="What are your growth goals for the next 6 months?"
                  value={data.goals}
                  onChange={(v) => set("goals", v)}
                  placeholder="Be as specific as you can. Revenue targets, follower growth, ROAS targets..."
                />

                <div className="mt-6 mb-6">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">When do you want to get started?</p>
                  <div className="grid sm:grid-cols-3 gap-2">
                    {timelineOptions.map((opt) => (
                      <OptionButton key={opt} label={opt} selected={data.timeline === opt} onClick={() => set("timeline", opt)} />
                    ))}
                  </div>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Monthly Budget for Marketing Services</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {budgetOptions.map((opt) => (
                      <OptionButton key={opt} label={opt} selected={data.budget === opt} onClick={() => set("budget", opt)} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4 */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-gold mb-6">Step 4 of 4</p>
                <h2 className="font-display text-3xl font-bold text-text-primary mb-8">A little more context.</h2>

                <TextArea
                  label="What is your single biggest marketing challenge right now?"
                  value={data.biggestChallenge}
                  onChange={(v) => set("biggestChallenge", v)}
                  placeholder="The more honest you are, the more useful our first call will be..."
                />
                <TextArea
                  label="Why is now the right time to invest in marketing?"
                  value={data.whyNow}
                  onChange={(v) => set("whyNow", v)}
                  placeholder="What has changed, or what opportunity are you trying to capture?"
                />
                <Field
                  label="How did you hear about Grow N Co?"
                  value={data.heardAboutUs}
                  onChange={(v) => set("heardAboutUs", v)}
                  placeholder="Instagram, referral, Google, podcast..."
                />

                {/* Summary */}
                <div className="p-6 bg-surface border border-white/5 rounded-sm">
                  <p className="font-mono text-xs uppercase tracking-widest text-gold mb-4">Summary</p>
                  <div className="space-y-2">
                    {[
                      { label: "Name", value: data.name },
                      { label: "Company", value: data.company },
                      { label: "Services", value: data.services.join(", ") || "Not specified" },
                      { label: "Budget", value: data.budget || "Not specified" },
                      { label: "Timeline", value: data.timeline || "Not specified" },
                    ].map(({ label, value }) => (
                      <div key={label} className="flex gap-4">
                        <span className="font-mono text-xs text-muted w-24 flex-shrink-0">{label}</span>
                        <span className="font-body text-sm text-text-primary">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1) as FormStep)}
              className={`font-body text-sm font-semibold px-6 py-3 border border-white/10 rounded-sm hover:border-white/30 transition-colors duration-200 text-muted hover:text-text-primary ${step === 1 ? "invisible" : ""}`}
            >
              Back
            </button>

            {step < 4 ? (
              <button
                onClick={() => setStep((s) => Math.min(4, s + 1) as FormStep)}
                disabled={step === 1 && (!data.name || !data.email || !data.company)}
                className="font-body text-sm font-semibold px-8 py-3 bg-gold text-background rounded-sm hover:bg-gold/90 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="font-body text-sm font-semibold px-8 py-3 bg-gold text-background rounded-sm hover:bg-gold/90 transition-colors duration-200 disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Submit Discovery Form"}
              </button>
            )}
          </div>

          {/* Direct contacts */}
          <div className="mt-16 pt-10 border-t border-white/5">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:josephine@grownco.uk"
                className="flex items-center gap-3 px-4 py-3 bg-surface border border-white/5 rounded-sm hover:border-gold/30 transition-colors duration-200 group"
              >
                <span className="font-mono text-xs text-muted group-hover:text-gold transition-colors">EMAIL</span>
                <span className="font-body text-sm text-text-primary">josephine@grownco.uk</span>
              </a>
              <a
                href="https://wa.me/447405527430"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-surface border border-white/5 rounded-sm hover:border-gold/30 transition-colors duration-200 group"
              >
                <span className="font-mono text-xs text-muted group-hover:text-gold transition-colors">WHATSAPP</span>
                <span className="font-body text-sm text-text-primary">+44 7405 527430</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Reusable field components
function Field({
  label, value, onChange, placeholder, type = "text", className = "",
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; className?: string;
}) {
  return (
    <div className={className}>
      <label className="block font-mono text-xs uppercase tracking-widest text-muted mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-surface border border-white/10 rounded-sm px-4 py-3 font-body text-sm text-text-primary placeholder:text-muted/40 focus:outline-none focus:border-gold/40 transition-colors duration-200"
      />
    </div>
  );
}

function TextArea({
  label, value, onChange, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-widest text-muted mb-2">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        className="w-full bg-surface border border-white/10 rounded-sm px-4 py-3 font-body text-sm text-text-primary placeholder:text-muted/40 focus:outline-none focus:border-gold/40 transition-colors duration-200 resize-none"
      />
    </div>
  );
}

function OptionButton({
  label, selected, onClick,
}: {
  label: string; selected: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-2.5 rounded-sm border text-left font-body text-sm transition-all duration-200 ${
        selected
          ? "border-gold/60 bg-gold-dim text-gold"
          : "border-white/10 text-muted hover:border-white/20 hover:text-text-primary"
      }`}
    >
      {label}
    </button>
  );
}
