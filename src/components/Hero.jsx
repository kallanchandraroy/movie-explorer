import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-[url(/bg-movies.jpg)] bg-no-repeat object-cover bg-cover bg-center bg-auto">
            {/* Background */}
            {/* <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.28),transparent_45%),linear-gradient(180deg,#020617,#020617)]" />

            <div className="absolute -right-40 top-20 -z-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

            <div className="absolute -left-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" /> */}
            <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8 justify-center text-center">
                <div className="max-w-3xl">

                    <h1 className="text-6xl font-black leading-[1.05] tracking-tight text-violet-600  sm:text-4xl lg:text-6xl">
                        DISCOVER MOVIES
                    </h1>

                    <span className="mt-10 max-w-2xl leading-7 text-red-900 sm:text-lg font-bold p-3">
                        Explore and discover your favorite
                        movies from around the world.
                    </span>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row justify-center">
                        <Link
                            to="/movies"
                            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 font-semibold shadow-xl shadow-violet-600/20 transition hover:bg-violet-500"
                        >
                            Explore Now
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Hero;