import { useState } from "react";
import { toast } from "sonner";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

export function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!ACCESS_KEY) {
      toast.error("Contact form isn't configured yet. Please email us directly.");
      return;
    }

    setSending(true);
    const formData = new FormData(form);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New message via Noveria Studio");
    formData.append("from_name", "Noveria Studio website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      if (result.success) {
        toast.success("Message sent. We'll get back to you shortly.");
        form.reset();
      } else {
        toast.error(result.message ?? "Could not send message. Please try again.");
      }
    } catch {
      toast.error("Could not send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      {/* Honeypot: real users won't fill this; bots usually will */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          required
          className="h-11 rounded-md border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="h-11 rounded-md border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
          placeholder="you@company.com"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40 resize-none"
          placeholder="Tell us about your interest, question, or proposal."
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-foreground px-6 text-sm font-medium text-background hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
