import { useState , useEffect} from "react";
import profilePic from './use.jpg';
import './App.css';

function App(){

    const [follows , setFollows ] = useState(100)
    const [likes  , setlikes  ] = useState(220)
    const [photos  , setphotos ] = useState(890)

    return (
        <div className="card">
        <img src={profilePic} className="profile-pic" />
        <h2>Wali</h2>
        <p className="location"> Chandigarh </p>

        <div className="stats">
    <div className="stat">
      <button className="stat-value" onClick={() => {setFollows(follows+1)}}>{follows}</button>
        <div>Followers</div>
    </div>
    <div className="stat">
    <button className="stat-value" onClick={() => {setlikes(likes+1)}}>{likes}</button>
        <div>Likes</div>
    </div>
    <div className="stat">
    <button className="stat-value" onClick={() => {setphotos(photos+1)}}>{photos}</button>
        <div>Photos</div>
    </div>
</div>
        
        
        
        </div>
    )
}

export default App