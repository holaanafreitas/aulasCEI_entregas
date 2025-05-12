const MovieSection = () => {
    
    const movies = [
        {title:"Dream Productions", image: "./imgs/movie_dreamporoductions.png", bg: "./imgs/bg_pink.jpg", text: "NOW STREAMING"},
        {title:"Dream Productions", image: "./imgs/movie_dreamporoductions.png", bg: "./imgs/bg_pink.jpg", text: "NOW STREAMING"},
        {title:"Dream Productions", image: "./imgs/movie_dreamporoductions.png", bg: "./imgs/bg_pink.jpg", text: "NOW STREAMING"}
    ]
    
    return ( 
        <main className="Movie-section">
            <section className="Movie-subsection1">
                <img src="/imgs/wl_home2.jpg" alt="Win or Lose Image" />
                {/* <img src="../public/imgs/wol_logo.png" alt="Win or Lose Logo" /> */}
            </section>

            <section className="Movie-subsection2">
                <div className="Subsection2-2">
                    <img src="/imgs/pixarimage1.jpg" alt="BTS Pixar" />
                    <img src="/imgs/pixarimage2.jpg" alt="BTS Pixar" />
                </div>
                <div className="Subsection2-3">
                    <img src="/imgs/pixarimage3.jpg" alt="BTS Pixar" />
                    <div>
                        <h3>Careers at Pixar</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, sit explicabo, aliquam odit ipsa.  Rem, ducimus perferendi. Learn more</p>
                    </div>
                </div>
            </section>

            <section className="Movie-subsection3">
                <img src="" alt="" />
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </section>
             <section className="Movie-subsection4">
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
             </section>


        </main>
     );
}
 
export default MovieSection;