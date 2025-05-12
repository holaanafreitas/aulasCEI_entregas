import FooterIcons from "./FooterIcons";

const Footer = () => {
    return ( 
        <>
        <footer className="Footer">
            <FooterIcons />
            
            <section className="Footer-container">
                <article className="Footer-section">
                    <h3>FILMS</h3>
                    <div className="Footer-nav">
                        <a href="#">Features</a> <br />
                        <a href="#">Shorts</a> <br />
                        <a href="#">Series</a> <br />
                        <a href="#">SparkShorts</a> <br />
                        <a href="#">Documentaries</a> <br />
                    </div>
                </article>
                <article className="Footer-section">
                    <h3>TECH</h3>
                    <div className="Footer-nav">
                        <a href="#">Tech at Pixar</a> <br />
                        <a href="#">RenderMan</a> <br />
                        <a href="#">Open USD</a> <br />
                        <a href="#">Software R&D</a> <br />
                        <a href="#">Libraries</a> <br />
                    </div>
                </article>
                <article className="Footer-section">
                    <h3>CAREERS</h3>
                    <div className="Footer-nav">
                        <a href="#">Careers at Pixar</a> <br />
                        <a href="#">Internship</a> <br />
                        <a href="#">Life at Pixar</a> <br />
                    </div>
                </article>
                <article className="Footer-section">
                    <h3>MORE</h3>
                    <div className="Footer-nav">
                        <a href="#">Leaders</a> <br />
                        <a href="#">Our Story</a> <br />
                        <a href="#">Events</a> <br />
                        <a href="#">Pixar In A Box</a> <br />
                        <a href="#">Supplier Diversity</a> <br />
                        <a href="#">FAQ's</a> <br />
                    </div>
                </article>
            </section>
        </footer>

        </> 
     );
}
 
export default Footer;