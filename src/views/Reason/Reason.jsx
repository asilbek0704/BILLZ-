import { Achievement } from '../../components/Achievement/Achievement';
import { AlltimeStats } from '../../components/AlltimeStats/AlltimeStats';
import { Tools } from '../../components/Tools/Tools';
import { Highlighter } from '../../ui/Highlighter/Highlighter';
import { PartnersTicker } from '../PartnersTicker/PartnersTicker';
import s from './Reason.module.scss';

export const Reason = () => {
  return (
    <section className={s.reason}>
      <Achievement
        className={s.achievement}
        number='#1'
        title={
          <>
            BILLZ - один из самых&nbsp;
            <Highlighter>быстрорастущих стартапов</Highlighter> в Центральной
            Азии
          </>
        }
        descr={
          <>
            BILLZ является&nbsp;
            <Highlighter>
              лидером в сегменте автоматизации магазинов моды
            </Highlighter>
            , а также <br />
            самой популярной программой автоматизации в большинстве ТЦ Ташкента
          </>
        }
      >
        <AlltimeStats />
      </Achievement>

      <Achievement
        className={s.achievement}
        number='#2'
        title={
          <>
            BILLZ - одна из самых <Highlighter>простых</Highlighter> и&nbsp;
            <Highlighter>удобных</Highlighter> <br />
            программ для автоматизации магазинов
          </>
        }
        descr={
          <>
            BILLZ - это простая в настройке и обучении программа, которая
            содержит&nbsp;
            <br />
            <Highlighter>
              все необходимые инструменты для эффективного управления магазином
            </Highlighter>
          </>
        }
      >
        <Tools />
      </Achievement>

      <Achievement
        className={s.achievement}
        noContainer={true}
        number='#3'
        title={
          <>
            С нами работают крупнейшие&nbsp;
            <br />
            <Highlighter>местные</Highlighter> и &nbsp;
            <Highlighter>международные бренды</Highlighter>
          </>
        }
        descr={
          <>
            Более <Highlighter>2500 магазинов</Highlighter> уже используют
            BILLZ! Среди них - как всеми любимые <br />
            местные бренды, так и всемирно известные международные бренды.
          </>
        }
      >
        <PartnersTicker>
          <img
            src='/images/partners/1.png'
            alt="Логотип L'OOCITANE EN PROVENCE"
          />
          <img src='/images/partners/2.png' alt="Логотип LEVI'S" />
          <img src='/images/partners/3.png' alt='Логотип LACOSTE' />
          <img src='/images/partners/4.png' alt='Логотип TOMMY HILFIGER' />
          <img src='/images/partners/5.png' alt='Логотип CALVIN KLEIN' />
          <img src='/images/partners/6.png' alt='Логотип VICCO' />
          <img src='/images/partners/7.png' alt='Логотип BUTTON' />
          <img src='/images/partners/8.png' alt='Логотип YVES ROCHER' />
          <img src='/images/partners/9.png' alt='Логотип MARCCAIN' />
        </PartnersTicker>

        <PartnersTicker direction='right'>
          <img src='/images/partners/10.png' alt='Логотип MARIE CLAIRE' />
          <img src='/images/partners/11.png' alt='Логотип RIEKER' />
          <img src='/images/partners/12.png' alt='Логотип NATURE REPUBLIC' />
          <img src='/images/partners/13.png' alt='Логотип BLOOM BEAUTY' />
          <img src='/images/partners/14.png' alt='Логотип INBAZAR' />
          <img src='/images/partners/15.png' alt='Логотип PINK ISLAND' />
          <img src='/images/partners/16.png' alt='Логотип GARMIN' />
          <img src='/images/partners/17.png' alt='Логотип KARCHER' />
        </PartnersTicker>
      </Achievement>

      <Achievement
        className={s.achievement}
        number='#4'
        title={
          <>
            Мы получаем&nbsp;
            <Highlighter>
              более 100 заявок&nbsp;
              <br />
              на подключение
            </Highlighter>
            &nbsp;каждый день
          </>
        }
        descr={
          <>
            Каждый день более 100 магазинов&nbsp;
            <Highlighter>со всех регионов Узбекистана</Highlighter>
            <br />
            &nbsp; оставляют заявку на подключение к BILLZ
          </>
        }
      >
        <figure className={s.requests}>
          <img src='/images/requests/1.png' alt='' />
          <img src='/images/requests/2.png' alt='' />
          <img src='/images/requests/3.png' alt='' />
          <img src='/images/requests/4.png' alt='' />
        </figure>
      </Achievement>

      <Achievement
        className={s.achievement}
        number='#5'
        title={
          <>
            Местные и зарубежные&nbsp;
            <br />
            СМИ <Highlighter>пишут о BILLZ</Highlighter>
          </>
        }
        descr={
          <>
            Крупные местные и международные издания&nbsp;
            <br />
            <Highlighter>написали статьи о нашей компании</Highlighter>
          </>
        }
      >
        <PartnersTicker
          play={window.innerWidth > 576 ? false : true}
          className={s.authors}
        >
          <img src='/images/authors/1.png' alt='Логотип euronews' />
          <img src='/images/authors/2.png' alt='Логотип AIFC' />
          <img src='/images/authors/3.png' alt='Логотип vc.ru' />
          <img src='/images/authors/4.png' alt='Логотип UZA' />
          <img src='/images/authors/5.png' alt='Логотип WE' />
          <img src='/images/authors/6.png' alt='Логотип spot' />
          <img src='/images/authors/7.png' alt='Логотип IT PARK' />
        </PartnersTicker>

        <PartnersTicker
          play={window.innerWidth > 576 ? false : true}
          className={s.authors}
          direction='right'
        >
          <img src='/images/authors/8.png' alt='Логотип technode global' />
          <img
            src='/images/authors/9.png'
            alt='Логотип Venture Rocket Euroasia'
          />
          <img src='/images/authors/10.png' alt='Логотип FinanceAsia' />
          <img src='/images/authors/11.png' alt='Логотип КУРСИВ' />
          <img src='/images/authors/12.png' alt='Логотип TECHINASIA' />
        </PartnersTicker>
      </Achievement>
    </section>
  );
};
