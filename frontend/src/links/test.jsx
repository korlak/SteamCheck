import { useState, useEffect } from "react";

export default function Test() {


    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/test')
            .then(res => res.json())
            .then(res => setData(res.message));
    }, []);

    return (
        <>
            {data ? data : "Завантаження..."}
        </>
    )
}