import NextJSIcon from "../components/icons/NextJSIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import JavaIcon from "../components/icons/JavaIcon.astro";
import ProcessingIcon from "../components/icons/ProcessingIcon.astro";
import PuredataIcon from "../components/icons/PuredataIcon.astro";
import UnityIcon from "../components/icons/Unity.astro";
import PhotoshopIcon from "../components/icons/Photoshop.astro";
import CSharpIcon from "../components/icons/Csharp.astro";
import PhpIcon from "../components/icons/Php.astro";
import AfterEffectsIcon from "../components/icons/Aftereffects.astro";
import AsepriteIcon from "../components/icons/Asesprite.astro";
import GodotIcon from "../components/icons/Godot.astro";
import IllustratorIcon from "../components/icons/Illustrator.astro";
import InDesignIcon from "../components/icons/Indiseing.astro";
import PremiereIcon from "../components/icons/Premiere.astro";
import PythonIcon from "../components/icons/Python.astro";
import WordpressIcon from "../components/icons/Wordpress.astro";
import MysqlIcon from "../components/icons/Mysql.astro";
import AuditionIcon from "../components/icons/Audition.astro";
import BlenderIcon from "../components/icons/Blender.astro";
import ReaperIcon from "../components/icons/Reaper.astro";
import UnrealEngineIcon from "../components/icons/Unrealengine.astro";
import GameMakerIcon from "../components/icons/Gamemaker.astro";
import CIcon from "../components/icons/C.astro";
import CPlusPlusIcon from "../components/icons/Cplusplus.astro";
import FlutterIcon from "../components/icons/Flutter.astro";
import CanvaIcon from "../components/icons/Canva.astro";
import DockerIcon from "../components/icons/Docker.astro";
import FigmaIcon from "../components/icons/FigmaIcon.astro";
import HtmlIcon from "../components/icons/Html.astro";
import CssIcon from "../components/icons/Css.astro";
import JsIcon from "../components/icons/Js.astro";
import JsonIcon from "../components/icons/Json.astro";
import GmlIcon from "../components/icons/Gml.astro";
import ObsstudioIcon from "../components/icons/Obsstudio.astro";
import CoreldrawIcon from "../components/icons/Coreldraw.astro";
import KritaIcon from "../components/icons/Krita.astro";
import GimpIcon from "../components/icons/Gimp.astro";
import InkscapeIcon from "../components/icons/Inkscape.astro";
import VisualStudioIcon from "../components/icons/VisualStudio.astro";
import AndroidstudioIcon from "../components/icons/Androidstudio.astro";
import AndroidIcon from "../components/icons/Android.astro";
import MongodbIcon from "../components/icons/Mongodb.astro";
import DiscordjsIcon from "../components/icons/Discordjs.astro";
import NodejsIcon from "../components/icons/Nodejs.astro";
import LaravelIcon from "../components/icons/Laravel.astro";
import PrismaIcon from "../components/icons/Prisma.astro";
import P5jsIcon from "../components/icons/P5js.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";
import ArduinoIcon from "../components/icons/Arduino.astro";
import AutocadIcon from "../components/icons/Autocad.astro";
import WordIcon from "../components/icons/Word.astro";
import ExcelIcon from "../components/icons/Excel.astro";
import PowerpointIcon from "../components/icons/Powerpoint.astro";
import KotlinIcon from "../components/icons/Kotlin.astro";
import ExpressIcon from "../components/icons/Express.astro";
import BootstrapIcon from "../components/icons/Bootstrap.astro";
import JQueryIcon from "../components/icons/Jquery.astro";
import BashIcon from "../components/icons/Bash.astro";
import AngularIcon from "../components/icons/Angular.astro";
import SassIcon from "../components/icons/Sass.astro";
import TypescriptIcon from "../components/icons/Typescript.astro";
import ReactIcon from "../components/icons/React.astro";
import ExpoIcon from "../components/icons/Expo.astro";
import FirebaseIcon from "../components/icons/Firebase.astro";
import NativeWindIcon from "../components/icons/NativeWind.astro";
import GitIcon from "../components/icons/Git.astro";
import VercelIcon from "../components/icons/Vercel.astro";
import VscodeIcon from "../components/icons/Vscode.astro";
import ComfyUIIcon from "../components/icons/ComfyUI.astro";
import CapCutIcon from "../components/icons/CapCut.astro";
import OpenCodeIcon from "../components/icons/OpenCode.astro";
import PlaywrightIcon from "../components/icons/Playwright.astro";

