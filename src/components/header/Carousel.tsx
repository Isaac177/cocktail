import React, {FC, useEffect} from 'react';
import HeroSlider, { Slide, Overlay, Nav } from 'hero-slider';

import {getCocktails} from "../../features/cocktails/coktails";
import {useAppDispatch, useAppSelector} from "../../hooks/useTypedSelector";
import Wrapper from "../wrapper";




const Carousel = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch]);

    console.log(useAppSelector(state => state.cocktails.data));

    const {data} = useAppSelector(state => state.cocktails);

    return (
        <HeroSlider
            height="100vh"
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide: number) =>
                    console.debug('onSliding(nextSlide): ', nextSlide),
                onBeforeSliding: (previousSlide: number, nextSlide: number) =>
                    console.debug(
                        'onBeforeSliding(previousSlide, nextSlide): ',
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide: number) =>
                    console.debug('onAfterSliding(nextSlide): ', nextSlide)
            }}
        >
            <Overlay>
                {/*position Middle start*/}
                <div className="flex flex-col items-center justify-center h-full bg-secondary">
                    <h1 className="text-5xl font-bold text-white">Find Your Taste</h1>
                    {/*Subtitle about cocktail*/}
                    <p className="text-2xl text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores.</p>
                    {/*Button with bg grandient dark-blue to dark-pink*/}
                    <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">Find Your Taste</button>
                </div>
            </Overlay>

            <Slide
                label="Giau Pass - Italy"
                background={{
                    backgroundImageSrc: "https://www.thecocktaildb.com/images/media/drink/808mxk1487602471.jpg"
                }}
            />
            <Slide
                label="Bogliasco - Italy"
                background={{
                    backgroundImageSrc: "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg"
                }}
            />
            <Slide
                label="County Clare - Ireland"
                background={{
                    backgroundImageSrc: "https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg"
                }}
            />
            <Slide
                label="Crater Rock, OR - United States"
                background={{
                    backgroundImageSrc: "https://www.thecocktaildb.com/images/media/drink/upusyu1472667977.jpg"
                }}
            />
            <Nav />
        </HeroSlider>

    );
};

export default Carousel;