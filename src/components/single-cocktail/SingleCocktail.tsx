import {FC, useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Cocktail from "../../models/cocktailModel";

interface ISingleCocktailProps {
    cocktail: Cocktail;
}

const SingleCocktail: FC<ISingleCocktailProps> = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const {
        cocktail: {
            idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions
        },
    } = props;

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    }



    return (
        /*<div
            className="cocktail"
            key={idDrink}
        >
            <img
                src={strDrinkThumb}
                alt={strDrink}
            />
            <div className="cocktail-footer">
                <h3>{strDrink}</h3>
                <h4>{strAlcoholic}</h4>
                <p>{strGlass}</p>
                <p>{strInstructions}</p>
            </div>
        </div>*/


        /*container flex row bg slate*/




        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-200">
            <img className="w-full"
                 src={strDrinkThumb}
                    alt={strDrink}
            />
            <div className="px-6 py-4 flex flex-row justify-between">
                <div className="font-bold text-xl mb-2">Name: {strDrink}</div>
                {isFavorite ? <FavoriteIcon
                    sx={{'&:hover': {fill: 'red', cursor: 'pointer'}}}
                    onClick={handleFavorite}
                    />
                    : <FavoriteBorderIcon
                    sx={{'&:hover': {fill: 'red', cursor: 'pointer'}}}
                    onClick={handleFavorite}
                />}
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
        </div>
    );
}

export default SingleCocktail;