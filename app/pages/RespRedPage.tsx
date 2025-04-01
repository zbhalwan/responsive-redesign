import React, { useEffect, useState } from "react";
import "./RespRedPage.css";
// @ts-ignore

const RespRedPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="case-study-container">
      <header>
        <h1>
          <strong>Responsive Redesign</strong>
        </h1>
        <p>User Interface and Experience Study</p>
      </header>
      <section>
        <h2> Overview & Objectives</h2>
        <ul>
          <li>Learn and practice the workflow of redesigning a website.</li>
          <li>Analyze and identify flaws in an existing web interface.</li>
          <li>Create mockups for various screen sizes.</li>
          <li>Build a responsive website based on prototypes.</li>
        </ul>
      </section>

      <section>
        <h2>Background</h2>
        <p>
          This project focuses on observing and understanding user interactions
          with a web interface to improve design and functionality. I chose to
          focus on the main webpage of a local restaraunt in Providence, Apsara
          Asian Restaraunt.
        </p>
        <br />
        <ul>
          <li>Contributors: Zeeshan Bhalwani</li>
          <li>Timeline: 2 Weeks</li>
          <li>Tools: Figma, HTML, CSS</li>
          <li>
            <a href="https://apsaraasianri.com/" target="_blank">
              Focus: <u>Apsara Asian Restarunt Website Main Page</u>
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ textDecoration: "underline" }}>
          Part 1: Identifying Usability Problems
        </h2>
        <p>
          Analyzed the usability of the web page using the following criteria:
          efficiency, learnability, and memorability.
        </p>
        <br />

        <h3 style={{ fontSize: "1.5em" }}>
          <strong>
            <em>Original Website of Apsara Asian Restaraunt:</em>
          </strong>
        </h3>
        <div className="button-container">
          <a href="https://apsaraasianri.com/" target="_blank">
            <button className="visit-website-button">
              Visit Original Website
            </button>
          </a>
        </div>

        <div className="image-row">
          <div className="image-container">
            <img src="/apsar1.png" alt="apsara website" />
          </div>
          <div className="image-container">
            <img src="/apsar2.png" alt="apsara website" />
          </div>
        </div>
        <p className="image-caption">
          <em>
            I chose this website because Apsara is one of my favorite take-out
            restaurants in Providence and they are very underrated along with
            the fact that their website is a little outdated and hard to
            navigate.
          </em>
        </p>

        <br />

        <h3 style={{ fontSize: "1.5em" }}>
          <strong>
            <em>Problems with the Website:</em>
          </strong>
        </h3>
        <table className="problems-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Efficiency</td>
              <td>
                <ul>
                  <li>
                    Vertical navigation menu takes up unnecessary space. Also
                    less intuitive to use as one spanning the top of the screen.
                  </li>
                  <br />
                  <li>
                    Large amount of text on the main page, requiring users to
                    scan extensively to find desired information.
                  </li>
                  <br />

                  <li>
                    Link to menu only found in navigation menu. Can be missed by
                    users focusing on the main page.
                  </li>
                  <br />
                  <li>
                    Footer is massive with two pictures of maps shown on main
                    page which is redundant.
                  </li>
                  <br />
                  <li>
                    Address and phone number in navigation menu are not typical
                    locations for such information, making it less discoverable.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Memorability</td>
              <td>
                <ul>
                  <li>
                    Website&apos;s aesthetic does not leave a lasting
                    impression, making it less likely for users to remember
                    their experience and return.
                  </li>
                  <br />
                  <li>
                    Lack of cohesive branding elements reduces the site&apos;s
                    memorability and fails to reinforce the restaurant&apos;s
                    identity.
                  </li>
                  <br />
                  <li>
                    Lack of pictures of food does not motivate users to try
                    restarunt or remember it for the future.
                  </li>
                  <br />
                  <li>
                    Font size is small, and the headings are not much larger
                    than the paragraph text, making certain parts of the page
                    less memorable.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Learnability</td>
              <td>
                <ul>
                  <li>
                    Text such as &apos;order online&apos;, the address and phone
                    number, and the social media icons, lack hyperlinks, making
                    it unclear what action or page they lead to.
                  </li>
                  <br />
                  <li>
                    DoorDash logo redirects for online orders, but there is no
                    indication for a user to click it.
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Accessibility</td>
              <td>
                <ul>
                  <li>
                    Many images lack alternative text, making it difficult for
                    those with impairments.
                  </li>
                  <br />
                  <li>
                    Certain text elements have insufficient color contrast
                    against their backgrounds.
                  </li>
                  <br />
                  <li>
                    Forms/icons on the site do not have properly associated
                    labels.
                  </li>
                  <br />
                  <li>
                    Some text/icons are not hyperlinked to anything, which can
                    confuse users.
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 style={{ textDecoration: "underline" }}>Part 2: Visual Redesign</h2>
        <p>
          Based on the problems identified in Part 1, created visual design
          style guides and mockups for the redesigned website.
        </p>
        <br />

        <h3 style={{ fontSize: "1.5em" }}>
          <strong>
            <em>Original Visual Design Style Guide</em>
          </strong>
        </h3>
        <div className="image-container-2">
          <img src="/og_vdg.png" alt="Original Visual Design Style Guide" />
        </div>

        <br />

        <h3 style={{ fontSize: "1.5em" }}>
          <strong>
            <em>Revised Visual Design Style Guide</em>
          </strong>
        </h3>
        <div className="image-container-2">
          <img src="/rev_vdg.png" alt="revised Visual Design Style Guide" />
        </div>

        <br />

        <h3 style={{ fontSize: "1.5em" }}>
          <strong>
            <em>Mockups - Desktop</em>
          </strong>
        </h3>
        <div className="image-container-2">
          <img src="/desk1.png" alt="mockup" />
        </div>
        <div className="image-container-2">
          <img src="/desk2.png" alt="mockup" />
        </div>
        <div className="image-container-2">
          <img src="/desk3.png" alt="mockup" />
        </div>
        <br />

        <h3 style={{ fontSize: "1.5em" }}>
          <strong>
            <em>Mockups - Tablet</em>
          </strong>
        </h3>
        <div className="image-row">
          <div className="image-container-2">
            <img src="/tablet3.png" alt="apsara tablet" />
          </div>
          <div className="image-container-2">
            <img src="/tablet2.png" alt="apsara tablet" />
          </div>
        </div>

        <h3 style={{ fontSize: "1.5em" }}>
          <strong>
            <em>Mockups - Mobile</em>
          </strong>
        </h3>
        <div className="image-row">
          <div className="image-container-2">
            <img src="/mobile1.png" alt="apsara tablet" />
          </div>
          <div className="image-container-2">
            <img src="/mobile3.png" alt="apsara tablet" />
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ textDecoration: "underline" }}>
          Part 3: Redesigned Webpage and Key Improvements
        </h2>
        <p>
          Developed a new Apsara Asian Restaraunt main webpage based on the
          analysis and mockups created in the previous sections using HTML and
          CSS.
        </p>
        <br />
        <div className="button-container">
          <a href="https://apsara-two.vercel.app/" target="_blank">
            <button className="visit-website-button">
              Visit Redesigned Website
            </button>
          </a>
        </div>

        <h3 style={{ fontSize: "1.5em" }}>
          <strong>
            <em>Key Improvements</em>
          </strong>
        </h3>
        <br />

        <div className="">
          <h2 style={{ fontSize: "1.3em", textDecoration: "underline" }}>
            {" "}
            Navigation Bar
          </h2>
          <ul>
            <li>
              Horizontal navigation bar at top of page to make navigation more
              intuitive and take up less space.
            </li>
            <br />
            <li>Feedback (color changes) when hovering over menu items. </li>
            <br />
            <li>
              Added hamburger menu which opens a full dropdown menu for smaller
              screen sizes.
            </li>
            <br />
            <li>All logos link back to main page.</li>
            <br />
            <li>
              Removed confusing DoorDash logo and added menu option to order
              online.
            </li>
          </ul>
        </div>

        <br />
        <div className="">
          <h2 style={{ fontSize: "1.3em", textDecoration: "underline" }}>
            {" "}
            Main Content
          </h2>
          <ul>
            <li>
              Added automated and manual slideshow depicting popular dishes for
              increased memorability.
            </li>
            <br />
            <li>
              Removed unecessary text, making the page feel less cluttered.{" "}
            </li>
            <br />
            <li>
              Reordered color pallete to increase contrast between text and
              background while maintaing orignal colors to maintain brand
              identity.
            </li>
            <br />
            <li>Utilized more modern fonts for memorability.</li>
            <br />
            <li>
              Added hover effects for buttons to enhance user interaction and
              memorability.
            </li>
            <br />
            <li>
              Designed a new logo while maintaining current brand style and
              colors to enhance brand identity.
            </li>
            <br />
            <li>
              Created new buttons for &apos;View Menu&apos; and &apos;Read
              More&apos; to improve efficiency to navigate to other pages.
            </li>
          </ul>
        </div>

        <br />

        <div className="">
          <h2 style={{ fontSize: "1.3em", textDecoration: "underline" }}>
            Footer
          </h2>
          <ul>
            <li>
              Moved address and phone number to footer where they are typically
              found to enhace learnability.
            </li>
            <br />
            <li>
              Removed the redunant maps and added a hyperlink to the location.
              Also added hyperlink to phone number, improving efficiency and
              learnability.
            </li>
            <br />
            <li>Added hover effects to social media icons for memorability.</li>
            <br />
            <li>
              Added email signup button for brand recognition and to increase
              user engagement.
            </li>
          </ul>
        </div>

        <br />

        <div className="">
          <h2 style={{ fontSize: "1.3em", textDecoration: "underline" }}>
            {" "}
            Accessibility
          </h2>
          <ul>
            <li>
              Elements on webpage dynamically resize and reposition for smaller
              screen support.
            </li>
            <br />
            <li>
              Alt-text and aria-labels present everywhere on webpage to support
              those with impairments.
            </li>
            <br />
            <li>All clickable elements contain some sort visual feedback.</li>
            <br />
            <li> Increased font size for better visibility. </li>
            <br />
            <li>Support for language translation and different font sizes.</li>
            <br />
            <li>
              Enhanced contrast between text and elements against background.
            </li>
            <br />
            <li>
              Added support to tab through entire website. User can also use
              escape key to exit dropdown menu.
            </li>
            <br />
            <li>
              Added hyperlinks to elements that were previously missing them.
              Some may not be currently functional as this is just a prototype.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Valuable Lessons Learned</h2>
        <p>
          Throughout the analysis and webpage redesign process, several key
          insights emerged about user interface usability and experience.
        </p>
        <br />
        <ul>
          <li>
            <strong>The Importance of User Centered Design:</strong> Learned how
            to identify usability flaws in an existing interface by analyzing
            efficiency, learnability, and memorability, leading to more
            responsive and accessible designs.
          </li>
          <br />
          <li>
            <strong>Responsive and Adaptive Design:</strong> Gained experience
            creating mockups and redesigning interfaces for multiple screen
            sizes, realizing the effort it takes to ensure a seamless experience
            across devices.
          </li>
          <br />
          <li>
            <strong>Value of Visual Identity:</strong> Incorporating cohesive
            branding elements like consistent colors, typography, and engaging
            images, significantly enhances the site&apos;s memorability and user
            retention.
          </li>
        </ul>
      </section>

      <footer>
        <p>© 2025 Zeeshan Bhalwani. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RespRedPage;
