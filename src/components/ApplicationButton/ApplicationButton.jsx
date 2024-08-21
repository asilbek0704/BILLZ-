import { Container } from '../Container/Container';
import { Button } from '../../ui/Button/Button';
import s from "./ApplicationButton.module.scss"

export const ApplicationButton = ({ tag, to, formId }) => (
  <div className={s.application}>
      <Container>
        <Button tag={tag ?? "Link"} to={to} formId={formId} >
          Оставить заявку
        </Button>
      </Container>
    </div>
)