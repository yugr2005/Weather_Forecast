import { useState } from "react";
import axios from "axios";
import { Card } from "./Card";

export function Button() {

    const [search, setSearch] = useState("Edison");
    const [hello, setData] = useState("");

    return (
        <>
            {/* Navbar container */}
            <div className="navbar">
                {/* Heading on the left */}
                <h1>Weather Forecast</h1>

                {/* Search bar in the center */}
                <div className="navbar-center">
                    <input
                        className="input-field"
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Button on the right */}
                <button
                    className="btn"
                    onClick={async () => {
                        const response = await axios.post("http://localhost:3333/weather", { city: search });
                        const data = response.data;
                        setData(data.data);
                    }}
                >
                    Search
                </button>
            </div>

            {/* Display weather card */}
            {hello ? <Card data={hello} /> : <p>No data found</p>}
        </>
    );
}
