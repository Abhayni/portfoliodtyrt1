import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Mail, MapPin, Sparkles, Terminal, BookOpen, Clock, CheckCircle, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate dispatch latency
    setTimeout(() => {
      // Save info in localStorage to keep it real
      const inquiries = JSON.parse(localStorage.getItem("abhay_inquiries") || "[]");
      inquiries.push({
        ...formData,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("abhay_inquiries", JSON.stringify(inquiries));

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-transparent selection:bg-[#0c2419] selection:text-white">
      {/* Background glow overlay */}
      <div className="absolute top-[10%] right-[-10%] w-[35vw] h-[35vw] rounded-full glow-radial-emerald opacity-10 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-[40vw] h-[40vw] rounded-full glow-radial-yellow opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-emerald-base tracking-widest uppercase mb-3 flex items-center gap-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-base animate-pulse" />
            <span>05 . CONNECTION DIRECTIVES</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold text-stone-850 text-center"
          >
            Initiate <span className="bg-gradient-to-r from-emerald-base to-yellow-base bg-clip-text text-transparent">Transmission</span>
          </motion.h2>
          <div className="h-1 w-20 bg-emerald-base/30 rounded-full mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Grid: Contacts Details */}
          <motion.div 
            className="lg:col-span-12 xl:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-stone-850 mb-4 tracking-wide leading-snug">
                Let's construct something futuristic.
              </h3>
              <p className="text-stone-500 font-sans text-sm leading-relaxed mb-10">
                Whether you need a cutting-edge client platform, a responsive wireframe system, or an fully customized interactive layout, my transmission channels are completely open. Drop a message!
              </p>

              {/* Contacts info deck */}
              <div className="space-y-6">
                
                {/* Channel 1: Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-base/5 border border-emerald-base/20 flex items-center justify-center text-emerald-base group-hover:border-emerald-base group-hover:bg-emerald-base/10 transition-all duration-300 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] text-[#b09e7e] uppercase tracking-widest font-bold">EMAIL DIRECTIVE</h4>
                    <a href="mailto:abhayop0012@gmail.com" className="font-mono text-xs sm:text-sm text-stone-700 hover:text-emerald-base transition-colors font-semibold leading-relaxed">
                      abhayop0012@gmail.com
                    </a>
                  </div>
                </div>

                {/* Channel 2: Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-yellow-base/5 border border-yellow-base/20 flex items-center justify-center text-[#c0a870] group-hover:border-yellow-base group-hover:bg-yellow-base/10 transition-all duration-300 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] text-[#b09e7e] uppercase tracking-widest font-bold">SATELLITE LOCATION</h4>
                    <span className="font-mono text-xs sm:text-sm text-stone-700 font-semibold">
                      Delhi, India
                    </span>
                  </div>
                </div>

                {/* Channel 3: Response Rate */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-base/5 border border-emerald-base/20 flex items-center justify-center text-emerald-base group-hover:border-emerald-base group-hover:bg-emerald-base/10 transition-all duration-300 shadow-sm">
                    <Clock className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-mono text-[9px] text-[#b09e7e] uppercase tracking-widest font-bold">AVERAGE RESPONSE LATENCY</h4>
                    <span className="font-mono text-xs sm:text-sm text-stone-700 font-semibold">
                      Less than 12 Hours
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Cyber Terminal signature card */}
            <div className="mt-12 p-5 bg-white/45 backdrop-blur-md border border-stone-150 rounded-2xl font-mono text-[9px] text-stone-400 space-y-1.5 hidden xl:block shadow-sm">
              <div className="flex items-center gap-2 text-emerald-base">
                <Terminal className="w-3.5 h-3.5" />
                <span>TERMINAL://CONNECTED</span>
              </div>
              <p>SECURE CHANNEL ACTIVE: port 3000 to https proxy ssl</p>
              <p>ENCRYPTION STANDARD: TLS_1.3_AES_256_GCM</p>
            </div>
          </motion.div>

          {/* Right Grid: Contact Form */}
          <motion.div 
            className="lg:col-span-12 xl:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden h-full">

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="contact-form"
                    onSubmit={handleSubmit} 
                    className="space-y-6 flex flex-col justify-between h-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-5">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                          Sender Identity *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name / Organization"
                          className="w-full bg-white/60 border border-stone-200 rounded-xl px-4 py-3.5 font-sans text-xs sm:text-sm text-stone-850 placeholder-stone-400 focus:outline-none focus:border-emerald-base/40 focus:ring-1 focus:ring-emerald-base/20 transition-all duration-300"
                        />
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                          Return Signal Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@domain.com"
                          className="w-full bg-white/60 border border-stone-200 rounded-xl px-4 py-3.5 font-sans text-xs sm:text-sm text-stone-850 placeholder-stone-400 focus:outline-none focus:border-emerald-base/40 focus:ring-1 focus:ring-emerald-base/20 transition-all duration-300"
                        />
                      </div>

                      {/* Subject input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                          Transmission Category
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Project, Collaboration, Idea, Contract"
                          className="w-full bg-white/60 border border-stone-200 rounded-xl px-4 py-3.5 font-sans text-xs sm:text-sm text-stone-850 placeholder-stone-400 focus:outline-none focus:border-emerald-base/40 focus:ring-1 focus:ring-emerald-base/20 transition-all duration-300"
                        />
                      </div>

                      {/* Message input */}
                      <div className="flex flex-col gap-2">
                        <label className="font-mono text-[10px] text-stone-500 font-bold uppercase tracking-wider">
                          Transmission Payload *
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Brief statement detailing goals, scopes, or questions..."
                          className="w-full bg-white/60 border border-stone-200 rounded-xl px-4 py-3.5 font-sans text-xs sm:text-sm text-stone-850 placeholder-stone-400 focus:outline-none focus:border-emerald-base/40 focus:ring-1 focus:ring-emerald-base/20 transition-all duration-300 resize-none animate-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer bg-gradient-to-r from-[#0c2419] to-[#123023] hover:from-[#113324] hover:to-[#174130] border border-yellow-base/40 text-stone-100 font-mono font-bold tracking-wider text-xs px-8 py-4.5 rounded-full mt-6 shadow-[0_10px_25px_rgba(12,36,25,0.12)] transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed uppercase self-center sm:self-start shrink-0"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>DISPATCHING...</span>
                        </>
                      ) : (
                        <>
                          <span>DISPATCH MESSAGE</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* EXQUISITE SUCCESS RECEIPT SCREEN */
                  <motion.div 
                    key="contact-success"
                    className="flex flex-col items-center justify-center text-center py-12 px-4 h-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", damping: 20 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-base/10 border border-emerald-base flex items-center justify-center mb-6 text-emerald-base shadow-sm">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="font-display font-bold text-2xl text-stone-850 mb-2">
                      Transmission Dispatched Successfully!
                    </h3>
                    <p className="font-mono text-emerald-base text-[10px] tracking-widest uppercase mb-6 font-bold">
                      SYSTEM STATE: RECEIVED & LOGGED
                    </p>

                    <p className="text-stone-500 font-sans text-xs sm:text-sm leading-relaxed max-w-md mb-8">
                      Thank you, your message has been mapped and logged into my local workspace. I appreciate you taking the time to write. I will inspect the parameters and restore a reply signal to your email address shortly.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-stone-50 border border-stone-250 hover:border-emerald-base text-stone-700 font-semibold font-mono text-xs rounded-xl transition-all"
                    >
                      <span>TRANSMIT ANOTHER SIGNAL</span>
                      <ArrowRight className="w-4 h-4 text-emerald-base" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
