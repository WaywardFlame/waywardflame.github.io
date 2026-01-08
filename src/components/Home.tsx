import { ProjectPreviewList, ProjectPreviewItem } from "./ProjectPreview";
import { SocialContainer, SocialItem } from "./SocialLinks";
import "../CSS/Home.css";
import { Link } from "react-router-dom";

function Home(){
  return (
    <div className="PageContainer">
      <div className="SocialDivContainer">
        <div className="ProfileDivContainer">
          <img id="ProfileImage" src="Social Logos/lost candle profile pic.png" alt="Profile Image" />
        </div>
        <SocialContainer pageLink="/about" pageName="ABOUT ME">
          <SocialItem socialURL="https://waywardflame.itch.io/" imagePath="Social Logos/itch io icon.png" />
          <SocialItem socialURL="https://www.youtube.com/@WaywardFlame" imagePath="Social Logos/yt_icon_red_digital.png" />
          <SocialItem socialURL="https://bsky.app/profile/waywardflame.bsky.social" imagePath="Social Logos/bluesky logo.png" />
          <SocialItem socialURL="https://www.linkedin.com/in/brian-statom-33a351250" imagePath="Social Logos/linkedin logo.png" />
          <SocialItem socialURL="https://www.github.com/WaywardFlame" imagePath="Social Logos/github logo.png" />
        </SocialContainer>
      </div>

      <div className="ProjectDivContainer">
        <p className="HeadingText" id="Heading">WaywardFlame / Brian T. Statom</p>
        <p className="HeadingText" id="Subtitle">Some projects I've worked on. You can view all of them <Link to="/projects">{"-->here.<--"}</Link></p>
        <ProjectPreviewList>
          <ProjectPreviewItem previewTitle="Ultra Gangster: A Twin Stick Shooter Game" previewText="A simple game I made while trying to learn Godot and C#." previewLink="/projects/Ultra Gangster: A Twin Stick Shooter Game" imagePath="Project Pictures/Ultra Gangster 2D/UltraGangster2DPic.png" />
          <ProjectPreviewItem previewTitle="The Steel Hearted" previewText="A simple turned based game I made as part of a game programming class." previewLink="/projects/The Steel Hearted" imagePath="Project Pictures/TheSteelHearted/SteelHeartedPic.png" />
          <ProjectPreviewItem previewTitle="Aria of the Steel Hearted" previewText="Builds upon the world I came up before working on The Steel Hearted." previewLink="/projects/Aria of the Steel Hearted" imagePath="Project Pictures/AriaOfTheSteelHearted/Aria Script Preview.png" />
        </ProjectPreviewList>
      </div>
    </div>
  );
}

export default Home;