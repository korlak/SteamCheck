import React from 'react';
import hexagonImg from '../img/hexagon.png';


const importAll = (r) => {
    return r.keys().map(r);
};

const images = importAll(require.context('../img/games/', false, /\.(png|jpe?g|svg|webp)$/));

const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
};

const getRandomPattern = () => {
    let max = 2
    return [getRandomIndex(max), getRandomIndex(max),getRandomIndex(max),getRandomIndex(max),getRandomIndex(max),getRandomIndex(max)];
};

const Prolog = () => {
    const styleNone = {
        background: 'transparent',
    };

    const style = (img) => ({
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${img})`,
        backgroundSize: "cover",
    });

    const tempStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${hexagonImg})`,
        backgroundSize: "cover",
    }



    const pattern = [
        getRandomPattern(getRandomIndex()),
        getRandomPattern(getRandomIndex()),
        getRandomPattern(getRandomIndex()),
        getRandomPattern(getRandomIndex()),
        getRandomPattern(getRandomIndex()),
    ];

    //
    //
    // ЗРОБИТИ РАНДОМІЗАЦІЮ ПАТЕРНУ КОЛИ КОРИСТУВАЧ НАТИКАСКАЄ НА ЛЮБИЙ ШЕСТИКУТНИК
    //
    //
    //

    const renderHexagons = () => {
        return pattern.map((row, rowIndex) => {
            const rowClass = rowIndex % 2 === 0 ? 'presentation-visual-row1' : 'presentation-visual-row2';
            return (
                <div className={`presentation-visual-row ${rowClass}`} key={rowIndex}>
                    {row.map((value, colIndex) => {
                        const randomIndex = getRandomIndex(images.length);
                        return (
                            <div
                                className="hexagon"
                                key={colIndex}
                                style={value === 1 ? tempStyle : styleNone} //style[images[randomIndex]] tempStyle
                            />
                        );
                    })}
                </div>
            );
        });
    };
    return (
        <div className="presentation">
            <div className="presentation-visual">
                {renderHexagons()}
            </div>
            <div className="presentation-text"><span className="presentation-text-mini">WELCOME TO</span><br/>PERFECTRUNS</div>
            <div className="presentation-text2">
                Тут ви можете ділитись своїми<br />досягненнями з різних ігор
            </div>
        </div>
    );
};

export default Prolog;
