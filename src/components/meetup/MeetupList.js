import MeetupItem from "./MeetupItem";
import classes from "../../style/MeetupList.module.css";
function MeetupList(props) {
  //onsole.log(props.meetups, "abani");
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          description={meetup.description}
          address={meetup.address}
          meetup={meetup}
        />
      ))}
    </ul>
  );
}
export default MeetupList;
