import React, { useEffect, useState } from "react";

const HourInput = ({ setValue, label, hintEditable }) => {
  const [hint, setHint] = useState(hintEditable);
  const [visible, setVisible] = useState('invisible');
  const [error, setError] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [divBlue, setDivBlue] = useState(false);
  const [time, setTime] = useState('');

  const showHint = () => {
    if (visible === 'invisible') setVisible('visible');
    if (visible === 'visible') setVisible('invisible');
  };

  const onFocusDivBlue = (e) => {
    console.log(e)
    if (error) return;
    setDivBlue(true);
  };

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  };

  const validateTime = (time) => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(time);
  };

  useEffect(() => {
    if (isValid) {
      setError('');
      setValue(time);
    } else {
      setError('Enter a valid time');
      setDivBlue(false);
      setValue('');
    }
  }, [isValid, time]);

  const onChange = (e) => {
    setTime(e.target.value);
    console.log(e.target.value)
    const newTime = e.target.value;
    setIsValid(validateTime(newTime));
  };

  return (
    <div className={`flex flex-col w-full items-start gap-1.5`}>
      <label className="w-full h-5 font-primary">{label}</label>
      <div className={`flex h-11 px-3.5 bg-white border rounded items-center gap-2   w-full ${divBlue ? "border-blue-300" : 'border-gray-300'} ${error ? "border-red-300" : time ? 'border-green-300' : ''} `}>
        {
          <svg width="20" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="clock">
              <path id="clock_2" d="M10.5003 1.04199C5.56033 1.04199 1.54199 5.06033 1.54199 10.0003C1.54199 14.9403 5.56033 18.9587 10.5003 18.9587C15.4403 18.9587 19.4587 14.9403 19.4587 10.0003C19.4587 5.06033 15.4403 1.04199 10.5003 1.04199ZM10.5003 17.7087C6.24949 17.7087 2.79199 14.2512 2.79199 10.0003C2.79199 5.74949 6.24949 2.29199 10.5003 2.29199C14.7512 2.29199 18.2087 5.74949 18.2087 10.0003C18.2087 14.2512 14.7512 17.7087 10.5003 17.7087ZM13.442 12.0586C13.6862 12.3028 13.6862 12.6987 13.442 12.9428C13.3204 13.0645 13.1603 13.1261 13.0003 13.1261C12.8403 13.1261 12.6803 13.0653 12.5586 12.9428L10.0586 10.4428C9.94113 10.3253 9.87533 10.1661 9.87533 10.0011V5.83447C9.87533 5.48947 10.1553 5.20947 10.5003 5.20947C10.8453 5.20947 11.1253 5.48947 11.1253 5.83447V9.74194L13.442 12.0586Z" fill="#BEBDBD"/>
            </g>
          </svg>
        }
        
        <input
          type={"time"}
          value={time ? time : "08:00"}
          placeholder="08:00 AM"
          onChange={(e) => onChange(e)}
          className='w-full h-full outline-0'
          onFocus={(e) => onFocusDivBlue(e)}
          onBlur={(e) => onBlurDivBlue(e)} 
        />
        {error ? 
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1089_57477)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 4.16659C8.27582 4.16659 8.49967 4.39044 8.49967 4.66659V8.66659C8.49967 8.94273 8.27582 9.16659 7.99967 9.16659C7.72353 9.16659 7.49967 8.94273 7.49967 8.66659V4.66659C7.49967 4.39044 7.72353 4.16659 7.99967 4.16659Z" fill="#F76174"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.34082 10.9609C8.54608 11.1456 8.56272 11.4617 8.37799 11.667L8.37132 11.6744C8.18659 11.8797 7.87045 11.8963 7.66519 11.7116C7.45994 11.5268 7.4433 11.2107 7.62803 11.0054C7.81942 10.7928 8.13557 10.7761 8.34082 10.9609Z" fill="#F76174"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.83325C4.59392 1.83325 1.83301 4.59416 1.83301 7.99992C1.83301 11.4057 4.59392 14.1666 7.99967 14.1666C11.4054 14.1666 14.1663 11.4057 14.1663 7.99992C14.1663 4.59416 11.4054 1.83325 7.99967 1.83325ZM0.833008 7.99992C0.833008 4.04188 4.04163 0.833252 7.99967 0.833252C11.9577 0.833252 15.1663 4.04188 15.1663 7.99992C15.1663 11.958 11.9577 15.1666 7.99967 15.1666C4.04163 15.1666 0.833008 11.958 0.833008 7.99992Z" fill="#F76174"/>
                </g>
                <defs>
                <clipPath id="clip0_1089_57477">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg> 
                :  
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={showHint} className="hover:cursor-pointer">
                <g clip-path="url(#clip0_1089_57423)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 1.83325C4.59392 1.83325 1.83301 4.59416 1.83301 7.99992C1.83301 11.4057 4.59392 14.1666 7.99967 14.1666C11.4054 14.1666 14.1663 11.4057 14.1663 7.99992C14.1663 4.59416 11.4054 1.83325 7.99967 1.83325ZM0.833008 7.99992C0.833008 4.04188 4.04163 0.833252 7.99967 0.833252C11.9577 0.833252 15.1663 4.04188 15.1663 7.99992C15.1663 11.958 11.9577 15.1666 7.99967 15.1666C4.04163 15.1666 0.833008 11.958 0.833008 7.99992Z" fill="#939697"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.89608 5.06867C6.66643 5.26353 6.49967 5.5606 6.99967 5.99993C6.99967 6.27607 6.27582 6.49993 5.99967 6.49993C5.72353 6.49993 5.49967 6.27607 5.49967 5.99993C5.49967 5.27258 5.79125 4.69465 6.2491 4.30616C6.69608 3.92691 7.27424 3.74992 7.83301 3.74992C8.39177 3.74992 8.96993 3.92691 9.41691 4.30617C9.87477 4.69465 10.1663 5.27258 10.1663 5.99993C10.1663 6.51051 10.0356 6.89957 9.82195 7.21998C9.64245 7.48923 9.40919 7.69739 9.22567 7.86116C9.20563 7.87904 9.1862 7.89638 9.16748 7.91322C8.9627 8.09752 8.80835 8.24944 8.69522 8.44932C8.58698 8.64053 8.49967 8.90767 8.49967 9.33321C8.49967 9.60936 8.27582 9.83321 7.99967 9.83321C7.72353 9.83321 7.49967 9.60936 7.99967 9.33321C7.99967 8.75876 7.6207 8.31757 7.82496 7.95671C8.02433 7.60451 8.28665 7.36061 8.49853 7.16992C8.51497 7.15512 8.53102 7.14071 8.54668 7.12664C8.74684 6.94688 8.88473 6.82304 8.9899 6.66527C9.08879 6.51694 9.16634 6.32268 9.16634 5.99993C9.16634 5.56061 8.99958 5.26353 8.76993 5.06868C8.52942 4.8646 8.19091 4.74992 7.83301 4.74992C7.47511 4.74992 7.1366 4.86460 6.89608 5.06867Z" fill="#939697"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.34082 11.6275C8.54608 11.8123 8.56272 12.1284 8.37799 12.3337L8.37132 12.3411C8.18659 12.5463 7.87045 12.5630 7.66519 12.3782C7.45994 12.1935 7.4433 11.8774 7.62803 11.6721C7.81942 11.4594 8.13557 11.4428 8.34082 11.6275Z" fill="#939697"/>
                </g>
                <defs>
                <clipPath id="clip0_1089_57423">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>}  
      </div>
      {error ? <span className="w-full h-4 text-sm font-light leading-6 font-primary text-red-500 ">{error}</span> : <span className={`w-full h-4  text-sm font-light leading-6 font-primary text-gray-400 ${visible}`}>{hint}</span>}
    </div>
  );
};

export default HourInput;
