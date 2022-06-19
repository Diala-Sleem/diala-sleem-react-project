import React , { useContext } from "react";
import {UserContext} from '../../UserContext/UserContext'
import './About.css'
  
export default function AboutMe () {
    const { contextValue, setContextValue } = useContext(UserContext);

  return (
    <div className="about-container">
      <div className="about-parent">
        <p>{contextValue.length}</p>
        <p>
          At this stage we can verify that we have indeed created a triangle. To
          fix the alignment, we'll use my favorite CSS grid hack (old hat to you
          if you've read a few articles around here!). Old CSS solution:
          position: absolute New CSS solution: A single grid-template-areas to
          contain them all First we'll define our area, then define that the
          select and the ::after both use it. The name is scoped to the element
          its created for, and we'll keep it easy by calling it "select":
        </p>
      </div>
    </div>
  );
}

