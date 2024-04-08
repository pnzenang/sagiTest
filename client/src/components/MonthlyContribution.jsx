import { TbUsersGroup } from 'react-icons/tb';
import { FaSearchDollar } from 'react-icons/fa';
import { TbUserDollar } from 'react-icons/tb';
import { AiOutlineDollarCircle } from 'react-icons/ai';

let totalContribution = '$160,000';
let totalVestedMember = '9,000';
let contributionPerMember = '$16.88';
let individualContribution = '$2.11';

const Stats2 = () => {
  return (
    <section
      className='min-h-screen  bg-base-100 pb-10 pt-10  lg:py-10  rounded-xl  '
      id='contribution'
    >
      <div className='mx-auto px-4 sm:container p-32'>
        <div className='mx-auto mb-[70px] max-w-[570px] text-center'>
          <h2 className='mb-3 text-3xl font-bold leading-[1.2] text-base-content md:text-5xl capitalize'>
            Our contribution this month
          </h2>
          <p className='text-base-content'>
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>

        <div className='-mx-4 flex flex-wrap'>
          <StatsItem
            title='target:'
            user={totalContribution}
            detail='Total Contribution'
            icon={<FaSearchDollar className='w-10 h-10' />}
          />
          <StatsItem
            title='from:'
            user={totalVestedMember}
            detail='Vested Members'
            icon={<TbUsersGroup className='w-10 h-10' />}
          />
          <StatsItem
            title='for about:'
            user={contributionPerMember}
            detail='contribution per member'
            icon={<TbUserDollar className='w-10 h-10' />}
          />
          <StatsItem
            title='and:'
            user={individualContribution}
            detail='individual contribution per death'
            icon={<AiOutlineDollarCircle className='w-10 h-10' />}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats2;

const StatsItem = ({ user, title, icon, detail }) => {
  return (
    <div className='w-full px-4 sm:w-1/2 lg:w-1/4 '>
      <div className=' text-center '>
        <h3 className='mb-4 text-xl sm:text-2xl capitalize'>{title}</h3>
        <div className='mx-auto mb-8 flex h-[90px] w-[90px] items-center justify-center rounded-[15px] bg-base-300 text-primary shadow-1 dark:bg-dark-2 dark:shadow-box-dark'>
          {icon}
        </div>
        <div className=''>
          <h3 className='mb-[10px] text-3xl font-bold leading-[1.2] text-base-contentxl:text-[40px]'>
            {user}
          </h3>
          <p className='w-48 text-lg text-body-color dark:text-dark-6  mx-auto'>
            {detail}
          </p>
        </div>
      </div>
    </div>
  );
};
