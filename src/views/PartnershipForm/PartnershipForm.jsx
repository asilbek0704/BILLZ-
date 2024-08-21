import { Input, InputAdornment } from '@mui/material';
import { Container } from '../../components/Container/Container';
import { Highlighter } from '../../ui/Highlighter/Highlighter';
import { Button } from '../../ui/Button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import s from './PartnershipForm.module.scss';

const PartnershipForm = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  if (window.innerWidth < 576 && pathname == '/') {
    return;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const {
      fullname,
      phone,
      reason,
      hasBusiness,
      experience,
      investmentAmount,
      payload,
      city,
    } = e.target;

    const formData = {
      fullname: fullname.value,
      phone: phone.value,
      reason: reason.value,
      hasBusiness: hasBusiness.value,
      experience: experience.value,
      investmentAmount: investmentAmount.value,
      payload: payload.value,
      city: city.value,
    };

    console.log(formData);
    navigate("/application/sent");
  }

  return (
    <Container className={s.formContainer}>
      <form id='partnership-form' className={s.form} onSubmit={handleSubmit}>
        <h1 className={s.title}>
          Оставьте заявку на партнерство <br />и наши эксперты проведут
          <br />
          &nbsp;
          <br />
          <Highlighter>бесплатную консультацию</Highlighter>
        </h1>

        <fieldset className={s.inputs}>
          <fieldset>
            <legend>Ваше имя и фамилия</legend>

            <Input
              required
              name='fullname'
              className='partnership-input'
              placeholder='Например, Илон Маск'
            />
          </fieldset>

          <fieldset>
            <legend>Номер телефона</legend>

            <Input
              required
              name='phone'
              className='partnership-input'
              placeholder='(ХХ) ХХХ ХХ ХХ'
              startAdornment={
                <InputAdornment
                  className='partnership-input_info'
                  position='start'
                >
                  +998
                </InputAdornment>
              }
            />
          </fieldset>

          <fieldset className={s.textareaField}>
            <legend>Почему вы хотите стать партнером?</legend>

            <Input
              name='reason'
              className='partnership-input'
              placeholder='Опишите причину почему вы хотите стать партнером'
            />
          </fieldset>

          <fieldset>
            <legend>Есть ли у вас текущий бизнес?</legend>

            <div className={s.switch}>
              <input
                id='switchTrue'
                type='radio'
                name='hasBusiness'
                value={true}
              />
              <label htmlFor='switchTrue'>Да</label>

              <input
                id='switchFalse'
                type='radio'
                name='hasBusiness'
                value={false}
                defaultChecked={true}
              />
              <label htmlFor='switchFalse'>Нет</label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Какой у вас опыт в ритейле?</legend>

            <Input
              required
              name='experience'
              className='partnership-input'
              placeholder='Опишите опыт'
            />
          </fieldset>

          <fieldset>
            <legend>Ваша сумма средств для инвестирования</legend>

            <Input
              required
              name='investmentAmount'
              className='partnership-input'
              placeholder='Введите сумму'
              endAdornment={
                <InputAdornment
                  className='partnership-input_info'
                  position='end'
                >
                  UZS
                </InputAdornment>
              }
            />
          </fieldset>

          <fieldset>
            <legend>Сколько времени вы готовы уделить?</legend>

            <Input
              required
              name='payload'
              className='partnership-input'
              placeholder='Введите время'
              endAdornment={
                <InputAdornment
                  className='partnership-input_info'
                  position='end'
                >
                  часов/неделю
                </InputAdornment>
              }
            />
          </fieldset>

          <fieldset className={s.textareaField}>
            <legend>Из какого вы города?</legend>

            <Input
              required
              name='city'
              className='partnership-input'
              placeholder='Введите название города'
              variant='filled'
            />
          </fieldset>
        </fieldset>

        <Button tag={'button'} className={s.button}>
          Отправить заявку&nbsp;&nbsp;
          <svg
            width='25'
            height='21'
            viewBox='0 0 25 21'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M23.6733 11.6766C24.3241 11.0258 24.3241 9.96896 23.6733 9.31817L15.3433 0.988091C14.6925 0.337303 13.6356 0.337303 12.9848 0.988091C12.334 1.63888 12.334 2.69576 12.9848 3.34654L18.4774 8.83398H2.50452C1.583 8.83398 0.838501 9.57848 0.838501 10.5C0.838501 11.4215 1.583 12.166 2.50452 12.166H18.4722L12.99 17.6535C12.3392 18.3042 12.3392 19.3611 12.99 20.0119C13.6408 20.6627 14.6977 20.6627 15.3485 20.0119L23.6785 11.6818L23.6733 11.6766Z'
              fill='white'
            />
          </svg>
        </Button>
      </form>
    </Container>
  );
};

export default PartnershipForm;
