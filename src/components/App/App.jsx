import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import { Container } from './App.styled';
import upcomingEvents from 'upcoming-events.json';
const bgImi =
  'https://phonoteka.org/uploads/posts/2021-03/1616407181_10-p-prostoi-fon-dlya-prezentatsii-11.png';
export const App = () => {
  return (
    <Container img={bgImi}>
      <PageTitle text="24th Core Worlds Coalition Conference" />
      <EventBoard events={upcomingEvents} />
    </Container>
  );
};
