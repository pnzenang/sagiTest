import { useAllMembersContext } from '../pages/AllMembers';
import { ComplexPaginationContainer, MemberTable } from '../components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import Member from './Member';

import PageBtnContainer from './PageBtnContainer';
import { useState } from 'react';

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-medium text-white lg:py-7 lg:px-4`,
  TdStyle: `text-dark border-b  border-primary bg-base-100 dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
  TdStyle2: `text-dark border-b border-primary bg-base-100 dark:border-dark dark:bg-dark-2 dark:text-dark-7 py-5 px-2 text-center text-base font-medium`,
};

const MembersContainer = () => {
  const [layout, setLayout] = useState('grid');
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`;
  };
  const { data } = useAllMembersContext();
  const { members, numOfPages, totalMembers } = data;

  if (members.length === 0)
    return (
      <>
        <h1 className='text-3xl text-center'>
          Welcome delegate, There is no Members to display... please add
          members.
        </h1>
      </>
    );
  return (
    <>
      <div className='flex justify-between'>
        <div>
          <h5 className='pb-1 text-2xl'>
            {totalMembers} member{members.length > 1 && 's'} found
          </h5>
        </div>
        <div className='flex gap-x-2'>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div className=' border-b mt-1 border-primary mx-auto mb-3'></div>
      {layout === 'grid'}? (
      <ul className='grid grid-cols-1 gap-6 lg:grid-cols-2 pb-4 '>
        {members.map((member) => {
          return <Member key={member._id} {...member} />;
        })}
      </ul>
      ): (
      <section className=' '>
        <div className='container'>
          <div className='flex flex-wrap '>
            <div className='w-full '>
              <div className='max-w-full overflow-x-auto'>
                <table className='w-full  table table-zebra'>
                  <thead className='text-center bg-primary'>
                    <tr>
                      <th className={TdStyle.ThStyle}> Association Code </th>
                      <th className={TdStyle.ThStyle}> Matriculation </th>
                      <th className={TdStyle.ThStyle}> First Name </th>
                      <th className={TdStyle.ThStyle}> Last Name </th>
                      <th className={TdStyle.ThStyle}> Registration Date </th>
                      <th className={TdStyle.ThStyle}> Recommendation </th>
                      <th className={TdStyle.ThStyle}> Status </th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member) => {
                      console.log(member);
                      const {
                        _id,
                        associationCode,
                        memberMatriculation,
                        firstName,
                        lastAndMiddleNames,
                        createdAt,
                        delegateRecommendation,
                        memberStatus,
                      } = member;
                      return (
                        <tr key={_id}>
                          <td className={TdStyle.TdStyle}>{associationCode}</td>
                          <td className={TdStyle.TdStyle2}>
                            {memberMatriculation}
                          </td>
                          <td className={TdStyle.TdStyle}>{firstName}</td>
                          <td className={TdStyle.TdStyle2}>
                            {lastAndMiddleNames}
                          </td>
                          <td className={TdStyle.TdStyle}>{createdAt}</td>
                          <td className={TdStyle.TdStyle}>
                            {delegateRecommendation}
                          </td>
                          <td className={TdStyle.TdStyle}>{memberStatus}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      ){numOfPages > 1 && <ComplexPaginationContainer />}
      {}
      <section className=' '>
        <div className='container'>
          <div className='flex flex-wrap '>
            <div className='w-full '>
              <div className='max-w-full overflow-x-auto'>
                <table className='w-full  table table-zebra'>
                  <thead className='text-center bg-primary'>
                    <tr>
                      <th className={TdStyle.ThStyle}> Association Code </th>
                      <th className={TdStyle.ThStyle}> Matriculation </th>
                      <th className={TdStyle.ThStyle}> First Name </th>
                      <th className={TdStyle.ThStyle}> Last Name </th>
                      <th className={TdStyle.ThStyle}> Registration Date </th>
                      <th className={TdStyle.ThStyle}> Recommendation </th>
                      <th className={TdStyle.ThStyle}> Status </th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((member) => {
                      console.log(member);
                      const {
                        _id,
                        associationCode,
                        memberMatriculation,
                        firstName,
                        lastAndMiddleNames,
                        createdAt,
                        delegateRecommendation,
                        memberStatus,
                      } = member;
                      return (
                        <tr key={_id}>
                          <td className={TdStyle.TdStyle}>{associationCode}</td>
                          <td className={TdStyle.TdStyle2}>
                            {memberMatriculation}
                          </td>
                          <td className={TdStyle.TdStyle}>{firstName}</td>
                          <td className={TdStyle.TdStyle2}>
                            {lastAndMiddleNames}
                          </td>
                          <td className={TdStyle.TdStyle}>{createdAt}</td>
                          <td className={TdStyle.TdStyle}>
                            {delegateRecommendation}
                          </td>
                          <td className={TdStyle.TdStyle}>{memberStatus}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MembersContainer;
