import React, { useState } from 'react';
import { Mail, Copy, Check, Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Internship & Project Opportunity',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-[#38281e]/80 bg-[#16100d]/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Inquiries Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#d4a373]">
                <span>Direct Inquiries</span>
                <span aria-hidden="true">·</span>
                <span>Collaboration</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#f5ebe0]">
                Let's Build Something Meaningful Together
              </h2>
              <p className="text-[#b8a798] text-sm leading-relaxed">
                Currently open to software engineering internships, web development projects, game prototypes, and hackathon collaborations.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl border border-[#3d2c20] bg-[#1c1511]/80 space-y-3 shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-[#a89585] block">
                Official Contact Email
              </span>

              <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#140f0c] border border-[#38281e]">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="font-mono text-xs sm:text-sm text-[#d4a373] hover:underline truncate"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#e6d7cb] bg-[#241a14] border border-[#3d2c20] rounded-lg hover:bg-[#31231a] hover:text-[#f5ebe0] transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#d4a373]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-xs text-[#a89585] pt-1 font-mono">
                <span>Location: Vellore / Ghaziabad</span>
                <span>Response Time: &lt; 24h</span>
              </div>
            </div>

            {/* Quick Resume Link */}
            <div className="p-5 rounded-2xl border border-[#3d2c20] bg-[#1c1511]/60 flex items-center justify-between gap-4 shadow-lg">
              <div className="space-y-0.5">
                <p className="font-display font-semibold text-[#f5ebe0] text-sm">Need an offline copy?</p>
                <p className="text-xs text-[#b8a798]">Download or print the verified resume PDF.</p>
              </div>
              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-[#18120e] bg-[#c68b59] rounded-lg hover:bg-[#b87b48] transition-colors shrink-0 cursor-pointer shadow-sm"
              >
                Open Resume
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#3d2c20] bg-[#1c1511]/80 p-6 sm:p-8 shadow-2xl">
              {formSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#c68b59]/20 text-[#d4a373]">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#f5ebe0]">
                    Message Dispatched!
                  </h3>
                  <p className="text-sm text-[#d7ccc8] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#f5ebe0]">{formData.name}</strong>. Your note regarding "{formData.topic}" has been recorded. Pranav will reply to <span className="font-mono text-[#d4a373]">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', topic: 'Internship & Project Opportunity', message: '' });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#e6d7cb] bg-[#241a14] border border-[#3d2c20] rounded-lg hover:bg-[#31231a] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#38281e] text-xs font-mono text-[#a89585]">
                    <MessageSquare className="w-4 h-4 text-[#d4a373]" />
                    <span>Send a Direct Message</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#e6d7cb] block">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Chen"
                        className="w-full rounded-lg border border-[#3d2c20] bg-[#140f0c] px-3.5 py-2.5 text-xs text-[#f5ebe0] placeholder-[#7d6b5e] focus:border-[#c68b59] focus:outline-none focus:ring-1 focus:ring-[#c68b59]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#e6d7cb] block">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full rounded-lg border border-[#3d2c20] bg-[#140f0c] px-3.5 py-2.5 text-xs text-[#f5ebe0] placeholder-[#7d6b5e] focus:border-[#c68b59] focus:outline-none focus:ring-1 focus:ring-[#c68b59]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#e6d7cb] block">
                      Topic of Collaboration
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full rounded-lg border border-[#3d2c20] bg-[#140f0c] px-3.5 py-2.5 text-xs text-[#f5ebe0] focus:border-[#c68b59] focus:outline-none focus:ring-1 focus:ring-[#c68b59]"
                    >
                      <option value="Internship & Project Opportunity">Internship & Project Opportunity</option>
                      <option value="Web & Game Development Collaboration">Web & Game Development Collaboration</option>
                      <option value="Chess Tactical Challenge / Match">Chess Tactical Challenge / Match</option>
                      <option value="VIT Vellore Academic Discourse">VIT Vellore Academic Discourse</option>
                      <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#e6d7cb] block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Pranav, I came across your portfolio and would like to discuss..."
                      className="w-full rounded-lg border border-[#3d2c20] bg-[#140f0c] px-3.5 py-2.5 text-xs text-[#f5ebe0] placeholder-[#7d6b5e] focus:border-[#c68b59] focus:outline-none focus:ring-1 focus:ring-[#c68b59]"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-[#8c7a6c] font-mono">
                      Strict privacy · No spam
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#140f0c] bg-[#c68b59] rounded-lg hover:bg-[#b87b48] transition-colors shadow-md cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
