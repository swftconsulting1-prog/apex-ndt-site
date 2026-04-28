import React from "react"; import { motion } from "framer-motion"; import { ShieldCheck, ClipboardCheck, Plane, Factory, Zap, FileText, SearchCheck, Phone, Mail, MapPin, CheckCircle2 } from "lucide-react"; import { Card, CardContent } from "@/components/ui/card"; import { Button } from "@/components/ui/button";

export default function ApexNDTConsultingSite() { const services = [ { icon: <ClipboardCheck className="h-7 w-7" />, title: "Nadcap NDT Audit Support", text: "Audit preparation, checklist review, corrective action support, and practical guidance for suppliers preparing for Nadcap NDT accreditation or reaccreditation." }, { icon: <ShieldCheck className="h-7 w-7" />, title: "Responsible Level III Services", text: "Independent Level III support for aerospace and industrial NDT programs, including technical oversight, method review, and compliance alignment." }, { icon: <FileText className="h-7 w-7" />, title: "NAS 410 Compliance Consulting", text: "Support for written practices, qualification records, certification programs, procedure review, and alignment with NAS 410 and customer requirements." }, { icon: <SearchCheck className="h-7 w-7" />, title: "NDT Procedure Development", text: "Development and review of NDT procedures, techniques, forms, and supporting documentation for PT, MT, UT, RT, and ET programs." } ];

const industries = [ { icon: <Plane className="h-6 w-6" />, title: "Aerospace", text: "Supplier support for Nadcap, OEM, and prime contractor expectations." }, { icon: <Zap className="h-6 w-6" />, title: "Nuclear", text: "Compliance-focused NDT program support for critical applications." }, { icon: <Factory className="h-6 w-6" />, title: "Power Generation", text: "Technical consulting for inspection programs, procedures, and audit readiness." } ];

const methods = ["Penetrant Testing — PT", "Magnetic Particle Testing — MT", "Ultrasonic Testing — UT", "Radiographic Testing — RT", "Eddy Current Testing — ET", "Visual Testing — VT"];

return ( <div className="min-h-screen bg-slate-950 text-slate-100"> <header className="border-b border-slate-800 bg-slate-950/95 backdrop-blur"> <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"> <div> <div className="text-xl font-bold tracking-tight">Apex NDT Consulting Group</div> <div className="text-sm text-slate-400">Nadcap • Aerospace • Level III NDT Consulting</div> </div> <div className="hidden gap-6 text-sm text-slate-300 md:flex"> <a href="#services" className="hover:text-white">Services</a> <a href="#industries" className="hover:text-white">Industries</a> <a href="#contact" className="hover:text-white">Contact</a> </div> </div> </header>

<main>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_30%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <div className="mb-5 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            Independent NDT consulting for high-compliance industries
          </div>
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Nadcap & Aerospace NDT Consulting Services
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Apex NDT Consulting Group provides expert Level III NDT consulting, Nadcap audit support, NAS 410 compliance guidance, and NDT procedure development for aerospace, nuclear, and power generation suppliers.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-2xl px-6 py-6 text-base">Request Consultation</Button>
            <Button variant="outline" className="rounded-2xl border-slate-600 bg-transparent px-6 py-6 text-base text-slate-100 hover:bg-slate-800">
              View Services
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.15 }}>
          <Card className="rounded-3xl border-slate-800 bg-slate-900/80 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold text-white">Core Capabilities</h2>
              <div className="mt-6 space-y-4">
                {["Nadcap NDT audit preparation", "Responsible Level III support", "NAS 410 written practice review", "Procedure development and approval support", "Corrective action and compliance gap review"].map((item) => (
                  <div key={item} className="flex gap-3 text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>

    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Services</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Technical NDT consulting built around audit readiness.</h2>
        <p className="mt-5 text-slate-300">We help suppliers strengthen NDT programs before an audit, during corrective action, or when a customer requirement changes.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="rounded-3xl border-slate-800 bg-slate-900/70 shadow-lg">
            <CardContent className="p-7">
              <div className="mb-5 inline-flex rounded-2xl bg-blue-400/10 p-3 text-blue-300">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>

    <section id="industries" className="bg-slate-900/55 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Industries Served</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Support for critical industries where compliance matters.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.title} className="rounded-3xl border-slate-800 bg-slate-950/80">
              <CardContent className="p-7">
                <div className="mb-4 text-blue-300">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white">{industry.title}</h3>
                <p className="mt-3 text-slate-300">{industry.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">NDT Methods</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Method-specific support for inspection programs.</h2>
          <p className="mt-5 leading-7 text-slate-300">Apex NDT Consulting Group supports common aerospace and industrial NDT methods through procedure review, audit readiness, training documentation, and compliance gap assessment.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {methods.map((method) => (
            <div key={method} className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-slate-200">
              {method}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-blue-500/10 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">Need Nadcap or Level III NDT support?</h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          Get independent technical support for audit preparation, written practices, procedure development, corrective action, and customer compliance expectations.
        </p>
        <div className="mt-8">
          <Button className="rounded-2xl px-8 py-6 text-base">Schedule a Consultation</Button>
        </div>
      </div>
    </section>

    <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Contact</p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Start with a compliance-focused conversation.</h2>
          <p className="mt-5 leading-7 text-slate-300">Use this section for your phone, email, and service area once you are ready to publish.</p>
        </div>
        <Card className="rounded-3xl border-slate-800 bg-slate-900/80">
          <CardContent className="space-y-5 p-7 text-slate-300">
            <div className="flex gap-3"><Phone className="h-5 w-5 text-blue-300" /> <span>Phone: Add your business number</span></div>
            <div className="flex gap-3"><Mail className="h-5 w-5 text-blue-300" /> <span>Email: info@apexndtconsulting.com</span></div>
            <div className="flex gap-3"><MapPin className="h-5 w-5 text-blue-300" /> <span>Serving Georgia and clients nationwide</span></div>
          </CardContent>
        </Card>
      </div>
    </section>
  </main>

  <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
    © {new Date().getFullYear()} Apex NDT Consulting Group. NDT Consulting • Nadcap Support • Level III Services
  </footer>
</div>

); }
