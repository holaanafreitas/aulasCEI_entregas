const FooterNav = () => {

    


    return ( 
        <article className="Footer-section">
                    {listIcons.map(({id, name}) => {
                return (
                    <a key={id}>{name}</a>
                )
            })}
        </article>
     );
}
 
export default FooterNav;