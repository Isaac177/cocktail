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
        <div className='flex flex-row flex-wrap items-center gap-2 justify-between min-h-screen py-4 px-4 bg-purple-200'>
            {
                loading ? <h1>Loading...</h1> : Object.values(data).map((item: any) => {
                    console.log(item.strDrink);
                    return item.slice(0, 8).map((item: any) =>
                        <SingleCocktail cocktail={item}/>
                    )
                })
            }
        </div>
    );
}

export default ShowCocktail;
