import { Container } from '../../components/Container/Container';
import { Potential } from '../../components/Potential/Potential';
import { scrollToSection } from '../../helpers/scrollToSection';
import { Button } from '../../ui/Button/Button';
import { Highlighter } from '../../ui/Highlighter/Highlighter';
import s from './Automation.module.scss';

export const Automation = () => (
  <section id='automation-section' className={s.automation}>
    <Container className={s.automationContainer}>
      <div className={s.about}>
        <h1 className={s.title}>
          Автоматизация -&nbsp;
          <Highlighter>
            быстрорастущий <br />
            сегмент бизнеса
          </Highlighter>
          &nbsp;
          <br />в Центральной Азии
        </h1>

        <p className={s.descr}>
          <Highlighter>Более 70% ритейлеров</Highlighter> ведут учет в
          <br />
          тетрадках, Excel или <br />
          старых программах, и<br />
          &nbsp;
          <Highlighter>активно переходят на автоматизацию</Highlighter>
        </p>
      </div>

      <Potential />

      <Button
        className={s.button}
        to='#partnership-form'
        onClick={() => scrollToSection("#partnership-form")}
      >
        Оставить заявку на консультацию
      </Button>
    </Container>
  </section>
);
