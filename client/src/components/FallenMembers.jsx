const tableData = [
  {
    firstName: 'Patrice',
    lastAndMiddleName: 'Nzenang',
    DateOfDeath: '05-Jan-2024',
    DateAnnounced: '14-Jan-2024',
    association: 'UNAD',
  },
  {
    firstName: 'Andre',
    lastAndMiddleName: 'Mambo',
    DateOfDeath: '05-Jan-2024',
    DateAnnounced: '14-Jan-2024',
    association: 'UNND',
  },
  {
    firstName: 'Toto',
    lastAndMiddleName: 'Albert',
    DateOfDeath: '05-Jan-2024',
    DateAnnounced: '14-Jan-2024',
    association: 'UASD',
  },
  {
    firstName: 'Albertin',
    lastAndMiddleName: 'Jeameau',
    DateOfDeath: '05-Jan-2024',
    DateAnnounced: '14-Jan-2024',
    association: 'MUNN',
  },
  {
    firstName: 'Merlin',
    lastAndMiddleName: 'Noutabt',
    DateOfDeath: '05-Jan-2024',
    DateAnnounced: '14-Jan-2024',
    association: 'USAM',
  },
  {
    firstName: 'derivc',
    lastAndMiddleName: 'cdrer',
    DateOfDeath: '05-Jan-2024',
    DateAnnounced: '14-Jan-2024',
    association: 'USAM',
  },
];

const headers = [
  { name: 'first names', styles: 'min-w-[220px] text-base-content' },
  { name: 'last and middle  ', styles: 'min-w-[150px] text-base-content' },
  { name: 'date of death', styles: 'min-w-[120px] text-base-content' },
  { name: 'date announced', styles: 'min-w-[100px] text-base-content' },
  { name: 'Association', styles: 'min-w-[100px] text-base-content' },
];

const FallenMembers = () => {
  return (
    <section
      id='death'
      className='bg-base-200 my-28 py-20 lg:py-[120px] rounded-xl'
    >
      <h1 className='text-center pb-10 text-xl sm:text-5xl'>
        Fallen Members for whom we are contributing.
      </h1>
      <div className='container mx-auto'>
        <div className='-mx-4  flex flex-wrap justify-center'>
          <div className='w-full px-4 lg:w-10/12'>
            <div className='p-6 bg-base-300 rounded-[10px]  shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] lg:p-9'>
              <div className='max-w-full overflow-x-auto'>
                <table className='w-full table-auto '>
                  <TableHead headers={headers} />
                  <TableBody data={tableData} />
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FallenMembers;

const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr className='text-left rounded  bg-primary'>
        {headers.map((header, index) => (
          <th
            className={`py-4 px-4 first:pl-9 xl:first:pl-11 last:pr-9 xl:last:pr-11 text-base font-medium uppercase text-white ${header.styles}`}
            key={index}
          >
            {header.name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td className='px-4 py-10 border-b border-stroke dark:border-dark-3 pl-9 xl:pl-11'>
            <h5 className='text-base font-medium text-base-content'>
              {row.firstName}
            </h5>
          </td>
          <td className='px-4 py-5 border-b border-stroke dark:border-dark-3'>
            <p className='text-base-content'>{row.lastAndMiddleName}</p>
          </td>
          <td className='px-4 py-5 border-b border-stroke dark:border-dark-3'>
            <p className='text-base-content'>{row.DateOfDeath}</p>
          </td>
          <td className='px-4 py-5 border-b border-stroke dark:border-dark-3'>
            <p className='text-base-content'>{row.DateAnnounced}</p>
          </td>
          <td className='px-4 py-5 border-b border-stroke dark:border-dark-3'>
            <p className='text-base-content'>{row.association}</p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
