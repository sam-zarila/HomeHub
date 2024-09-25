import React from "react";
import  {ShieldCheckIcon}   from "@heroicons/react/solid";
import  {BriefcaseIcon} from "@heroicons/react/solid";
import {ChartBarIcon} from "@heroicons/react/solid";
const values = [
  {
    id: 1,
    icon: <ShieldCheckIcon className="h-12 w-12 text-white bg-green-500 p-2 rounded-full" />,
    title: "Integrity",
    description:
      "We uphold the highest standards of integrity, ensuring transparency and honesty in every transaction. Our commitment to ethical practices builds trust and confidence with every client.",
  },
  {
    id: 2,
    icon: <BriefcaseIcon className="h-12 w-12 text-white bg-green-500 p-2 rounded-full" />,
    title: "Experience",
    description:
      "With years of experience in the real estate industry, our team offers unparalleled market knowledge and expertise. We leverage our deep understanding to provide insightful guidance and achieve the best outcomes for our clients.",
  },
  {
    id: 3,
    icon: <ChartBarIcon className="h-12 w-12 text-white bg-green-500 p-2 rounded-full" />,
    title: "Marketing",
    description:
      "Our innovative marketing strategies are designed to maximize your property visibility. By utilizing advanced techniques and targeted campaigns, we attract qualified buyers and tenants to ensure a swift and successful transaction.",
  },
];

export default function Mission() {
  return (
    <div className="bg-white py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Why We Are the Best in the Market</h1>
        <p className="mt-4 text-lg text-gray-600">
          Offering comprehensive real estate services focused on connecting tenants with rental properties and assisting in the sale of homes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {values.map((value) => (
          <div
            key={value.id}
            className="bg-white rounded-lg p-8 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex justify-center mb-6">{value.icon}</div>
            <h3 className="text-2xl font-semibold text-center text-gray-900 mb-4">{value.title}</h3>
            <p className="text-gray-700 text-center">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
