import { useRef } from "react";
import classes from "../../style/NewMeetupForm.module.css";
import Card from "../ui/Card";
import React from "react";
function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();
  const addressInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDesciption = descriptionInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDesciption,
      address: enteredAddress,
    };

    props.onAddMeetup(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="Title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Images">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="Description">Meetup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
