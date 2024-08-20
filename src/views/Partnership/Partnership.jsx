import { Container } from '../../components/Container/Container';
import { PartnershipTypes } from '../../components/PartnershipTypes/PartnershipTypes';
import { Highlighter } from '../../ui/Highlighter/Highlighter';
import s from './Partnership.module.scss';

export const Partnership = () => (
  <section className={s.partnership}>
    <Container className={s.partnershipContainer}>
      <h1 className={s.title}>
        Типы <Highlighter>партнерства</Highlighter>
      </h1>

      <PartnershipTypes />
    </Container>
  </section>
);
