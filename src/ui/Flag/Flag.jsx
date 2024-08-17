import s from './Flag.module.scss';

export const Flag = () => (
  <svg
    width='81'
    height='61'
    viewBox='0 0 81 61'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={s.flag}
  >
    <g clipPath='url(#clip0_1_2)'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.5 0.5H80.5V60.5H0.5V0.5Z'
        fill='white'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.5 20.5H80.5V60.5H0.5V20.5Z'
        fill='#0039A6'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.5 40.5H80.5V60.5H0.5V40.5Z'
        fill='#D52B1E'
      />
    </g>
    <defs>
      <clipPath id='clip0_1_2'>
        <rect x='0.2' y='0.2' width='80' height='60' rx='10'  />
      </clipPath>
    </defs>
  </svg>
);
