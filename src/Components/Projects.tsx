import { useEffect, useRef } from 'react';
import ProjectCard from './ProjectCard';

interface setActive {
    setProjects: React.Dispatch<React.SetStateAction<boolean>>;
}

const Projects: React.FC<setActive> = ({setProjects}) => {
    const projectRef = useRef<HTMLDivElement | null>(null);
    console.log(projectRef.current);
    

    useEffect(() => {
        if (!projectRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    
                    if (entry.isIntersecting) {
                        setProjects(true)                        
                    }
                    else if (!entry.isIntersecting) {
                        setProjects(false)
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(projectRef.current);

        return () => observer.disconnect();
    }, [setProjects, projectRef.current]);

    const projects = [
        {
            time: '/src/assets/images/netflix.png',
            title: 'Netflix website clone',
            link: "https://netflixclone-tau-rose.vercel.app/",
            description: "This Netflix clone app offers a smooth login experience, allowing users to explore and enjoy a wide range of movies and TV shows. Built with modern web technologies, it delivers a sleek, responsive design and an intuitive user interface, closely resembling the original Netflix platform.",
            technologies: ["JavaScript", "TailwindCSS" , 'React' , 'Redux' , "Firebase" , "React-Router" ]
        },
        {
            time: "/src//assets/images/starbucks.png",
            title: 'Starbucks website clone',
            link: "https://starbucks-silk.vercel.app/",
            description: "This Starbucks clone offers users a visually stunning and interactive experience, mirroring the official site’s aesthetic. Built with modern web technologies, it features a responsive layout for seamless browsing, smooth animations for an engaging user experience, and efficient state management for handling user interactions. The application is designed for performance and optimized for various devices.",
            technologies: ["JavaScript", "TailwindCSS"]
        },
        {
            time: "/src/assets/images/umico.png",
            title: 'Umico website clone',
            link: "https://umico.vercel.app/",
            description: "Umico is an e-commerce platform designed for a seamless online shopping experience. Featuring a responsive design and intuitive navigation, it enables users to browse products, perform efficient searches, and complete secure checkouts—all built with modern web technologies to ensure performance and usability.",
            technologies: ["JavaScript", "React", "Vite" ,"TailwindCSS"]
        },
        {
            time: "/src//assets/images/newsapp.png",
            title: 'News website clone',
            link: "https://newsapp-rust-eight.vercel.app/",
            description: "Stay up-to-date with global headlines through this dynamic NewsApp. Built with modern web frameworks, it features a responsive, category-based news feed that keeps users informed on trending topics. With an intuitive interface, smooth navigation, and an admin dashboard at /admin for managing content, this app ensures a seamless experience for both users and administrators.",
            technologies: ["React", "Redux", "Redux-thunk" ,"JavaScript", "TailwindCSS"]
        },
        {
            time: "/src/assets/images/mars.png",
            title: 'Mars website clone',
            link: "https://mars-teal.vercel.app/",
            description: "This Mars exploration app leverages modern web technologies to provide an interactive, immersive experience of the Red Planet. With responsive design, real-time data, and intuitive navigation, users can explore Mars' surface, track missions, and access planetary insights in a sleek, user-friendly interface.",
            technologies: ["JavaScript", "React", "React-Router" ,"TailwindCSS"]
        },
    ];

    return (
        <div>
            <div ref={projectRef} id='projects' className="flex flex-col gap-10">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        time= {project.time}
                        title={project.title}
                        link={project.link}
                        description={project.description}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
