import { useEffect, useRef } from "react";
const skills = [
    { name: "HTML", level: "Advanced", width: "90%" },
    { name: "CSS, Sass, Bootstrap & TailwindCSS", level: "Advanced", width: "85%" },
    { name: "JavaScript, JQuery", level: "Advanced", width: "80%" },
    { name: "React", level: "Advanced", width: "75%" },
    { name: "UI design in Figma", level: "Regular", width: "50%" }
];

interface setActive {
    setDetails: React.Dispatch<React.SetStateAction<boolean>>;
}
const Details: React.FC<setActive> = ({setDetails}) => {
    const detailtRef = useRef<HTMLDivElement | null>(null);
    console.log(detailtRef.current);


    useEffect(() => {
        if (!detailtRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setDetails(true)

                    }
                    else if (!entry.isIntersecting) {
                        setDetails(false)
                    }
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(detailtRef.current);

        return () => observer.disconnect();
    }, [setDetails, detailtRef.current]);
  return (
      <div className="p-3 lg:p-0 lg:py-5">
          <div ref={detailtRef} id="details" className="flex flex-col">
              <div className="text-white font-Poppin opacity-50  text-sm flex flex-col gap-3">
                  <h2 className="text-xl font-Poppin font-bold">My path</h2>
                  <p>"I am a passionate web developer with a robust background in modern programming languages and frameworks. Over time, I’ve built proficiency in <strong>JavaScript</strong> and mastered libraries and frameworks like <strong>React</strong>, <strong>Redux</strong>, and <strong>jQuery</strong>, which allow me to create dynamic and highly interactive user experiences. My design skills are supported by tools such as <strong>Figma</strong>, where I bring UI concepts to life, along with extensive use of <strong>Tailwind CSS</strong>, <strong>Bootstrap</strong>, and <strong>Sass</strong> for responsive, visually appealing interfaces.</p>

                  <p>My learning journey is continuous, and I’m always excited to dive into new tools and technologies. Currently, I am expanding my skill set by learning <strong>GSAP</strong> to create advanced animations, <strong>TypeScript</strong> for better code scalability, <strong>Angular</strong> for powerful frontend applications, and <strong>Node.js</strong> to gain backend development capabilities. With each new technology, I am focused on developing versatile skills that keep me adaptable and ready for innovative challenges in the tech field."</p>

              </div>
              <div>
                  <div className="font-Poppin text-sm">
                      <h2 className="text-2xl text-white my-4">Technologies</h2>
                      <div className="space-y-4">
                          {skills.map((skill, index) => (
                              <div key={index}>
                                  <div className="flex justify-between">
                                      <span className="text-white">{skill.name}</span>
                                      <span className="text-gray-400">{skill.level}</span>
                                  </div>
                                  <div className="w-full bg-gray-700 rounded-full h-4">
                                      <div
                                          className="bg-gradient-to-r from-blue-400 to-purple-500 h-4 rounded-full"
                                          style={{ width: skill.width }}
                                      ></div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Details
