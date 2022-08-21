import { useContext } from "react";
import MeetupList from "../components/meetup/MeetupList";
import FavoritesContext from "../store/favorites-context";

function FavoritesPages() {
  const favoritesCtx = useContext(FavoritesContext);
  //console.log(favoritesCtx);

  let content;
  if (favoritesCtx.totalFavorites === 0) {
    content = <p> No favorites yet, start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <div>
      <h2>My Favorites List</h2>
      {content}
    </div>
  );
}

export default FavoritesPages;
