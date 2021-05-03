
import PropTypes from "prop-types";

const profile = (props) => {
    const name = {margin:"1em auto 0.2em", fontWeight: 700, letterSpacing: "5px"};
    const ttl = {margin:"0 auto 1em", fontWeight: 300};
    const txt = {padding: "2px 15px", fontWeight: 100}
    const fullname = props.fullname
    return (
        <div style={{margin:"1em", textAlign:"center", color:"#fff"}} onLoad={props.alertName}>
            {props.children}
            <h2 style={name}>{fullname}</h2>
            <h3 style={ttl}>{props.profession}</h3>
            <p style={txt}>{props.bio}</p>
        </div>
    );
}


profile.defaultProps = {
    fullname: "stranger",
    bio:"N/A",
    profession:"N/A"
}
profile.propTypes = {
    name:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
}

export default profile;