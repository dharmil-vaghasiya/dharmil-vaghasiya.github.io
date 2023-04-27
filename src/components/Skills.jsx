import React from 'react'

export default function Skills({ skills }) {
  return (
    <div id="skills">
       <h2><i className="fa fa-tasks left"></i> SKILLS</h2>
        {
            skills.map((skill, index) => {
                return <SkillItem key={`skill-${index}`} {...skill} />
            })
        }
    </div>
  )
}


function SkillItem({ name, keywords }) {
    return (
        <div>
            <h3 className="skills">{name}</h3>
            {
                keywords.map((keyword, index) => {
                    return <span className="keywords" key={`index-${index}`}>{keyword}</span>
                })
            }
        </div>
    )
}

