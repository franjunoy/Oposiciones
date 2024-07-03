import { useEffect, useState } from "react";

const NameInput = ({ setValue, label, value = "" }) => {
  const [hint, setHint] = useState();
  const [visible, setVisible] = useState("invisible");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [divBlue, setDivBlue] = useState(false);
  const [name, setName] = useState(value);

  const onFocusDivBlue = (e) => {
    if (error) return;
    setDivBlue(true);
  };

  const onBlurDivBlue = (e) => {
    setDivBlue(false);
  };

  const showHint = () => {
    if (visible == "invisible") setVisible("visible");
    if (visible == "visible") setVisible("invisible");
  };

  const validateName = (name) => {
    if (!name.trim()) {
      return false;
    }

    const patron = /^[a-zA-Z\s]+$/;

    if (patron.test(name)) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (isValid) {
      setError("");
      setValue(name);
    } else {
      setError("Nombre incorrecto");
      setDivBlue(false);
      setValue("");
    }
  }, [isValid, name]);

  const onChange = (e) => {
    setName(e.target.value);
    const newName = e.target.value;
    setIsValid(validateName(newName));
  };

  return (
    <div className={`flex flex-col w-full  items-start gap-1.5 mb-4 `}>
      {label && (
        <label
          className={`w-full h-5 font-sans text-base font-normal leading-6 text-[#23254C]`}>
          {label}
        </label>
      )}
      <div
        className={`flex w-full h-11 px-3.5 py-2.5 bg-white border border-gray-300 rounded items-center gap-2 ${
          divBlue ? "shadow-focus shadow-shadow-focus " : ""
        } ${error ? "border-red-300" : name ? "border-green-300" : ""} `}>
        <div className="w-6 h-6 ">
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

        <input
          type="name"
          value={name}
          onChange={(e) => onChange(e)}
          placeholder={name ? name : "Nombre completo"}
          className={`w-full outline-0 font-sans text-base placeholder:text-xs md:placeholder:text-base `}
          onFocus={(e) => onFocusDivBlue(e)}
          onBlur={(e) => onBlurDivBlue(e)}
        />
        {error ? (
          <div className="w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1089_57477)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99967 4.16659C8.27582 4.16659 8.49967 4.39044 8.49967 4.66659V8.66659C8.49967 8.94273 8.27582 9.16659 7.99967 9.16659C7.72353 9.16659 7.49967 8.94273 7.49967 8.66659V4.66659C7.49967 4.39044 7.72353 4.16659 7.99967 4.16659Z"
                  fill="#F76174"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.34082 10.9609C8.54608 11.1456 8.56272 11.4617 8.37799 11.667L8.37132 11.6744C8.18659 11.8797 7.87045 11.8963 7.66519 11.7116C7.45994 11.5268 7.4433 11.2107 7.62803 11.0054L7.63469 10.998C7.81942 10.7928 8.13557 10.7761 8.34082 10.9609Z"
                  fill="#F76174"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99967 1.83325C4.59392 1.83325 1.83301 4.59416 1.83301 7.99992C1.83301 11.4057 4.59392 14.1666 7.99967 14.1666C11.4054 14.1666 14.1663 11.4057 14.1663 7.99992C14.1663 4.59416 11.4054 1.83325 7.99967 1.83325ZM0.833008 7.99992C0.833008 4.04188 4.04163 0.833252 7.99967 0.833252C11.9577 0.833252 15.1663 4.04188 15.1663 7.99992C15.1663 11.958 11.9577 15.1666 7.99967 15.1666C4.04163 15.1666 0.833008 11.958 0.833008 7.99992Z"
                  fill="#F76174"
                />
              </g>
              <defs>
                <clipPath id="clip0_1089_57477">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        ) : (
          <div className="h-[16px] w-[16px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={showHint}
              className="hover:cursor-pointer">
              <g clipPath="url(#clip0_1089_57423)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.99967 1.83325C4.59392 1.83325 1.83301 4.59416 1.83301 7.99992C1.83301 11.4057 4.59392 14.1666 7.99967 14.1666C11.4054 14.1666 14.1663 11.4057 14.1663 7.99992C14.1663 4.59416 11.4054 1.83325 7.99967 1.83325ZM0.833008 7.99992C0.833008 4.04188 4.04163 0.833252 7.99967 0.833252C11.9577 0.833252 15.1663 4.04188 15.1663 7.99992C15.1663 11.958 11.9577 15.1666 7.99967 15.1666C4.04163 15.1666 0.833008 11.958 0.833008 7.99992Z"
                  fill="#939697"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.89608 5.06867C6.66643 5.26353 6.49967 5.5606 6.49967 5.99993C6.49967 6.27607 6.27582 6.49993 5.99967 6.49993C5.72353 6.49993 5.49967 6.27607 5.49967 5.99993C5.49967 5.27258 5.79125 4.69465 6.2491 4.30616C6.69608 3.92691 7.27424 3.74992 7.83301 3.74992C8.39177 3.74992 8.96993 3.92691 9.41691 4.30617C9.87477 4.69465 10.1663 5.27258 10.1663 5.99993C10.1663 6.51051 10.0356 6.89957 9.82195 7.21998C9.64245 7.48923 9.40919 7.69739 9.22567 7.86116C9.20563 7.87904 9.1862 7.89638 9.16748 7.91322C8.9627 8.09752 8.80835 8.24944 8.69522 8.44932C8.58698 8.64053 8.49967 8.90767 8.49967 9.33321C8.49967 9.60936 8.27582 9.83321 7.99967 9.83321C7.72353 9.83321 7.49967 9.60936 7.49967 9.33321C7.49967 8.75876 7.6207 8.31757 7.82496 7.95671C8.02433 7.60451 8.28665 7.36061 8.49853 7.16992C8.51497 7.15512 8.53102 7.14071 8.54668 7.12664C8.74684 6.94688 8.88473 6.82304 8.9899 6.66527C9.08879 6.51694 9.16634 6.32268 9.16634 5.99993C9.16634 5.56061 8.99958 5.26353 8.76993 5.06868C8.52942 4.8646 8.19091 4.74992 7.83301 4.74992C7.47511 4.74992 7.1366 4.8646 6.89608 5.06867Z"
                  fill="#939697"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.34082 11.6275C8.54608 11.8123 8.56272 12.1284 8.37799 12.3337L8.37132 12.3411C8.18659 12.5463 7.87045 12.563 7.66519 12.3782C7.45994 12.1935 7.4433 11.8774 7.62803 11.6721L7.63469 11.6647C7.81942 11.4594 8.13557 11.4428 8.34082 11.6275Z"
                  fill="#939697"
                />
              </g>
              <defs>
                <clipPath id="clip0_1089_57423">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
      </div>
      {error && (
        <span
          className={`w-full h-4 text-sm font-light leading-6 font-sans text-red-500 ml-2 mb-2`}>
          {error}
        </span>
      )}
      {hint && !error && (
        <span
          className={`w-full h-4 text-sm font-light leading-6 font-sans text-gray-400 ${visible}`}>
          {hint}
        </span>
      )}
    </div>
  );
};

export default NameInput;
