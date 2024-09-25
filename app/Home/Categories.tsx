import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Import social media icons

export default function TopAgents() {
  const agents = [
    {
      id: 1,
      name: 'Paul Murphy',
      role: 'Top Agent',
      description: 'I am pleased to get you the best service.',
      imageUrl: 'https://i.pinimg.com/564x/18/af/98/18af980ba1dea60016e3dbd5b7de29b5.jpg', 
    },
    {
      id: 2,
      name: 'Brian Gunde',
      role: 'Top Agent',
      description: 'I am dedicated to giving you the best real estate experience.',
      imageUrl: 'https://i.pinimg.com/564x/50/2b/07/502b07a75100a4fba0736ce69f9234d8.jpg',
    },
    
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">
            Get Connected with Top Agent
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet our top-performing agents
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Learn more about our team of expert, considerate, and proactive agents.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
              style={{ height: '400px', width: '300px' }} 
            >
              <div className="relative w-full h-3/5 mb-4 overflow-hidden rounded-lg">
                <img
                  className="w-full h-full object-cover object-center"
                  src={agent.imageUrl}
                  alt={agent.name}
                />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {agent.name}
              </h3>
              <p className="text-sm text-green-500">{agent.role}</p>
              <p className="mt-3 text-base text-gray-500">{agent.description}</p>
              <div className="flex justify-center mt-4 space-x-3">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <FaFacebook size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-400">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-blue-700">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
