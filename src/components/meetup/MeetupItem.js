import { useContext } from "react";
import classes from "../../style/MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";
function MeetupItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorites = favoritesCtx.itemIsFavorites(props.id);

  function toggleFavoritesStatusHandler() {
    if (itemIsFavorites) {
      favoritesCtx.removeFavorites(props.id);
    } else {
      favoritesCtx.addFavorites({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
      //console.log(favoritesCtx);
    }
  }
  return (
    <li>
      <Card>
        <div className={classes.item}>
          <img className={classes.image} src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorites ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
