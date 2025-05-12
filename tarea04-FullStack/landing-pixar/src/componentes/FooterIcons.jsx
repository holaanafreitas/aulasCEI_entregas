import { listIcons } from "@/data/pixar";

const FooterIcons = () => {


    return ( 
        <section className="Footer-icons">

            {listIcons.map(({id, name, icon, url}) => {
                return (
                    <a key={id} href={url} title={name}><i className={icon}></i></a>
                )
            })}
                {/* <a className="Footer-a" href="https://www.linkedin.com/company/pixar-animation-studios/" target="_blank">
                     <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a className="Footer-a" href="https://www.facebook.com/Pixar/" target="_blank">
                     <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://x.com/pixar" target="_blank">
                    <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a className="Footer-a" href="https://www.youtube.com/pixar" target="_blank">
                     <i className="fa-brands fa-youtube"></i>
                </a>
                <a className="Footer-a" href="https://www.instagram.com/pixar/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                </a> */}
            </section>
     );
}
 
export default FooterIcons;