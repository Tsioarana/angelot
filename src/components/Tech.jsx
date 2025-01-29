import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import JavaScript from "../assets/tech/javascript.png";
import bootstrap from "../assets/tech/bootstrap.png";
import Tailwind from "../assets/tech/tailwind.png";
import react from "../assets/tech/reactjs.png";
import next from "../assets/tech/NextJS.png";
import django from "../assets/tech/django.png";
import git from "../assets/tech/git.png";
import github from "../assets/tech/github.png";
import Photoshop from "../assets/tech/photoshop.png";
import Illustrator from "../assets/tech/illustrator.png";
import Canva from "../assets/tech/Canva.png";
import capcut from "../assets/tech/capcut.png";
import StudioOne from "../assets/tech/studios.png";



// URL des images de logos de technologies et logiciels
const techItems = [
  { title: "HTML", imageUrl: html },
  { title: "CSS", imageUrl: css },
  { title: "JavaScript", imageUrl: JavaScript },
  { title: "Bootstrap", imageUrl: bootstrap },
  { title: "Tailwind", imageUrl: Tailwind },
  { title: "React.js", imageUrl: react },
  { title: "Next.js", imageUrl: next },
  { title: "Django", imageUrl: django },
  { title: "Git", imageUrl: git },
  { title: "GitHub", imageUrl: github },
  { title: "Photoshop", imageUrl: Photoshop },
  { title: "Illustrator", imageUrl: Illustrator },
  { title: "Canva", imageUrl: Canva },
  { title: "CapCut", imageUrl: capcut },
  { title: "Studio One", imageUrl:  StudioOne}
];

const Tech = ({ index }) => {
  return (
    <div>
      <div>
        
        <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        >
          <p className={`${styles.sectionSubText} text-center`}>
            Compétences technologiques
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Compétences</h2>
        </motion.div>

        <div className="grid gap-6 mt-8">
          {/* Ligne 1 (5 éléments) */}
          <div className="flex gap-10 flex-wrap justify-center" style={{margin: "auto"}}>
            {techItems.slice(0, 5).map((tech, index) => (
              <motion.div
                variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                key={tech.title}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className=" bg-slate-900 green-pink-gradient p-[1px] rounded-[shadow-card20px]"
                style={{
                  borderRadius: "10px",
                }}
                
              >
                <div className="flex flex-col items-center group justify-center bg-slate-900"
                    style={{
                      width: "120px",          
                      height: "120px",     
                      margin: "auto",
                    }}
                    >
                <img
                  src={tech.imageUrl}
                  alt={`${tech.title} logo`}
                  className="w-12 h-12 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
                />
                <span className="text-white mt-2 text-sm">{tech.title}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ligne 2 (4 éléments) */}
          <div className="flex gap-10 flex-wrap justify-center" style={{margin: "auto"}}>
            {techItems.slice(5, 9).map((tech, index) => (
              <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              key={tech.title}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className=" bg-slate-900 green-pink-gradient p-[1px] rounded-[shadow-card20px]"
              style={{
                borderRadius: "10px",
              }}
              
            >
              <div className="flex flex-col items-center group justify-center bg-slate-900"
                  style={{
                    width: "120px",          
                    height: "120px",     
                    margin: "auto",
                  }}
                  >
              <img
                src={tech.imageUrl}
                alt={`${tech.title} logo`}
                className="w-12 h-12 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm">{tech.title}</span>
              </div>
            </motion.div>
            ))}
          </div>

          {/* Ligne 3 (3 éléments) */}
          <div className="flex gap-10 flex-wrap justify-center" style={{margin: "auto"}}>
            {techItems.slice(9, 12).map((tech, index) => (
              <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              key={tech.title}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className=" bg-slate-900 green-pink-gradient p-[1px] rounded-[shadow-card20px]"
              style={{
                borderRadius: "10px",
              }}
              
            >
              <div className="flex flex-col items-center group justify-center bg-slate-900"
                  style={{
                    width: "120px",          
                    height: "120px",     
                    margin: "auto",
                  }}
                  >
              <img
                src={tech.imageUrl}
                alt={`${tech.title} logo`}
                className="w-12 h-12 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm">{tech.title}</span>
              </div>
            </motion.div>
            ))}
          </div>

          {/* Ligne 4 (2 éléments) */}
          <div className="flex gap-10 flex-wrap justify-center" style={{margin: "auto"}}>
            {techItems.slice(12, 14).map((tech, index) => (
              <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              key={tech.title}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className=" bg-slate-900 green-pink-gradient p-[1px] rounded-[shadow-card20px]"
              style={{
                borderRadius: "10px",
              }}
              
            >
              <div className="flex flex-col items-center group justify-center bg-slate-900"
                  style={{
                    width: "120px",          
                    height: "120px",     
                    margin: "auto",
                  }}
                  >
              <img
                src={tech.imageUrl}
                alt={`${tech.title} logo`}
                className="w-12 h-12 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm">{tech.title}</span>
              </div>
            </motion.div>
            ))}
          </div>

          {/* Ligne 5 (1 élément) */}
          <div className="flex gap-10 flex-wrap justify-center" style={{margin: "auto"}}>
            {techItems.slice(14, 15).map((tech, index) => (
              <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              key={tech.title}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className=" bg-slate-900 green-pink-gradient p-[1px] rounded-[shadow-card20px]"
              style={{
                borderRadius: "10px",
              }}
              
            >
              <div className="flex flex-col items-center group justify-center bg-slate-900"
                  style={{
                    width: "120px",          
                    height: "120px",     
                    margin: "auto",
                  }}
                  >
              <img
                src={tech.imageUrl}
                alt={`${tech.title} logo`}
                className="w-12 h-12 object-contain group-hover:scale-125 group-hover:shadow-lg transition duration-300 ease-in-out"
              />
              <span className="text-white mt-2 text-sm">{tech.title}</span>
              </div>
            </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "competence");
