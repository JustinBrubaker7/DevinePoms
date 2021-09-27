import React from 'react';
import CuteDogsPhoto from '../../images/cutedogs.jpg'


export default function BlockSection() {
  return (
<section className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <img
              className="h-auto w-64 rounded-lg xl:h-80 xl:w-80"
              src={CuteDogsPhoto}
              alt=""
            />
          </div>
<div className="relative lg:ml-10">
<h2 className="text-2xl leading-9 font-normal text-gray-900 text-center">IF YOU ARE INTERESTED IN A DEVINE POMERANIAN</h2>
<p className="text-md font-normal text-gray-900 ">Please first make sure you do your homework on all that is involved with a new puppy and Pomeranians specifically.</p>
<p>Email the following information to tds4devinepoms@gmail.com:</p>
<li>Your information (name, address, phone number)</li>
<li>What you are looking for (sex, color, pet or full AKC)</li>
<li>Tell me about yourself and your family</li>
<li>Children and other pets in the home (ages and breed)</li>
</div>
</div>
</div>
</section>



)
}