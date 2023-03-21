import React from "react";
import styles from "../styles/Assignment.module.css";

function Assignment() {
  return (
    <div className={styles.container} data-testid="about">
      <div className={styles.text}>
        <h1 className={styles.title}>Developer challenge</h1>
        <p>
          Wally’s Widget Company is a widget wholesaler. They sell widgets in a
          variety of pack sizes:
        </p>
        <ul>
          <li>250 Widgets</li>
          <li>500 Widgets</li>
          <li>1000 Widgets</li>
          <li>2000 Widgets</li>
          <li>5000 Widgets</li>
        </ul>
        <br />
        <br />
        <p>
          Their customers can order any number of widgets, but they will always
          be given complete packs. The company wants to be able to fulfil all
          orders according to the following rules:
        </p>
        <ol>
          <li>Only whole packs can be sent. Packs cannot be broken open.</li>
          <li>
            Within the constraints of Rule 1 above, send out no more widgets
            than necessary to fulfil the order.
          </li>
          <li>
            Within the constraints of Rules 1 & 2 above, send out as few packs
            as possible to fulfil each order.
          </li>
        </ol>
        <br />
        <br />
        <p>So, for example:</p>

        <table>
          <thead>
            <tr>
              <th>Number of Widgets ordered</th>
              <th>Correct packs to send</th>
              <th>Incorrect solution(s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>250 x 1</td>
              <td>500 x 1 (too many widgets)</td>
            </tr>
            <tr>
              <td>250</td>
              <td>250 x 1</td>
              <td>500 x 1 (too many widgets)</td>
            </tr>
            <tr>
              <td>251</td>
              <td>500 x 1</td>
              <td>250 x 2 (too many packs)</td>
            </tr>
            <tr>
              <td>501</td>
              <td>500 x 1 + 250 x 1</td>
              <td>1,000 x 1 (too many widgets)</td>
            </tr>
            <tr>
              <td>12,001</td>
              <td>5,000 x 2 + 2,000 x 1 + 250 x 1</td>
              <td>250 x 3 (too many packs), 5,000 x 3 (too many widgets)</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2>Your task</h2>
        <br />
        <p>
          Write a program that will tell Wally’s Widgets what packs to send out,
          for any given order size.
        </p>
        <p>
          <strong>Keep your program flexible</strong>, so that new pack sizes
          may be added, or existing pack sizes changed or discarded, at a later
          date with minimal adjustments to your program. Be sure to test that
          the rules stillwork as intended with a different pack configuration!
        </p>
        <p>
          Use JavaScript, or an alternative solution of your choice suitable for
          deployment to an online browser-based tool. We are mainly interested
          in your algorithmic problem solving and development approach, however
          strong demonstration of a framework such as Laravel and a web based
          user interface is appreciated if time allows. Please send us your code
          (either on GitHub, or send us the files), and also deploy your
          solution to an online environment that we can access via the web.
        </p>
      </div>
    </div>
  );
}

export default Assignment;
