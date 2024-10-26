import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"; import { Link } from "react-router-dom";



const Social: React.FC = () => {
  return (
    <div>
      <div className="flex gap-3 p-3 lg:p-0 text-3xl text-white">
        <Link target="_blank" to={'https://github.com/Murphyner'} className="opacity-50 transition-all duration-300 hover:opacity-100" >
            <FaGithub />
        </Link>
        <Link target="_blank" to={'https://www.linkedin.com/in/agshin-mustafazade-b08391211/'} className="opacity-50 transition-all duration-300 hover:opacity-100" >
            <FaLinkedin />
        </Link>
        <a href="mailto:znagshin@gmail.com" className="opacity-50 transition-all duration-300 hover:opacity-100" >
            <FaEnvelope />
        </a>
        <a target="_blank" href="https://wa.me/+9940506371535" className="opacity-50 transition-all duration-300 hover:opacity-100" >
            <FaWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default Social
