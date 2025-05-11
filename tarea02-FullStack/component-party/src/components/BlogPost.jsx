export const BlogPost = (props) => {
    console.log(props);
    
    return ( 
        <>  
            <h3>Soy in blog post</h3>
            <p>{props.children}</p>
        </>
     );
}
