"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Features", id: "features" },
            { name: "Solutions", id: "about" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="HQ Travel"
          button={{
            text: "Get Started",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Global Ground Transportation at Your Fingertips"
          description="Built for Enterprises | Powered by AI | Loved by People. Transform your ground travel with our comprehensive platform that drives the world's largest enterprises globally."
          tag="Enterprise Travel Solution"
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "Learn More", href: "features" }
          ]}
          imageSrc="https://images.pexels.com/photos/5483058/pexels-photo-5483058.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Our AI-powered technology drives the world's largest enterprises and their employees globally, making ground travel smarter, more efficient, and completely customizable."
          buttons={[
            { text: "Discover Solutions", href: "features" },
            { text: "Contact Sales", href: "contact" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardOne
          title="Complete Ground Travel Solution"
          description="Everything you need to manage enterprise ground transportation efficiently"
          tag="Features"
          features={[
            {
              title: "Global Coverage, Your Way",
              description: "1000+ cities. Join our vetted network or bring your own trusted providers.",
              imageSrc: "https://images.pexels.com/photos/7411982/pexels-photo-7411982.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "One Platform. Total Control.",
              description: "Book, ride, bill, report. No chasing paperwork. Complete visibility and control.",
              imageSrc: "https://images.pexels.com/photos/34239/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "Smarter Travel, Built-In",
              description: "Automate policies. Completely customizable. Opt-in AI for intelligent decisions.",
              imageSrc: "https://images.pexels.com/photos/7363052/pexels-photo-7363052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "Built for Compliance & Sustainability",
              description: "Auto-policy enforcement. Track CO₂. Meet corporate responsibility goals.",
              imageSrc: "https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Enterprise Plan"
          description="Flexible solutions designed for businesses of all sizes"
          plans={[
            {
              id: "starter",
              price: "Contact Sales",
              name: "Starter Plan",
              buttons: [
                { text: "Get Quote", href: "contact" },
                { text: "Schedule Demo", href: "contact" }
              ],
              features: [
                "Up to 100 rides per month",
                "Basic policy enforcement",
                "Email support",
                "Standard reporting"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              price: "Contact Sales",
              name: "Business Plan",
              buttons: [
                { text: "Get Quote", href: "contact" },
                { text: "Schedule Demo", href: "contact" }
              ],
              features: [
                "Unlimited rides",
                "Advanced policy automation",
                "Priority support",
                "Custom reporting",
                "Global network access",
                "CO₂ tracking"
              ]
            },
            {
              id: "enterprise",
              price: "Contact Sales",
              name: "Enterprise Plan",
              buttons: [
                { text: "Get Quote", href: "contact" },
                { text: "Schedule Demo", href: "contact" }
              ],
              features: [
                "White-label solution",
                "Dedicated account manager",
                "Custom integrations",
                "Advanced analytics",
                "Multi-region support",
                "24/7 support"
              ]
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Trusted by Global Enterprises"
          description="Join thousands of companies optimizing their ground transportation"
          metrics={[
            {
              id: "1",
              value: "1000+",
              description: "Cities Covered Worldwide"
            },
            {
              id: "2",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "3",
              value: "50M+",
              description: "Rides Completed Successfully"
            },
            {
              id: "4",
              value: "85%",
              description: "Average Cost Savings"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Built for Every Business Traveler"
          description="From executive assistants to everyday riders - HQ simplifies ground travel for everyone"
          members={[
            {
              id: "1",
              name: "Executive Assistant",
              role: "Booking for Others",
              description: "Smart, simple booking platform. One dashboard for all rides globally - web and mobile. Real-time tracking & notifications.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Business Traveler",
              role: "Taking the Ride",
              description: "Mobile-first, rider-friendly interface. Quick and easy booking process - on demand and future. Safe quality vehicles.",
              imageSrc: "https://images.pexels.com/photos/9052865/pexels-photo-9052865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Travel Manager",
              role: "Ground Travel Management",
              description: "Control spend without the headache. Policy automation & enforcement. Visibility across all travelers, all global locations.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real feedback from enterprise clients worldwide"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Travel Manager, Fortune 500 Company",
              testimonial: "HQ Travel has transformed how we manage ground transportation. The AI-powered platform saves us 30% on costs while ensuring policy compliance.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Executive Assistant, Global Tech Firm",
              testimonial: "The booking platform is incredibly intuitive. I can book rides for our executives across 15 countries from one dashboard. Game-changer.",
              imageSrc: "https://images.pexels.com/photos/9052865/pexels-photo-9052865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Operations Director, Consulting Firm",
              testimonial: "Real-time tracking and automated reporting have eliminated hours of administrative work. Our travelers love the seamless experience.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Park",
              role: "CFO, International Corporation",
              testimonial: "The cost control and sustainability tracking features help us meet corporate goals while providing excellent service to our employees.",
              imageSrc: "https://images.pexels.com/photos/8052844/pexels-photo-8052844.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about HQ Travel's enterprise ground transportation platform"
          faqs={[
            {
              id: "1",
              title: "How does HQ Travel integrate with existing corporate travel policies?",
              content: "Our platform seamlessly integrates with your existing travel policies through automated enforcement and customizable rule sets. You can set spending limits, preferred vendors, and approval workflows."
            },
            {
              id: "2",
              title: "What cities and regions does HQ Travel cover?",
              content: "We operate in over 1000 cities worldwide. You can use our vetted network of providers or bring your own trusted transportation partners to our platform."
            },
            {
              id: "3",
              title: "How does the AI-powered booking system work?",
              content: "Our AI analyzes historical data, real-time availability, and your company preferences to suggest optimal transportation options. It learns from your patterns to make increasingly better recommendations."
            },
            {
              id: "4",
              title: "What kind of reporting and analytics are available?",
              content: "Get comprehensive insights including spend analysis, policy compliance rates, carbon footprint tracking, and detailed ride reports. All data can be exported or accessed via our API."
            },
            {
              id: "5",
              title: "Is there 24/7 support for travelers and administrators?",
              content: "Yes, we provide round-the-clock support for both travelers and travel managers. Our support team handles booking issues, cancellations, and emergency situations globally."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get Started"
          title="Ready to Transform Your Ground Travel?"
          description="Contact our team to learn how HQ Travel can streamline your enterprise transportation needs"
          imageSrc="https://images.pexels.com/photos/34452610/pexels-photo-34452610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          inputPlaceholder="Your business email"
          buttonText="Contact Sales"
          termsText="By submitting, you agree to receive communications about HQ Travel solutions."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Solutions",
              items: [
                { label: "Enterprise Booking", href: "features" },
                { label: "AI-Powered Platform", href: "features" },
                { label: "Global Network", href: "about" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "faq" },
                { label: "Contact Sales", href: "contact" },
                { label: "API Documentation", href: "https://docs.hqtravel.com" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Privacy Policy", href: "https://hqtravel.com/privacy" },
                { label: "Terms of Service", href: "https://hqtravel.com/terms" }
              ]
            }
          ]}
          copyrightText="© 2025 HQ Travel. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}