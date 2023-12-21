import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A meetup',
    image: 'http://invalid.com',
    address: 'Some address 123',
    description: 'Blablabla'
  },
  {
    id: 'm2',
    title: 'Another meetup',
    image: 'http://invalid.com',
    address: 'Some address 123',
    description: 'Blablabla'
  }
]

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
