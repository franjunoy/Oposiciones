const Step_con_base = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_2138_2921)">
        <g clipPath="url(#clip0_2138_2921)">
          <rect x="4" y="4" width="24" height="24" rx="12" fill="#EFF0F7" />
          <rect x="4" y="4" width="24" height="24" rx="12" fill="#5A6ACF" />
          <circle cx="16" cy="16" r="4" fill="white" />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_2138_2921"
          x="0"
          y="0"
          width="32"
          height="32"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="4"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_2138_2921"
          />
          <feOffset />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.949765 0 0 0 0 0.955804 0 0 0 0 0.967882 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2138_2921"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2138_2921"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_2138_2921">
          <rect x="4" y="4" width="24" height="24" rx="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Step_con_base
