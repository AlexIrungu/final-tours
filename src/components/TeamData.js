import React from "react";
import alex from './team/alex.jpeg';
import moses from './team/moses.jpeg';
import translator from './team/translator.jpeg';
import t from './team/T.jpeg'
import makiwa from './team/makiwa.jpeg'
import Ann from './team/Ann.jpeg'
import Dan from './team/dan.jpeg'


function TeamData() {
  const teamMembers = [
    {
      name: 'Dan Wanyoike',
      position: 'Director',
      image: Dan
    },
    {
      name: 'Ann Wainana',
      position: 'Director',
      image: Ann
    },
    {
      name: 'Mary Njoki',
      position: 'Project Manager',
      image: makiwa
    },
    {
      name: 'Moses Njoroge',
      position: 'Tour Guide',
      image: moses
    },
    {
      name: 'Joseph Chege',
      position: 'Spanish Guide',
      image: translator
    },
    {
      name: 'Alex Irungu',
      position: 'Compliance Officer',
      image: alex
    },
  ];

  return (
    <div className="container mx-auto py-12 grid grid-cols-2 gap-6">
    <div className="max-w-md mx-auto mb-8">
      <h2 className="text-3xl font-semibold text-center mb-4">Meet the Team</h2>
      <img src={t} alt="" class="rounded-lg mb-4 object-cover object-center hover:scale-105 transition-transform duration-300 ease-in-out transform " />

      <h3>Safari squad "creating unforgettable experiences"</h3>
    </div>
    <div className="grid grid-cols-3 gap-6">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105">
          <img src={member.image} alt={member.name} className="rounded-full h-32 w-32 mb-2 object-cover object-center hover:shadow-lg" />
          <p className="text-lg font-semibold">{member.name}</p>
          <p className="text-sm text-gray-500">{member.position}</p>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default TeamData;
