import React from 'react';



const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-red-500">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <p className="mt-8 text-center text-base text-white">
                    &copy; {date} Cocktail App, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;