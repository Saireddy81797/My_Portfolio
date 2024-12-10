import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code2 className="w-8 h-8 text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">B. Tech. in ECE</h3>
            <p className="text-gray-600">
        SR University, Warangal 
        2022-2026
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <Palette className="w-8 h-8 text-gray-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Higher Secondary</h3>
            <p className="text-gray-600">
            SR-Edu Centre , Hanamkonda 
              2020 - 2022
            </p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <Globe className="w-8 h-8 text-green-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secondary</h3>
            <p className="text-grey-600">
          Bishop Beretta High School , Hanamkonda 2014 - 2020
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;