import React, { useState, useEffect, useRef } from 'react';

const artistBenefits = [
  {
    id: 1,
    title: 'Showcase your work',
    description: "Give your projects a dedicated home where they won't get buried by algorithms or cluttered feeds. Sanaa lets you display your portfolio and ongoing work in one organized, professional space that fans can easily explore. Your creativity finally gets the visibility and presentation it deserves.",
    numberWidth: 'w-[274px]', 
  },
  {
    id: 2,
    title: 'Build a Community',
    description: 'Connect directly with people who genuinely support your craft - no algorithm deciding who sees what. Fans can follow your journey, leave comments, and engage with your updates in a meaningful way. You own your audience and the relationships you build with them.',
    numberWidth: 'w-[274px]',
  },
  {
    id: 3,
    title: 'Earn From Multiple Sources',
    description: "Turn your creativity into income through tips, memberships, and event tickets - all powered by M-Pesa and local payment options. Supporters can contribute however they prefer, giving you steady and flexible earnings. Whether it's one-time donations or recurring revenue, Sanaa makes monetization simple.",
    numberWidth: 'w-[274px]',
  },
  {
    id: 4,
    title: 'Control What\'s Free vs Premium',
    description: "Turn your creativity into income through tips, memberships, and event tickets - all powered by M-Pesa and local payment options. Supporters can contribute however they prefer, giving you steady and flexible earnings. Whether it's one-time donations or recurring revenue, Sanaa makes monetization simple.",
    numberWidth: 'w-[274px]',
  },
];

export default function SanaaAccordion() {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <section className="bg-black text-white px-6 py-8 min-h-screen w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full max-w-[1200px] mb-12">
        <h2 className="text-white text-[32px] leading-[100%] font-clash font-bold text-center">
          For artists, here’s how Sanaa holds space for your work:
        </h2>
      </div>

      {/* Accordion Container */}
      <div className="w-full max-w-[1320px] flex flex-col border border-[#000000]"> 
        {artistBenefits.map((item) => (
          <AccordionItem
            key={item.id}
            item={item}
            isOpen={openItemId === item.id}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </section>
  );
}

const AccordionItem = ({ item, isOpen, toggleItem }) => {
  const itemNumber = String(item.id).padStart(2, '0');
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }, [isOpen]);

  return (
    <div ref={ref} className="w-full border-b-[2px] border-white group">
      {/* Header / Trigger Area */}
      <div 
        className={`flex items-center border-white h-[150px] cursor-pointer ${
          isOpen ? "overflow-visible" : "overflow-hidden"
        }`}
        style={{ height: '150px' }}
        onClick={() => toggleItem(item.id)}
      >
        {/* NUMBER SECTION */}
        <div className={`h-[246px] shrink-0 flex items-end overflow-hidden ${item.numberWidth} mr-4`}>
          <span className="font-clash font-normal text-[200px] leading-[100%] text-opacity-100 text-[#E10600] tracking-[0%] transform translate-y-[18%]">
            {itemNumber}
          </span>
        </div>

        {/* TITLE & ICON CONTAINER */}
        <div className="flex-1 flex items-end justify-between h-[59px] mt-[5.5rem] pb-0 mb-0">
          
          {/* Title */}
          <h3 className="font-clash font-normal text-[48px] leading-[100%] text-white tracking-[0%]">
            {item.title}
          </h3>

          {/* CUSTOM ICON COMPONENT */}
          {/* CirclePlus / CircleMinus logic */}
          <div className="relative w-[48px] h-[48px] shrink-0">
            {/* Vector O (Circle) */}
            <div className="absolute top-[4px] left-[4px] w-[40px] h-[40px] border-[2px] border-white rounded-full"></div>

            {/* Horizontal Line (Always visible) */}
            <div className="absolute top-[24px] left-[16px] w-[16px] border-t-[2px] border-white -translate-y-[1px]"></div>

            {/* Vertical Line (Visible only when closed)*/}
            <div 
              className={`absolute top-[16px] left-[24px] h-[16px] border-l-[2px] border-white -translate-x-[1px] transition-transform duration-300 ease-out ${
                isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
              }`}
            >
            </div>
          </div>
        </div>
      </div>

      {/* DESCRIPTION CONTENT */}
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex w-full pt-2">
           {/* Spacer to align text with title, skipping the number width */}
           <div className={`hidden md:block ${item.numberWidth} mr-4 shrink-0`}></div>
           
           <p className={`w-[1000px] font-lato font-normal text-[18px] leading-[191%] text-white ${
            isOpen ? 'mb-5' : 'mb-0' 
           }`}>
             {item.description}
           </p>
        </div>
      </div>
    </div>
  );
};