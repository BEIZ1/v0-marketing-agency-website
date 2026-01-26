"use client";

import React from "react"

import { useRef, useState } from "react";
import { CheckCircle2, Clock, Phone, FileText, Loader2 } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const services = [
  "Content Production",
  "Brand Design",
  "Web Development",
  "Full Package",
];

const budgets = [
  "< $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
];

const deadlines = [
  "ASAP (< 2 weeks)",
  "1 month",
  "2-3 months",
  "Flexible / Planning",
];

const benefits = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "We typically reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Discovery Call",
    description: "A 30-min call to understand your vision",
  },
  {
    icon: FileText,
    title: "Custom Proposal",
    description: "Tailored plan with timeline & pricing",
  },
];

export function BriefForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    deadline: "",
    message: "",
    nda: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please tell us about your project";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section
        id="brief"
        ref={sectionRef}
        className="relative py-24 lg:py-32"
      >
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="glass-card rounded-3xl p-8 text-center lg:p-12">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Thank you for reaching out!
              </h3>
              <p className="mt-4 text-muted-foreground">
                We&apos;ve received your brief and will get back to you within
                24 hours. Check your inbox for a confirmation email.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    company: "",
                    email: "",
                    phone: "",
                    service: "",
                    budget: "",
                    deadline: "",
                    message: "",
                    nda: false,
                  });
                }}
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Submit Another Brief
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="brief" ref={sectionRef} className="relative py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "mx-auto max-w-2xl text-center transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <span className="inline-block rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur-sm">
            Get Started
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Let&apos;s create something{" "}
            <span className="gradient-text">amazing</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your project and we&apos;ll get back to you with a
            custom proposal.
          </p>
        </div>

        {/* Form container */}
        <div
          className={cn(
            "mx-auto mt-12 max-w-5xl transition-all duration-700 delay-100",
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div className="glass-card rounded-3xl p-6 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Left column - Benefits */}
              <div className="space-y-6 lg:col-span-2">
                <h3 className="text-lg font-semibold text-foreground">
                  What happens next?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <benefit.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">
                          {index + 1}. {benefit.title}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Trust indicators */}
                <div className="rounded-xl bg-secondary/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-medium">
                      Your data is safe.
                    </span>{" "}
                    We never share your information with third parties.
                  </p>
                </div>
              </div>

              {/* Right column - Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Company */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Name <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="name"
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={cn(
                          "bg-secondary/50 border-border focus:border-primary",
                          errors.name && "border-destructive"
                        )}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Company
                      </label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Email <span className="text-primary">*</span>
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={cn(
                          "bg-secondary/50 border-border focus:border-primary",
                          errors.email && "border-destructive"
                        )}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Phone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="bg-secondary/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Service <span className="text-primary">*</span>
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                      >
                        <SelectTrigger
                          id="service"
                          className={cn(
                            "bg-secondary/50 border-border",
                            errors.service && "border-destructive"
                          )}
                        >
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="mt-1 text-xs text-destructive">
                          {errors.service}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="budget"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Budget Range
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                      >
                        <SelectTrigger
                          id="budget"
                          className="bg-secondary/50 border-border"
                        >
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgets.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Deadline */}
                  <div>
                    <label
                      htmlFor="deadline"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Desired Timeline
                    </label>
                    <Select
                      value={formData.deadline}
                      onValueChange={(value) =>
                        setFormData({ ...formData, deadline: value })
                      }
                    >
                      <SelectTrigger
                        id="deadline"
                        className="bg-secondary/50 border-border"
                      >
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        {deadlines.map((deadline) => (
                          <SelectItem key={deadline} value={deadline}>
                            {deadline}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Project Details <span className="text-primary">*</span>
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className={cn(
                        "bg-secondary/50 border-border focus:border-primary resize-none",
                        errors.message && "border-destructive"
                      )}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* NDA checkbox */}
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="nda"
                      checked={formData.nda}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, nda: checked as boolean })
                      }
                      className="mt-0.5"
                    />
                    <label
                      htmlFor="nda"
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      I would like to sign an NDA before sharing detailed
                      information
                    </label>
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Brief"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
