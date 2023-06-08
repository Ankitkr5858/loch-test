import { useState } from "react";
import ArrowDown from "./ui-icons/ArrowDown";
import BarChat from "./ui-icons/BarChat";
import BellIcon from "./ui-icons/BellIcon";
import CheckBox from "./ui-icons/CheckBox";
import ClockIcon from "./ui-icons/ClockIcon";
import bannerImage from "../assets/images/bgImage.png";
import EyeIcon from "./ui-icons/EyeIcon";
import LogoIcon from "./ui-icons/LogoIcon";
function LoignPage() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    if (email && email.trim() !== "") {
      window.location.href = "https://app.loch.one/welcome";
    }
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <section className="main_container">
        <div className="details_section">
          <div className="container_section">
            <div className="heading_area">
              <BellIcon />
              <h1>Get notified when a highly correlated whale makes a move</h1>
              <p>
                Find out when a certain whale moves more than any preset amount
                on-chain or when a dormant whale you care about becomes active.
              </p>
            </div>
            <div className="notifications_area w-100">
              <div className="container_box">
                <div className="notifications_area">
                  <div className="box">
                    <div className="flex justify-between">
                      <BellIcon variant="stroke" />
                      <span className="gray-900">Save</span>
                    </div>
                    <p className="gray-900">
                      We’ll be sending notifications to you here
                    </p>
                    <div>
                      <input
                        className="input-styles"
                        type="text"
                        placeholder="hello@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="box">
                    <div className="flex justify-between">
                      <BarChat />
                      <CheckBox />
                    </div>
                    <div>
                      <p className="gray-900 fs-11 mb-1">
                        Notify me when any wallets move more than
                      </p>
                      <div className="select">
                        <span>$1,000.00</span>
                        <ArrowDown />
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="flex justify-between">
                      <ClockIcon />
                      <CheckBox />
                    </div>
                    <div className="grid gap-2">
                      <p className="gray-900 fs-11">
                        Notify me when any wallet dormant for
                      </p>
                      <div className="select">
                        <span>&gt; 30 days</span>
                        <ArrowDown />
                      </div>
                      <p className="gray-900 fs-11">becomes active</p>
                    </div>
                  </div>
                </div>
                <div className="notifications_area">
                  <div className="box">
                    <div className="flex justify-between">
                      <BellIcon variant="stroke" />
                      <span className="gray-900">Save</span>
                    </div>
                    <p className="gray-900">
                      We’ll be sending notifications to you here
                    </p>
                    <div>
                      <input
                        className="input-styles"
                        type="text"
                        placeholder="hello@gmail.com"
                      />
                    </div>
                  </div>
                  <div className="box">
                    <div className="flex justify-between">
                      <BarChat />
                      <CheckBox />
                    </div>
                    <div>
                      <p className="gray-900 fs-11 mb-1">
                        Notify me when any wallets move more than
                      </p>
                      <div className="select">
                        <span>$1,000.00</span>
                        <ArrowDown />
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="flex justify-between">
                      <ClockIcon />
                      <CheckBox />
                    </div>
                    <div className="grid gap-2">
                      <p className="gray-900 fs-11">
                        Notify me when any wallet dormant for
                      </p>
                      <div className="select">
                        <span>&gt; 30 days</span>
                        <ArrowDown />
                      </div>
                      <p className="gray-900 fs-11">becomes active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container_section watch_whales_section">
            <div className="watch_whales_section_image">
              <img src={bannerImage} alt="" />
            </div>
            <div className="heading_area">
              <EyeIcon />
              <h1>
                Watch what the <br /> whales are doing
              </h1>
              <p>
                All whales are not equal. Know exactly what the whales impacting
                YOUR portfolio are doing.
              </p>
            </div>
          </div>

          <div className="testimonials_section">
            <h2>Testimonials</h2>
            <div className="container">
              <div className="testimonial_boxes carousel">
                <div className="carousel__face">
                  <div>
                    <span>Jack F</span>
                    <span>Ex Blackrock PM</span>
                  </div>
                  <p>
                    “Love how Loch integrates portfolio analytics and whale
                    watching into one unified app.”
                  </p>
                </div>
                <div className="carousel__face">
                  <div>
                    <span>Yash P</span>
                    <span>Research, 3poch Crypto Hedge Fund</span>
                  </div>
                  <p>
                    “I use Loch everyday now. I don&apos;t think I could analyze
                    crypto whale trends markets without it. I&apos;m addicted!”
                  </p>
                </div>
                <div className="carousel__face">
                  <div>
                    <span>Shiv S</span>
                    <span>Co-Founder Magik Labs</span>
                  </div>
                  <p>
                    “Managing my own portfolio is helpful and well designed.
                    What’s really interesting is watching.
                  </p>
                </div>
              </div>
              <div className="testimonial_boxes carousel">
                <div className="carousel__face">
                  <div>
                    <span>Jack F</span>
                    <span>Ex Blackrock PM</span>
                  </div>
                  <p>
                    “Love how Loch integrates portfolio analytics and whale
                    watching into one unified app.”
                  </p>
                </div>
                <div className="carousel__face">
                  <div>
                    <span>Yash P</span>
                    <span>Research, 3poch Crypto Hedge Fund</span>
                  </div>
                  <p>
                    “I use Loch everyday now. I don&apos;t think I could analyze
                    crypto whale trends markets without it. I&apos;m addicted!”
                  </p>
                </div>
                <div className="carousel__face">
                  <div>
                    <span>Shiv S</span>
                    <span>Co-Founder Magik Labs</span>
                  </div>
                  <p>
                    “Managing my own portfolio is helpful and well designed.
                    What’s really interesting is watching.
                  </p>
                </div>
              </div>
            </div>
            <LogoIcon className="logo_icon" />
          </div>
        </div>

        <div className="signup_section">
          <div>
            <div className="container_box">
              <h1 className="heading-4">Sign up for exclusive access.</h1>
              <form className="text_field_and_btn" onSubmit={handleSubmit}>
                <input
                  className="input-styles"
                  required
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button type="submit">Get Started</button>
              </form>
            </div>
            <p className="invite_link_text">
              You’ll receive an email with an invite link to join.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoignPage;
