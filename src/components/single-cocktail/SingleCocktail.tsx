import {FC} from 'react';

import Cocktail from "../../models/cocktailModel";

interface ISingleCocktailProps {
    cocktail: Cocktail;
}

const SingleCocktail: FC<ISingleCocktailProps> = (props) => {
    const {
        cocktail: {
            idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions
        },
    } = props;

    return (
        <div
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
        </div>
    );
}

export default SingleCocktail;