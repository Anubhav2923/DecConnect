import { X } from "lucide-react";
import { useState } from "react"

const SkillsSection = ({userData, isOwnProfile, onSave}) => {

  const[isEditing, setIsEditing] = useState(false);
  const [skills, setSkills] = useState(userData.skills || []);
  const[newSkills, setNewSkills] = useState("");

  const handleAddSkills = ()=> {
    if(newSkills && !skills.includes(newSkills)) {
      setSkills([...skills, newSkills]);
      setNewSkills("");
    }
  };

  const handleDeleteSkills = (skill) => {
    setSkills(skill.filter((s)=> s !== skill));
  }

  const handleSave =()=> {
    onSave({skills});
    setIsEditing(false);
  }


  return (
    <div className="bg-white shadow rounded-lg p-6  ">
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      <div className="flex flex-wrap">
          {skills.map((skill, index)=>(
            <span key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 flex items-center"
            >
              {skill}
              {isEditing && (
                <button
                  onClick={()=> handleDeleteSkills(skill)} className="m-2 text-red-500"
                >
                  <X size={20} />
                </button>
              )}
            </span>
          ))}
      </div>

      {isEditing && (
        <div className="mt-4 flex">
            <input 
              type="text"
              placeholder="New Skill"
              value={newSkills}
              onChange={(e)=> setNewSkills(e.target.value)}
              className="flex-grow p-2 border rounded-1"
            />

            <button
              onClick={handleAddSkills}
              className="bg-primary text-white py-2 px-4 rounded-r hover:bg-primary-dark transition duration-300"
            >
              Add Skill
            </button>
        </div>
      )}

      {isOwnProfile && (
        <>
          {isEditing ?(
              <button
                onClick={handleSave}
                className="mt-4 text-primary hover:text-primary-dark transition duration-300"
              >
                Save Changes
              </button>
          ):(
              <button 
                onClick={()=> setIsEditing(true)}
                className="mt-4 text-primary hover:text-primary-dark transition duration-300"
              >
                  Edit Skills
              </button>
          )}
        </>
      )}


    </div>
  )
}

export default SkillsSection