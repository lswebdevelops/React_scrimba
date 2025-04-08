import React from "react";
import mailIcon from "/images/mail-icon.png";
import phoneIcon from "/images/phone-icon.png";
function Contact(props) {

  return (

        <article  className="joke-card">
          <img src={props.img} alt={`Photo of ${props.name}`} />
          <h3>{props.name}</h3>
          <div className="info-group">
            <img src={phoneIcon} alt="phone icon" />
            <p>{props.phone}</p>
          </div>
          <div className="info-group">
            <img src={mailIcon} alt="mail icon" />
            <p>{props.email}</p>
          </div>
        </article>

  );
}

export default Contact;

// and now destructuring: 
// import React from "react";
// import mailIcon from "/images/mail-icon.png";
// import phoneIcon from "/images/phone-icon.png";
// function Contact({ img, name, email, phone }) {
//   return (
//     <article className="contact-card">
//       <img src={img} alt={`Photo of ${name}`} />
//       <h3>{name}</h3>
//       <div className="info-group">
//         <img src={phoneIcon} alt="phone icon" />
//         <p>{phone}</p>
//       </div>
//       <div className="info-group">
//         <img src={mailIcon} alt="mail icon" />
//         <p>{email}</p>
//       </div>
//     </article>
//   );
// }

// export default Contact;
