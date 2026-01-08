import "../CSS/IndividualProjects.css";
import { UltraGangster2DPics } from '../Photos';
import ProjectTemplate from "./ProjectTemplate";

export function UltraGangster2D(){
    return (
        <ProjectTemplate heading="Ultra Gangster: A Twin Stick Shooter Game" pics={UltraGangster2DPics}>
            <p>Description: “Ultra Gangster: A Twin Stick Shooter Game” is, as the name clearly states, a twin shooter game. As part of trying to learn how to develop games using Godot, I ended up creating this game. It’s a relatively simple twin stick shooter that features 5 levels, and should take no more than 10 to 20 minutes to complete. As you progress through the game, you will unlock various weapons and items to use as you progress. The game features controller support, so you can use a controller if you wish.</p>
            <p>Information: Back in summer of 2024, I really wanted to learn how to make a game, and finally decided it was time to begin learning. I chose Godot specifically because of the debacle with Unity regarding charging per installation of a game (which I didn’t want to deal with at all), and also because Godot is / was an up and coming game engine that was growing in popularity. Another reason why I chose Godot as well was because it recently adopted official support for C#, which I was eager to learn at the time, so it seemed like a win-win considering the circumstances. As for the game itself, I chose to make a twin stick shooter because I had an idea in my head that I really liked about a potential twin stick shooter game (think a cyberpunk setting featuring a vampire hunter and time travel), and figured I should make something like that before getting started on that idea. With that in mind, despite the fact that Ultra Gangster is a mechanically simple game, having to learn a game engine, a new programming language, creating the art and animations, and just generally doing everything myself made the game’s development quite challenging, and I ended up cutting a lot from this prototype of a game. Still, I managed to get the game to a finished state, and I definitely learned a lot about game development as a result.</p>
            <p>Where To Get / Find: The game is available completely for free on itch.io. You check out the game <a href="https://waywardflame.itch.io/ultra-gangster-a-twin-stick-shooter-game" target="_blank">{"-->here.<--"}</a></p>
            <p>If you would like to, you may view the game's source code on <a href="https://github.com/WaywardFlame/Ultra-Gangster-A-Twin-Stick-Shooter-Game" target="_blank">{"-->GitHub.<--"}</a></p>
            <p>
                Credits:<br/>
                <br/>
                modular - Menu Sounds 1<br/>
                Levi Vilas Boas - Heavy 8-bit Explosions<br/>
                Dryoma - Footsteps sounds<br/>
                SnakeF8 - Snake's Authentic Gun Sounds<br/>
                SnakeF8 - Snake's SECOND Authentic Gun Sounds Pack
            </p>
        </ProjectTemplate>
    );
}

export function TheSteelHearted(){
    return (
        <div></div>
    );
}