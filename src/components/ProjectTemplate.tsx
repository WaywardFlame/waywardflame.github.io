import type { ReactNode } from "react";
import ImageGallery from "./ImageGallery";

interface ProjectTemplateProps {
    heading: string;
    pics: {src: string, alt: string}[];
    children: ReactNode;
}

function ProjectTemplate({ heading, pics, children }: ProjectTemplateProps){
    return (
        <div className="IndividualProjectContainer">
            <p className="ProjectHeadingText">{heading}</p>
            <div className="ImageContainer">
                <ImageGallery pictures={pics}/>
            </div>
            <div className="InformationContainer">
                {children}
            </div>
        </div>
    )
}

export default ProjectTemplate;