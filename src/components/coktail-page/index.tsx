import React from 'react';
import { useAppSelector} from "../../hooks/useTypedSelector";
import './popup.css';



const CocktailPage = ({handleCancel}) => {
    const {selected} = useAppSelector(state => state.popup);
    console.log(selected);

    return (
        <>
            {selected.length === 1 ? selected.map((item: any) => {
                return (<div className="fixed z-10 popup" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    {/*image and text side by side*/}
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <img src={item.strDrinkThumb} alt="" className="w-200 h-100 rounded"/>
                        </div>
                        <div className="flex flex-col mt-20">
                            <div className="flex flex-row ml-4 items-center">
                                <h1 className="text-2xl font-bold">Name:</h1>
                                <h1 className="text-2xl font-bold mx-4">{item.strDrink}</h1>
                            </div>
                            <div className="flex flex-row ml-4 items-center">
                                <h1 className="text-2xl font-bold">Alcoholic:</h1>
                                <h1 className="text-2xl font-bold mx-4">{item.strAlcoholic}</h1>
                            </div>
                            <div className="flex flex-row ml-4 items-center">
                                <h1 className="text-2xl font-bold">Glass:</h1>
                                <h1 className="text-2xl font-bold mx-4">{item.strGlass}</h1>
                            </div>
                            <h1 className="text-2xl font-bold ml-4">Instructions:</h1>
                            <div className="flex flex-row ml-4 items-center mt-10">
                                <p className="text-gray-500">{item.strInstructions}</p>
                            </div>
                            <div className="flex flex-row ml-4 items-center mt-20 justify-center">
                                <button
                                    className="bg-gradient-to-r from-pink-900 to-purple-900 hover:from-pink-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded-full
                                     font-bold py-2 px-4 rounded">
                                    Validate
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ml-4
                                    text-white font-bold py-2 px-4 rounded"
                                    onClick={handleCancel}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                        </div>)
            }) : null}
        </>
    );
};

export default CocktailPage;