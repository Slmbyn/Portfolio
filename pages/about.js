import Image from "next/image"
import styles from "@/styles/About.module.css"
import { useState } from "react"

export default function About() {
    const [fontSize, setFontSize] = useState(2)
    return (
        <>
            <h1>About Me</h1>
            <p className={styles.greenColor}>Im a software engineer that imagines things and makes them</p>
            {/* <img src="/headshot.png" alt="my headshot"/> */}
            {/* Below is how you'd use Next.js's Image component */}
            {/* dynamic css with js values injected into it from state. Can be used for a dark/light button */}
            <style jsx>
                {`
                .fontSize {
                    font-size: ${fontSize}rem;
                }
                `}
            </style>
            {/* <p className="fontSize">This is my brand statement</p>

            <button onClick={() => setFontSize(fontSize + 1)}> BIGGER!</button>
            <button onClick={() => setFontSize(fontSize - 1)}> smaller!</button> */}

            <Image
                src="/headshot.png"
                alt="My Headshot"
                // if you do use next Image -- hard coded width and height is required (makes responsivness hard)
                width={200}
                height={200}
            />
            {/* using another hosting service */}
            {/* will have to go to next.config.js and add the website */}
            {/* <Image
                src="/http://placekitten.com/400/600"
                alt="cat placeholder"
                width={400}
                height={600}
            /> */}
        </>
    )
}