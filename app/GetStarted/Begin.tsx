import React from "react";
import  {ShieldCheckIcon} from '@heroicons/react/solid';
import  {BriefcaseIcon} from '@heroicons/react/solid';
import  {ChartBarIcon}  from '@heroicons/react/solid';

const Values = [
  {
    id: 1,
    icon: <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto" />,
    title: 'Agent',
    description: ''
  },
  {
    id: 2,
    icon: <BriefcaseIcon className="h-12 w-12 text-blue-600 mx-auto" />,
    title: 'Owner',
    description:""
  },
  {
    id: 3,
    icon: <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto" />,
    title: 'Partnership',
    description: ''
  },
  {
    id: 4,
    icon: <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto" />,
    title: 'Marketing',
    description: ''
  }
];

export default function Begin() {
  return (
    <div className="h-[600px] bg-gray-300 ">
     
      <div className="flex flex-grow justify-center">
        {Values.map((value) => (
          <div
            key={value.id}
            className="h-[380px] w-[350px] bg-gray-200 ml-10 mt-4 p-4"
            style={{
              borderRadius: '10px'
            }}
          >
            <div className="flex justify-center mt-4">
              {value.icon}
            </div>
            <h3 className="text-2xl pt-4 text-center font-semibold">{value.title}</h3>
            <div className="mt-3 text-sm text-gray-900 ">
              {value.description}
            </div>
            <div className='flex flex-grow  justify-center'>
                 <a
                  href="/Apply"
                  className="mt-10 block w-32 rounded-md bg-indigo-600 px-3 py-2 text-center  text-sm  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </a>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
}
