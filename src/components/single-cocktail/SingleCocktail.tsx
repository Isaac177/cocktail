import React, {FC, useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Cocktail from "../../models/cocktailModel";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import CocktailPage from "../coktail-page";
import { setSelected} from "../../features/popupSlice";

interface ISingleCocktailProps {
    cocktail: Cocktail;
}

const SingleCocktail: FC<ISingleCocktailProps> = (props) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const dispatch = useAppDispatch();

    const {
        cocktail: {
            idDrink, strDrink, strDrinkThumb, strInstructions, strAlcoholic, strGlass
        }
    } = props;

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    const handleClick = () => {
        const dataCock = {idDrink, strDrink, strDrinkThumb, strInstructions, strAlcoholic, strGlass};
        dispatch(setSelected(dataCock));
        setShowPopup(true);
    }

    const handleCancel = () => {
        setShowPopup(false);
    }

    return (
        <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-200 mt-10
            hover:max-w-md hover:shadow-2xl hover:transition-all hover:duration-500
            cursor-pointer"
            onClick={handleClick}
            key={idDrink}
        >
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
            {showPopup && <CocktailPage
                handleCancel={handleCancel}
            />}

        </div>
    );
}

export default SingleCocktail;