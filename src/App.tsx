import React, {FC, useEffect} from 'react';
import {getCocktails} from "./features/cocktails/coktails";
import './App.css';
import SingleCocktail from "./components/single-cocktail/SingleCocktail";
import {useAppDispatch, useAppSelector} from "./hooks/useTypedSelector";
import Navbar from "./components/header/Navbar";
import Carousel from "./components/header/Carousel";

const App: FC = () => {

  return (
      <div>
        <Navbar />
          <Carousel />
      </div>
  );
}

export default App;
