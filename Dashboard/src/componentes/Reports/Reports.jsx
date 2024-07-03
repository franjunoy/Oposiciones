import Button from '../reusableComponents/Button';
const Reports = ({ reportsFakeData }) => {
  return (
    <section className='w-full flex justify-between items-center p-2 mt-8 border-b border-gray-300'>
      <div className=' sm:ml-4 flex items_center flex-row gap-3'>
        <div className='text-2xl text-indigo-500 font-bold flex justify-center items-center'>
          {reportsFakeData.reports.length}
        </div>
        <div className='flex flex-col justify-center'>
          <h5 className='text-base font-bold'>Reportes</h5>
          <p className='text-xs text-gray-800/65 font-bold'>
            Revisa los reportes de tarjetas
          </p>
        </div>
      </div>
      <div className='boton '>
      {Boolean(reportsFakeData.button.state) && (
        <Button>
          Revisar reportes
        </Button>
      )}
      </div>
    </section>
  );
};

export default Reports;
