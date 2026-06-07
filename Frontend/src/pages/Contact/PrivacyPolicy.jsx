import React from "react";
import { motion } from "framer-motion";
import BackButton from "../../utils/BackButton ";

const sections = [
  {
    title: "Introduction",
    content: `At Viral mint, we place the highest importance on protecting your privacy and maintaining the integrity of your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website, services, and digital platforms.

By accessing or using our services, you acknowledge and agree to the practices described in this policy. We are committed to ensuring transparency, accountability, and security in every interaction you have with us.`,
  },
  {
    title: "Information We Collect",
    content: `We collect information to provide a seamless and personalized experience. This includes personal details such as your name, email address, phone number, and business information when you submit forms or inquiries.

Additionally, we may collect client-related data such as project requirements, marketing insights, and operational details necessary for service delivery. We also gather technical information such as IP address, browser type, device information, and usage patterns through analytics tools.

Cookies and similar tracking technologies are used to enhance performance, analyze trends, and deliver relevant content and advertisements.`,
  },
  {
    title: "How We Use Your Information",
    content: `Your information enables us to deliver high-quality services and improve your overall experience. We use your data to respond to inquiries, provide customer support, and execute digital marketing strategies tailored to your needs.

We may also use your information to personalize your experience, send relevant updates or promotional content (where consent is provided), and analyze user behavior to optimize performance and business outcomes.`,
  },
  {
    title: "Third-Party Integrations",
    content: `To deliver best-in-class services, we rely on trusted third-party platforms such as Google Analytics, Google Ads, Meta Ads, and email marketing tools. These services help us measure performance, run advertising campaigns, and manage communication.

Please note that these third-party providers may collect and process your data according to their own privacy policies, and we encourage you to review them.`,
  },
  {
    title: "Data Sharing & Disclosure",
    content: `We do not sell, rent, or trade your personal information. However, we may share your data with trusted partners, service providers, or vendors who assist us in delivering our services.

In certain cases, we may also disclose information if required by law, legal processes, or to protect our rights and ensure compliance with regulatory obligations.`,
  },
  {
    title: "Data Retention",
    content: `We retain your information only for as long as necessary to fulfill the purposes outlined in this policy. This includes maintaining records for operational, legal, and compliance requirements.

Once your data is no longer required, we take appropriate measures to securely delete or anonymize it.`,
  },
  {
    title: "Data Security",
    content: `We implement industry-standard security measures to protect your personal data from unauthorized access, misuse, or disclosure. This includes secure servers, encryption protocols, and controlled access systems.

While we strive to protect your information, it is important to understand that no digital system can guarantee complete security.`,
  },
  {
    title: "Your Rights & Control",
    content: `Depending on your location, you may have certain rights regarding your personal data. These include the ability to access, update, or delete your information, as well as the option to opt out of marketing communications.

You may also withdraw your consent at any time. To exercise these rights, you can contact us directly using the details provided below.`,
  },
  {
    title: "Cookies Policy",
    content: `Cookies and similar technologies help us understand user behavior, improve website functionality, and deliver personalized content. These tools allow us to optimize performance and enhance your browsing experience.

You have the option to manage or disable cookies through your browser settings at any time.`,
  },
  {
    title: "External Links",
    content: `Our website may contain links to third-party websites or services. We are not responsible for the privacy practices, policies, or content of these external platforms.

We recommend reviewing their privacy policies before providing any personal information.`,
  },
  {
    title: "Children’s Privacy",
    content: `Our services are intended for businesses and professionals. We do not knowingly collect or solicit personal information from individuals under the age of 13.

If we become aware that such data has been collected, we will take immediate steps to delete it.`,
  },
  {
    title: "Policy Updates",
    content: `We may update this Privacy Policy periodically to reflect changes in our services, legal requirements, or industry practices. Any updates will be posted on this page along with the revised effective date.

We encourage you to review this policy regularly to stay informed.`,
  },
  {
    title: "Contact",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please feel free to contact us.

Email: support@virtual-cmo.com`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex">
        <BackButton/>

      {/* SIDEBAR */}
      <div className="hidden lg:flex flex-col w-64  p-6 border-r  border-white/10 sticky top-0 h-screen">
        <h2 className="text-lg font-semibold pt-[80px] mb-6">Privacy</h2>

        <div className="flex flex-col gap-3 text-sm text-gray-400">
          {sections.map((item, i) => (
            <a
              key={i}
              href={`#section-${i}`}
              className="hover:text-white transition"
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1 px-6 md:px-16 py-16">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* HEADER */}
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400">Last updated: 2026</p>
          </motion.div>

          {/* SECTIONS */}
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              id={`section-${i}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-semibold">
                {i + 1}. {sec.title}
              </h2>

              <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;