const SelectSearch = ({ title, placeholder, options, setValue }) => {
  return (
    <div className="w-full h-full ">
      <h1 className="font-primary font-bold text-2xl">{title}</h1>
      <div className="flex flex-col items-start gap-1.5 mt-12 mb-4 ">
        <div className="flex w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded items-center gap-2">
          <div className="w-6 h-6">
            <svg
              width="22"
              height="22"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <g id="User / User_02">
                  <path
                    id="Vector"
                    d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21M12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.7614 14.7614 13 12 13Z"
                    stroke="#000000"
                    strokeWidth="1.128"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </g>
              </g>
            </svg>
          </div>
          <select className="w-full" onChange={(e) => setValue(e.target.value)}>
            <option selected>{placeholder}</option>
            {options?.map((e) => (
              <option value={e._id} key={e._id}>
                {e.nombre}
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectSearch;
