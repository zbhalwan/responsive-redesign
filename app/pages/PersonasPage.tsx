import React, { useEffect, useState } from 'react';
import './PersonasPage.css';
// @ts-ignore

const PersonasPage = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
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
        <h1><strong>Personas and Storyboarding</strong></h1>
        <p>User Interface and Experience Study</p>
      </header>
      <section>
        <h2> Overview & Objectives</h2>
        <ul>
          <li>Learn to make real-life observations and construct unbiased interviews in public.</li>
          <li>Understand how to illustrate user needs and experiences based on empirical observations through personas and storyboarding.</li>
          <li>Create engaging narratives that demonstrate the user journey end-to-end and the goals and characteristics of the depicted persona.</li>
        </ul>
      </section>

        <section>
          <h2>Background</h2>
          <p>This project focuses on observing and understanding user interactions with public interfaces to improve design and functionality. I chose to focus on a microwave located in a communal dorm room kitchen</p>
          <br />
          <ul>
            <li>Contributors: Zeeshan Bhalwani</li>
            <li>Timeline: 2 Weeks</li>
            <li>Tools: Figma, Goodnotes, Google Docs</li>
            <li> Focus: Specifically focused on <u>microwaves</u>.</li>
          </ul>
        </section>
        
        <section>
            <h2>Part 1: Evaluating Microwave Interface Usability</h2>
            <p>Prepared questions for user interviews and sketched the microwave interface to understand usability challenges and opportunities for improvement.</p>
            <br />
            <h3 style={{ fontSize: '1.5em' }}><strong><em>Interview Questions:</em></strong></h3>
            <ul>
                <li><strong>Initial Impressions:</strong> What were your initial thoughts when you just used this microwave? Was anything intuitive or confusing?</li>
                <li><strong>Feature Perception:</strong> How do you feel about the additional features like the Convenience Cooking options or the Express Cook option?</li>
                <li><strong>Navigation Ease:</strong> How easy or difficult is it to navigate through the options (power levels, starting up the microwave, etc.)?</li>
                <li><strong>Feedback Clarity:</strong> How well do you feel the microwave communicates what it is doing?</li>
                <li><strong>Error Recovery:</strong> Have you ever made a mistake while using the microwave? If so, how easy was it to recover the mistake?</li>
                <li><strong>Potential Changes:</strong> If you could change one thing about the microwave, what would you change?</li>
            </ul>
            <br />
            <h3 style={{ fontSize: '1.5em' }}><strong><em>Interface Sketch:</em></strong></h3>
            <div className="image-container">
                <img src="/microwave_sketch.png" alt="Microwave Interface Sketch" />
                <p><em>The microwave provides a fast and simple way to heat food with precision. Its key components—buttons to set cooking time, power levels, preset cooking options, a turntable, and a digital display—work together to control time, heat distribution, and cooking modes for user convenience.</em></p>
            </div>
        </section>

        <section>
            <h2>Part 2: Observations & Interview Responses</h2>
            <p>Observed and surveyed 3 different people on how they interact with the microwave and what could be better.</p>
            <br />
            <h3 style={{ fontSize: '1.5em' }}><strong><em>Observations:</em></strong></h3>
            <ul>
                <li>The first user quickly found and used the express cook buttons but struggled to change the power level. The power level button was pressed multiple times before the correct level was selected.</li>
                <li>The second user used the convenience option to cook popcorn. The user was confident and happy after his popcorn came out properly cooked.</li>
                <li>The third user wanted to use the vent fan but had trouble finding the button because the font was worn out.</li>
                <li>All users relied on the microwave display and sound for feedback to confirm their option selection and cooking time.</li>
                <li>When a wrong button was pressed, users ended up pressing the “Cancel” button to cancel the operation and started over rather than correcting the input.</li>
                <li>People typically used express cook options over setting a specific amount of time.</li>
            </ul>
            <br />

            <h3 style={{ fontSize: '1.5em' }}><strong><em>Summary of Interview:</em></strong></h3>
            <br />

            <p><strong>Q: What were your initial thoughts when you just used this microwave? Was anything intuitive or confusing?</strong></p>
            <p><em>A: Users found the interface simple and straightforward. One person mentioned that the number of buttons could be overwhelming at first.</em></p>
            <br />
            <p><strong>Q: How do you feel about the additional features like the Convenience Cooking options or the Express Cook option?</strong></p>
            <p><em>A: Convenience features like express cook and options for specific food items were praised even though it was mentioned that they may not always heat up the food properly. Features like power level adjustment and the vent fan were a little less intuitive.</em></p>
            <br />
            <p><strong>Q: How easy or difficult is it to navigate through the options (power levels, starting up the microwave, etc.)?</strong></p>
            <p><em>A: Users mentioned that sometimes there were accidental presses of the wrong button since they are close to each other. It was also hard to distinguish between the vent fan and surface light buttons since they were worn out. To reheat food was intuitive, and express cook was preferred over timed cook since it required fewer button presses.</em></p>
            <br />
            <p><strong>Q: How well do you feel the microwave communicates what it&apos;s doing?</strong></p>
            <p><em>A: People appreciated the feedback from the display and the sound output every time a button was pressed, door opened/closed, or when the microwave was running.</em></p>
            <br />
            <p><strong>Q: Have you ever made a mistake while using the microwave? If so, how easy was it to recover the mistake?</strong></p>
            <p><em>A: Users liked the cancel button, but a couple of them wished for an undo button instead of restarting the whole process for minor mistakes.</em></p>
            <br />
            <p><strong>Q: If you could change one thing about the microwave, what would you change?</strong></p>
            <p><em>A: One person mentioned clearer and wear-resistant labeling, another mentioned they&apos;d like physical or more sensitive buttons because sometimes the touch-sensitive buttons don&apos;t always register input, and another mentioned having customizable presets for frequently used options.</em></p>

            <br />

        </section>

        <section>
          <h2>Part 3: Personas</h2>
          <p>Constructed 2 personas by creating a four-quadrant empathy map, describing what users think, feel, say, for archetypal characters that represent part of the spectrum of users I observed.</p>
          <br />
          
          <h3 style={{ fontSize: '1.5em' }}><strong><em>Procractinating Paul</em></strong></h3>
            <div className="image-container">
                <img src="/paul.jpeg" alt="paul empathy map" />
                <p><em>Procrastinating paul is a full time college student who waits until the abosulute last second to complete his assignments. He has a final essay due in 2 hours which he needs to starts on but needs to quickl;y eat something before he starts working.</em></p>
            </div>

            <br />

            <h3 style={{ fontSize: '1.5em' }}><strong><em>Careful Kyle</em></strong></h3>
            <div className="image-container">
                <img src="/kyle.jpeg" alt="kyle empathy map" />
                <p><em>Careful Kyle is a detail-oriented person who want control over the cooking settings. He wants his food to come out abosilutely perfect.</em></p>
            </div>
        </section>

        <section>
            <h2>Part 4: Procrastinating Paul&apos;s Storyboard</h2>
            <p>A storyboard is a visual representation in a series of panels, used to plan and organize the sequence of events. Based on the the persona of Procrasting Paul, I storyboarded his entire user journey with the microwave from start to end.</p>
            <br />
            <div className="image-container">
                <img src="/storyboard.jpeg" alt="kyle empathy map" />
            </div>
        </section>

        <section>
            <h2>Valuable Lessons Learned</h2>
            <p>Throughout the analysis and persona creation process, several key insights emerged about user interface usability and experience.</p>
            <br />
            <ul>
                <li><strong>The Importance of Clear Labeling:</strong> Users struggled with worn-out labels and unclear button differentiation (like the vent fan vs. surface light). This highlights the need for durable design, especially for frequently used functions to avoid confusion.</li>
                <li><strong>Efficiency Through Convenience Features:</strong> The popularity of express cook and convenience options over manually setting the time shows that users prefer features that make tasks simple. Offering fewer button presses or faster paths to commonly used options enhances the user experience.</li>
                <li><strong>Feedback is Crucial for User Confidence:</strong> Positive feedback, both visual and auditory, play a major role in making users feel confident in their selection. Feedback during interactions helps users stay in control, especially when mistakes happen.</li>
            </ul>
        </section>



      <section>
        <h2>Complete Analysis</h2>
        <iframe src="/personas_final.pdf" width="100%" height="600px"></iframe>
      </section>

      <footer>
        <p>© 2025 Zeeshan Bhalwani. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default PersonasPage;