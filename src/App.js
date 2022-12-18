import React from 'react';
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";
import NewBlock from "./components/NewBlock";
import MenuBlock from "./components/MenuBlock";

const App = () => {
    return (
        <div className='wrapper'>
            <Header/>
            <main className="page">
                <MainBlock/>
                <NewBlock/>
                <MenuBlock/>
            </main>
        </div>
    );
};

export default App;