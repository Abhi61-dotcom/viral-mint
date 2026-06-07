import React from "react";
import urbanWear from "../../assets/servicesAssets/urbanWear.mp4";
import BackButton from "../../utils/BackButton ";

const UrbanWearCaseStudy = () => {
  return (
    <section className="w-full bg-[#020617] text-white">
      <BackButton/>

      {/* HERO WITH VIDEO */}
      <div className="relative h-[70vh] w-full">
        <video
          src={urbanWear}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            UrbanWear Case Study
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg leading-relaxed">
            How we scaled a fashion brand from low visibility to a high-growth
            e-commerce business using performance marketing & content strategy.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="py-20 px-6 md:px-16 grid md:grid-cols-3 gap-16">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-16">

          {/* Overview */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
               Project Overview
            </h2>

            <div className="space-y-5 text-gray-400 leading-relaxed text-[15.5px] md:text-[16.5px]">
              <p>
                UrbanWear is a fast-growing fashion e-commerce brand focused on Gen-Z and young millennials.
                The brand offers trendy, affordable clothing designed to match the latest streetwear and
                lifestyle trends. While the product quality and design were strong, the brand struggled to
                build a consistent online presence and differentiate itself in an already saturated fashion market.
              </p>

              <p>
                At the start of the project, UrbanWear had limited brand awareness, low engagement across
                social media platforms, and an underperforming website in terms of traffic and conversions.
                Despite regular posting and efforts, the brand lacked a clear growth strategy and data-driven
                decision-making process.
              </p>

              <p>
                The primary goal was not just to increase visibility, but to transform UrbanWear into a
                performance-driven e-commerce brand with a strong digital identity, scalable marketing
                funnel, and consistent revenue growth.
              </p>

              <p>
                This case study highlights how a combination of creative content, targeted advertising,
                and conversion-focused optimization helped UrbanWear evolve from a struggling online store
                into a rapidly growing fashion brand.
              </p>
            </div>
          </div>

          {/* Challenges */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
               Challenges
            </h2>

            <ul className="list-disc pl-5 text-gray-400 space-y-4 leading-relaxed text-[15.5px] md:text-[16.5px]">
              <li>
                <strong className="text-white">Highly Competitive Fashion Market:</strong> UrbanWear operated in a saturated
                market where multiple established and emerging brands were competing for the same
                target audience, making differentiation extremely difficult.
              </li>

              <li>
                <strong className="text-white">Low Social Media Engagement:</strong> Despite consistent posting, the brand
                struggled to generate meaningful engagement such as shares, saves, and comments,
                leading to poor organic reach and visibility.
              </li>

              <li>
                <strong className="text-white">Unoptimized Website Funnel:</strong> The website lacked a smooth user journey,
                with friction in navigation, weak product presentation, and an inefficient checkout
                process, resulting in high drop-off rates.
              </li>

              <li>
                <strong className="text-white">No Data-Driven Advertising Strategy:</strong> There was no structured approach
                to paid marketing. Campaigns were either absent or not optimized, leading to wasted
                budget and minimal ROI.
              </li>
            </ul>
          </div>

          {/* Strategy */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
               Our Strategy
            </h2>

            <div className="space-y-8 text-gray-400 text-[15.5px] md:text-[16.5px]">

              <div className="border-l-2 border-indigo-500/40 pl-4">
                <h3 className="font-semibold text-white mb-2">🔹 Social Media Growth</h3>
                <p>
                  We developed a content-first approach focused on short-form videos (Reels),
                  trend-based creatives, and influencer collaborations to maximize organic reach
                  and brand recall among Gen-Z audiences.
                </p>
              </div>

              <div className="border-l-2 border-indigo-500/40 pl-4">
                <h3 className="font-semibold text-white mb-2">🔹 Paid Advertising</h3>
                <p>
                  Implemented high-converting Meta ad campaigns with precise audience targeting,
                  A/B testing of creatives, and retargeting funnels to capture warm leads and
                  drive consistent sales.
                </p>
              </div>

              <div className="border-l-2 border-indigo-500/40 pl-4">
                <h3 className="font-semibold text-white mb-2">🔹 Website Optimization</h3>
                <p>
                  Redesigned key elements of the website to improve user experience, including
                  product page layouts, trust signals, mobile responsiveness, and a frictionless
                  checkout flow to boost conversions.
                </p>
              </div>

              <div className="border-l-2 border-indigo-500/40 pl-4">
                <h3 className="font-semibold text-white mb-2">🔹 SEO & Organic Growth</h3>
                <p>
                  Focused on keyword optimization, content improvements, and structured product
                  descriptions to enhance search engine visibility and attract high-intent traffic.
                </p>
              </div>

            </div>
          </div>

          {/* Execution */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
               Execution Timeline
            </h2>

            <div className="text-gray-400 space-y-4 leading-relaxed text-[15.5px] md:text-[16.5px]">
              <p>📅 <strong className="text-white">Month 1–2:</strong> Focused on brand positioning, content strategy, and building a strong visual identity.</p>
              <p>📅 <strong className="text-white">Month 3–4:</strong> Launched and scaled paid advertising campaigns and influencer collaborations.</p>
              <p>📅 <strong className="text-white">Month 5–6:</strong> Optimized funnels, implemented retargeting, and improved ROI.</p>
            </div>
          </div>

          {/* Results */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
               Results
            </h2>

            <p className="text-gray-400 mb-8 text-[15.5px] md:text-[16.5px]">
              The implementation of a structured and data-driven strategy resulted in significant improvements:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "240% Increase in Sales within 6 months",
                "3x Growth in Website Traffic",
                "50K+ Organic Followers Gained",
                "2.5x Improvement in Conversion Rate",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-gray-800 rounded-xl p-6 text-center hover:scale-105 transition duration-500"
                >
                  <p className="font-semibold text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">
               Conclusion
            </h2>

            <div className="space-y-4 text-gray-400 leading-relaxed text-[15.5px] md:text-[16.5px]">
              <p>
                Through a strategic combination of content marketing, paid advertising, and conversion optimization,
                UrbanWear successfully transitioned into a scalable and profitable e-commerce business.
              </p>

              <p>
                This case study demonstrates the importance of a data-driven approach and aligning creative strategies
                with business objectives to achieve sustainable growth.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          <div className="bg-[#0F172A] border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Client Details</h3>

            <div className="space-y-2 text-gray-400 text-sm">
              <p><strong className="text-white">Industry:</strong> Fashion</p>
              <p><strong className="text-white">Platform:</strong> Shopify</p>
              <p><strong className="text-white">Duration:</strong> 6 Months</p>
              <p><strong className="text-white">Services:</strong> SEO, Ads, SMM</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 p-6 rounded-xl">
            <h3 className="font-semibold text-lg mb-2">Want Similar Results?</h3>
            <p className="text-sm text-gray-200 mb-4">
              Let’s grow your brand with proven strategies.
            </p>
            <button className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:scale-105 transition">
              Contact Us
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default UrbanWearCaseStudy;