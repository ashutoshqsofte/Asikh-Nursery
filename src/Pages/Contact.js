const Contact = () => {
  return (
    <>
      <div className="cntct-main">
        <div className="img-cntct">
          <img
            className="cntct-img"
            src={"./images/flowers.jfif"}
            alt="description"
          />
        </div>
        <div className="cntct-info">
          <div className="Fst-ph">
            <img
              className="smlimgP-cnt"
              src={"./images/Phone_icon.png"}
              alt="description"
            />
            <p className="cont-p">+91 913587xxxx</p>
          </div>
          <div>
            <img
              className="smlimgP-cnt"
              src={"./images/mail.png"}
              alt="description"
            />
            <p className="cont-p">asikh@gmail.com</p>
          </div>

          <div>
            <a href="*">
              <img
                className="smlimgP-cnt-sc"
                src={"./images/fb.png"}
                alt="description"
              />
            </a>

            <a href="*">
              <img
                className="smlimgP-cnt-sc"
                src={"./images/insta2.png"}
                alt="description"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
