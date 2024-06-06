// import React from "react";

// const ContactSection = () => {
//   return (
//     <section id="contact" className="get-started">
//       <div className="container">
//         <div className="row text-center">
//           <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
//           <div className="heading-line"></div>
//           <p className="lh-lg pb-3 pb-md-5">
//             We believe in a world where IT service organizations are trusted to deliver on their promises.
//           </p>
//         </div>

//         {/* <!-- START THE CTA CONTENT --> */}

//         <div className="row text-white get-started__box">
//           <div className="col-12 col-lg-6 get-started__box--left gradient shadow p-3">
//             <div className="cta-info w-100">
//               <h4 className="display-4 fw-bold">100% Exceed in Expectations</h4>
//               <p className="lh-lg">
//                 Our real joy comes from securing technology to create products that delight and inspire. From intuitive Single sign-on solutions to immersive experiences to innovative features, We always seeking new ways to create value for our users.
//               </p>
//               <h3 className="display-3--brief">What will be the next step?</h3>
//               <ul className="cta-info__list">
//                 <li>We'll prepare the proposal</li>
//                 <li>We'll discuss it together</li>
//                 <li>Let's start the discussion</li>
//               </ul>
//             </div>
//           </div>
//           <div className="col-12 col-lg-6 bg-white get-started__box--right shadow p-3">
//             <div className="form w-100">
//               <h4 className="display-3--title mb-4">Start your project</h4>
//               <form action="https://formsubmit.co/48e1840765ed2c11884e51a038e2f9fa" method="POST" enctype="multipart/form-data" className="row">
//                 <div className="col-lg-12 mb-3">
//                   <input type="text" name="name" placeholder="Your Name" id="inputFirstName" className="shadow form-control-lg form-control" required />
//                 </div>
//                 {/* <!--     <div className="col-lg-6 col-md-6 mb-3">
//                 <input type="text" placeholder="Last Name" id="inputLastName" className="shadow form-control-lg form-control" required>
//                 </div>   --> */}
//                 <div className="col-lg-12 mb-3">
//                   <input type="email" name="email" placeholder="Email" id="inputEmail" className="shadow form-control-lg form-control" required />
//                 </div>
//                 <div className="col-lg-12 mb-3">
//                   <textarea name="message" placeholder="Message" id="message" rows="8" className="shadow form-control-lg form-control" required></textarea>
//                 </div>
//                 {/* <!--               <div className="col-lg-12 mb-3">
//                 <input type="file" name="attachment" accept="image/png, image/jpeg, video/*, audio/*, .pdf, .doc, .docx">
//                 accept=""
//                 </div> --> */}
//                 <div className="text-center d-grid mt-1">
//                   <input type="submit" value="submit" className="btn btn-primary rounded-pill pt-3 pb-3" />Submit<i className="fas fa-paper-plane"></i>

//                   <input type="hidden" name="_captcha" value="false" />
//                   <input type="hidden" name="_subject" value="New submission!" />
//                   <input type="hidden" name="_blacklist" value="spammy pattern, banned term, phrase" />
//                   <input type="hidden" name="_template" value="table" />
//                   <input type="hidden" name="_cc" value="support@hakxcore.com,mukeshkumarcharak@gmail.com,tech@hakxcore.com" />
//                   <input type="text" name="_honey" style={{ display: "none" }} />
//                   <input type="hidden" name="_next" value="https://hakxcore.com/thanks.html" />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//   );
// };

// export default ContactSection;














import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import emailjs from '@emailjs/browser';
import axios from "axios";

const ContactSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const form = useRef();
  const router = useRouter();

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      sendEmail();
    }
  };

  const sendEmail = async () => {
    // emailjs.sendForm('service_xxlno9d', 'template_og31lnj', form.current, 'XFhOOYRXHBHz7MqNe')
    //   .then(
    //     (response) => {
    //       console.log('SUCCESS!', response.status, response.text);
    //       setSuccessMsg(`Thank you ${username}, Your message has been sent successfully!`);
    //       setErrMsg("");
    //       setUsername("");
    //       setEmail("");
    //       setMessage("");
    //       router.push('/thanks'); // Redirect to the thank you page
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //       setErrMsg('Something went wrong. Please try again later.');
    //     }
    //   );


    const data = {username,email,message};
    const response = await axios.post('/api/emails', data)
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMsg(`Thank you ${username}, Your message has been sent successfully!`);
        setErrMsg("");
        setUsername("");
        setEmail("");
        setMessage("");
        router.push('/thanks'); // Redirect to the thank you page
      },)
    .catch( (error) => {
      console.log('FAILED...', error.text);
      setErrMsg('Something went wrong. Please try again later.');
    }); 
  };

  return (
    <section id="contact" className="get-started">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
          <div className="heading-line"></div>
          <p className="lh-lg pb-3 pb-md-5">
            We believe in a world where IT service organizations are trusted to deliver on their promises.
          </p>
        </div>

        {/* START THE CTA CONTENT */}
        <div className="row text-white get-started__box">
          <div className="col-12 col-lg-6 get-started__box--left gradient shadow p-3">
            <div className="cta-info w-100">
              <h4 className="display-4 fw-bold">100% Exceed in Expectations</h4>
              <p className="lh-lg">
                Our real joy comes from securing technology to create products that delight and inspire. From intuitive Single sign-on solutions to immersive experiences to innovative features, we are always seeking new ways to create value for our users.
              </p>
              <h3 className="display-3--brief">What will be the next step?</h3>
              <ul className="cta-info__list">
                <li>We'll prepare the proposal</li>
                <li>We'll discuss it together</li>
                <li>Let's start the discussion</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 bg-white get-started__box--right shadow p-3">
            <div className="form w-100">
              <h4 className="display-3--title mb-4">Start your project</h4>
              <form ref={form} onSubmit={handleSend} className="row">
                {/* {errMsg && (
                  <p>
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p>
                    {successMsg}
                  </p>
                )} */}
                <div className="col-lg-12 mb-3">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    className={`shadow form-control-lg form-control ${errMsg === "Username is required!" ? "outline-designColor" : ""}`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className={`shadow form-control-lg form-control ${errMsg === "Please give your Email!" ? "outline-designColor" : ""}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <textarea
                    name="user_message"
                    placeholder="Message"
                    rows="8"
                    className={`shadow form-control-lg form-control ${errMsg === "Message is required!" ? "outline-designColor" : ""}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="text-center d-grid mt-1">
                  <button type="submit" className="btn btn-primary rounded-pill pt-3 pb-3">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
