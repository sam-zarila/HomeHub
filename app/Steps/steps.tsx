import  {HomeIcon}   from '@heroicons/react/solid';

import {CheckCircleIcon} from '@heroicons/react/solid';

import  {UserGroupIcon}  from '@heroicons/react/solid';

export default function ThreeSteps() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">
          We Follow 3 Steps
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          How We Make It Happen
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Discover how our process works to help you find the best real estate options.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1: Evaluate Property */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white p-6 rounded-full">
                <HomeIcon className="h-10 w-10" />
              </div>
              <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                Evaluate Property
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We evaluate the pricing for your property to ensure the best deal.
              </p>
            </div>
          </div>

          {/* Step 2: Meet Your Agent */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white p-6 rounded-full">
                <UserGroupIcon className="h-10 w-10" />
              </div>
              <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                Meet Your Agent
              </h3>
              <p className="mt-2 text-base text-gray-500">
                You will be connected with an experienced real estate agent to guide you.
              </p>
            </div>
          </div>

          {/* Step 3: Close The Deal */}
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="bg-green-500 text-white p-6 rounded-full">
                <CheckCircleIcon className="h-10 w-10" />
              </div>
              <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                Close The Deal
              </h3>
              <p className="mt-2 text-base text-gray-500">
                We help you finalize the deal and handle all closing procedures smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
