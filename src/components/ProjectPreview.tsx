import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "../CSS/ProjectPreview.css";

interface PreviewListProps {
    children: ReactNode;
}

interface PreviewItemProps {
    previewTitle: string;
    previewText: string;
    previewLink: string;
    imagePath: string;
}

export function ProjectPreviewList({ children }: PreviewListProps) {
    return (
        <div className="PreviewList">
            {children}
        </div>
    );
}

export function ProjectPreviewItem({previewTitle, previewText, previewLink, imagePath}: PreviewItemProps){
    // FIXME: wrap <img> tag in <a> tag in order to link to specific projects
    // ALSO: add project link to props so it can be provided to this component

    return (
        <div className="PreviewItem">
            <p className="PreviewTitle">{previewTitle}</p>
            <Link to={previewLink}><img className="PreviewImage" src={imagePath} alt="Preview Image" /></Link>
            <p className="PreviewText">{previewText}</p>
        </div>
    );
}

