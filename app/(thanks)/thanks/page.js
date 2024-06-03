// import Link from "next/link";

// export default function Thanks() {
//     return (
//         <>
//             <div class="content">
// 	  <div class="wrapper-1">
// 	    <div class="wrapper-2">
// 	      <h1>Thank you !</h1>
// 	      <p>Thanks a bunch for filling out the Email form</p>
// 	      <p>you should receive a confirmation email soon. </p>
// 	    <Link href="/">
// 	    	<button class="go-home">go home</button>
// 	  	</Link>
// 	    </div>
// 	</div>
// 	</div>
// 	<footer class="footer-like">
// 		<p class="site-footer__fineprint" id="fineprint">Copyright ©2024 hakxcore | All Rights Reserved</p>
// 	</footer>
//         </>
//     );
// };

"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Thanks() {
    const router = useRouter();

    const goHome = () => {
        router.push('/');
    };

    return (
        <>
            <div className="content">
                <div className="wrapper-1">
                    <div className="wrapper-2">
                        <h1>Thank you!</h1>
                        <p>Thanks a bunch for filling out the Email form.</p>
                        <p>You should receive a confirmation email soon.</p>
                        <button className="go-home" onClick={goHome}>Go Home</button>
                    </div>
                </div>
            </div>
            <footer className="footer-like">
                <p className="site-footer__fineprint" id="fineprint">Copyright ©2024 hakxcore | All Rights Reserved</p>
            </footer>
        </>
    );
}
