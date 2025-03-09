import SeePublicationButton from "./components/SeePublicationButton";
import TypeWriterEffect from "./components/TypeWriterEffect";

export default function Home() {
    return (
        <div className="mt-4">
            <h1 className="flex justify-center text-xl">
            <TypeWriterEffect>🕵️ ANONYMOUS BLOG 🕵️</TypeWriterEffect>
            </h1>
            <SeePublicationButton/>
        </div>
    );
}
