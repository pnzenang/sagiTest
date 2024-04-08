import Logo from './Logo';
import SocialLinks from './SocialLinks';
import { IoIosGlobe } from 'react-icons/io';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa6';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
const Footer = () => {
  return (
    <footer className='relative z-1 bg-[#090E34] '>
      <span className='absolute left-0 top-0 block h-2 w-1/2 bg-primary'></span>
      <span className='absolute right-0 top-0 block h-2 w-1/2 bg-secondary'></span>
      <div className='container mx-auto pt-8 lg:pt-10 align-element'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4 sm:w-2/3 lg:w-4/12 xl:w-3/12'>
            <div className='mb-10 w-full'>
              <div className='pb-6'>
                <Logo />
              </div>

              <p className='mb-7 text-base text-gray-7'>
                SAGI gather people from all areas of our motherland Cameroon fo
                the awesome purpose of helping each other.
              </p>
              <div className='-mx-3 flex items-center'>
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className='w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12'></div>

          <LinkGroup header='Organization'>
            <NavLink link='/#' label='About Our Organization' />
            <NavLink link='/#' label='Organization services' />
            <NavLink link='/#' label='Job opportunities' />
            <NavLink link='/#' label='How it work' />
          </LinkGroup>
          <LinkGroup header='Members'>
            <NavLink link='/#' label='Membership ' />
            <NavLink link='/#' label='List Updates' />
            <NavLink link='/#' label='Death Announcement' />
            <NavLink link='/#' label='Necrology' />
          </LinkGroup>

          <div className='w-full px-4 sm:w-1/2 lg:w-4/12 2xl:w-2/12'>
            <div className='mb-10 w-full'>
              <h4 className='mb-9 text-lg font-semibold text-white'>
                Contact Info
              </h4>
              <ul>
                <li>
                  <p className='mb-3 inline-flex items-start text-base leading-loose text-gray-7'>
                    <span className='mr-3 mt-[10px]'>
                      <FaRegEnvelope className='w-6 h-6 text-white' />
                    </span>
                    info@mySagi.org
                  </p>
                </li>

                <li>
                  <p className='mb-3 inline-flex items-start text-base leading-loose text-gray-7'>
                    <span className='mr-3 mt-[10px]'>
                      <FiPhoneCall className='w-6 h-6 text-white' />
                    </span>
                    1(804)-214-6390
                  </p>
                </li>

                <li>
                  <div className='inline-flex mb-3  items-start text-base leading-loose text-gray-7'>
                    <div>
                      <span className='mr-3 mt-[10px]'>
                        <HiOutlineBuildingOffice2 className='w-6 h-6 text-white' />
                      </span>
                    </div>
                    <div className='ml-3 text-sm'>
                      <p>23612 Public House Rd Clarksburg MD 20871</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12 bg-[#101541] py-6 lg:mt-1 '>
        <div className='container mx-auto align-element'>
          <div className='-mx-4 flex flex-wrap'>
            <div className='w-full px-4 md:w-1/3 lg:w-1/2'>
              <div className='my-1 flex justify-center md:justify-start'>
                <p className='text-base text-gray-7'>
                  &copy; {new Date().getFullYear()} SAGI: Active Solidarity
                </p>
              </div>
            </div>
            <div className='w-full px-4 md:w-1/3 lg:w-1/2'>
              <div className='my-1'>
                <div className='-mx-3 flex flex-wrap items-center justify-center md:justify-end'>
                  <BottomNavLink link='/#' label='Privacy policy' />
                  <BottomNavLink link='/#' label='Legal notice' />
                  <BottomNavLink link='/#' label='Terms of service' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <div className='w-full px-4 sm:w-1/2 lg:w-3/12 2xl:w-2/12'>
      <div className='mb-10 w-full'>
        <h4 className='mb-9 text-lg font-semibold text-white'> {header} </h4>
        <ul className='space-y-3'>{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ label, link }) => {
  return (
    <li>
      <a
        href={link}
        className='inline-block text-base leading-loose text-gray-7 underline-offset-2 hover:text-white hover:underline'
      >
        {label}
      </a>
    </li>
  );
};

const BottomNavLink = ({ label, link }) => {
  return (
    <a href={link} className='px-3 text-base text-gray-7 hover:text-white'>
      {label}
    </a>
  );
};
