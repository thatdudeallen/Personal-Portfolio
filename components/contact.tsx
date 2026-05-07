"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Phone, Instagram, Linkedin } from "lucide-react";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("Name", formState.name);
      formData.append("Email", formState.email);
      formData.append("Message", formState.message);

      await fetch(
        "https://script.google.com/macros/s/AKfycbwXwe3wir0aueOBwPG96aN-d3iRcj9qe6WT8YrVlG1RDmvYd4-EFJpVqRj8ATJUKg95DQ/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      setStatus("success");
      setFormState({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12">
      <div className="px-[10%]">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Contact Info */}
          <div className="md:w-[35%]">
            <h2 className="text-4xl md:text-6xl font-semibold text-foreground">
              Contact Me
            </h2>

            <p className="mt-8 flex items-center gap-4 text-muted">
              <Send className="w-6 h-6 text-primary" />
              chisvoallen02@gmail.com
            </p>
            <p className="mt-8 flex items-center gap-4 text-muted">
              <Phone className="w-6 h-6 text-primary" />
              +27 (67) 858-0449
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="https://www.instagram.com/thatdudeallen_?igsh=d3Rkb2F3aWEzb3B5&utm_source=qr"
                target="_blank"
                className="text-muted text-3xl transition-all duration-500 hover:text-primary hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </Link>
              <Link
                href="https://twitter.com/xo_papiiii"
                target="_blank"
                className="text-muted text-3xl transition-all duration-500 hover:text-primary hover:-translate-y-1"
                aria-label="Twitter/X"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/allenchisvo15?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                className="text-muted text-3xl transition-all duration-500 hover:text-primary hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-8 h-8" />
              </Link>
            </div>

            <Link
              href="/images/my-cv.pdf"
              download
              className="inline-block mt-8 bg-primary px-12 py-3.5 rounded-md text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Download CV
            </Link>
          </div>

          {/* Contact Form */}
          <div className="md:w-[60%]">
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full bg-card border-0 outline-none p-4 my-4 text-foreground text-lg rounded-md focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full bg-card border-0 outline-none p-4 my-4 text-foreground text-lg rounded-md focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full bg-card border-0 outline-none p-4 my-4 text-foreground text-lg rounded-md resize-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary px-16 py-3.5 rounded-md text-primary-foreground text-lg font-medium mt-5 cursor-pointer transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </form>
            {status === "success" && (
              <span className="block mt-4 text-green-500">
                Message sent successfully
              </span>
            )}
            {status === "error" && (
              <span className="block mt-4 text-red-500">
                Failed to send message. Please try again.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
