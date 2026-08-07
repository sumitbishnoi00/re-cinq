import React from 'react'

const Icons = ({ icon, props, className }) => {

  const Icons = {

    row: (
      <svg
        width="1"
        height="21"
        viewBox="0 0 1 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.5"
          y1="21"
          x2="0.499999"
          y2="2.18557e-08"
          stroke="url(#paint0_linear_258_427)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_258_427"
            x1="1.5"
            y1="-2.18557e-08"
            x2="1.5"
            y2="21"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" stop-opacity="0" />
            <stop offset="0.5" stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    navlogo: (
      <svg className={className} width="104" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_200_91)">
          <path d="M12.7499 14.6396L12.9316 14.2522C12.9708 14.1684 13.0103 14.0844 13.0495 14.0006C12.469 12.5877 11.9882 11.1341 11.6047 9.6543C11.0302 10.2672 10.5486 10.9705 10.1855 11.7429C10.693 13.1315 11.3917 14.4456 12.2655 15.6445C12.4317 15.3101 12.5927 14.9741 12.7499 14.6398V14.6396Z" fill="white" />
          <path d="M16.7987 9.18932C16.1169 9.87313 15.5533 10.6661 15.0547 11.5098C16.2744 11.1802 17.5164 10.9454 18.7696 10.8068V7.70947C18.0489 8.1076 17.3784 8.6081 16.7987 9.18932Z" fill="white" />
          <path d="M14.6011 12.3207C14.3583 12.7781 14.1289 13.2444 13.9062 13.7119C15.143 13.6695 16.3662 13.624 17.5881 13.5783C17.9413 13.5651 18.2944 13.5518 18.6479 13.5387C18.7266 13.0837 18.7697 12.6164 18.7697 12.1387V11.4697C17.3736 11.6277 15.9922 11.907 14.6414 12.3089L14.6011 12.3209V12.3207Z" fill="white" />
          <path d="M11.9344 16.2912C11.0777 15.1624 10.3736 13.9304 9.8336 12.6284C9.56412 13.4382 9.41602 14.3047 9.41602 15.2068V16.2892C9.92069 16.8814 10.3822 17.5107 10.7962 18.1748C11.2161 17.5805 11.5897 16.9441 11.9344 16.2914V16.2912Z" fill="white" />
          <path d="M9.41602 17.3252V19.766C9.76138 19.4488 10.0798 19.1028 10.3753 18.7344C10.0815 18.2455 9.76116 17.7754 9.41602 17.3254V17.3252Z" fill="white" />
          <path d="M11.0875 18.8834C10.7324 19.3535 10.3444 19.796 9.91406 20.1983H10.8273C12.1608 20.1983 13.4166 19.8632 14.5202 19.2739C13.3593 18.9969 12.1945 18.8639 11.0872 18.8832L11.0875 18.8834Z" fill="white" />
          <path d="M16.1834 16.7501C14.8863 16.7501 13.645 16.705 12.4838 16.6479C12.1975 17.1876 11.891 17.7172 11.5547 18.2243C12.7747 18.2485 14.0483 18.4421 15.3034 18.7972C16.1034 18.2424 16.7974 17.5426 17.3508 16.7359C16.9578 16.7446 16.5676 16.7501 16.1834 16.7501Z" fill="white" />
          <path d="M13.4328 13.1955C13.6827 12.6768 13.9418 12.1606 14.2208 11.6561C14.2061 10.8411 14.1445 10.0509 14.0817 9.2853C14.0449 8.83643 14.0078 8.37968 13.9798 7.91309C13.3115 8.23246 12.6951 8.64415 12.1445 9.1313C12.4871 10.5123 12.9165 11.8709 13.4331 13.1957L13.4328 13.1955Z" fill="white" />
          <path d="M14.7273 9.23062C14.7648 9.68759 14.8017 10.1537 14.8297 10.6293C15.27 9.94571 15.7643 9.30018 16.3425 8.72049C16.9573 8.10405 17.6672 7.57249 18.4299 7.14746H17.3585C16.3942 7.14746 15.4702 7.32202 14.6152 7.6414C14.6435 8.18193 14.6849 8.7124 14.7273 9.23084V9.23062Z" fill="white" />
          <path d="M17.7627 16.0656C18.0826 15.4853 18.334 14.8612 18.5053 14.2036C18.2074 14.2148 17.9097 14.2259 17.612 14.2371C16.278 14.287 14.9433 14.3368 13.5897 14.3826C13.566 14.4333 13.542 14.4843 13.5183 14.5348L13.3362 14.9231C13.1671 15.2825 12.994 15.6439 12.8145 16.0035C14.3492 16.075 16.0193 16.1196 17.7629 16.0654L17.7627 16.0656Z" fill="white" />
          <path d="M26.9944 12.621C26.9599 12.5991 26.9237 12.5773 26.886 12.5552L24.8597 11.3754C24.722 8.21319 23.7284 5.45475 22.1285 3.79925C21.664 3.31691 21.1714 2.91288 20.6647 2.59831L20.0376 2.20784L21.4154 1.70406L20.8215 0L15.9375 1.24381L18.6126 5.77194L20.0879 4.75606L19.2016 3.43153C19.7923 3.82069 20.5483 4.43953 20.5518 4.44172C22.2844 5.82859 23.1413 8.28166 23.2483 12.1614L23.2502 12.2332L26.2914 13.9926L23.2502 15.752L23.2483 15.8237C23.103 21.1006 21.6079 23.758 18.2602 24.7065L17.9172 24.7713L17.9252 25.5277L17.9165 26.2957L18.0648 26.2703C18.7983 26.1448 19.3113 25.9925 19.3288 25.9871C20.2515 25.7434 21.2457 25.1042 22.1277 24.1881C23.7275 22.5647 24.7215 19.8061 24.8597 16.6114L27.9994 14.8914V13.2073L26.9944 12.621Z" fill="white" />
          <path d="M8.04136 23.1672L7.9118 23.2574L8.98129 24.732C8.33627 24.3137 7.62421 23.729 7.47632 23.601L7.47072 23.5956L7.46166 23.5829L7.44765 23.5717C5.71503 22.1848 4.85832 19.7318 4.75117 15.852L4.74923 15.7803L1.70804 14.0209L4.74923 12.2615L4.75117 12.1897C4.89647 6.91281 6.39152 4.25543 9.73927 3.30693L10.0825 3.24218L10.0743 2.48596L10.0829 1.75928L9.94213 1.77459C9.20765 1.854 8.68573 2.02112 8.67042 2.02637C7.74774 2.27006 6.75348 2.90925 5.87176 3.82537C4.27194 5.4485 3.2779 8.20737 3.1395 11.4022L0 13.1218V14.806L1.00504 15.3922C1.03953 15.4141 1.07553 15.436 1.11326 15.4581L3.1395 16.6378C3.27725 19.8 4.27108 22.5585 5.8709 24.2142C6.33116 24.6911 6.81471 25.0892 7.30257 25.3943L8.0834 25.9403L6.79854 26.2958L7.39268 28.0001L11.8306 27.0737L9.38701 22.2413L8.04157 23.1672H8.04136Z" fill="white" />
        </g>
        <path d="M47.1354 8.60027C47.5914 8.60027 47.9274 8.62427 48.2634 8.67227V10.5923H48.2154C45.5514 10.1603 43.7034 12.0323 43.7034 14.6483V21.1763H41.7834V8.93627H43.7034V11.3603H43.7514C44.3994 9.75227 45.3834 8.60027 47.1354 8.60027ZM54.2692 19.8323C56.7172 19.8323 57.6292 18.2483 57.8452 17.4083H59.7652C59.1412 19.6883 57.3892 21.5123 54.3412 21.5123C50.6212 21.5123 48.3652 18.8963 48.3652 15.0563C48.3652 10.9763 50.6692 8.60027 54.2452 8.60027C58.0852 8.60027 59.9572 11.2163 59.9572 15.5603H50.2852C50.2852 17.7683 51.6052 19.8323 54.2692 19.8323ZM54.2452 10.2803C51.9412 10.2803 50.2852 11.9123 50.2852 13.8803H58.0372C58.0372 11.9123 56.5492 10.2803 54.2452 10.2803ZM62.5061 14.0243C61.7621 14.0243 61.1861 13.5203 61.1861 12.7043C61.1861 11.9123 61.7621 11.3843 62.5061 11.3843C63.2501 11.3843 63.8261 11.9123 63.8261 12.7043C63.8261 13.5203 63.2501 14.0243 62.5061 14.0243ZM62.5061 21.3443C61.7621 21.3443 61.1861 20.8403 61.1861 20.0243C61.1861 19.2323 61.7621 18.7043 62.5061 18.7043C63.2501 18.7043 63.8261 19.2323 63.8261 20.0243C63.8261 20.8403 63.2501 21.3443 62.5061 21.3443ZM74.4846 13.3523C74.3886 12.0083 73.4766 10.2803 71.0286 10.2803C68.1246 10.2803 67.0206 12.7523 67.0206 15.0563C67.0206 17.3603 68.1246 19.8323 71.0286 19.8323C73.5006 19.8323 74.3886 18.1283 74.4846 16.6643H76.4046C76.2366 19.4483 74.0526 21.5123 71.0286 21.5123C67.4526 21.5123 65.1006 18.8963 65.1006 15.0563C65.1006 11.2163 67.4526 8.60027 71.0286 8.60027C74.0526 8.60027 76.1166 10.6163 76.4046 13.3523H74.4846ZM78.9619 6.56027C78.4339 6.56027 77.7619 6.15227 77.7619 5.40827C77.7619 4.66427 78.4339 4.25627 78.9619 4.25627C79.5139 4.25627 80.1619 4.66427 80.1619 5.40827C80.1619 6.15227 79.5139 6.56027 78.9619 6.56027ZM78.0019 8.93627H79.9219V21.1763H78.0019V8.93627ZM88.3209 8.60027C90.5529 8.60027 92.4249 9.82427 92.4249 12.6323V21.1763H90.5049V13.1123C90.5049 11.5283 89.7609 10.2803 87.8409 10.2803C85.6809 10.2803 84.2409 11.6483 84.2409 13.5443V21.1763H82.3209V8.93627H84.2409V10.4003H84.2889C84.9369 9.53627 86.2329 8.60027 88.3209 8.60027ZM103.305 8.93627H105.225V25.3043H103.305V19.5923H103.257C102.537 20.6483 101.385 21.5123 99.3686 21.5123C96.3446 21.5123 93.8966 19.0883 93.8966 15.0563C93.8966 11.0243 96.3446 8.60027 99.3686 8.60027C101.385 8.60027 102.537 9.51227 103.257 10.4483H103.305V8.93627ZM99.6086 19.8323C101.889 19.8323 103.305 17.9363 103.305 15.0563C103.305 12.1763 101.889 10.2803 99.6086 10.2803C97.0886 10.2803 95.8166 12.6563 95.8166 15.0563C95.8166 17.4563 97.0886 19.8323 99.6086 19.8323Z" fill="white" />
        <defs>
          <clipPath id="clip0_200_91">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    line: (
      <svg width="1" height="18" viewBox="0 0 1 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="-2.18557e-08" x2="0.500001" y2="18" stroke="url(#paint0_linear_200_4058)" />
        <defs>
          <linearGradient id="paint0_linear_200_4058" x1="-29" y1="-60.3198" x2="-55.8248" y2="-13.233" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.1" />
            <stop offset="0.212431" stopColor="white" stopOpacity="0.28" />
            <stop offset="0.487105" stopColor="white" stopOpacity="0.1" />
            <stop offset="0.701695" stopColor="white" stopOpacity="0.28" />
            <stop offset="0.983327" stopColor="white" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>

    ),
    downarrow: (
      <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.599609 0.600098L4.09961 4.1001L7.59961 0.600098" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    ),
    elipse: (
      <svg width="50" height="50" viewBox="0 0 96 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_1118_1210)">
          <ellipse cx="57.5" cy="18.8604" rx="17.5" ry="17" fill="#8E2EE0" />
        </g>
        <defs>
          <filter id="filter0_f_1118_1210" x="0" y="-38.1396" width="115" height="114" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="20" result="effect1_foregroundBlur_1118_1210" />
          </filter>
        </defs>
      </svg>


    ),
    podcastmic: (
      <svg className={className} width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M73.4732 41.042C74.3103 40.3685 75.3786 40.0505 76.4478 40.1562C76.9635 40.2061 77.4644 40.3577 77.9205 40.6035C78.3766 40.8494 78.7788 41.1844 79.1041 41.5879C79.4292 41.9912 79.6706 42.4553 79.814 42.9531C79.9574 43.4511 79.9998 43.9736 79.939 44.4883L79.9078 44.7422C78.68 54.4702 73.9481 63.4172 66.5982 69.9072C59.2482 76.3972 49.7843 79.985 39.9791 79.999C30.1724 79.9883 20.7061 76.4028 13.3531 69.9141C6.00024 63.4254 1.26532 54.4789 0.0347147 44.75C-0.0346781 44.2268 0.000195283 43.6942 0.137254 43.1846C0.274305 42.6752 0.510339 42.1979 0.832566 41.7803C1.15492 41.3626 1.55707 41.0127 2.01518 40.751C2.47346 40.4892 2.97978 40.3203 3.50346 40.2549C4.02702 40.1895 4.55847 40.2283 5.06694 40.3691C5.57552 40.51 6.05101 40.7506 6.46636 41.0762C6.8817 41.4017 7.22858 41.8064 7.48686 42.2666C7.74509 42.7268 7.90972 43.2337 7.97124 43.7578C8.94798 51.5558 12.7391 58.7284 18.6314 63.9287C24.5238 69.1291 32.1122 71.999 39.9712 71.999C47.8303 71.999 55.4187 69.1291 61.3111 63.9287C67.2033 58.7284 70.9945 51.5558 71.9712 43.7578C72.0969 42.6908 72.6361 41.7155 73.4732 41.042ZM39.9722 0C47.3954 0.00905307 54.5123 2.96197 59.7613 8.21094C65.0101 13.4599 67.9623 20.5769 67.9712 28V40C67.9711 47.4259 65.0219 54.5479 59.771 59.7988C54.5201 65.0497 47.3981 67.999 39.9722 67.999C32.5464 67.999 25.4243 65.0496 20.1734 59.7988C14.9225 54.5479 11.9723 47.4259 11.9722 40V28C11.9812 20.5768 14.9341 13.46 20.1832 8.21094C25.4322 2.96192 32.549 0.00899755 39.9722 0ZM39.9722 22C38.9114 22 37.8933 22.4208 37.1431 23.1709C36.393 23.921 35.9722 24.9391 35.9722 26V42C35.9723 43.0606 36.3932 44.0781 37.1431 44.8281C37.8933 45.5783 38.9114 46 39.9722 46C41.033 45.9999 42.0503 45.5782 42.8003 44.8281C43.5504 44.0781 43.9721 43.0607 43.9722 42V26C43.9722 24.9391 43.5505 23.921 42.8003 23.1709C42.0503 22.421 41.0329 22.0001 39.9722 22ZM27.9722 26C26.9116 26 25.8942 26.421 25.1441 27.1709C24.394 27.921 23.9722 28.9391 23.9722 30V38C23.9723 39.0607 24.394 40.0781 25.1441 40.8281C25.8942 41.5781 26.9115 42 27.9722 42C29.033 42 30.0502 41.5782 30.8003 40.8281C31.5504 40.0781 31.9721 39.0607 31.9722 38V30C31.9722 28.9391 31.5505 27.921 30.8003 27.1709C30.0503 26.421 29.0329 26 27.9722 26ZM51.9722 26C50.9114 26 49.8932 26.4208 49.1431 27.1709C48.393 27.921 47.9722 28.9391 47.9722 30V38C47.9723 39.0607 48.3931 40.0781 49.1431 40.8281C49.8933 41.5783 50.9114 42 51.9722 42C53.0329 41.9999 54.0503 41.5782 54.8003 40.8281C55.5504 40.0781 55.9721 39.0607 55.9722 38V30C55.9722 28.9391 55.5505 27.921 54.8003 27.1709C54.0503 26.421 53.0329 26.0001 51.9722 26Z" fill="url(#paint0_linear_200_362)" />
        <defs>
          <linearGradient id="paint0_linear_200_362" x1="39.9835" y1="0" x2="39.9835" y2="72.8302" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    documentpen: (
      <svg className={className} width="56" height="62" viewBox="0 0 56 62" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M33.1123 0C33.4331 0 33.7484 0.053642 34.0664 0.0820312V10.6455C34.0695 14.9558 37.5628 18.4499 41.873 18.4531L55.1533 18.4385C55.2759 19.051 55.344 19.6733 55.3574 20.2979V50.3906C55.3494 56.2668 50.588 61.0283 44.7119 61.0361H10.6455C4.76949 61.0282 0.00802876 56.2667 0 50.3906V10.6455C0.00802695 4.76945 4.76949 0.0079788 10.6455 0H33.1123ZM40.4121 35.9111C39.4952 35.175 38.155 35.3213 37.4189 36.2383L30.3984 44.4287L26.3447 40.3691L26.3428 40.3672C25.5119 39.5375 24.1658 39.5383 23.3359 40.3691L14.8193 48.8857C14.0575 49.7034 14.0575 50.9714 14.8193 51.7891C15.621 52.6489 16.968 52.6961 17.8281 51.8945L24.8398 44.8857L29.0137 49.0557C29.4277 49.481 30.0049 49.7079 30.5977 49.6777C31.1903 49.6555 31.7465 49.3866 32.1328 48.9365L40.6494 39.001V39.0088C40.6806 38.9748 40.7113 38.9403 40.7402 38.9043C41.4763 37.9873 41.3291 36.6472 40.4121 35.9111ZM13.4844 26.9697C12.3086 26.9699 11.3555 27.9228 11.3555 29.0986C11.3555 30.2744 12.3086 31.2274 13.4844 31.2275H41.873C43.0489 31.2275 44.0019 30.2745 44.002 29.0986C44.002 27.9228 43.0489 26.9697 41.873 26.9697H13.4844ZM13.4844 15.6143C12.3086 15.6144 11.3555 16.5674 11.3555 17.7432C11.3555 18.9189 12.3086 19.8719 13.4844 19.8721H27.6787C28.8545 19.8721 29.8076 18.919 29.8076 17.7432C29.8076 16.5673 28.8546 15.6143 27.6787 15.6143H13.4844ZM38.3242 1.38867C38.8905 1.70289 39.4269 2.06852 39.9258 2.48145L51.5273 12.1338C52.2319 12.7368 52.8548 13.4302 53.3789 14.1953H41.873C39.9146 14.1922 38.3275 12.6049 38.3242 10.6465V1.38867Z" fill="url(#paint0_linear_200_375)" />
        <defs>
          <linearGradient id="paint0_linear_200_375" x1="49.7047" y1="2.1511" x2="-0.550499" y2="54.7429" gradientUnits="userSpaceOnUse">
            <stop offset="0.0192308" stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    openbook: (
      <svg className={className} width="68" height="50" viewBox="0 0 68 50" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M3.08594 40.1123C3.08596 41.7488 3.73552 43.3183 4.89258 44.4756C6.04989 45.6329 7.62016 46.2832 9.25684 46.2832C14.4098 46.2832 24.5307 46.2836 28.9121 49.3691H3.08594C2.2676 49.3691 1.48197 49.0435 0.90332 48.4648C0.324896 47.8862 0 47.1014 0 46.2832V9.25684C0 8.43867 0.324905 7.65381 0.90332 7.0752C1.48197 6.49654 2.2676 6.1709 3.08594 6.1709V40.1123ZM64.7969 6.1709C65.6151 6.17095 66.3999 6.49659 66.9785 7.0752C67.5571 7.65383 67.8818 8.43858 67.8818 9.25684V46.2832C67.8818 47.1015 67.5571 47.8862 66.9785 48.4648C66.3999 49.0434 65.6151 49.3691 64.7969 49.3691H38.9707C43.383 46.2836 53.4731 46.2832 58.626 46.2832C60.2625 46.2831 61.832 45.6328 62.9893 44.4756C64.1464 43.3183 64.7969 41.7489 64.7969 40.1123V6.1709ZM9.25684 0C17.7112 5.51314e-06 26.8908 0.416508 32.3984 4.19629V48.3965C28.3717 43.6604 18.3745 43.1982 9.25684 43.1982C8.43855 43.1982 7.65384 42.8725 7.0752 42.2939C6.49656 41.7153 6.17092 40.9306 6.1709 40.1123V3.08594C6.1709 2.2676 6.49654 1.48197 7.0752 0.90332C7.65381 0.324905 8.43868 0 9.25684 0ZM58.626 0C59.4442 0 60.229 0.324875 60.8076 0.90332C61.3863 1.48197 61.7119 2.2676 61.7119 3.08594V40.1123C61.7119 40.9306 61.3863 41.7153 60.8076 42.2939C60.229 42.8726 59.4443 43.1982 58.626 43.1982C49.5084 43.1982 39.5112 43.6604 35.4844 48.3965V4.19629C40.9921 0.416513 50.1716 2.25541e-06 58.626 0Z" fill="url(#paint0_linear_200_400)" />
        <defs>
          <linearGradient id="paint0_linear_200_400" x1="33.9409" y1="0" x2="33.9409" y2="44.9451" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    barchart: (
      <svg className={className} width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M45 0C53.2842 0 60 6.71573 60 15V45C60 53.2842 53.2842 60 45 60H15C6.71573 60 0 53.2842 0 45V15C0 6.71573 6.71573 0 15 0H45ZM18 24C16.3432 24 15 25.3431 15 27V42C15 43.6569 16.3432 45 18 45C19.6568 45 21 43.6569 21 42V27C21 25.3431 19.6568 24 18 24ZM30 15C28.3431 15 27 16.3432 27 18V42C27 43.6569 28.3431 45 30 45C31.6569 45 33 43.6569 33 42V18C33 16.3432 31.6569 15 30 15ZM42 33C40.3431 33 39 34.3431 39 36V42C39 43.6569 40.3431 45 42 45C43.6569 45 45 43.6569 45 42V36C45 34.3431 43.6569 33 42 33Z" fill="url(#paint0_linear_200_415)" />
        <defs>
          <linearGradient id="paint0_linear_200_415" x1="30" y1="0" x2="30" y2="54.6233" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    checkmarkbadge: (
      <svg className={className} width="54" height="67" viewBox="0 0 54 67" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M9.22363 11.5303C9.22363 16.2008 13.0091 19.9863 17.6797 19.9863H36.1279C40.7985 19.9863 44.584 16.2008 44.584 11.5303V6.14941H45.3525C47.594 6.14941 49.7464 7.0415 51.333 8.625C52.9165 10.2116 53.8086 12.364 53.8086 14.6055V57.6523C53.8085 59.8937 52.9164 62.0463 51.333 63.6328C49.7464 65.2162 47.594 66.1074 45.3525 66.1074H8.45508C6.2137 66.1073 4.06111 65.2162 2.47461 63.6328C0.891192 62.0463 7.20643e-05 59.8937 0 57.6523V14.6055C0 12.3641 0.891251 10.2116 2.47461 8.625C4.06111 7.04158 6.2137 6.14951 8.45508 6.14941H9.22363V11.5303ZM26.9043 26.1357C18.8423 26.1357 12.2988 32.6792 12.2988 40.7412C12.299 48.8031 18.8424 55.3457 26.9043 55.3457C34.9661 55.3456 41.5086 48.803 41.5088 40.7412C41.5088 32.6793 34.9662 26.1359 26.9043 26.1357ZM30.8096 35.4219C31.7074 34.5213 33.1706 34.5211 34.0684 35.4219C34.9693 36.3197 34.9693 37.7838 34.0684 38.6816L26.6885 46.0605C25.7876 46.9613 24.3305 46.9614 23.4297 46.0605L19.7402 42.3711C18.8393 41.4733 18.8393 40.0092 19.7402 39.1113C20.638 38.2108 22.1013 38.2108 22.999 39.1113L25.0596 41.1689L30.8096 35.4219ZM36.1279 0C39.0981 0 41.5087 2.40765 41.5088 5.38086V11.5303C41.5088 14.5036 39.0982 16.9111 36.1279 16.9111H17.6797C14.7095 16.9111 12.2988 14.5036 12.2988 11.5303V5.38086C12.2989 2.40766 14.7095 1.96145e-05 17.6797 0H36.1279Z" fill="url(#paint0_linear_200_426)" />
        <defs>
          <linearGradient id="paint0_linear_200_426" x1="26.9043" y1="0" x2="26.9043" y2="60.1835" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    networknodes: (
      <svg className={className} width="65" height="69" viewBox="0 0 65 69" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M15.3857 47.2139C16.3509 48.1354 17.4242 48.9446 18.583 49.6221L14.668 54.8291C15.5042 55.8587 16.0969 57.0925 16.3604 58.4434C16.4601 58.9558 16.5146 59.4845 16.5146 60.0254C16.5146 64.5785 12.8098 68.2832 8.25684 68.2832C3.70397 68.2831 0 64.5784 0 60.0254C0.000227353 55.4726 3.70417 51.7688 8.25684 51.7686C9.39641 51.7686 10.4832 52.0006 11.4717 52.4199L15.3857 47.2139ZM54.0635 40.1396C60.0977 40.1398 65.0068 45.0489 65.0068 51.083C65.0068 57.1173 60.0977 62.0271 54.0635 62.0273C48.7462 62.0273 44.3044 58.2143 43.3232 53.1797C43.191 52.5007 43.1191 51.8001 43.1191 51.083C43.1192 49.7286 43.3684 48.4317 43.8203 47.2334L40.6846 45.3389C41.5028 44.2886 42.2016 43.1407 42.7598 41.916L45.8945 43.8105C47.9005 41.5603 50.8189 40.1396 54.0635 40.1396ZM27.1865 21.7461C34.4103 21.7461 40.2871 27.623 40.2871 34.8467C40.2871 42.0703 34.4101 47.9473 27.1865 47.9473C19.9628 47.9472 14.086 42.0701 14.0859 34.8467C14.0859 27.6231 19.9629 21.7461 27.1865 21.7461ZM6.80371 10.2256C10.0702 10.2256 12.806 12.5402 13.459 15.6152C13.5559 16.0716 13.6074 16.5445 13.6074 17.0293C13.6074 18.0159 13.3942 18.9535 13.0146 19.8008L15.7227 22.167C14.7319 23.0637 13.8463 24.0756 13.0869 25.1797L10.3809 22.8135C9.34087 23.4588 8.1151 23.833 6.80371 23.833C3.05205 23.833 2.32254e-05 20.7808 0 17.0293C0 13.2777 3.05203 10.2256 6.80371 10.2256ZM48.0781 0C52.631 0 56.3357 3.7039 56.3359 8.25684C56.3359 12.81 52.6311 16.5146 48.0781 16.5146C46.8767 16.5146 45.7349 16.2545 44.7041 15.791L39.249 22.7344C38.3032 21.7926 37.2481 20.9604 36.1045 20.2588L41.5596 13.3154C40.8079 12.3489 40.2651 11.2127 40.002 9.97363C39.8845 9.41968 39.8213 8.84532 39.8213 8.25684C39.8215 3.70405 43.5255 0.000249862 48.0781 0Z" fill="url(#paint0_linear_200_440)" />
        <defs>
          <linearGradient id="paint0_linear_200_440" x1="32.5034" y1="0" x2="32.5034" y2="62.1643" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.2" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
    elipsetwo: (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={413}
        height={265}
        fill="none"
        {...props}
      >
        <g filter="url(#a)">
          <ellipse
            cx={343.72}
            cy={-16.462}
            fill="#8E2EE0"
            rx={194.961}
            ry={119.462}
            transform="rotate(-180 343.72 -16.462)"
          />
        </g>
        <g filter="url(#b)">
          <ellipse
            cx={343.575}
            cy={-16.46}
            fill="#8E2EE0"
            rx={165.48}
            ry={110.736}
            transform="rotate(-180 343.575 -16.46)"
          />
        </g>
        <g filter="url(#c)">
          <ellipse
            cx={343.576}
            cy={-16.461}
            fill="#8E2EE0"
            rx={143.209}
            ry={73.379}
            transform="rotate(-180 343.576 -16.461)"
          />
        </g>
        <g filter="url(#d)">
          <ellipse
            cx={343.867}
            cy={-16.465}
            fill="#fff"
            rx={125.301}
            ry={46.696}
            transform="rotate(-180 343.867 -16.465)"
          />
        </g>
        <g filter="url(#e)">
          <ellipse
            cx={343.866}
            cy={-16.469}
            fill="#fff"
            rx={94.925}
            ry={35.57}
            transform="rotate(-180 343.866 -16.469)"
          />
        </g>
        <g filter="url(#f)">
          <ellipse
            cx={343.865}
            cy={-16.468}
            fill="#fff"
            rx={51.25}
            ry={19.204}
            transform="rotate(-180 343.865 -16.468)"
          />
        </g>
        <mask
          id="h"
          width={382}
          height={306}
          x={120}
          y={-165}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <ellipse cx={310.889} cy={-12} fill="url(#g)" rx={190.756} ry={152.866} />
        </mask>
        <g mask="url(#h)">
          <ellipse cx={310.889} cy={-12} fill="url(#i)" rx={190.756} ry={152.866} />
        </g>
        <defs>
          <filter
            id="a"
            width={712.122}
            height={561.124}
            x={-12.34}
            y={-297.024}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
              result="effect1_foregroundBlur_200_381"
              stdDeviation={80.55}
            />
          </filter>
          <filter
            id="b"
            width={448.719}
            height={339.232}
            x={119.216}
            y={-186.075}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
              result="effect1_foregroundBlur_200_381"
              stdDeviation={29.44}
            />
          </filter>
          <filter
            id="c"
            width={381.238}
            height={241.579}
            x={152.957}
            y={-137.251}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
              result="effect1_foregroundBlur_200_381"
              stdDeviation={23.705}
            />
          </filter>
          <filter
            id="d"
            width={405.422}
            height={248.212}
            x={141.156}
            y={-140.571}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
              result="effect1_foregroundBlur_200_381"
              stdDeviation={38.705}
            />
          </filter>
          <filter
            id="e"
            width={308.67}
            height={189.961}
            x={189.531}
            y={-111.449}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
              result="effect1_foregroundBlur_200_381"
              stdDeviation={29.705}
            />
          </filter>
          <filter
            id="f"
            width={142.5}
            height={78.408}
            x={272.615}
            y={-55.672}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
              result="effect1_foregroundBlur_200_381"
              stdDeviation={10}
            />
          </filter>
          <radialGradient
            id="i"
            cx={0}
            cy={0}
            r={1}
            gradientTransform="matrix(0 152.866 -190.756 0 310.889 -12)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#fff" stopOpacity={0} />
          </radialGradient>
          <pattern
            id="g"
            width={1}
            height={1}
            patternTransform="matrix(6 0 0 6 116.533 -168.466)"
            patternUnits="userSpaceOnUse"
            preserveAspectRatio="none"
            viewBox="-6 -6 10 10"
          >
            <use xlinkHref="#j" transform="translate(-20 -20)" />
            <use xlinkHref="#j" transform="translate(-10 -20)" />
            <use xlinkHref="#j" transform="translate(0 -20)" />
            <use xlinkHref="#j" transform="translate(-20 -10)" />
            <use xlinkHref="#j" transform="translate(-10 -10)" />
            <use xlinkHref="#j" transform="translate(0 -10)" />
            <use xlinkHref="#j" transform="translate(-20)" />
            <use xlinkHref="#j" transform="translate(-10)" />
            <path
              id="j"
              fill="#fff"
              d="M5.216 4.782 10 4.987l-4.784.229L4.988 10l-.205-4.784L0 4.987l4.783-.205L4.988 0l.228 4.782Z"
            />
          </pattern>
        </defs>
      </svg>

    ),
    elipsethree: (
      <svg width="297" height="502" viewBox="0 0 297 502" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_202_4135)">
          <circle cx="46" cy="250.7" r="109" fill="black" />
        </g>
        <defs>
          <filter id="filter0_f_202_4135" x="-204.7" y="0.000198364" width="501.4" height="501.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="70.85" result="effect1_foregroundBlur_202_4135" />
          </filter>
        </defs>
      </svg>


    ),
    elipsefour: (
      <svg width="292" height="502" viewBox="0 0 292 502" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_202_4134)">
          <circle cx="250.699" cy="250.7" r="109" fill="black" />
        </g>
        <defs>
          <filter id="filter0_f_202_4134" x="-0.000778198" y="0.000198364" width="501.4" height="501.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="70.85" result="effect1_foregroundBlur_202_4134" />
          </filter>
        </defs>
      </svg>

    ),

    cardbgstar: (
      <svg className={className} width="1156" height="177" viewBox="0 0 1156 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_200_463)">
          <path d="M112.705 39.8492L115.512 40.4691L112.66 40.105L112.028 42.9089L112.405 40.0601L109.603 39.4272L112.45 39.8042L113.07 37.0001L112.705 39.8492Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter1_d_200_463)">
          <path d="M332.705 8.84918L335.512 9.46909L332.66 9.105L332.028 11.9089L332.405 9.06006L329.603 8.4272L332.45 8.80424L333.07 6.00006L332.705 8.84918Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter2_d_200_463)">
          <path d="M689.427 22.0958L694.103 23.1285L689.352 22.5218L688.297 27.1948L688.926 22.4467L684.255 21.392L689.001 22.0206L690.034 17.3467L689.427 22.0958Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_200_463)">
          <path d="M882.705 10.8492L885.512 11.4691L882.66 11.105L882.028 13.9089L882.405 11.0601L879.603 10.4272L882.45 10.8042L883.07 8.00006L882.705 10.8492Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter4_d_200_463)">
          <path d="M134.427 101.096L139.103 102.128L134.352 101.522L133.297 106.195L133.926 101.447L129.255 100.392L134.001 101.021L135.034 96.3467L134.427 101.096Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter5_d_200_463)">
          <path d="M848.268 166.987L851.075 167.607L848.223 167.243L847.59 170.047L847.968 167.198L845.166 166.565L848.013 166.942L848.632 164.138L848.268 166.987Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter6_d_200_463)">
          <path d="M227.155 140.109L234.809 140.437L227.155 140.802L226.79 148.457L226.463 140.802L218.809 140.437L226.463 140.109L226.79 132.457L227.155 140.109Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter7_d_200_463)">
          <path d="M13.9784 91.411L21.4556 89.7462L14.1576 92.0798L15.7861 99.5688L13.4888 92.259L6.00079 93.8873L13.3096 91.5902L11.645 84.1139L13.9784 91.411Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter8_d_200_463)">
          <path d="M1096.34 160.851L1099.08 159.986L1096.43 161.095L1097.28 163.84L1096.18 161.184L1093.44 162.038L1096.09 160.94L1095.23 158.202L1096.34 160.851Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter9_d_200_463)">
          <path d="M1002.59 42.6943L1007.37 42.8994L1002.59 43.127L1002.36 47.9121L1002.15 43.127L997.371 42.8994L1002.15 42.6943L1002.36 37.9121L1002.59 42.6943Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter10_d_200_463)">
          <path d="M941.711 113.218L957.021 113.873L941.711 114.603L940.981 129.912L940.326 114.603L925.02 113.873L940.326 113.218L940.981 97.9121L941.711 113.218Z" fill="url(#paint0_radial_200_463)" />
        </g>
        <g className='star move-right' filter="url(#filter11_d_200_463)">
          <path d="M194.652 35.252L209.962 35.9072L194.652 36.6367L193.923 51.9463L193.268 36.6367L177.961 35.9072L193.268 35.252L193.923 19.9463L194.652 35.252Z" fill="url(#paint1_radial_200_463)" />
        </g>
        <g className='star blink' filter="url(#filter12_d_200_463)">
          <path d="M1142.12 72.798L1149.6 74.4491L1142 73.4798L1140.31 80.9544L1141.32 73.3596L1133.84 71.6708L1141.44 72.6777L1143.09 65.1975L1142.12 72.798Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_200_463" x="103.604" y="31" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter1_d_200_463" x="323.604" y="0" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter2_d_200_463" x="678.256" y="11.3467" width="21.8477" height="21.8477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter3_d_200_463" x="873.604" y="2" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter4_d_200_463" x="123.256" y="90.3467" width="21.8477" height="21.8477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter5_d_200_463" x="839.166" y="158.138" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter6_d_200_463" x="212.809" y="126.457" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter7_d_200_463" x="0" y="78.1143" width="27.4551" height="27.4541" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter8_d_200_463" x="1087.44" y="152.202" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter9_d_200_463" x="991.371" y="31.9121" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter10_d_200_463" x="919.02" y="91.9121" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter11_d_200_463" x="171.961" y="13.9463" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <filter id="filter12_d_200_463" x="1127.84" y="59.1973" width="27.7578" height="27.7568" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_463" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_463" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_200_463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(941.02 113.912) rotate(90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
          <radialGradient id="paint1_radial_200_463" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(193.961 35.9463) rotate(90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),

    cardbgleft: (
      <svg className={className} width="317" height="175" viewBox="0 0 317 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_715_1409)">
          <path d="M272.897 165.198L270.089 164.578L272.942 164.943L273.575 162.138L273.197 164.988L275.998 165.62L273.152 165.243L272.533 168.047L272.897 165.198Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter1_d_715_1409)">
          <path d="M307.335 9.06017L304.527 8.44009L307.38 8.80531L308.012 6.00045L307.635 8.85025L310.436 9.48198L307.59 9.10511L306.97 11.9093L307.335 9.06017Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter2_d_715_1409)">
          <path d="M59.2631 15.1957L56.524 16.0617L59.1743 14.9516L58.3208 12.2069L59.4184 14.8627L62.1622 14.0096L59.5072 15.1068L60.3729 17.845L59.2631 15.1957Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_715_1409)">
          <path d="M153.016 133.353L148.23 133.147L153.016 132.92L153.243 128.135L153.448 132.92L158.23 133.147L153.448 133.353L153.243 138.135L153.016 133.353Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter4_d_715_1409)">
          <path d="M213.89 62.8291L198.581 62.1738L213.89 61.4443L214.619 46.1348L215.274 61.4443L230.582 62.1738L215.274 62.8291L214.619 78.1348L213.89 62.8291Z" fill="url(#paint0_radial_715_1409)" />
        </g>
        <g className='star blink' filter="url(#filter5_d_715_1409)">
          <path d="M13.4812 103.249L5.99996 101.598L13.6014 102.567L15.2902 95.0926L14.2833 102.687L21.7569 104.376L14.163 103.369L12.5119 110.85L13.4812 103.249Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_715_1409" x="264.09" y="156.138" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1409" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1409" result="shape" />
          </filter>
          <filter id="filter1_d_715_1409" x="298.527" y="0" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1409" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1409" result="shape" />
          </filter>
          <filter id="filter2_d_715_1409" x="50.5234" y="6.20703" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1409" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1409" result="shape" />
          </filter>
          <filter id="filter3_d_715_1409" x="142.23" y="122.135" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1409" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1409" result="shape" />
          </filter>
          <filter id="filter4_d_715_1409" x="192.582" y="40.1348" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1409" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1409" result="shape" />
          </filter>
          <filter id="filter5_d_715_1409" x="0" y="89.0928" width="27.7578" height="27.7568" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1409" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1409" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_715_1409" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(214.582 62.1348) rotate(-90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),

    cardbgright: (
      <svg width="317" height="175" viewBox="0 0 317 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_715_1395)">
          <path d="M43.5383 8.84901L46.3463 9.46909L43.4933 9.10387L42.8609 11.9087L43.2385 9.05893L40.4374 8.4272L43.2834 8.80407L43.9028 5.99989L43.5383 8.84901Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter1_d_715_1395)">
          <path d="M9.10076 164.987L11.9088 165.607L9.05582 165.242L8.42341 168.046L8.80096 165.197L5.99994 164.565L8.8459 164.942L9.4653 162.138L9.10076 164.987Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter2_d_715_1395)">
          <path d="M257.172 158.851L259.912 157.985L257.261 159.095L258.115 161.84L257.017 159.184L254.273 160.037L256.928 158.94L256.063 156.202L257.172 158.851Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_715_1395)">
          <path d="M163.42 40.6943L168.205 40.8994L163.42 41.127L163.192 45.9121L162.987 41.127L158.205 40.8994L162.987 40.6943L163.192 35.9121L163.42 40.6943Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter4_d_715_1395)">
          <path d="M102.546 111.218L117.854 111.873L102.546 112.603L101.816 127.912L101.161 112.603L85.8535 111.873L101.161 111.218L101.816 95.9121L102.546 111.218Z" fill="url(#paint0_radial_715_1395)" />
        </g>
        <g className='star blink' filter="url(#filter5_d_715_1395)">
          <path d="M302.954 70.7978L310.436 72.4491L302.834 71.4797L301.145 78.9542L302.152 71.3594L294.679 69.6708L302.273 70.6776L303.924 63.1973L302.954 70.7978Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_715_1395" x="34.4375" y="0" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1395" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1395" result="shape" />
          </filter>
          <filter id="filter1_d_715_1395" x="0" y="156.138" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1395" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1395" result="shape" />
          </filter>
          <filter id="filter2_d_715_1395" x="248.273" y="150.202" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1395" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1395" result="shape" />
          </filter>
          <filter id="filter3_d_715_1395" x="152.205" y="29.9121" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1395" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1395" result="shape" />
          </filter>
          <filter id="filter4_d_715_1395" x="79.8535" y="89.9121" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1395" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1395" result="shape" />
          </filter>
          <filter id="filter5_d_715_1395" x="288.678" y="57.1973" width="27.7578" height="27.7568" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_715_1395" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_715_1395" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_715_1395" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(101.854 111.912) rotate(90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),

    herobgstar: (
      <svg width="1224" height="493" viewBox="0 0 1224 493" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_200_127)">
          <path d="M72.3429 50.7582L75.151 51.3783L72.298 51.013L71.6656 53.8179L72.0431 50.9681L69.2421 50.3364L72.0881 50.7133L72.7075 47.9091L72.3429 50.7582Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter1_d_200_127)">
          <path d="M13.7289 226.477L21.0344 224.166L13.9657 227.127L16.2401 234.444L13.3151 227.364L5.99935 229.638L13.0783 226.714L10.7678 219.409L13.7289 226.477Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter2_d_200_127)">
          <path d="M152.648 271.574L155.455 272.194L152.603 271.829L151.97 274.634L152.347 271.784L149.545 271.152L152.392 271.529L153.012 268.725L152.648 271.574Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_200_127)">
          <path d="M866.557 28.6285L869.364 29.2484L866.512 28.8843L865.879 31.6882L866.257 28.8394L863.455 28.2065L866.302 28.5835L866.921 25.7794L866.557 28.6285Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter4_d_200_127)">
          <path d="M369.446 41.751L377.1 42.0781L369.446 42.4434L369.081 50.0986L368.754 42.4434L361.1 42.0781L368.754 41.751L369.081 34.0986L369.446 41.751Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter5_d_200_127)">
          <path d="M1093.17 8.64955L1095.91 7.78354L1093.26 8.89365L1094.12 11.6384L1093.02 8.9825L1090.28 9.83566L1092.93 8.7384L1092.06 6.0002L1093.17 8.64955Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter6_d_200_127)">
          <path d="M1185.5 201.54L1188.38 201.663L1185.5 201.8L1185.37 204.671L1185.25 201.8L1182.38 201.663L1185.25 201.54L1185.37 198.671L1185.5 201.54Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter7_d_200_127)">
          <path d="M933.473 470.791L936.213 469.926L933.562 471.035L934.416 473.779L933.318 471.124L930.575 471.978L933.229 470.88L932.363 468.141L933.473 470.791Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter8_d_200_127)">
          <path d="M971.838 364.59L974.645 365.21L971.793 364.846L971.161 367.65L971.538 364.801L968.736 364.168L971.583 364.545L972.203 361.741L971.838 364.59Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter9_d_200_127)">
          <path d="M1083.79 338.251L1086.66 338.374L1083.79 338.511L1083.65 341.382L1083.53 338.511L1080.66 338.374L1083.53 338.251L1083.65 335.382L1083.79 338.251Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter10_d_200_127)">
          <path d="M1130.24 438.196L1135.02 438.401L1130.24 438.629L1130.01 443.414L1129.81 438.629L1125.02 438.401L1129.81 438.196L1130.01 433.414L1130.24 438.196Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter11_d_200_127)">
          <path d="M1097.35 246.314L1112.66 246.97L1097.35 247.699L1096.62 263.009L1095.97 247.699L1080.66 246.97L1095.97 246.314L1096.62 231.009L1097.35 246.314Z" fill="url(#paint0_radial_200_127)" />
        </g>
        <g className='star blink' filter="url(#filter12_d_200_127)">
          <path d="M109.684 124.859L124.993 125.515L109.684 126.244L108.954 141.554L108.299 126.244L92.9922 125.515L108.299 124.859L108.954 109.554L109.684 124.859Z" fill="url(#paint1_radial_200_127)" />
        </g>
        <g className='star move-left' filter="url(#filter13_d_200_127)">
          <path d="M1210.41 104.44L1217.89 106.091L1210.29 105.121L1208.6 112.596L1209.61 105.001L1202.13 103.312L1209.73 104.319L1211.38 96.8391L1210.41 104.44Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter14_d_200_127)">
          <path d="M298.532 478.381L306.186 478.708L298.532 479.073L298.167 486.729L297.84 479.073L290.186 478.708L297.84 478.381L298.167 470.729L298.532 478.381Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter15_d_200_127)">
          <path d="M114.628 432.049L117.367 431.184L114.716 432.294L115.57 435.038L114.472 432.382L111.729 433.236L114.383 432.138L113.518 429.4L114.628 432.049Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_200_127" x="63.2422" y="41.9092" width="17.9082" height="17.9087" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter1_d_200_127" x="0" y="213.409" width="27.0352" height="27.0352" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter2_d_200_127" x="143.545" y="262.725" width="17.9102" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter3_d_200_127" x="857.455" y="19.7793" width="17.9082" height="17.9087" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter4_d_200_127" x="355.1" y="28.0986" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter5_d_200_127" x="1084.28" y="0" width="17.6387" height="17.6382" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter6_d_200_127" x="1176.38" y="192.671" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter7_d_200_127" x="924.574" y="462.142" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter8_d_200_127" x="962.736" y="355.741" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter9_d_200_127" x="1074.66" y="329.382" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter10_d_200_127" x="1119.02" y="427.414" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter11_d_200_127" x="1074.66" y="225.009" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter12_d_200_127" x="86.9922" y="103.554" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter13_d_200_127" x="1196.13" y="90.8389" width="27.7578" height="27.7573" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter14_d_200_127" x="284.186" y="464.729" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <filter id="filter15_d_200_127" x="105.729" y="423.4" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_127" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_127" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_200_127" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1096.66 247.009) rotate(90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
          <radialGradient id="paint1_radial_200_127" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108.993 125.554) rotate(90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),

    herobgsmstar: (
      <svg width="442" height="661" viewBox="0 0 442 661" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_712_1035)">
          <path d="M395.141 41.5186L394.586 43.0221L394.911 41.4943L392.409 41.1563L394.952 41.3575L395.517 39.8581L395.18 41.3817L397.683 41.714L395.141 41.5186Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter1_d_712_1035)">
          <path d="M238.292 10.1377L240.353 14.0492L237.711 10.2646L231.179 11.4827L237.499 9.91561L235.469 6.00019L238.079 9.78897L244.598 8.55313L238.292 10.1377Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter2_d_712_1035)">
          <path d="M198.038 84.5106L197.484 86.0132L197.809 84.4864L195.307 84.1483L197.849 84.3505L198.414 82.8492L198.077 84.3747L200.581 84.7061L198.038 84.5106Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_712_1035)">
          <path d="M414.887 466.707L414.333 468.21L414.658 466.682L412.155 466.344L414.698 466.546L415.263 465.047L414.926 466.57L417.429 466.902L414.887 466.707Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter4_d_712_1035)">
          <path d="M403.169 200.574L402.876 204.671L402.552 200.574L395.719 200.38L402.551 200.204L402.876 196.104L403.169 200.204L410 200.38L403.169 200.574Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter5_d_712_1035)">
          <path d="M432.714 588.029L433.486 589.494L432.496 588.076L430.048 588.533L432.417 587.946L431.655 586.476L432.636 587.898L435.08 587.435L432.714 588.029Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter6_d_712_1035)">
          <path d="M260.546 637.458L260.437 638.995L260.314 637.458L257.754 637.385L260.314 637.319L260.437 635.783L260.546 637.318L263.109 637.385L260.546 637.458Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter7_d_712_1035)">
          <path d="M20.2451 502.53L21.019 503.998L20.0275 502.577L17.5779 503.035L19.9485 502.447L19.1871 500.979L20.166 502.4L22.6107 501.936L20.2451 502.53Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter8_d_712_1035)">
          <path d="M115.018 523.069L114.464 524.571L114.788 523.044L112.287 522.706L114.829 522.908L115.394 521.408L115.057 522.932L117.562 523.264L115.018 523.069Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter9_d_712_1035)">
          <path d="M138.524 583.003L138.415 584.54L138.293 583.003L135.73 582.93L138.293 582.864L138.415 581.328L138.524 582.864L141.086 582.93L138.524 583.003Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter10_d_712_1035)">
          <path d="M49.3203 607.871L49.1377 610.433L48.9346 607.871L44.6621 607.749L48.9346 607.64L49.1377 605.079L49.3203 607.64L53.5879 607.749L49.3203 607.871Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter11_d_712_1035)">
          <path d="M220.586 590.264L220.001 598.461L219.35 590.264L205.684 589.873L219.35 589.522L220.001 581.329L220.585 589.522L234.246 589.873L220.586 590.264Z" fill="url(#paint0_radial_712_1035)" />
        </g>
        <g className='star blink' filter="url(#filter12_d_712_1035)">
          <path d="M328.989 61.5088L328.405 69.7051L327.754 61.5088L314.091 61.1182L327.754 60.7676L328.405 52.5732L328.989 60.7676L342.652 61.1182L328.989 61.5088Z" fill="url(#paint1_radial_712_1035)" />
        </g>
        <g className='star move-left' filter="url(#filter13_d_712_1035)">
          <path d="M347.231 650.792L345.756 654.797L346.622 650.727L339.951 649.824L346.73 650.362L348.236 646.361L347.339 650.426L354.015 651.311L347.231 650.792Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter14_d_712_1035)">
          <path d="M13.4521 162.609L13.1592 166.708L12.835 162.61L6 162.415L12.835 162.239L13.1592 158.142L13.4521 162.239L20.2812 162.415L13.4521 162.609Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter15_d_712_1035)">
          <path d="M54.8056 64.1564L55.5785 65.6224L54.5881 64.2039L52.137 64.6605L54.5086 64.0728L53.7466 62.6035L54.7261 64.0253L57.1698 63.5618L54.8056 64.1564Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_712_1035" x="386.41" y="33.8579" width="17.2734" height="15.1641" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter1_d_712_1035" x="225.178" y="0" width="25.4199" height="20.0493" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter2_d_712_1035" x="189.307" y="76.8491" width="17.2734" height="15.1641" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter3_d_712_1035" x="406.154" y="459.047" width="17.2754" height="15.1631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter4_d_712_1035" x="389.719" y="190.104" width="26.2812" height="20.5664" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter5_d_712_1035" x="424.047" y="580.476" width="17.0332" height="15.0186" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter6_d_712_1035" x="251.754" y="629.783" width="17.3555" height="15.2119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter7_d_712_1035" x="11.5781" y="494.979" width="17.0332" height="15.0195" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter8_d_712_1035" x="106.287" y="515.408" width="17.2754" height="15.1631" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter9_d_712_1035" x="129.73" y="575.328" width="17.3555" height="15.2119" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter10_d_712_1035" x="38.6621" y="599.079" width="20.9258" height="17.3535" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter11_d_712_1035" x="199.684" y="575.329" width="40.5625" height="29.1318" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter12_d_712_1035" x="308.092" y="46.5732" width="40.5605" height="29.1318" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter13_d_712_1035" x="333.951" y="640.36" width="26.0645" height="20.4365" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter14_d_712_1035" x="0" y="152.142" width="26.2812" height="20.5664" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <filter id="filter15_d_712_1035" x="46.1367" y="56.6035" width="17.0332" height="15.019" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_712_1035" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_712_1035" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_712_1035" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(219.965 589.895) rotate(180) scale(14.2812 8.56592)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
          <radialGradient id="paint1_radial_712_1035" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(328.372 61.1393) rotate(180) scale(14.2808 8.56602)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),

    writersbgstar: (
      <svg width="1224" height="493" viewBox="0 0 1224 493" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_200_176)">
          <path d="M72.3429 50.7592L75.151 51.3792L72.298 51.014L71.6656 53.8189L72.0431 50.9691L69.2421 50.3374L72.0881 50.7142L72.7075 47.91L72.3429 50.7592Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter1_d_200_176)">
          <path d="M13.7289 226.477L21.0344 224.166L13.9657 227.128L16.2401 234.445L13.3151 227.365L5.99935 229.639L13.0783 226.714L10.7678 219.41L13.7289 226.477Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter2_d_200_176)">
          <path d="M152.647 271.575L155.455 272.195L152.602 271.83L151.97 274.634L152.347 271.785L149.545 271.153L152.392 271.53L153.012 268.725L152.647 271.575Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_200_176)">
          <path d="M866.557 28.6285L869.364 29.2484L866.512 28.8843L865.879 31.6882L866.257 28.8394L863.455 28.2065L866.302 28.5835L866.921 25.7794L866.557 28.6285Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter4_d_200_176)">
          <path d="M369.446 41.751L377.1 42.0781L369.446 42.4434L369.081 50.0986L368.754 42.4434L361.1 42.0781L368.754 41.751L369.081 34.0986L369.446 41.751Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter5_d_200_176)">
          <path d="M1093.17 8.64906L1095.91 7.78397L1093.26 8.89316L1094.12 11.6379L1093.02 8.98201L1090.28 9.83609L1092.93 8.73791L1092.06 5.99972L1093.17 8.64906Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter6_d_200_176)">
          <path d="M1185.51 201.54L1188.38 201.663L1185.51 201.8L1185.37 204.671L1185.25 201.8L1182.38 201.663L1185.25 201.54L1185.37 198.671L1185.51 201.54Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter7_d_200_176)">
          <path d="M933.473 470.791L936.213 469.926L933.562 471.035L934.416 473.779L933.318 471.124L930.575 471.978L933.229 470.88L932.363 468.141L933.473 470.791Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter8_d_200_176)">
          <path d="M971.838 364.59L974.645 365.21L971.793 364.846L971.161 367.65L971.538 364.801L968.736 364.168L971.583 364.545L972.203 361.741L971.838 364.59Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter9_d_200_176)">
          <path d="M1083.79 338.251L1086.66 338.374L1083.79 338.511L1083.65 341.382L1083.53 338.511L1080.66 338.374L1083.53 338.251L1083.65 335.382L1083.79 338.251Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter10_d_200_176)">
          <path d="M1130.24 438.196L1135.02 438.401L1130.24 438.629L1130.01 443.414L1129.81 438.629L1125.02 438.401L1129.81 438.196L1130.01 433.414L1130.24 438.196Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter11_d_200_176)">
          <path d="M1097.35 246.314L1112.66 246.97L1097.35 247.699L1096.62 263.009L1095.97 247.699L1080.66 246.97L1095.97 246.314L1096.62 231.009L1097.35 246.314Z" fill="url(#paint0_radial_200_176)" />
        </g>
        <g className='star blink' filter="url(#filter12_d_200_176)">
          <path d="M109.684 124.859L124.993 125.515L109.684 126.244L108.954 141.554L108.299 126.244L92.9922 125.515L108.299 124.859L108.954 109.554L109.684 124.859Z" fill="url(#paint1_radial_200_176)" />
        </g>
        <g className='star move-left' filter="url(#filter13_d_200_176)">
          <path d="M1210.41 104.44L1217.89 106.091L1210.29 105.121L1208.6 112.596L1209.61 105.001L1202.13 103.312L1209.73 104.319L1211.38 96.8391L1210.41 104.44Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter14_d_200_176)">
          <path d="M298.532 478.381L306.186 478.708L298.532 479.073L298.167 486.729L297.84 479.073L290.186 478.708L297.84 478.381L298.167 470.729L298.532 478.381Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter15_d_200_176)">
          <path d="M114.628 432.049L117.367 431.184L114.716 432.294L115.57 435.038L114.472 432.382L111.729 433.236L114.383 432.138L113.518 429.4L114.628 432.049Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_200_176" x="63.2422" y="41.9102" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter1_d_200_176" x="0" y="213.409" width="27.0352" height="27.0352" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter2_d_200_176" x="143.545" y="262.725" width="17.9102" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter3_d_200_176" x="857.455" y="19.7793" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter4_d_200_176" x="355.1" y="28.0986" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter5_d_200_176" x="1084.28" y="0" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter6_d_200_176" x="1176.38" y="192.671" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter7_d_200_176" x="924.574" y="462.142" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter8_d_200_176" x="962.736" y="355.741" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter9_d_200_176" x="1074.66" y="329.382" width="18" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter10_d_200_176" x="1119.02" y="427.414" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter11_d_200_176" x="1074.66" y="225.009" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter12_d_200_176" x="86.9922" y="103.554" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter13_d_200_176" x="1196.13" y="90.8389" width="27.7578" height="27.7568" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter14_d_200_176" x="284.186" y="464.729" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <filter id="filter15_d_200_176" x="105.729" y="423.4" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_176" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_176" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_200_176" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1096.66 247.009) rotate(90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
          <radialGradient id="paint1_radial_200_176" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108.993 125.554) rotate(90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),

    navigatebgstar: (
      <svg width="1126" height="244" viewBox="0 0 1126 244" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_200_571)">
          <path d="M63.1083 44.5249L65.524 45.0589L63.0695 44.7451L62.5241 47.1578L62.8483 44.7061L60.4374 44.162L62.8871 44.4859L63.4208 42.0722L63.1083 44.5249Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter1_d_200_571)">
          <path d="M12.654 195.784L18.9417 193.795L12.8574 196.343L14.8166 202.643L12.2967 196.547L5.99978 198.506L12.0942 195.988L10.1062 189.701L12.654 195.784Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter2_d_200_571)">
          <path d="M132.237 234.604L134.653 235.138L132.198 234.824L131.653 237.238L131.977 234.785L129.566 234.241L132.016 234.565L132.55 232.151L132.237 234.604Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_200_571)">
          <path d="M746.772 25.4748L749.188 26.0096L746.733 25.696L746.188 28.1096L746.512 25.657L744.101 25.1132L746.551 25.4359L747.085 23.0231L746.772 25.4748Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter4_d_200_571)">
          <path d="M318.855 36.7725L325.444 37.0547L318.855 37.3682L318.542 43.957L318.26 37.3682L311.672 37.0547L318.26 36.7725L318.542 30.1846L318.855 36.7725Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter5_d_200_571)">
          <path d="M941.843 8.2794L944.201 7.53499L941.92 8.48954L942.655 10.8534L941.709 8.56633L939.348 9.30065L941.632 8.3562L940.888 6.00003L941.843 8.2794Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter6_d_200_571)">
          <path d="M1021.32 174.318L1023.79 174.425L1021.32 174.542L1021.2 177.014L1021.1 174.542L1018.63 174.425L1021.1 174.318L1021.2 171.849L1021.32 174.318Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter7_d_200_571)">
          <path d="M554.369 46.0913L556.728 45.346L554.445 46.3015L555.181 48.6642L554.235 46.378L551.875 47.1122L554.159 46.1678L553.414 43.8106L554.369 46.0913Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter8_d_200_571)">
          <path d="M1117.4 34.6724L1119.81 35.2064L1117.36 34.8926L1116.81 37.3052L1117.14 34.8536L1114.73 34.3095L1117.18 34.6334L1117.71 32.2196L1117.4 34.6724Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter9_d_200_571)">
          <path d="M693.764 92L696.235 92.1064L693.764 92.2236L693.646 94.6953L693.54 92.2236L691.07 92.1064L693.54 92L693.646 89.5303L693.764 92Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter10_d_200_571)">
          <path d="M853.747 58.0332L857.866 58.209L853.747 58.4053L853.551 62.5244L853.375 58.4053L849.258 58.209L853.375 58.0332L853.551 53.916L853.747 58.0332Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter11_d_200_571)">
          <path d="M895.437 142.861L908.615 143.425L895.437 144.053L894.809 157.231L894.245 144.053L881.068 143.425L894.245 142.861L894.809 129.686L895.437 142.861Z" fill="url(#paint0_radial_200_571)" />
        </g>
        <g className='star blink' filter="url(#filter12_d_200_571)">
          <path d="M95.251 108.312L108.43 108.875L95.251 109.503L94.623 122.683L94.0596 109.503L80.8828 108.875L94.0596 108.312L94.623 95.1367L95.251 108.312Z" fill="url(#paint1_radial_200_571)" />
        </g>
        <g className='star move-left' filter="url(#filter13_d_200_571)">
          <path d="M1042.76 90.7325L1049.2 92.1544L1042.66 91.3191L1041.2 97.7544L1042.07 91.2157L1035.64 89.7628L1042.17 90.629L1043.59 84.1912L1042.76 90.7325Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter14_d_200_571)">
          <path d="M387.812 92.624L394.401 92.9062L387.812 93.2197L387.499 99.8086L387.217 93.2197L380.629 92.9062L387.217 92.624L387.499 86.0361L387.812 92.624Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter15_d_200_571)">
          <path d="M209.507 102.742L211.865 101.997L209.584 102.952L210.318 105.315L209.372 103.029L207.012 103.764L209.296 102.819L208.552 100.463L209.507 102.742Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_200_571" x="54.4375" y="36.0723" width="17.0859" height="17.0859" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter1_d_200_571" x="0" y="183.701" width="24.9414" height="24.9414" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter2_d_200_571" x="123.566" y="226.151" width="17.0859" height="17.0859" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter3_d_200_571" x="738.102" y="17.0234" width="17.0859" height="17.0859" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter4_d_200_571" x="305.672" y="24.1846" width="25.7715" height="25.7725" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter5_d_200_571" x="933.348" y="0" width="16.8535" height="16.8535" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter6_d_200_571" x="1012.63" y="165.849" width="17.1641" height="17.165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter7_d_200_571" x="545.875" y="37.8105" width="16.8535" height="16.8535" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter8_d_200_571" x="1108.73" y="26.2197" width="17.0859" height="17.0859" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter9_d_200_571" x="685.07" y="83.5303" width="17.166" height="17.165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter10_d_200_571" x="843.258" y="47.916" width="20.6074" height="20.6084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter11_d_200_571" x="875.068" y="123.686" width="39.5469" height="39.5459" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter12_d_200_571" x="74.8828" y="89.1367" width="39.5469" height="39.5459" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter13_d_200_571" x="1029.63" y="78.1914" width="25.5645" height="25.5635" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter14_d_200_571" x="374.629" y="80.0361" width="25.7715" height="25.7725" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <filter id="filter15_d_200_571" x="201.012" y="94.4629" width="16.8535" height="16.8525" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_571" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_571" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_200_571" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(894.842 143.458) rotate(90) scale(13.7729 13.7734)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
          <radialGradient id="paint1_radial_200_571" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(94.6562 108.91) rotate(90) scale(13.7729 13.7734)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),

    navigateright: (
      <svg width="317" height="175" viewBox="0 0 317 175" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_1079_1928)">
          <path d="M43.5383 165.198L46.3463 164.578L43.4933 164.943L42.8609 162.138L43.2385 164.988L40.4374 165.62L43.2834 165.243L43.9028 168.047L43.5383 165.198Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter1_d_1079_1928)">
          <path d="M9.10076 9.06017L11.9088 8.44009L9.05582 8.80531L8.42341 6.00045L8.80096 8.85025L5.99994 9.48198L8.8459 9.10511L9.4653 11.9093L9.10076 9.06017Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter2_d_1079_1928)">
          <path d="M257.172 15.1957L259.912 16.0617L257.261 14.9516L258.115 12.2069L257.017 14.8627L254.273 14.0096L256.928 15.1068L256.063 17.845L257.172 15.1957Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_1079_1928)">
          <path d="M163.42 133.353L168.205 133.147L163.42 132.92L163.192 128.135L162.987 132.92L158.205 133.147L162.987 133.353L163.192 138.135L163.42 133.353Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter4_d_1079_1928)">
          <path d="M102.546 62.8291L117.854 62.1738L102.546 61.4443L101.816 46.1348L101.161 61.4443L85.8535 62.1738L101.161 62.8291L101.816 78.1348L102.546 62.8291Z" fill="url(#paint0_radial_1079_1928)" />
        </g>
        <g className='star blink' filter="url(#filter5_d_1079_1928)">
          <path d="M302.954 103.249L310.436 101.598L302.834 102.567L301.145 95.0926L302.152 102.687L294.679 104.376L302.273 103.369L303.924 110.85L302.954 103.249Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_1079_1928" x="34.4375" y="156.138" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_1928" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_1928" result="shape" />
          </filter>
          <filter id="filter1_d_1079_1928" x="0" y="0" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_1928" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_1928" result="shape" />
          </filter>
          <filter id="filter2_d_1079_1928" x="248.273" y="6.20703" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_1928" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_1928" result="shape" />
          </filter>
          <filter id="filter3_d_1079_1928" x="152.205" y="122.135" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_1928" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_1928" result="shape" />
          </filter>
          <filter id="filter4_d_1079_1928" x="79.8535" y="40.1348" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_1928" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_1928" result="shape" />
          </filter>
          <filter id="filter5_d_1079_1928" x="288.678" y="89.0928" width="27.7578" height="27.7568" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1079_1928" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1079_1928" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_1079_1928" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(101.854 62.1348) rotate(-90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),

    communitybgstar: (
      <svg width="478" height="168" viewBox="0 0 478 168" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className='star blink' filter="url(#filter0_d_200_503)">
          <path d="M11.1714 20.0958L15.8473 21.1285L11.0963 20.5218L10.0413 25.1948L10.6702 20.4467L5.9992 19.392L10.7453 20.0206L11.7777 15.3467L11.1714 20.0958Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter1_d_200_503)">
          <path d="M204.449 8.84918L207.256 9.46909L204.404 9.105L203.772 11.9089L204.149 9.06006L201.348 8.4272L204.195 8.80424L204.814 6.00006L204.449 8.84918Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter2_d_200_503)">
          <path d="M134.012 84.9869L136.819 85.6068L133.967 85.2427L133.335 88.0466L133.712 85.1978L130.91 84.5649L133.757 84.9419L134.376 82.1378L134.012 84.9869Z" fill="white" />
        </g>
        <g className='star blink' filter="url(#filter3_d_200_503)">
          <path d="M418.081 158.85L420.82 157.985L418.169 159.094L419.023 161.839L417.925 159.183L415.182 160.037L417.837 158.939L416.971 156.201L418.081 158.85Z" fill="white" />
        </g>
        <g className='star move-left' filter="url(#filter4_d_200_503)">
          <path d="M324.331 40.6943L329.115 40.8994L324.331 41.127L324.104 45.9121L323.898 41.127L319.115 40.8994L323.898 40.6943L324.104 35.9121L324.331 40.6943Z" fill="white" />
        </g>
        <g className='star move-right' filter="url(#filter5_d_200_503)">
          <path d="M264.695 96.7861L280.005 97.4414L264.695 98.1709L263.966 113.48L263.311 98.1709L248.004 97.4414L263.311 96.7861L263.966 81.4805L264.695 96.7861Z" fill="url(#paint0_radial_200_503)" />
        </g>
        <g className='star blink' filter="url(#filter6_d_200_503)">
          <path d="M463.864 70.797L471.344 72.4481L463.743 71.4788L462.054 78.9534L463.061 71.3586L455.587 69.6698L463.182 70.6768L464.833 63.1965L463.864 70.797Z" fill="white" />
        </g>
        <defs>
          <filter id="filter0_d_200_503" x="0" y="9.34668" width="21.8477" height="21.8477" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_503" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_503" result="shape" />
          </filter>
          <filter id="filter1_d_200_503" x="195.348" y="0" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_503" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_503" result="shape" />
          </filter>
          <filter id="filter2_d_200_503" x="124.91" y="76.1377" width="17.9082" height="17.9092" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_503" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_503" result="shape" />
          </filter>
          <filter id="filter3_d_200_503" x="409.182" y="150.201" width="17.6387" height="17.6377" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_503" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_503" result="shape" />
          </filter>
          <filter id="filter4_d_200_503" x="313.115" y="29.9121" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_503" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_503" result="shape" />
          </filter>
          <filter id="filter5_d_200_503" x="242.004" y="75.4805" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0.556863 0 0 0 0 0.180392 0 0 0 0 0.878431 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_503" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_503" result="shape" />
          </filter>
          <filter id="filter6_d_200_503" x="449.586" y="57.1963" width="27.7578" height="27.7568" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_200_503" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_200_503" result="shape" />
          </filter>
          <radialGradient id="paint0_radial_200_503" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(264.004 97.4805) rotate(90) scale(16 16.0004)">
            <stop stop-color="white" />
            <stop offset="1" stop-color="#8E2EE0" />
          </radialGradient>
        </defs>
      </svg>

    ),
    backtotop: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 15l7-7 7 7"
        />
      </svg>
    ),

    hub: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.26367 10.8545C4.47438 11.0557 4.70894 11.232 4.96191 11.3799L4.10645 12.5176C4.289 12.7424 4.41906 13.0117 4.47656 13.3066C4.49828 13.4183 4.50974 13.5335 4.50977 13.6514C4.50977 14.6455 3.70109 15.4541 2.70703 15.4541C1.71299 15.4541 0.904297 14.6454 0.904297 13.6514C0.904505 12.6575 1.71313 11.8487 2.70703 11.8486C2.95585 11.8486 3.19336 11.8997 3.40918 11.9912L4.26367 10.8545ZM12.708 9.30957C14.0255 9.30957 15.0977 10.3817 15.0977 11.6992C15.0975 13.0166 14.0254 14.0879 12.708 14.0879C11.5471 14.0879 10.5775 13.2554 10.3633 12.1562C10.3345 12.0082 10.3184 11.8556 10.3184 11.6992C10.3184 11.4035 10.373 11.12 10.4717 10.8584L9.78711 10.4443C9.96568 10.2151 10.1184 9.96457 10.2402 9.69727L10.9248 10.1113C11.3628 9.62004 11.9997 9.30959 12.708 9.30957ZM6.83984 5.29395C8.41702 5.29395 9.7002 6.57715 9.7002 8.1543C9.70011 9.73137 8.41694 11.0146 6.83984 11.0146C5.26278 11.0146 3.97958 9.7313 3.97949 8.1543C3.97949 6.57719 5.26276 5.29402 6.83984 5.29395ZM2.38965 2.77832C3.10284 2.77832 3.70021 3.2837 3.84277 3.95508C3.86392 4.05469 3.87499 4.15787 3.875 4.26367C3.875 4.47909 3.82896 4.68415 3.74609 4.86914L4.33691 5.38574C4.12071 5.58144 3.92745 5.80204 3.76172 6.04297L3.1709 5.52637C2.94384 5.66727 2.67597 5.74902 2.38965 5.74902C1.57059 5.74895 0.904297 5.08272 0.904297 4.26367C0.904355 3.44467 1.57063 2.77839 2.38965 2.77832ZM11.4014 0.545898C12.3954 0.545898 13.2041 1.35458 13.2041 2.34863C13.2041 3.34272 12.3954 4.15137 11.4014 4.15137C11.1391 4.15136 10.8901 4.09435 10.665 3.99316L9.47363 5.50977C9.26713 5.30413 9.0368 5.12194 8.78711 4.96875L9.97852 3.45312C9.81442 3.24212 9.69515 2.99415 9.6377 2.72363C9.61204 2.60268 9.59863 2.47713 9.59863 2.34863C9.59868 1.35461 10.4074 0.545942 11.4014 0.545898Z" fill="url(#paint0_linear_200_290)" />
        <defs>
          <linearGradient id="paint0_linear_200_290" x1="13.6483" y1="1.07131" x2="1.41476" y2="14.5101" gradientUnits="userSpaceOnUse">
            <stop offset="0.0192308" stop-color="white" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>

    ),

    book: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.28711 11.3125C1.28711 11.664 1.42727 12.0015 1.67578 12.25C1.92421 12.4983 2.26107 12.6376 2.6123 12.6377C3.71881 12.6377 5.89215 12.6382 6.83301 13.3008H1.28711C1.11162 13.3007 0.943502 13.2305 0.819336 13.1064C0.695078 12.9822 0.625 12.8134 0.625 12.6377V4.68652C0.625092 4.51092 0.69516 4.34293 0.819336 4.21875C0.943527 4.09458 1.1115 4.02448 1.28711 4.02441V11.3125ZM14.5391 4.02441C14.7147 4.02447 14.8836 4.09455 15.0078 4.21875C15.1317 4.34287 15.2011 4.51113 15.2012 4.68652V12.6377C15.2012 12.8133 15.1319 12.9822 15.0078 13.1064C14.8836 13.2306 14.7147 13.3007 14.5391 13.3008H8.99316C9.94065 12.6382 12.1074 12.6377 13.2139 12.6377C13.5651 12.6376 13.9019 12.4983 14.1504 12.25C14.3989 12.0015 14.5391 11.664 14.5391 11.3125V4.02441ZM2.6123 2.69922C4.42777 2.69922 6.39933 2.78893 7.58203 3.60059V13.0918C6.71737 12.0747 4.57022 11.9756 2.6123 11.9756C2.43682 11.9755 2.26868 11.9053 2.14453 11.7812C2.02027 11.657 1.9502 11.4882 1.9502 11.3125V3.36133C1.9503 3.18575 2.02037 3.01772 2.14453 2.89355C2.2687 2.76939 2.43672 2.69932 2.6123 2.69922ZM13.2129 2.69922C13.3886 2.69922 13.5574 2.7693 13.6816 2.89355C13.8058 3.01771 13.8759 3.18577 13.876 3.36133V11.3125C13.876 11.4882 13.8059 11.657 13.6816 11.7812C13.5574 11.9054 13.3885 11.9756 13.2129 11.9756C11.2551 11.9756 9.10873 12.0748 8.24414 13.0918V3.60059C9.42674 2.789 11.3976 2.69923 13.2129 2.69922Z" fill="url(#paint0_linear_200_327)" />
        <defs>
          <linearGradient id="paint0_linear_200_327" x1="13.7127" y1="3.07285" x2="5.82923" y2="15.5795" gradientUnits="userSpaceOnUse">
            <stop offset="0.0192308" stop-color="white" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>

    ),

    assessment: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.15723 3.32324C4.15748 4.33811 4.98019 5.16016 5.99512 5.16016H10.0049C11.0196 5.15989 11.8415 4.33795 11.8418 3.32324V2.15332H12.0088C12.4959 2.15332 12.9638 2.34732 13.3086 2.69141C13.6527 3.03623 13.8467 3.50405 13.8467 3.99121V13.3467C13.8467 13.8338 13.6527 14.3017 13.3086 14.6465C12.9638 14.9905 12.4959 15.1846 12.0088 15.1846H3.99023C3.50312 15.1846 3.03524 14.9906 2.69043 14.6465C2.34628 14.3017 2.15235 13.8338 2.15234 13.3467V3.99121C2.15234 3.50405 2.34628 3.03623 2.69043 2.69141C3.03525 2.34725 3.50307 2.15332 3.99023 2.15332H4.15723V3.32324ZM8 6.49707C6.24794 6.49707 4.82538 7.91888 4.8252 9.6709C4.8252 11.4231 6.24782 12.8457 8 12.8457C9.752 12.8455 11.1738 11.4229 11.1738 9.6709C11.1736 7.91901 9.75189 6.49728 8 6.49707ZM8.84863 8.51465C9.04368 8.31899 9.3615 8.31914 9.55664 8.51465C9.75244 8.70978 9.75244 9.0285 9.55664 9.22363L7.95312 10.8271C7.75739 11.0227 7.44089 11.0227 7.24512 10.8271L6.44336 10.0254C6.24756 9.83026 6.24756 9.51154 6.44336 9.31641C6.63848 9.121 6.95634 9.12084 7.15137 9.31641L7.59863 9.76367L8.84863 8.51465ZM10.0049 0.816406C10.6504 0.816406 11.1748 1.34012 11.1748 1.98633V3.32227C11.1748 3.96847 10.6504 4.49219 10.0049 4.49219H5.99609C5.35055 4.49219 4.82617 3.96847 4.82617 3.32227V1.98633C4.82617 1.34012 5.35055 0.816406 5.99609 0.816406H10.0049Z" fill="url(#paint0_linear_200_343)" />
        <defs>
          <linearGradient id="paint0_linear_200_343" x1="12.6525" y1="1.32278" x2="0.83335" y2="12.4224" gradientUnits="userSpaceOnUse">
            <stop offset="0.0192308" stop-color="white" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>

    ),

    podcast: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.29 8.03125C15.3931 8.04123 15.4929 8.07201 15.584 8.12109C15.6752 8.17026 15.7562 8.23671 15.8213 8.31738C15.8863 8.39808 15.9342 8.49122 15.9629 8.59082C15.9916 8.69038 16.0004 8.79457 15.9883 8.89746L15.9824 8.94824C15.7369 10.8938 14.7902 12.6834 13.3203 13.9814C11.8503 15.2795 9.95716 15.9972 7.99609 16C6.0348 15.9978 4.14148 15.2801 2.6709 13.9824C1.2005 12.6847 0.252969 10.8958 0.00683594 8.9502C-0.00704262 8.84556 -6.7944e-05 8.73865 0.0273438 8.63672C0.0547363 8.53495 0.102634 8.4399 0.166992 8.35645C0.231429 8.27295 0.311756 8.20273 0.40332 8.15039C0.494976 8.09804 0.596435 8.06387 0.701172 8.05078C0.805837 8.03773 0.912022 8.04606 1.01367 8.07422C1.11538 8.1024 1.21088 8.14974 1.29395 8.21484C1.37701 8.27996 1.44639 8.36108 1.49805 8.45312C1.5497 8.54516 1.58242 8.64713 1.59473 8.75195C1.79015 10.3114 2.5482 11.7461 3.72656 12.7861C4.90491 13.826 6.42255 14.3993 7.99414 14.3994C9.56591 14.3994 11.0842 13.8262 12.2627 12.7861C13.4411 11.7461 14.1991 10.3114 14.3945 8.75195C14.4197 8.53854 14.5279 8.34271 14.6953 8.20801C14.8627 8.07351 15.0764 8.01012 15.29 8.03125ZM7.99512 0C9.47963 0.00189279 10.9024 0.592858 11.9521 1.64258C13.0019 2.6923 13.5928 4.11509 13.5947 5.59961V8C13.5947 9.48517 13.0043 10.9098 11.9541 11.96C10.904 13.0099 9.48002 13.5995 7.99512 13.5996C6.51002 13.5996 5.08533 13.01 4.03516 11.96C2.98498 10.9098 2.39455 9.48517 2.39453 8V5.59961C2.39642 4.11515 2.98747 2.69229 4.03711 1.64258C5.08691 0.592774 6.51047 0.00179951 7.99512 0ZM7.99512 4.40039C7.78297 4.40039 7.57873 4.4838 7.42871 4.63379C7.27868 4.78382 7.19434 4.98802 7.19434 5.2002V8.40039C7.19446 8.61236 7.27884 8.81591 7.42871 8.96582C7.57874 9.11585 7.78295 9.2002 7.99512 9.2002C8.20713 9.2001 8.41061 9.11573 8.56055 8.96582C8.71046 8.8159 8.7948 8.61239 8.79492 8.40039V5.2002C8.79492 4.98802 8.71058 4.78382 8.56055 4.63379C8.41062 4.48396 8.20707 4.40049 7.99512 4.40039ZM5.59473 5.2002C5.38257 5.20021 5.17931 5.28455 5.0293 5.43457C4.8793 5.58459 4.79492 5.78785 4.79492 6V7.59961C4.79492 7.81178 4.87927 8.01599 5.0293 8.16602C5.17928 8.31584 5.38272 8.40038 5.59473 8.40039C5.80673 8.40039 6.01016 8.31582 6.16016 8.16602C6.31018 8.01599 6.39453 7.81178 6.39453 7.59961V6C6.39453 5.78783 6.31018 5.5846 6.16016 5.43457C6.01013 5.28454 5.8069 5.2002 5.59473 5.2002ZM10.3945 5.2002C10.1824 5.20025 9.97908 5.28459 9.8291 5.43457C9.67915 5.58459 9.59473 5.78789 9.59473 6V7.59961C9.59473 7.81178 9.67907 8.01599 9.8291 8.16602C9.97906 8.31586 10.1825 8.40034 10.3945 8.40039C10.6065 8.40039 10.81 8.31578 10.96 8.16602C11.11 8.01599 11.1943 7.81178 11.1943 7.59961V6C11.1943 5.78783 11.11 5.5846 10.96 5.43457C10.8099 5.28459 10.6067 5.2002 10.3945 5.2002Z" fill="url(#paint0_linear_200_310)" />
        <defs>
          <linearGradient id="paint0_linear_200_310" x1="14.3605" y1="0.56389" x2="1.30617" y2="15.6206" gradientUnits="userSpaceOnUse">
            <stop offset="0.0192308" stop-color="white" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>

    ),

    monthly: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.25781 0.943359C9.33172 0.943408 9.40427 0.956332 9.47754 0.962891V3.40527C9.47847 4.40173 10.2867 5.20924 11.2832 5.20996L14.3535 5.20703C14.3818 5.34858 14.3973 5.49239 14.4004 5.63672V12.5947C14.3984 13.9533 13.298 15.0538 11.9395 15.0557H4.0625C2.70396 15.0538 1.60351 13.9533 1.60156 12.5947V3.40527C1.60338 2.04663 2.70388 0.945257 4.0625 0.943359H9.25781ZM10.9453 9.24707C10.7333 9.07685 10.4231 9.11023 10.2529 9.32227L8.62988 11.2158L7.69238 10.2773C7.50033 10.0856 7.18896 10.0854 6.99707 10.2773L5.02734 12.2471C4.85153 12.4361 4.85132 12.729 5.02734 12.918C5.2127 13.1169 5.52473 13.1277 5.72363 12.9424L7.34473 11.3213L8.30957 12.2861C8.40528 12.3844 8.53877 12.4367 8.67578 12.4297C8.8128 12.4246 8.94192 12.3628 9.03125 12.2588L11 9.96094V9.96289C11.0072 9.95506 11.0138 9.94678 11.0205 9.93848C11.1906 9.72654 11.1571 9.41732 10.9453 9.24707ZM4.71875 7.17871C4.44701 7.17887 4.22656 7.40009 4.22656 7.67188C4.22677 7.94348 4.44714 8.1639 4.71875 8.16406H11.2832C11.5549 8.16395 11.7752 7.94351 11.7754 7.67188C11.7754 7.40006 11.555 7.17882 11.2832 7.17871H4.71875ZM4.71875 4.55371C4.44701 4.55387 4.22656 4.77411 4.22656 5.0459C4.22657 5.31767 4.44701 5.53792 4.71875 5.53809H8.00098C8.27285 5.53809 8.49315 5.31777 8.49316 5.0459C8.49316 4.77401 8.27286 4.55371 8.00098 4.55371H4.71875ZM10.4629 1.26465C10.5938 1.3373 10.7186 1.4221 10.834 1.51758L13.5166 3.74902C13.6794 3.88842 13.8232 4.04875 13.9443 4.22559H11.2842C10.8314 4.22486 10.4637 3.85807 10.4629 3.40527V1.26465Z" fill="url(#paint0_linear_200_318)" />
        <defs>
          <linearGradient id="paint0_linear_200_318" x1="13.0935" y1="1.44072" x2="1.47382" y2="13.6001" gradientUnits="userSpaceOnUse">
            <stop offset="0.0192308" stop-color="white" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>

    ),

    patterns: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.4893 1.02344C13.4157 1.02361 14.9775 2.58528 14.9775 4.51172V11.4883C14.9775 13.4147 13.4157 14.9764 11.4893 14.9766H4.51172C2.58537 14.9763 1.02344 13.4147 1.02344 11.4883V4.51172C1.02347 2.58534 2.58539 1.0237 4.51172 1.02344H11.4893ZM5.20996 6.60449C4.82465 6.60449 4.51172 6.91741 4.51172 7.30273V10.791C4.5118 11.1763 4.8247 11.4883 5.20996 11.4883C5.59518 11.4882 5.90714 11.1762 5.90723 10.791V7.30273C5.90723 6.91744 5.59523 6.60454 5.20996 6.60449ZM8.00098 4.51172C7.61581 4.51172 7.30299 4.82389 7.30273 5.20898V10.791C7.30282 11.1763 7.6157 11.4883 8.00098 11.4883C8.38606 11.4881 8.69816 11.1761 8.69824 10.791V5.20898C8.69798 4.82403 8.38596 4.51194 8.00098 4.51172ZM10.791 8.69824C10.4058 8.69838 10.0938 9.01027 10.0938 9.39551V10.791C10.0938 11.1762 10.4059 11.4881 10.791 11.4883C11.1763 11.4883 11.4892 11.1763 11.4893 10.791V9.39551C11.4893 9.01018 11.1763 8.69824 10.791 8.69824Z" fill="url(#paint0_linear_200_337)" />
        <defs>
          <linearGradient id="paint0_linear_200_337" x1="13.5526" y1="1.51519" x2="2.16909" y2="14.651" gradientUnits="userSpaceOnUse">
            <stop offset="0.0192308" stop-color="white" />
            <stop offset="1" stop-color="white" />
          </linearGradient>
        </defs>
      </svg>

    ),


  }
  return Icons[icon] || null
}

export default Icons