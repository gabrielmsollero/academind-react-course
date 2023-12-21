import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailsPage(props) {
  return <MeetupDetail {...props.meetupData} />;
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGO_CONN_STRING);
  const db = client.db();
  const meetupsColl = db.collection("meetups");

  const meetups = await meetupsColl.find({}, { _id: 1 }).toArray();

  client.close()

  return {
    fallback: false, // Set to false if 'paths' covers all possibilities
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  const client = await MongoClient.connect(process.env.MONGO_CONN_STRING);
  const db = client.db();
  const meetupsColl = db.collection("meetups");

  const meetup = await meetupsColl.findOne({ _id: new ObjectId(meetupId) });

  client.close()

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
        image: meetup.image,
      },
    },
  };
}
