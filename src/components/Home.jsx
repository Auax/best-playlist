import React from "react";

const Home = () => {


    let imgClasses = ["bg-1", "bg-2", "bg-3"]

    return (
        <div className="home">
            <div className="mask">
                <div id="bg" className={imgClasses[Math.floor(Math.random() * imgClasses.length)]}></div>
            </div>

            <ul id="list">
                <li className="text-li text-in text-7xl	md:text-9xl font-semibold text-white">The</li>
                <li className="text-li text-in text-7xl	md:text-9xl font-semibold text-white">Best</li>
                <li className="text-li text-in text-7xl	md:text-9xl font-semibold text-white">Playlist</li>
                <li className="text-li text-in text-7xl	md:text-9xl font-semibold text-white">Is...</li>
                <li className="text-li text-in text-7xl md:text-9xl font-semibold text-white">Ibai's Playlist</li>
            </ul>

            <div className="iframe-container w-4/5 md:w-3/5 lg:w-2/4">
                <h1 className="text-3xl text-white font-bold mb-4">Ibai's Playlist</h1>
                <iframe src="https://open.spotify.com/embed/playlist/4PcuuCbLfVGqh2gsv1ZYbh?utm_source=generator" title="Playlist" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <a href="https://open.spotify.com/playlist/4PcuuCbLfVGqh2gsv1ZYbh?si=1c5ce55a45a44f88" target="_blank"
                    rel="noreferrer" className="add-btn text-base font-semibold text-white">Add to Spotify</a>
                <h1 className="text-3md text-white font-semibold mt-10">Honorific mention</h1>
                <iframe src="https://open.spotify.com/embed/playlist/7kIB0YN5eTNIZxgXWt3JSX?utm_source=generator&theme=2" title="V18" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </div>
        </div>
    )
}

export default Home;