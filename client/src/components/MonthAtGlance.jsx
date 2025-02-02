import calendar from '../assets/images/calendar.png';

const MonthAtGlance = () => {
  return (
    <section
      id='timetable'
      className='relative bg-base-200   pb-4  rounded-xl lg:py-20   '
    >
      <h2 className='text-base-content text-center px-8  py-12 text-2xl font-bold sm:text-4xl md:text-[40px]'>
        At SAGI, the month is divided into 3 big determining moments
      </h2>
      <div className='container align-element'>
        <img src={calendar} alt='' />
      </div>
    </section>
  );
};
export default MonthAtGlance;
