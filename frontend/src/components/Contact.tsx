import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(
          (json as { error?: string }).error ?? "Something went wrong",
        );
      }

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        setIsSuccess(false);
      }, 6000);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to send. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full z-10 pt-24 pb-8 bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Form Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block relative">
              Let's Build Something
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-blue-500 rounded-full"></span>
            </h2>

            {isSuccess ? (
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-8 text-center flex flex-col items-center justify-center h-64">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-4" />

                <h3 className="text-xl font-bold text-white mb-2">
                  Message Sent!
                </h3>

                <p className="text-slate-400">
                  Thanks for reaching out. I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                    placeholder="Your Name:"
                  />

                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors"
                    placeholder="yourname@gmail.com"
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-400 mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={5}
                    {...register("message")}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell me about your project, opportunity, or collaboration..."
                  />

                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Error */}
                {errorMsg && (
                  <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/50 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-lg transition-colors cursor-pointer"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}

                  {!isSubmitting && <Send className="w-4 h-4" />}
                </button>
              </form>
            )}
          </div>

          {/* Info Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-medium text-slate-300 mb-6">
              Get in touch
            </h3>

            <div className="space-y-6 mb-12">
              {/* Email */}
              <a
                href="mailto:inayatilkal@gmail.com"
                className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center group-hover:border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>

                <span className="text-lg">inayatilkal@gmail.com</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/inayatilkal"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center group-hover:border-slate-600">
                  <FaGithub className="w-5 h-5" />
                </div>

                <span className="text-lg">github.com/inayatilkal</span>

                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/inayat-ilkal-6023b82b5"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-slate-400 hover:text-blue-500 transition-colors group"
              >
                <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center group-hover:border-blue-500/30">
                  <FaLinkedin className="w-5 h-5" />
                </div>

                <span className="text-lg">linkedin.com/in/inayat-ilkal</span>

                <ArrowUpRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>

                <h4 className="font-semibold text-white">
                  Open to Opportunities
                </h4>
              </div>

              <p className="text-sm text-slate-400">
                Actively seeking Software Development, Full-Stack MERN, and AI Integration Intership Opportunites.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>© 2026 Inayat Ahemed Ilkal</p>
          <p className="mt-2 md:mt-0">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
