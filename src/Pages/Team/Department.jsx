import React from 'react';
import "./team.css";
import Departments from "./Departments.json";
import { useParams, Navigate } from 'react-router-dom';
import TeamCard from "./TeamCard";



export default function Department() {
  const { department } = useParams();
  if (department === "all-departments" || department in Departments) {
    const currentDepartment = Departments[department];
    return (
      <div className="team-page department-page">
        <section className="department-hero-section">
          <div className="left-section">
            <div className="title">{currentDepartment.name}</div>
            <div className="sub-title">Department</div>
            <div className="mentor-card-container">
              {
                currentDepartment.departmentLeads.map(departmentLead => {
                  return (
                    <TeamCard key={departmentLead.id}
                          memberImage={departmentLead.memberImage}
                          memberName={departmentLead.memberName}
                          memberStatus={departmentLead.memberStatus}
                          memberAbout={departmentLead.memberAbout}
                          memberSocialLinkedinPath={departmentLead.memberSocialLinkedinPath}
                          memberSocialGithubPath={departmentLead.memberSocialGithubPath}
                          memberSocialMailPath={departmentLead.memberSocialMailPath}
                    />
                  )
                })
              }
            </div>
          </div>
          <div className="right-section">
            <img src={currentDepartment.heroImage} alt="" />
          </div>
        </section>
        <section className="department-members">
          {
            currentDepartment.members.map(member => {
              return (
                <TeamCard key={member.id}
                          memberImage={member.memberImage}
                          memberName={member.memberName}
                          memberStatus={member.memberStatus}
                          memberAbout={member.memberAbout}
                          memberSocialLinkedinPath={member.memberSocialLinkedinPath}
                          memberSocialGithubPath={member.memberSocialGithubPath}
                          memberSocialMailPath={member.memberSocialMailPath}
                />
              )
            })
          }
        </section>
      </div>
    )
  }
  else return ( <Navigate to="/team" replace={true} /> )
}
