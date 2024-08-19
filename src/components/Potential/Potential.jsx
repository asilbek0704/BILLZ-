import CountUp from 'react-countup';
import s from './Potential.module.scss';

export const Potential = () => {
  return (
    <article className={s.potential}>
      <h2 className={s.title}>
        Потенциал рынка автоматизации магазинов в странах Центральной Азии
      </h2>

      <ul className={s.countryStat}>
        <li className={s.item}>
          <img src='/images/flags/uzb.png' alt='Узбекистанский флаг' />

          <p className={s.text}>
            <span>
              $
              <CountUp
                end={30}
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyDelay={120}
                scrollSpyOnce={true}
              />
              M+
            </span>
            ежегодно
          </p>
        </li>
        <li className={s.item}>
          <img src='/images/flags/kz.png' alt='Казахстанский флаг' />

          <p className={s.text}>
            <span>
              $
              <CountUp
                end={80}
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyDelay={120}
                scrollSpyOnce={true}
              />
              M+
            </span>
            ежегодно
          </p>
        </li>
        <li className={s.item}>
          <img src='/images/flags/kg.png' alt='Кыргызстанский флаг' />

          <p className={s.text}>
            <span>
              $
              <CountUp
                end={10}
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyDelay={120}
                scrollSpyOnce={true}
              />
              M+
            </span>
            ежегодно
          </p>
        </li>
        <li className={s.item}>
          <img src='/images/flags/tj.png' alt='Таджикистанский флаг' />

          <p className={s.text}>
            <span>
              $
              <CountUp
                end={10}
                duration={2.5}
                enableScrollSpy={true}
                scrollSpyDelay={120}
                scrollSpyOnce={true}
              />
              M+
            </span>
            ежегодно
          </p>
        </li>
      </ul>
    </article>
  );
};
