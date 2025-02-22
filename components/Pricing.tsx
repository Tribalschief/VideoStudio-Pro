"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useState } from "react"
import { FaCheck } from "react-icons/fa"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

gsap.registerPlugin(ScrollTrigger)

const Pricing = () => {
  const pricingElement = useRef<HTMLElement | null>(null)
  const [isYearly, setIsYearly] = useState(false)
  const timeline = gsap.timeline()

  useGSAP(
    () => {
      if (pricingElement.current) {
        timeline.to("#pricing-card", {
          scrollTrigger: {
            trigger: pricingElement.current,
            start: "top center",
          },
          opacity: 1,
          y: 50,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
        });
        console.log("pricingElement is not null");
        console.log(pricingElement.current);
      } else {
        console.log("pricingElement is null");
      }
    },
  );

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 29,
      yearlyPrice: Math.round(29 * 12 * 0.8),
      features: ["5 projects", "Up to 10 users", "10GB storage", "Basic support"],
      color: "from-blue-400 to-blue-600",
      popular: false,
    },
    {
      name: "Pro",
      monthlyPrice: 79,
      yearlyPrice: Math.round(79 * 12 * 0.8),
      features: ["Unlimited projects", "Unlimited users", "100GB storage", "Priority support", "Advanced analytics"],
      color: "from-purple-400 to-purple-600",
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 199,
      yearlyPrice: Math.round(199 * 12 * 0.8),
      features: ["Unlimited everything", "24/7 dedicated support", "Custom integrations", "99.9% uptime SLA"],
      color: "from-purple-600 to-purple-800",
      popular: true,
    },
  ]

  return (
    <section
      ref={pricingElement}
      className="py-20 relative  bg-gray-50 dark:bg-gray-900"
      id="pricing"
    >
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Simple, transparent pricing
        </h2>
        <p className="text-xl text-center mb-8 text-gray-600 dark:text-gray-300">
          Choose the plan that`s right for you
        </p>
        <div className="flex items-center justify-center mb-8">
          <Label htmlFor="yearly-pricing" className="mr-2 text-sm font-medium">
            Monthly
          </Label>
          <Switch id="yearly-pricing" checked={isYearly} onCheckedChange={setIsYearly} />
          <Label htmlFor="yearly-pricing" className="ml-2 text-sm font-medium">
            Yearly <span className="text-green-500 font-bold">(Save 20%)</span>
          </Label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative p-8 rounded-lg shadow-lg transition-all duration-300 ${
                plan.popular ? "border-2 border-purple-500 bg-purple-600 text-white" : "bg-white dark:bg-gray-800"
              }`}
            >
              {plan.popular && (
                <div className="bg-purple-500 text-white text-xs font-bold uppercase py-1 px-2 rounded-full absolute top-4 right-4">
                  Most Popular
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                {plan.name}
              </h3>
              <p className={`text-4xl font-bold mb-6 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className={`text-base font-normal ${plan.popular ? "text-gray-200" : "text-gray-600 dark:text-gray-400"}`}>
                  /{isYearly ? "year" : "month"}
                </span>
              </p>
              <ul className="text-left mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`mb-2 flex items-center ${plan.popular ? "text-gray-100" : "text-gray-700 dark:text-gray-300"}`}>
                    <FaCheck className={`${plan.popular ? "text-white" : "text-green-500"} mr-2`} /> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`px-6 py-3 rounded-full hover:opacity-90 transition-all duration-300 w-full text-white font-semibold ${
                  plan.popular
                    ? "bg-white text-purple-600 hover:bg-gray-100 hover:text-purple-700"
                    : `bg-gradient-to-r ${plan.color} hover:shadow-lg`
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
