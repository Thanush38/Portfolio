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

    const getInfo = (i) =>{
        if(i===0){
            return (
                <div className="box-container">
                    <h1>Languages</h1>
                    <div className="dev">
                        <img className="img" src="https://img.icons8.com/color/96/javascript--v1.png" alt="javascript--v1"/>
                        <img className="img" src="https://img.icons8.com/color/96/typescript.png" alt="typescript"/>
                        <img className="img" src="https://img.icons8.com/color/96/python--v1.png" alt="python--v1"/>
                        <img className="img" src="https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                        <img className="img" src="https://img.icons8.com/color/96/c-programming.png" alt="c-programming"/>
                        <img className="img" src="https://img.icons8.com/color/96/assembly.png" alt="assembly"/>
                        <img className="img" src="https://img.icons8.com/ios-filled/100/A179DC/c-sharp-logo.png" alt="c-sharp-logo"/>
                        <img className="img" src={goImg} alt="go"/>
                        <img className="img" src="https://img.icons8.com/color/96/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
                        <img className="img" src="https://img.icons8.com/color/96/swift.png" alt="swift"/>

                        
                    </div>
                </div>
            )
        }else if(i===1){
            return (
                <div className="box-container">
                    <h1>Web</h1>
                    <div className="web">
                        <img className="img-small" src="https://img.icons8.com/color/96/html-5--v1.png" alt="html-5--v1"/>
                        <img className="img-small" src="https://img.icons8.com/color/96/bootstrap--v2.png" alt="bootstrap--v2"/>
                        <img className="img-small" src="https://img.icons8.com/color/96/css3.png" alt="css3"/>
                        <img className="img-small" src="https://img.icons8.com/color/96/tailwind_css.png" alt="tailwind_css"/>

                        
                        
                    </div>
                </div>
            )
        } else if(i===2){
            return (
                <div className="box-container">
                    <h1>Backend</h1>
                    <div className="img-container">
                    <img className="img" src="https://img.icons8.com/color/96/nodejs.png" alt="nodejs"/>
                    <img className="img" src="https://img.icons8.com/color/96/express-js.png" alt="express-js"/>
                    
                    </div>
                </div>
            )
        } else if(i===3){
            return (
                <div className="center-box-container">
                    <h1>Skills</h1>
                   <p className="para"> Throughout the years I have learned many languages, frameworks and multiple libraries. You can also view some of my work at my github or LinkedIn. </p>
                   <div className="skills">
                   <div className="btnWrap" >

                        <a href="https://www.github.com/thanush38" target="_blank" className="gitLink" rel="noreferrer">Github</a>
                        <a href="https://www.linkedin.com/in/thanush-dinesh/" target="_blank" className="gitLink" rel="noreferrer">LinkedIn</a>
                    </div>
                    </div>
                </div>
            )
        } else if(i===4){
            return (
                <div className="box-container">
                    <h1 className="small-font">Frameworks</h1>
                    <div className="web">
                    <img className="img" src="https://img.icons8.com/color/96/react-native.png" alt="react"/>
                    <img className="img" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png" alt="Angular"/>
                    <img className="img" src="https://img.icons8.com/color/96/net-framework.png" alt="net-framework"/>
                    <img className="img" src="https://img.icons8.com/ios-filled/100/43CD54/qt.png" alt="qt"/>
                    </div>
                </div>
            )
        } else if(i===5){
            return (
                <div className="box-container">
                    <h1>Databases</h1>
                    <div className="img-container">
                    <img className="img" src="https://img.icons8.com/color/96/mongodb.png" alt="mongodb"/>
                    <img className="img" src="https://img.icons8.com/color/96/mysql-logo.png" alt="mysql-logo"/>
                    
                    </div>
                </div>
            )
        } else if(i===6){
            return (
                <div className="box-container">
                    <h1>Mobile</h1>
                    <div className="img-container">

                    <img className="img" src="https://img.icons8.com/color/96/react-native.png" alt="react-native"/>
                    <img className="img" src="https://img.icons8.com/color/96/flutter.png" alt="flutter"/>
                    
                    
                    </div>
                </div>
            )
        } else if(i===7){
            return (
                <div className="box-container">
                    <h1>Developer Tools</h1>
                    <div className="dev">
                    <img className="img" src="https://img.icons8.com/color/96/git.png" alt="git"/>
                    <img className="img" src="https://img.icons8.com/color/96/npm.png" alt="npm"/>
                    <img className="img" src="https://img.icons8.com/fluency/96/docker.png" alt="docker"/>
                    <img className="img" src="https://img.icons8.com/fluency/96/azure-1.png" alt="azure-1"/>
                    <img className="img" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-color-tal-revivo.png" alt="external-amazon-web-services-a-subsidiary-of-amazon-that-provides-on-demand-cloud-computing-logo-color-tal-revivo"/>
                    <img className="img" src="https://img.icons8.com/color/96/linux--v1.png" alt="linux--v1"/>
                    <img className="img" src="https://img.icons8.com/ios-filled/100/console.png" alt="console"/>
                    <img className="img" src="https://img.icons8.com/fluency/96/microsoft-office-2019.png" alt="microsoft-office-2019"/>
                    </div>
                </div>
            )
        }

        else{
            return <h1>10</h1>
    }
}
    const getLength = i =>{
        if(i===0 ){
            return "col-span-3"
        }else if(i===3 || i===7){
            return "col-span-2"
        }
        else{
            return "col-span-1"
        }
    }

  return (
    <>
    {screenSize.width <950 ? <AltSkills /> : (
    <div className="container" id="skills">
    <div className="grid auto-rows-[28vh] grid-cols-4 gap-4 box-c">
  {[...Array(8)].map((_, i) => (
    <div
      key={i}
      className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 ${
       getLength(i)
      }`}
    >{getInfo(i)}</div>
  ))}
</div>
</div>
    )}
</>


  )
}

export default Skills


