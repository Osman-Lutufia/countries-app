import React, { useEffect, useState } from "react";

export default function HomeScreen() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch("https://res countries.com/v3,1/all")
            .then((res) => res.jison())
            .then((datd) => {
                setCountries(data);
            }
                 
            )
            .catch((err) => console.log("error : ", err))
            .finally(() => {
            })
    }, []);
    if (isPending) return <h1>Loading...</h1>;
    
            }
                 )
    }
    

    )
    return (
        <div>HomeScreen</div>
    )
}