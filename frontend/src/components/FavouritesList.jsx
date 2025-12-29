import "../styles/FavouritesList.css";

function FavouritesList({ favourites, removeFavourite, clearFavourites }) {
    return (
        <aside className="favourites">
            <h3>Favourites</h3>

            <button onClick={clearFavourites}>Clear All</button>

            {favourites.length === 0 && <p>No favourites yet</p>}

            {favourites.map((property) => (
                <div key={property.id} className="favourite-item">
                    £{property.price.toLocaleString()} – {property.postcode}
                    <button
                        onClick={() => removeFavourite(property.id)}
                        className="remove-btn"
                    >
                        ❌
                    </button>
                </div>
            ))}
        </aside>
    );
}

export default FavouritesList;
