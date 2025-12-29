import type { ReactNode } from "react";
import "../CSS/SocialLinks.css";

interface SocialContainerProps {
    children: ReactNode;
    pageLink: string;
    pageName: string;
}

interface SocialItemProps {
    socialURL: string;
    imagePath: string;
}

export function SocialContainer({children, pageLink, pageName}: SocialContainerProps) {
    return (
        <div className="SocialBox">
            <div className="SocialContainer">
                {children}
            </div>
            <div className="PageLink">
                <a href={pageLink}>{"-->" + pageName + "<--"}</a>
            </div>
        </div>
    );
}

export function SocialItem({ socialURL, imagePath }: SocialItemProps) {
    return (
        <a href={socialURL} target="_blank">
            <img className="SocialItem" src={imagePath} alt="Social Link" />
        </a>
    );
}
