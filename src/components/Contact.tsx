"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`Email: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:mritunjay@thedatascientist.live?subject=${subject}&body=${body}`;
    
    window.open(mailtoLink);
    
    setIsSubmitting(false);
    setFormData({ email: "", message: "" }); // Clear form after opening mail client
  };

  return (
    <section id="contact" className="pt-16 md:pt-24 pb-16 md:pb-24 bg-black text-white relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Added pb-16 to give 'great.' plenty of breathing room at the bottom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-10 pb-16">
          
          {/* Left Column: Heading & Info */}
          <div className="flex flex-col justify-center">
            <div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                Let&apos;s build <br className="hidden md:block" />
                <span className="text-neutral-500">something</span> <br className="hidden md:block" />
                great.
              </h2>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col justify-center w-full">
            {isClient && (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs uppercase tracking-wider text-neutral-400 font-mono pl-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="developer@ai.com"
                    required
                    /* Reduced padding and border radius to make it smaller */
                    className="px-4 py-2 rounded-lg border border-white/10 bg-black text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-transparent transition-all"
                    suppressHydrationWarning={true}
                  />
                </div>
                
                <div className="flex flex-col gap-1.5 mt-2">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What's on your Mind?"
                    /* Reduced rows from 4 to 2 to cut the height in half */
                    rows={2}
                    required
                    className="px-4 py-2 rounded-lg border border-white/10 bg-black text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-transparent resize-none transition-all"
                    suppressHydrationWarning={true}
                  />
                </div>
                
                {/* Simple button aligned to the right */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 px-12 py-4 rounded-full bg-transparent text-white font-medium text-sm disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 ml-auto w-fit flex items-center justify-center"
                >
                  {isSubmitting ? "Opening Mail..." : "Hit a Message"}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* End strip / black belt */}
      <div aria-hidden="true" className="mt-6 h-12 w-full bg-black " />
    </section>
  );
}