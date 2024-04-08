import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
const RegistrationFaqs = () => {
  return (
    <section className='relative z-2 overflow-hidden bg-base-200 pb-12 pt-20 dark:bg-dark lg:pb-12 lg:pt-[70px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-[60px]  text-center lg:mb-20'>
              <h2 className='mb-4 text-3xl font-bold text-base-content sm:text-[40px]/[48px]'>
                Any Questions about registration?
              </h2>
              <p className='text-base text-body-color dark:text-dark-6'>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='How long we deliver your first blog post?'
              text='It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .'
            />
            <AccordionItem
              header='How long we deliver your first blog post?'
              text='It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .'
            />
            <AccordionItem
              header='How long we deliver your first blog post?'
              text='It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .'
            />
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <AccordionItem
              header='How long we deliver your first blog post?'
              text='It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .'
            />
            <AccordionItem
              header='How long we deliver your first blog post?'
              text='It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .'
            />
            <AccordionItem
              header='How long we deliver your first blog post?'
              text='It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .'
            />
          </div>
        </div>
      </div>

      <div className='absolute bottom-0 right-0 z-[-1]'>
        <svg
          width='1440'
          height='886'
          viewBox='0 0 1440 886'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.5'
            d='M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z'
            fill='url(#paint0_linear)'
          />
        </svg>
      </div>
    </section>
  );
};

export default RegistrationFaqs;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className='mb-8 w-full rounded-lg bg-base-200 p-4 '>
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className='mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5'>
          <FaChevronDown
            className={`fill-primary stroke-primary duration-200 w-6 h-6 ease-in-out ${
              active ? 'rotate-180' : ''
            }`}
          />
        </div>

        <div className='w-full'>
          <h4 className='mt-1 text-lg font-semibold text-primary'>{header}</h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? 'block' : 'hidden'
        }`}
      >
        <p className='py-3 text-base leading-relaxed text-body-color dark:text-dark-6'>
          {text}
        </p>
      </div>
    </div>
  );
};
