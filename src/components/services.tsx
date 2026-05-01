"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Server } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Building modern, responsive websites with cutting-edge technologies"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Creating cross-platform mobile applications with React Native"
  },
  {
    icon: Server,
    title: "Website Hosting",
    description: "Deploying and managing scalable web applications on cloud platforms"
  }
];

export default function Services() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/30"></div>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start gap-6"
                >
                  {/* Icon with circle background */}
                  <div className="relative z-10 w-12 h-12 bg-primary/10 border-2 border-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-foreground/60 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Me Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">About me</h2>
              <p className="text-foreground/70 leading-relaxed mb-8">
                I started my software journey from photography and visual design, which gives me a unique perspective on creating beautiful and functional digital experiences. As a Software Engineering student at AASTU, I specialize in full-stack development with a passion for blockchain technologies.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                I love turning complex problems into simple, beautiful, and intuitive solutions. When I&apos;m not coding, you&apos;ll find me exploring new technologies, learning new frameworks, or participating in hackathons.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
