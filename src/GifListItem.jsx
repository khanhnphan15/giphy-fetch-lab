import "./styles.css";
import "./GifListItem.css";

export default function GifListItem({ gif, onFavoriteToggle, isFavorite }) {
  return (
    <div className="gif-list-item">
      <img src={gif.images.fixed_height.url} alt={gif.title} />
      <div className="gif-title">{gif.title}</div>
      {/* <button onClick={onFavoriteToggle}>
        {isFavorite ? 'Unfavorite' : 'Favorite'}
      </button> */}
    </div>
  );
}
