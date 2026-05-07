"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, Phone } from "lucide-react";

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
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
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
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
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
