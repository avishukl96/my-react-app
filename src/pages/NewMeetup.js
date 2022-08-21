import React from "react";
import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetup/NewMeetupForm";

function NewMeetupsPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-app-db-32a73-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "content-type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1> New Meetups Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
