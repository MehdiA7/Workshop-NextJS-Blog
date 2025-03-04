import SeeEventsButton from "./components/SeeEventsButton";
import TypeWriterEffect from "./components/TypeWriterEffect";

export default function Home() {
    return (
        <div>
            <h1 className="flex justify-center text-xl">
            <TypeWriterEffect>WELCOME TO MY BLOG</TypeWriterEffect>
            </h1>
            <SeeEventsButton/>
        </div>
    );
}
