import React from "react";

const Home = () => {
    return (
        <div className="home">
            <div className="mask">
                <div className="bg"></div>
            </div>

            <ul id="list">
                <li className="text-li text-in text-7xl	md:text-9xl font-semibold text-white">The</li>
                <li className="text-li text-in text-7xl	md:text-9xl font-semibold text-white">Best</li>
                <li className="text-li text-in text-7xl	md:text-9xl font-semibold text-white">Playlist</li>
                <li className="text-li text-in text-7xl	md:text-9xl font-semibold text-white">Is...</li>
                <li className="text-li text-in text-7xl md:text-9xl font-semibold text-white">Ibai's Playlist</li>
            </ul>

            <div className="iframe-container">
                <iframe src="https://open.spotify.com/embed/playlist/4PcuuCbLfVGqh2gsv1ZYbh?utm_source=generator" title="Playlist" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                <a href="https://open.spotify.com/playlist/4PcuuCbLfVGqh2gsv1ZYbh?si=1c5ce55a45a44f88" target="_blank" 
                rel="noreferrer" className="add-btn text-base font-semibold text-white">Add to Spotify</a>
            </div>
        </div>
    )
}

export default Home;