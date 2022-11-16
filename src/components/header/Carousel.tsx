import React, { useEffect} from 'react';
import HeroSlider, { Slide, Overlay } from 'hero-slider';
import {getCocktails} from "../../features/cocktails/coktails";
import {useAppDispatch} from "../../hooks/useTypedSelector";



const Carousel = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getCocktails());
    }, [dispatch]);

    console.log(dispatch(getCocktails()));

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
                <div className="flex flex-col items-center justify-center h-full backdrop-brightness-50">
                    <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-900 to-pink-600 m-10"> The Cocktail Store</h1>
                    <p className="text-2xl text-white m-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, asperiores.</p>
                    <button className="bg-gradient-to-r from-purple-900 to-pink-500 text-white font-bold py-2 px-4 rounded-2xl hover:bg-pink-100">Find Your Taste</button>
                </div>
            </Overlay>

            <Slide
                label="first img"
                background={{
                    backgroundImageSrc: "https://www.thecocktaildb.com/images/media/drink/pwgtpa1504366376.jpg"
                }}
            />
            <Slide
                label="second img"
                background={{
                    backgroundImageSrc: "https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg"
                }}
            />
            <Slide
                label="third img"
                background={{
                    backgroundImageSrc: "https://www.thecocktaildb.com/images/media/drink/wwpyvr1461919316.jpg"
                }}
            />
            <Slide
                label="fourth img"
                background={{
                    backgroundImageSrc: "https://www.thecocktaildb.com/images/media/drink/vr6kle1504886114.jpg"
                }}
            />
        </HeroSlider>
    );
};

export default Carousel;