import '/src/App.css'
import Navbar from "./Navbar.jsx";
import {Typewriter} from 'react-simple-typewriter';
import Click from "/src/assets/Pics/click.png"
import {ScrollReveal} from "./ScrollReveal.jsx";
import {Stats} from "./Stats.jsx";
import {Timeline} from "./Timeline.jsx";
import {Cards} from "./Cards.jsx";
import {QA} from "./QA.jsx";



export const Main = () => {

    return (
        <div className="App">
            <div className="bg-[#141414] min-h-screen w-full flex justify-center ">
                <Navbar/>
                <div className="pt-60 text-center text-white relative z-10">
                    <div
                        className="absolute top-1/2 left-1/2 w-100 h-100 rounded-full bg-[radial-gradient(circle,_rgba(0,0,255,0.5)_0%,_transparent_30%)] blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
                    <h1 className="text-7xl font-bold mb-4 slide-in-left relative z-10 max-md:text-5xl">انتشارات گربه
                        دانا</h1>
                    <div className="relative flex items-center justify-center z-10">
                        <p className="text-2xl font-thin text-white max-md:text-l">
                            <Typewriter
                                words={['تنها انتشارات گربه ای جهان']}
                                loop={1}
                                cursor
                                cursorStyle="_"
                                typeSpeed={55}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </p>

                        <img
                            src={Click}
                            className="float absolute top-3/4 left-4/5 transform -translate-x-1/2 -translate-y-1/2 h-28 w-28 z-10
                            max-md:h-20 max-md:w-20 max-md:left-4/5"
                            alt="meow"
                        />

                    </div>
                </div>
                <div className="absolute bottom-10 items-center justify-center">
                    scroll down
                </div>
                <div className="floatArrow absolute bottom-2">
                    V
                </div>

            </div>

            {/*second section*/}
            <div className="h-screen bg-[#141414] flex items-center justify-center">
                <div className="flex flex-col gap-25">
                    <ScrollReveal>
                        <Timeline/>
                    </ScrollReveal>
                    <ScrollReveal>
                        <Stats/>
                    </ScrollReveal>

                </div>
            </div>

            {/*third section*/}
            <div className="relative h-screen bg-[#141414] flex items-center justify-center">
                <div className="flex flex-row justify-center items-center" >
                    <Cards/>
                </div>
            </div>

            {/*forth section*/}
            <div className="relative h-screen bg-[#141414] flex items-center justify-center flex-col">
                <div className="font-bold text-2xl">
                    سوالات شما Q&A
                </div>
                <QA/>
                <div className="absolute flex flex-col gap-25 bottom-0 bg-[#141414] w-full h-20 items-center justify-center">
                    <p className="absolute text-white  left-10" >developed by Gorbekhan</p>
                </div>
            </div>
        </div>
    )
}

