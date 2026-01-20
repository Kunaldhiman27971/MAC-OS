import React from 'react'
import Githubdata from "../../assets/github.json"
import MacWindow from './MacWindow'
import './github.scss'

const GitCard = ({
  data = {
    id: 1,
    image: "",
    title: "",
    description: "",
    tags: [],
    repolink: "",
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
            <a href={data.repolink}>Repository</a>
            <img className='github' src="./public/doc-icons/github.svg" alt="" />
        </div>
        
        <div className="demo">
            {data.demoLink && <a href={data.demolink}>Live Demo</a>}
            {data.demoLink && <img className='link' src="./public/doc-icons/link.svg" alt="" />}
        </div>
      </div>
    </div>
  )
}

const GitHub=() =>{
  return (
   <MacWindow> 
        <div className="cards">
            {Githubdata.map(project=>{
                return <GitCard data={project}/>
            })}
        </div>
    </MacWindow>
  )
}

export default GitHub;
