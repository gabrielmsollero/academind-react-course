import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(process.env.MONGO_CONN_STRING);
    const db = client.db();
    const meetupsColl = db.collection("meetups");

    const result = await meetupsColl.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
