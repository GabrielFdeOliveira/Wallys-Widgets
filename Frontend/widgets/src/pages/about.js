import React from "react";
import styles from "../styles/About.module.css";

function About() {
  return (
    <div className={styles.container} data-testid="about">
      <div className={styles.text}>
        <h1>Development journey</h1>
        <p>
          In this write-up, I'll discuss my experience building this solution.
          My first step was carefully reading through the assignment, trying to
          draw parallels with previous experiences I've had. During this
          process, I noticed a vague instruction about making the app flexible
          to accommodate new pack sizes or changes to existing ones. I wasn't
          sure if this meant that the app should be adaptable to a developer's
          changes or if it should be flexible for the client to manipulate pack
          sizes themselves. Regardless, I aimed to create a solution that could
          produce the same results even if the pack sizes were changed by either
          party.
        </p>
        <br />
        <p>
          Initially, I planned to create an API and store package sizes in a
          database, but I realized this would be over-engineering. Instead, I
          decided to use a simple state to keep track of the pack sizes.
        </p>
        <br />
        <p>
          Moving on to the frontend, I chose Next.js for its ease of deployment,
          fast loading times compared to Create-React-App, its simplicity in
          routing, and its large community, which is helpful when seeking
          assistance.
        </p>
        <br />
        <p>
          At first, everything ran from the index.js file, which resulted in a
          bloated component. I eventually decided to move some functions
          elsewhere for better readability and renamed some functions to be more
          intuitive.
        </p>
        <br />
        <p>
          One significant hurdle I encountered was sorting the new or modified
          pack sizes in the order necessary for my logic to work. At first, I
          tried adding a .sort method within an onChange function, but it was
          triggered after every number added, resulting in unintended
          consequences. Next, I attempted to create a standalone function to
          sort the numbers onClick, but this would have been counterintuitive
          for the user. My third attempt was to wrap the standalone function in
          an useEffect hook that would be triggered every time the state
          containing the pack sizes changed, but it didn't work because I was
          inserting new values using onChange instead of onClick. Eventually, I
          added another button ("Update") to sort the array and enable the app
          to work correctly without being problematic to eventual users.
        </p>
        <br />
        <p>
          Another hurdle was how the WidgetFormOrder component was rendered
          using the map method. Because I used the index as the key, the new
          added value was replacing the last index of the array when rendered,
          even though the state itself held a different value. To work around
          this, I used the number of units of each package as a unique key.
        </p>
        <br />
        <p>
          I also encountered some difficulties configuring the testing
          environment, but I was able to find the necessary resources thanks to
          the Next.js community.
        </p>
        <br />
        <p>
          Overall, this was a challenging project that helped me improve my
          current skills, and I hope to have the opportunity to discuss it
          further with you in a call or in person.
        </p>
      </div>
    </div>
  );
}

export default About;
