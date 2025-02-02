import pdf from '../documents/rules.pdf';
import list from '../assets/images/list.svg';

const VestedMembers = () => {
  return (
    <section
      id='list'
      className='min-h-screen bg-base-100 py-10 lg:py-20  rounded-xl'
    >
      <div className='container mx-auto align-element'>
        <div className=' flex flex-wrap items-center justify-center py-10'>
          <div className='w-full px-4 md:w-5/12 lg:w-6/12'>
            <div className='relative z-10 mb-14 mr-5 md:mb-0 md:mr-10 lg:mr-'>
              <img src={list} alt='image' className='mx-auto w-full' />

              <div className='absolute -bottom-5 -right-5 -z-10 block h-full w-full bg-primary lg:-bottom-7 lg:-right-7'></div>
            </div>
          </div>
          <div className='w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12'>
            <div className=' p-8'>
              <div className='lg:max-w-[450px]'>
                <h3 className='mb-6 text-3xl font-bold leading-tight text-base-content md:text-[40px] lg:text-[50px]'>
                  List of all vested members
                </h3>
                <p className='mb-8 text-lg text-body-color dark:text-dark-6'>
                  Each month, we put the updated list of all the vested members
                  at our members disposition, the transparency is our strength.
                </p>
              </div>

              <div className='-mx-auto  w-full '>
                <div className='mb-4 px-2'>
                  <a
                    href={pdf}
                    className='inline-flex border border-transparent bg-primary px-8 py-3 text-base font-medium text-white transition hover:bg-opacity-90'
                  >
                    Click here to download the list
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default VestedMembers;