/**
 * Maps tag/skill names to their Astro icon components.
 * Used by Proyectos.astro and Habilidades.astro to avoid
 * massive conditional rendering chains.
 */
export const iconMap: Record<string, any> = {
  "Next.js": NextJSIcon,
  "Tailwind CSS": TailwindIcon,
  "Java": JavaIcon,
  "Processing": ProcessingIcon,
  "Pure Data": PuredataIcon,
  "Unity": UnityIcon,
  "Photoshop": PhotoshopIcon,
  "C#": CSharpIcon,
  "PHP": PhpIcon,
  "After Effects": AfterEffectsIcon,
  "Aseprite": AsepriteIcon,
  "Godot": GodotIcon,
  "Illustrator": IllustratorIcon,
  "InDesign": InDesignIcon,
  "Premiere Pro": PremiereIcon,
  "Python": PythonIcon,
  "WordPress": WordpressIcon,
  "MySQL": MysqlIcon,
  "Audition": AuditionIcon,
  "Blender": BlenderIcon,
  "Reaper": ReaperIcon,
  "Unreal Engine": UnrealEngineIcon,
  "Gamemaker": GameMakerIcon,
  "C": CIcon,
  "C++": CPlusPlusIcon,
  "Flutter": FlutterIcon,
  "Canva": CanvaIcon,
  "Docker": DockerIcon,
  "Figma": FigmaIcon,
  "HTML5": HtmlIcon,
  "CSS3": CssIcon,
  "JavaScript": JsIcon,
  "JSON": JsonIcon,
  "GML": GmlIcon,
  "OBS Studio": ObsstudioIcon,
  "Corel Draw": CoreldrawIcon,
  "Krita": KritaIcon,
  "GIMP": GimpIcon,
  "Inkscape": InkscapeIcon,
  "Visual Studio": VisualStudioIcon,
  "Android Studio": AndroidstudioIcon,
  "Android Nativo": AndroidIcon,
  "MongoDB": MongodbIcon,
  "Discord.js": DiscordjsIcon,
  "Node.js": NodejsIcon,
  "Laravel": LaravelIcon,
  "Prisma": PrismaIcon,
  "p5.js": P5jsIcon,
  "Astro": AstroIcon,
  "Arduino": ArduinoIcon,
  "AutoCAD": AutocadIcon,
  "Word": WordIcon,
  "Excel": ExcelIcon,
  "PowerPoint": PowerpointIcon,
  "Kotlin": KotlinIcon,
  "Express.js": ExpressIcon,
  "Bootstrap": BootstrapIcon,
  "JQuery": JQueryIcon,
  "Bash": BashIcon,
  "Angular": AngularIcon,
  "Sass": SassIcon,
  "TypeScript": TypescriptIcon,
  "React": ReactIcon,
  "React Native": ReactIcon,
  "Expo": ExpoIcon,
  "Firebase": FirebaseIcon,
  "NativeWind": NativeWindIcon,
  "Git": GitIcon,
  "GitHub": GitIcon,
  "Vercel": VercelIcon,
  "VS Code": VscodeIcon,
  "ComfyUI": ComfyUIIcon,
  "CapCut": CapCutIcon,
  "OpenCode": OpenCodeIcon,
  "Playwright": PlaywrightIcon,
};
