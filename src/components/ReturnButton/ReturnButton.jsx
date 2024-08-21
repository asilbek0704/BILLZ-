import { Button } from '../../ui/Button/Button';
import { Container } from '../Container/Container';

import s from './ReturnButton.module.scss';

export const ReturnButton = ({ to }) => (
  <Container>
    <Button variation='extra' to={to} className={s.button}>
      <svg
        width='19'
        height='17'
        viewBox='0 0 19 17'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.561371 7.5587C0.040741 8.07933 0.040741 8.92483 0.561371 9.44546L7.22543 16.1095C7.74606 16.6302 8.59157 16.6302 9.1122 16.1095C9.63283 15.5889 9.63283 14.7434 9.1122 14.2228L4.71808 9.83281H17.4964C18.2336 9.83281 18.8292 9.23721 18.8292 8.5C18.8292 7.76279 18.2336 7.16719 17.4964 7.16719H4.72225L9.10803 2.77724C9.62866 2.25661 9.62866 1.4111 9.10803 0.890472C8.5874 0.369843 7.7419 0.369843 7.22127 0.890472L0.557206 7.55454L0.561371 7.5587Z'
          fill='#0065FF'
        />
      </svg>
      &nbsp;&nbsp; Вернуться на сайт
    </Button>
  </Container>
);
