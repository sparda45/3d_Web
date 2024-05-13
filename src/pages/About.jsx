import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
<h1 className='head-text'>
  Hello I'm <span className='blue-gradient_text font-semibold drop-shadow'>Dyaz</span>
</h1>
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>
      
As a dynamic professional, I currently lead GDSC at Esa Unggul University, fostering a thriving tech community. My experience spans UI/UX design at Potatos Studio, content creation at Kemendikbud, and mobile development in the Bangkit Cohort. Beyond design and development, I excel in motion design and video editing, bridging technology and design seamlessly. I believe in technology's power to build communities and am committed to nurturing collaborative spaces. Let's connect and explore how my diverse skills and community leadership can enhance our projects. Open to networking and passionate discussions on technology and design's future.
      </p>
    </div>

    <div className='py-10 flex flex-col'>
    <h3 className='subhead-text'>My Skills</h3>

    
    <div className='mt-16 flex flex-wrap gap-12'>
      {skills.map((skill)=>
    <div className='block-container w-20 h-20'>
      <div className='btn-back rounded-xl'/>
      <div className='btn-front rounded-xl flex justify-center items-center'>
        <img 
        src={skill.imageUrl} 
        alt={skill.name}
        className='w-1/2 h-1/2 object-contain' />
      </div>
    </div>
    )}
    </div>
    </div>

    <div className='py-6'>
    <h3 className='subhead-text'> My Work Experience </h3>
    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
      <p>i've been work with all of sorts company and  leveling up my skills also teaming up with smart people. here's the rundown:
      </p>
    </div>

    <div className='mt-12 flex'>
      <VerticalTimeline>
        {experiences.map((experience) => (
          <VerticalTimelineElement
          key={experience.company_name}
          date={experience.date}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
          iconStyle={{background: experience.iconBg}}
          contentStyle={{
            borderBottom: '8px',
            borderStyle: 'solid',
            borderBottomColor: experience.iconBg,
            boxShadow: 'none'
          }}
          >
            <div>
              <h3 className='text-black text-xl font-poppins font-semibold'>
                {experience.title}
              </h3>
              <p className='text-black-500 font-medium '
              style={{margin:0}}
              >
                {experience.company_name}
              </p>
            </div>
            <ul className='my-5 list-disc ml-5 space-y-2'>
           {experience.points.map((point, index)=> (
            <li 
            key={`experience-point-${index}`}
            className='text-black-500/50 font-normal pl-1 text-sm'>
              {point}
            </li>
           ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>

    </div>
   <hr className='border-slate-200'/>
  <CTA/>
    </section>
  )
}

export default About