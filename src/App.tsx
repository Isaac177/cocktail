import React, {FC, useEffect} from 'react';
import {getCocktails} from "./features/cocktails/coktails";
import './App.css';
import SingleCocktail from "./components/single-cocktail/SingleCocktail";
import {useAppDispatch, useAppSelector} from "./hooks/useTypedSelector";

const App: FC = () => {
  const [dataState, setDataState] = React.useState<any>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCocktails());
    //convert data to array

  }, [dispatch]);

  const {data, loading} = useAppSelector(state => state.cocktails);
  console.log(data);

  return (
    //using tailwind
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        {
          loading ? <h1>Loading...</h1> : data.map((cocktail) => {
            return(
              <div className='flex flex-col items-center justify-center min-h-screen py-2'>
                <SingleCocktail key={cocktail.idDrink}  cocktail={cocktail}/>
              </div>
            )})
        }
        </div>
  );
}

export default App;
