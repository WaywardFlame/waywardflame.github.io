import { Link } from "react-router-dom";
import { ProjectPreviewList, ProjectPreviewItem } from "./ProjectPreview";
import "../CSS/ProjectPage.css";

function ProjectPage() {
    return (
        <div className="ProjectsDisplay">
            <p className="HeadingText">All of the projects that I have worked on. You can return to the home page <Link to="/">{"-->here.<--"}</Link></p>
            <ProjectPreviewList>
                <ProjectPreviewItem previewTitle="Ultra Gangster: A Twin Stick Shooter Game" previewText="A simple game I made while trying to learn Godot and C#." previewLink="/projects/Ultra Gangster: A Twin Stick Shooter Game" imagePath="Project Pictures/Ultra Gangster 2D/UltraGangster2DPic.png" />
                <ProjectPreviewItem previewTitle="The Steel Hearted" previewText="A simple turned based game I made as part of a game programming class." previewLink="/projects/The Steel Hearted" imagePath="Project Pictures/TheSteelHearted/SteelHeartedPic.png" />
                <ProjectPreviewItem previewTitle="Aria of the Steel Hearted" previewText="Builds upon the world I came up before working on The Steel Hearted." previewLink="/projects/Aria of the Steel Hearted" imagePath="Project Pictures/AriaOfTheSteelHearted/Aria Script Preview.png" />
                <ProjectPreviewItem previewTitle="Tournament of the Steel Hearted" previewText="A game I planned on making to better flesh out the mechanics and world of The Steel Hearted before properly beginning work on Aria." previewLink="/projects/Tournament of the Steel Hearted" imagePath="Project Pictures/Tournament Of The Steel Hearted Pics/MainMenu.png" />
                <ProjectPreviewItem previewTitle="Game Programming Golang Projects" previewText="A variety of projects and assignments I completed / created during my Game Programming class in Fall of 2024 at UTSA." previewLink="/projects/Game Programming Golang Projects" imagePath="Project Pictures/GameProgramming/AsteroidsClone.png" />
                <ProjectPreviewItem previewTitle="Game Development Unity Projects" previewText="Some projects and assignments I completed / created during my Game Development class in Spring of 2025 at UTSA." previewLink="projects/Game Development Unity Projects" imagePath="Project Pictures/Game Dev Unity Projects/Project 3.png" />
                <ProjectPreviewItem previewTitle="Ultra Gangster 3D Prototype" previewText="The prototype for the unreleased 3D remake of Ultra Gangster." previewLink="/projects/Ultra Gangster 3D" imagePath="Project Pictures/UltraGangster3DPics/Pic1.png" />
                <ProjectPreviewItem previewTitle="User Interfaces Unity Project" previewText="A group project I worked on as part of my User Interfaces class at UTSA during Spring 2025." previewLink="/projects/User Interfaces Unity Project" imagePath="Project Pictures/UnityUIProject Pictures/OpeningShot.png" />
                <ProjectPreviewItem previewTitle="Software Engineering Android Project" previewText="An Android OS application that myself and a few others worked on together as part of our Software Engineering class at UTSA during Fall 2024." previewLink="/projects/Software Engineering Android Project" imagePath="Project Pictures/SoftwareEngineeringAndroidProject/DatabaseFunctionalityScreenshot.png" />
                <ProjectPreviewItem previewTitle="Web Technologies Assignments" previewText="Assignments from my Web Technologies class that I took at UTSA during Spring 2025." previewLink="/projects/Web Technologies Assignments" imagePath="Project Pictures/Web Tech Pics/Assignment7.png" />
                <ProjectPreviewItem previewTitle="Database Systems Design Project" previewText="A database design group project from my Database Systems class at UTSA from Fall 2024." previewLink="/projects/Database Systems Design Project" imagePath="Project Pictures/DatabaseSystems/FinalDatabaseSystemsERD.png" />
                <ProjectPreviewItem previewTitle="Cloud Computing Research Paper" previewText="Cloud computing research paper that I had to work on with others. UTSA Spring 2025." previewLink="/projects/Cloud Computing Research Paper" imagePath="Project Pictures/Cloud Computing/TitlePage.png" />
            </ProjectPreviewList>
        </div>
    );
}

export default ProjectPage;