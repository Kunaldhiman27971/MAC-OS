import React from 'react'
import Githubdata from "../../assets/github.json"
import MacWindow from './MacWindow'
import './Github.scss'

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repoLink: "",
    demoLink: ""
  }
}) => {
  return (
    <div className="card">
      <img src={data.image} alt={data.title} />
      <h1>{data.title}</h1>
      <p className='decription'>{data.description}</p>

      <div className="tags">
        {data.tags.map((tag, index) => (
          <p className="tag" key={index}>{tag}</p>
        ))}
      </div>

      <div className="urls">
        <div className="repository">
            <a href={data.repoLink} target='_blank'>Repository</a>
          
        </div>
        
        <div className="demo">
            {data.demoLink && <a href={data.demoLink} target='_blank'>Live Demo</a>}
        </div>
      </div>
    </div>
  )
}

const GitHub=({windowName,windowState,setWindowState}) =>{
  return (
   <MacWindow windowName={windowName}  setWindowState={setWindowState} > 
        <div className="cards">
            {Githubdata.map(project=>{
                return <GitCard data={project}/>
            })}
        </div>
    </MacWindow>
  )
}

export default GitHub;
