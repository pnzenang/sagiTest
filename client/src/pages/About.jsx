import { About, Delegates, Services, Team, Timeline } from '../components';
import ScrollToTop from 'react-scroll-to-top';
const AboutUs = () => {
  return (
    <section className='my-10'>
      <div>
        <ScrollToTop smooth color='#0891b2' width='40' />
        <h1 className='text-3xl sm:text-6xl text-center font-bold capitalize text-base-content '>
          about us
        </h1>
        <div className='w-28 h-1 mt-3 bg-cyan-600 mx-auto mb-20'></div>
      </div>
      <About className='my-20 ' />
      <Services />
      <Timeline />
      <Team />
      <Delegates />
    </section>
  );
};
export default AboutUs;
