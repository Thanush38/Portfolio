import React from 'react'
import './Skills.css'
import goImg from '../../../images/go.png'
import AltSkills from './AltSkills'
import {useState, useEffect} from 'react'

const Skills = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    function getCurrentDimension(){
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        }
    }
  
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);
    
        return(() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    const skillsData = [
        {
            title: "Languages",
            icons: [
                { src: "https://img.icons8.com/color/96/javascript--v1.png", alt: "javascript" },
                { src: "https://img.icons8.com/color/96/typescript.png", alt: "typescript" },
                { src: "https://img.icons8.com/color/96/python--v1.png", alt: "python" },
                { src: "https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png", alt: "java" },
                { src: "https://img.icons8.com/color/96/c-programming.png", alt: "c" },
                { src: "https://img.icons8.com/color/96/assembly.png", alt: "assembly" },
                { src: "https://img.icons8.com/ios-filled/100/A179DC/c-sharp-logo.png", alt: "c-sharp" },
                { src: goImg, alt: "go" },
                { src: "https://img.icons8.com/color/96/c-plus-plus-logo.png", alt: "c++" },
                { src: "https://img.icons8.com/color/96/swift.png", alt: "swift" },
            ]
        },
        {
            title: "Web",
            icons: [
                { src: "https://img.icons8.com/color/96/html-5--v1.png", alt: "html5" },
                { src: "https://img.icons8.com/color/96/bootstrap--v2.png", alt: "bootstrap" },
                { src: "https://img.icons8.com/color/96/css3.png", alt: "css3" },
                { src: "https://img.icons8.com/color/96/tailwind_css.png", alt: "tailwind" },
            ]
        },
        {
            title: "Backend",
            icons: [
                { src: "https://img.icons8.com/color/96/nodejs.png", alt: "nodejs" },
                { src: "https://img.icons8.com/color/96/express-js.png", alt: "express" },
            ]
        },
        {
            title: "Skills",
            content: "Throughout the years I have learned many languages, frameworks and multiple libraries. You can also view some of my work at my github or LinkedIn.",
            links: [
                { href: "https://www.github.com/thanush38", text: "Github" },
                { href: "https://www.linkedin.com/in/thanush-dinesh/", text: "LinkedIn" },
            ]
        },
        {
            title: "Frameworks",
            icons: [
                { src: "https://img.icons8.com/color/96/react-native.png", alt: "react" },
                { src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png", alt: "Angular" },
                { src: "https://img.icons8.com/color/96/net-framework.png", alt: "net-framework" },
                { src: "https://img.icons8.com/ios-filled/100/43CD54/qt.png", alt: "qt" },
            ]
        },
        {
            title: "Databases",
            icons: [
                { src: "https://img.icons8.com/color/96/mongodb.png", alt: "mongodb" },
                { src: "https://img.icons8.com/color/96/mysql-logo.png", alt: "mysql" },
                { src: "https://img.icons8.com/color/96/postgreesql.png", alt: "postgresql" },
            ]
        },
        {
            title: "Mobile",
            icons: [
                { src: "https://img.icons8.com/color/96/react-native.png", alt: "react-native" },
                { src: "https://img.icons8.com/color/96/flutter.png", alt: "flutter" },
            ]
        },
        {
            title: "Developer Tools",
            icons: [
                { src: "https://img.icons8.com/color/96/git.png", alt: "git" },
                { src: "https://img.icons8.com/color/96/npm.png", alt: "npm" },
                { src: "https://img.icons8.com/fluency/96/docker.png", alt: "docker" },
                { src: "https://img.icons8.com/fluency/96/azure-1.png", alt: "azure" },
                { src: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-color-tal-revivo.png", alt: "aws" },
                { src: "https://img.icons8.com/color/96/linux--v1.png", alt: "linux" },
                { src: "https://img.icons8.com/ios-filled/100/console.png", alt: "console" },
                { src: "https://img.icons8.com/fluency/96/microsoft-office-2019.png", alt: "microsoft-office" },
            ]
        },
    ];

    const getInfo = (i) => {
        const skill = skillsData[i];
        return (
            <div className="box-container">
                <h1>{skill.title}</h1>
                {skill.icons ? (
                    <div className={i === 0 || i === 7 ? "dev" : "web"}>
                        {skill.icons.map((icon, index) => (
                            <img 
                                key={index}
                                className="img" 
                                src={icon.src} 
                                alt={icon.alt}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="center-box-container">
                        <p className="para">{skill.content}</p>
                        <div className="skills">
                            <div className="btnWrap">
                                {skill.links.map((link, index) => (
                                    <a key={index} href={link.href} target="_blank" className="gitLink" rel="noreferrer">{link.text}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    const getLength = i => {
        if(i === 0 ){
            return "col-span-3"
        } else if(i === 3 || i === 7){
            return "col-span-2"
        } else {
            return "col-span-1"
        }
    }

    return (
        <>
            {screenSize.width < 950 ? <AltSkills /> : (
                <div className="container" id="skills">
                    <div className="grid auto-rows-[28vh] grid-cols-4 gap-4 box-c">
                        {skillsData.map((_, i) => (
                            <div
                                key={i}
                                className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 ${getLength(i)} skill-box`}
                            >
                                {getInfo(i)}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Skills