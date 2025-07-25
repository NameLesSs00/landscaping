import React from 'react';
function HeroPage() {
  return (
    <div className="flex flex-col p-8 items-center min-h-screen " >
      <h1 className="text-[100px] font-bold mt-[184px] mb-4 text-center text-white">
        Gardens of Distinction
      </h1>

      <p className="mb-6 text-center max-w-3xl text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure recusandae amet assumenda, eum consequatur at, doloribus culpa quo laborum officia! Minus, odio sapiente! Perspiciatis corrupti excepturi in modi magni!
      </p>

      <div className="mb-10 flex gap-6 justify-center">
        <button className="bg-[#2DA884] text-white px-6 py-3 rounded-3xl">Get Started</button>
        <button className="border bg-white border-green-600 text-green-600 px-6 py-3 rounded-3xl">Learn More</button>
      </div>

      <section className="w-full max-w-5xl rounded-md bg-white flex justify-center p-4 shadow-md">
        <div className="flex w-full justify-around items-center text-center">
          <div className="px-4 border-r border-black">
            <p className="text-[38px] font-bold">
              15<span className="text-[#2DA884]">+</span>
            </p>
            <p>Years Experience</p>
          </div>
          <div className="px-4 border-r border-black">
            <p className="text-[38px] font-bold">
              10k<span className="text-[#2DA884]">+</span>
            </p>
            <p>Product</p>
          </div>
          <div className="px-4 border-r border-black">
            <p className="text-[38px] font-bold">
              5k<span className="text-[#2DA884]">+</span>
            </p>
            <p>Satisfied Clients</p>
          </div>
          <div className="px-4">
            <p className="text-[38px] font-bold">
              87<span className="text-[#2DA884]">+</span>
            </p>
            <p>Local Team Members</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
