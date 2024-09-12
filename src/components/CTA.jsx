import React from 'react'
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
 <p className='cta-text'>
 Wanna Work With me?<br className='sm:block hidden' />
        Just Contact Me!!
 </p>
 <Link to='/contacts' className='btn'>
    Contact
</Link>
    </section>
  )
}

export default CTA