import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailsPage(props) {
  return <MeetupDetail {...props.meetupData} />;
}

export async function getStaticPaths() {
  return {
    fallback: false, // Set to false if 'paths' covers all possibilities
    paths: [{ params: { meetupId: "m1" } }],
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "http://invalid.com",
        title: "Title",
        address: "Random address",
        description: "Description",
      },
    },
  };
}
