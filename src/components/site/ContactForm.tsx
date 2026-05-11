import { useState } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent. We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };
  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="name">Name</label>
        <input
          id="name"
          required
          className="h-11 rounded-md border border-border bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground" htmlFor="email">Email</label>
        <input
          id="email"
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
