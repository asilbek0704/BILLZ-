import { scrollToForm } from '../../helpers/scrollToForm';
import { Button } from '../../ui/Button/Button';
import { Highlighter } from '../../ui/Highlighter/Highlighter';
import s from './PartnershipTypes.module.scss';

export const PartnershipTypes = () => (
  <div className={s.partnershipTypes}>
    <article className={s.content}>
      <div className={s.about}>
        <figure className={s.icon}>
          <svg
            width='76'
            height='76'
            viewBox='0 0 76 76'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='38' cy='38' r='38' fill='#0065FF' />
            <path
              d='M28.2999 24.2741C27.7804 23.8694 27.0421 23.9186 26.5718 24.3835L24.3844 26.5709C23.9195 27.0357 23.8703 27.774 24.2695 28.299L28.6444 33.9864C28.8905 34.309 29.2788 34.5004 29.6834 34.5004H32.642L38.6028 40.4612C37.7989 42.0471 38.0559 44.0377 39.3848 45.3611L45.5096 51.4859C46.1932 52.1695 47.3033 52.1695 47.9869 51.4859L51.4868 47.986C52.1704 47.3025 52.1704 46.1923 51.4868 45.5087L45.362 39.3839C44.0386 38.0605 42.048 37.798 40.4621 38.6019L34.5013 32.6411V29.688C34.5013 29.2779 34.3099 28.8951 33.9873 28.649L28.2999 24.2741ZM25.0898 45.6619C24.3953 46.3564 24.0015 47.3025 24.0015 48.2868C24.0015 50.3375 25.664 52 27.7147 52C28.6991 52 29.6452 51.6063 30.3397 50.9117L36.7817 44.4697C36.3552 43.3268 36.2895 42.0854 36.5848 40.9096L33.2107 37.5355L25.0898 45.6619ZM52.0009 31.8755C52.0009 31.3013 51.9407 30.7435 51.8259 30.2075C51.6946 29.5951 50.9454 29.4365 50.5025 29.8794L47.008 33.3739C46.844 33.5379 46.6198 33.6309 46.3901 33.6309H43.2511C42.7699 33.6309 42.3761 33.2372 42.3761 32.7559V29.6115C42.3761 29.3818 42.4691 29.1576 42.6331 28.9935L46.1276 25.4991C46.5706 25.0561 46.412 24.3069 45.7995 24.1757C45.2581 24.0608 44.7003 24.0007 44.1261 24.0007C39.7785 24.0007 36.2513 27.5279 36.2513 31.8755V31.9192L40.916 36.584C42.8847 36.0863 45.0612 36.6113 46.6034 38.1534L47.4619 39.012C50.1416 37.7542 52.0009 35.0309 52.0009 31.8755ZM27.064 47.6251C27.064 47.277 27.2023 46.9432 27.4484 46.697C27.6945 46.4509 28.0284 46.3126 28.3764 46.3126C28.7245 46.3126 29.0584 46.4509 29.3045 46.697C29.5506 46.9432 29.6889 47.277 29.6889 47.6251C29.6889 47.9732 29.5506 48.307 29.3045 48.5532C29.0584 48.7993 28.7245 48.9376 28.3764 48.9376C28.0284 48.9376 27.6945 48.7993 27.4484 48.5532C27.2023 48.307 27.064 47.9732 27.064 47.6251Z'
              fill='white'
            />
          </svg>
        </figure>

        <h2 className={s.title}>Сервисный партнер</h2>

        <p className={s.descr}>
          Занимается подключением <br />и обслуживанием клиентов
        </p>
      </div>

      <table className={s.table}>
        <tbody className={s.tableContent}>
          <tr className={s.row}>
            <td>Вложения</td>
            <td>
              <Highlighter>$500</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>Занятость</td>
            <td>
              <Highlighter>20-30 часов/месяц</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>Кол-во клиентов</td>
            <td>
              <Highlighter>5-6 клиентов/месяц</Highlighter>
            </td>
          </tr>

          <tr>
            <td className={s.tableTitle}>Как зарабатывает партнер?</td>
          </tr>

          <tr className={s.row}>
            <td>Подключение и обучение под ключ</td>
            <td>
              <Highlighter>$50-$100</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>Составление списка товаров</td>
            <td>
              <Highlighter>$20/день</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>Продажа оборудования</td>
            <td>
              <Highlighter>$50-$150/магазин</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>
              Портфельный доход&nbsp;
              <span>(при 100+ клиентах)</span>
            </td>
            <td>
              <Highlighter>$300-$2 000</Highlighter>
            </td>
          </tr>
        </tbody>
      </table>

      <Button
        className={s.button}
        to='#partnership-form'
        onClick={scrollToForm}
      >
        Оставить заявку
      </Button>
    </article>

    <article className={s.content}>
      <div className={s.about}>
        <figure className={s.icon}>
          <svg
            width='76'
            height='76'
            viewBox='0 0 76 76'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='38' cy='38' r='38' fill='#0065FF' />
            <path
              d='M38.17 29.06L33.33 32.98C32.525 33.63 32.37 34.8 32.98 35.635C33.625 36.525 34.88 36.7 35.745 36.025L40.71 32.165C41.06 31.895 41.56 31.955 41.835 32.305C42.11 32.655 42.045 33.155 41.695 33.43L40.65 34.24L49.51 42.4H51.6C52.925 42.4 54 41.325 54 40V33.6C54 32.275 52.925 31.2 51.6 31.2H47.8H47.6H47.565L47.37 31.075L43.74 28.75C42.975 28.26 42.08 28 41.17 28C40.08 28 39.02 28.375 38.17 29.06ZM39.31 35.28L36.725 37.29C35.15 38.52 32.865 38.2 31.685 36.58C30.575 35.055 30.855 32.925 32.32 31.74L36.48 28.375C35.9 28.13 35.275 28.005 34.64 28.005C33.7 28 32.785 28.28 32 28.8L28.4 31.2H24.4C23.075 31.2 22 32.275 22 33.6V40C22 41.325 23.075 42.4 24.4 42.4H29.81L34.38 46.57C35.36 47.465 36.875 47.395 37.77 46.415C38.045 46.11 38.23 45.755 38.325 45.385L39.175 46.165C40.15 47.06 41.67 46.995 42.565 46.02C42.79 45.775 42.955 45.49 43.06 45.195C44.03 45.845 45.35 45.71 46.165 44.82C47.06 43.845 46.995 42.325 46.02 41.43L39.31 35.28Z'
              fill='white'
            />
          </svg>
        </figure>

        <h2 className={s.title}>Партнер по продажам</h2>

        <p className={s.descr}>
          Занимается продажей, подключением <br />и обслуживанием клиентов
        </p>
      </div>

      <table className={s.table}>
        <tbody className={s.tableContent}>
          <tr className={s.row}>
            <td>Вложения</td>
            <td>
              <Highlighter>$5 000-$10 000</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>Занятость</td>
            <td>
              <Highlighter>100 часов/месяц</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>Кол-во клиентов</td>
            <td>
              <Highlighter>5-15 клиентов/месяц</Highlighter>
            </td>
          </tr>

          <tr>
            <td className={s.tableTitle}>Как зарабатывает партнер?</td>
          </tr>

          <tr className={s.row}>
            <td>Подключение и обучение под ключ</td>
            <td>
              <Highlighter>$50-$100</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>Составление списка товаров</td>
            <td>
              <Highlighter>$20/день</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>Продажа оборудования</td>
            <td>
              <Highlighter>$50-$150/магазин</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>
              Доход от подписки BILLZ
              <span>(первый год)</span>
            </td>
            <td>
              <Highlighter>50%</Highlighter>
            </td>
          </tr>

          <tr className={s.row}>
            <td>
              Портфельный доход
              <span>(при 50+ клиентах)</span>
            </td>
            <td>
              <Highlighter>$300-$2 000</Highlighter>
            </td>
          </tr>
        </tbody>
      </table>

      <Button
        className={s.button}
        to='#partnership-form'
        onClick={scrollToForm}
      >
        Оставить заявку
      </Button>
    </article>
  </div>
);
