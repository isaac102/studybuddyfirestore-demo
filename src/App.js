

import { QuerySnapshot } from '@firebase/firestore';
import React, { useState, useEffect } from 'react';
import firebase from './firebase';


function App() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("classes");

  function getClasses(){
    setLoading(true);
    ref.onSnapshot((QuerySnapshot) => {
      const items = [];
      QuerySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setClasses(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getClasses();
  }, []);

  if(loading){
    return <h1>Loading...</h1>;
  }

  return (
    <div >
      <h1>Classes</h1>
      {classes.map((course) => (
        
        <div key={course.location}>
          <h2>{course.name}</h2>
          <div>Location: {course.location}</div>
          <div>Peers:</div>
          <ul>
            {course.peers.map(item => {
            return <li>{item}</li>;
        })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
