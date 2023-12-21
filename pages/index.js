import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A meetup",
    image: "http://invalid.com",
    address: "Some address 123",
    description: "Blablabla",
  },
  {
    id: "m2",
    title: "Another meetup",
    image: "http://invalid.com",
    address: "Some address 123",
    description: "Blablabla",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/* Gets executed on every request; has access to request object
 * Useful for authentication for example
export async function getServerSideProps(context) {
  const { req, res } = context;
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
*/

/* Gets executed when revalidate times out and generates a static page
 * Better for caching
 */
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
