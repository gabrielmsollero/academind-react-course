import { useRouteLoaderData, json, redirect } from "react-router-dom";

import EventItem from '../components/EventItem';

export default function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <EventItem event={data.event} />
  );
}

export async function loader({request, params}) {
  const id = params.id;

  const response = await fetch('http://localhost:3001/events/' + id);
  
  if (!response.ok) {
    throw json({message: 'Could not fetch details for selected event.'}, {status: 500});
  }
  else {
    return response;
  }
}

export async function action({ params, request }) {
  const response = await fetch('http://localhost:3001/events/' + params.id, { method: request.method });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect('/events');
}