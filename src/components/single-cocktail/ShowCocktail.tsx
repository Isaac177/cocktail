import React, {FC, useEffect} from 'react';
import {getCocktails} from "../../features/cocktails/coktails";
import SingleCocktail from "../single-cocktail/SingleCocktail";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";

const ShowCocktail: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch]);

    const {data, loading} = useAppSelector(state => state.cocktails);

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            {
                loading ? <h1>Loading...</h1> : Object.values(data).map((item: any) => {
                    console.log(item.strDrink);
                    return (
                        item.map((item: any) =>
                            <SingleCocktail cocktail={item}/>
                        )
                    )
                })
            }
        </div>
    );
}

export default ShowCocktail;