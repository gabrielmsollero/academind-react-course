import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";

import ErrorBlock from "../UI/ErrorBlock.jsx";
import Header from "../Header.jsx";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import Modal from "../UI/Modal.jsx";

import { fetchEvent, deleteEvent, queryClient } from "../../util/http.js";
import { useState } from "react";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  const {
    mutate,
    deleteIsPending = isPending,
    deleteIsError = isError,
    deleteError = error,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  const startDeleteHandler = () => {
    setIsDeleting(true);
  };

  const stopDeleteHandler = () => {
    setIsDeleting(false);
  };

  const deleteHandler = () => {
    mutate({ id });
  };

  let content = "";

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <div className="center" id="event-details-center">
        <ErrorBlock
          title="An error occurred"
          message={error.info?.message || "Failed to fetch event data."}
        />
      </div>
    );
  }

  if (data) {
    const { title, description, date, time, image, location } = data;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    content = (
      <>
        <header>
          <h1>{title}</h1>
          <nav>
            <button onClick={startDeleteHandler}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${image}`} alt="Event image" />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{location}</p>
              <time dateTime={`${date}T$${time}`}>
                {formattedDate} @ {time}
              </time>
            </div>
            <p id="event-details-description">{description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {isDeleting && (
        <Modal onClose={stopDeleteHandler}>
          <h2>Are you sure?</h2>
          <p>This cannot be undone!</p>
          <div className="form-actions">
            {deleteIsPending ? (
              <p>Deleting, please wait...</p>
            ) : (
              <>
                <button onClick={stopDeleteHandler} className="button-text">
                  Cancel
                </button>
                <button onClick={deleteHandler} className="button">
                  Delete
                </button>
              </>
            )}
          </div>
          {deleteIsError && (
            <ErrorBlock
              title="Failed to delete event!"
              message={
                deleteError.info?.message ||
                "Failed to delete, please try again."
              }
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
