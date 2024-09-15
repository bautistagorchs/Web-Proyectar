import React from "react";
import Script from "next/script";
import s from "./MailchimpForm.module.scss";

const MailchimpForm = () => {
  return (
    <div id="mc_embed_shell" className={s.formContainer}>
      {/* <link
        href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
        rel="stylesheet"
        type="text/css"
      /> */}
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us12.list-manage.com/subscribe/post?u=f64d42a172e8b933606f3a146&amp;id=0e350a112d&amp;f_id=00b78ee0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className={s.validate}
          target="_blank"
        >
          <div id="mc_embed_signup_scroll" className={s.formContentContainer}>
            {/* <div className={s.indicatesRequired}>
              <span className={s.asterisk}>*</span> campo requerido
            </div> */}
            <div className={s.mcFieldGroup}>
              <input
                type="email"
                name="EMAIL"
                className={`${s.required} ${s.email}`}
                id="mce-EMAIL"
                required
                defaultValue=""
                placeholder="ejemplo@gmail.com"
              />
            </div>
            <div id="mce-responses" className={`${s.clear} ${s.foot}`}>
              <div
                className={s.response}
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className={s.response}
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input
                type="text"
                name="b_f64d42a172e8b933606f3a146_0e350a112d"
                tabIndex={-1}
                defaultValue=""
              />
            </div>
            <div className={s.optionalParent}>
              <div className={`${s.clear} ${s.foot}`}>
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className={s.button}
                  value="Subscribirse"
                />
                <p style={{ margin: "0px auto" }}>
                  <a
                    href="http://eepurl.com/iX9Q-A"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    {/* Contenido del enlace, si es necesario */}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></Script>

      <script type="text/javascript">
        {`(function($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0] = 'EMAIL';
          ftypes[0] = 'email';
          fnames[1] = 'FNAME';
          ftypes[1] = 'text';
          fnames[2] = 'LNAME';
          ftypes[2] = 'text';
          fnames[3] = 'ADDRESS';
          ftypes[3] = 'address';
          fnames[4] = 'PHONE';
          ftypes[4] = 'phone';
          fnames[5] = 'BIRTHDAY';
          ftypes[5] = 'birthday';
          fnames[6] = 'COMPANY';
          ftypes[6] = 'text';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);`}
      </script>
    </div>
  );
};

export default MailchimpForm;
