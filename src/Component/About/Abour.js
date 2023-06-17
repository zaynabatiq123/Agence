import React from 'react'
import img from '/Users/mac/Documents/project-organigramme/src/images/age.jpeg'
import img1 from '/Users/mac/Documents/project-organigramme/src/images/age1.jpeg'
import img2 from '/Users/mac/Documents/project-organigramme/src/images/age2.jpeg'
import img3 from '/Users/mac/Documents/project-organigramme/src/images/age3.jpeg'
import img4 from '/Users/mac/Documents/project-organigramme/src/images/age.jpeg'
import img5 from '/Users/mac/Documents/project-organigramme/src/images/mj2.jpeg'
import './About.css'

export default function About() {
  return (
    <>
 
    <section className="decoration">
        <h1>planches</h1>
        <div className="deco-list">
            <div className="deco">
                <img src={img}/>
                <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing. <br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img1}/>
                            <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img2}/>
                            <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img3}/>
                            <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img4}/>
                            <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
            <div className="deco">
            <img src={img5}/>

                <p>اجتماع مجلس الحوض الماء</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing.<br/></span>
                <button className="orange_link">Order the meeting</button>
            </div>
        </div>
    </section>
    
    
    
    
    </>
  )
}
