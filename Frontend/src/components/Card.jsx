export function Card({ data }) {
    return (
        <div className="card">
            <img src={data.iconURL} alt="Weather Icon" className="card-icon" />
            <h2 className="card-temp">{data.temp} °C</h2>
            <h5 className="card-city">{data.city}</h5>
            <h5 className="card-country">{data.country}</h5>
        </div>
    );
}
