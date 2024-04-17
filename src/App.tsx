import './index.css'
import { TypeAnimation } from "react-type-animation";

export default function App(){
    return(
        <div className={"text-center container mx-auto flex-auto p-6 text-wrap bg-gradient-to-r from-black to-gray-700 subpixel-antialiased min-w-full rounded-xl min-h-screen"}>
            <h1 className={"text-6xl text-amber-400 font-light"}><strong>This is a tutorial on stepping using DaisyUI.</strong></h1>
            <h2 className={"text-3xl text-wrap font-mono mt-6 text-teal-400"}>Prerequisites: React, Bun, Tailwind CSS, DaisyUI, react-type-animation.</h2>
            <ul className={"steps steps-vertical mt-4 text-lg font-mono"}>
                <li className={"step step-primary text-indigo-300"}>This is a primary step, code example below.</li>
                <code
                    className={"text-emerald-400"}>JSX {`<ul className="steps step-vertical"><li className="steps step-primary">Hello world</li></ul>`}</code>
                <code
                    className={"text-emerald-400"}>HTML {`<ul class="steps step-vertical"><li class="steps step-primary">Hello world</li></ul>`}</code>
                <li className={"step step-secondary text-pink-400"}><TypeAnimation
                    sequence={
                        ["This is a secondary step.",
                            2000]
                    } repeat={Infinity}
                /></li>
                <li className={"step step-info text-sky-300"}>
                    <TypeAnimation
                        sequence={
                            ["This is a step info.",
                                2000]
                        } repeat={Infinity}
                    /></li>
                <li className={"step step-accent text-teal-300"}>
                    <TypeAnimation
                        sequence={
                            ["This is a step accent.",
                                2000]
                        } repeat={Infinity}
                    />
                </li>
                <li className={"step step-warning text-yellow-400"}>Warnings</li>
                <li className={"step step-error text-red-400"}>Error messages</li>
                <li className={"step step-neutral text-slate-600"}>Neutral messages/steps</li>
            </ul>
            <p className={"font-mono text-3xl text-wrap text-cyan-500"}>All of these should be changed within the {`<li></li>`} tag in the class / className.</p>
            <p className={"font-mono text-2xl text-wrap text-amber-300"}>Within the {`<li></li>`}, change the step-x where x is any of the elements suggested above.</p>
            <p className={"font-mono text-xl text-wrap text-red-400"}>If it's an error within the step, change the step to {`<li class='step step-error'></li>`}</p>
        </div>
    )
}
