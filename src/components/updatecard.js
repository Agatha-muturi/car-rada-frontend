import { getAlternativeRoute } from "../api/ors";

const Updatecard=({update})=>{
    // src/api/ors.js
const handleAlternativeRoute = async () => {
    try {
      const start = "36.8219, -1.2921"; // Example Nairobi coords
      const end = "36.9062, -1.2804";   // Example destination

      const route = await getAlternativeRoute(start, end);
      console.log("Alternative route:", route);
      alert("Check console for route data!");
        } catch (err) {
        console.error(err);
        alert("Could not fetch alternative route");
        }
    };
    return(
        <div className="update-card">
            <h3>{update.location}</h3>
            <p>{update.cause}</p>
            {update.photo && 
            <img src={update.photo} alt="traffic"/>}
            <small>posted at {update.time}</small>
            <button onClick={handleAlternativeRoute}>alternative route</button>
        </div>
    );
}
export default Updatecard;