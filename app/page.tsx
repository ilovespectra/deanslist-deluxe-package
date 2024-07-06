// app/page.tsx

"use client";

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Deluxe Feedback Package Outline</title>
        <meta name="description" content="Comprehensive feedback and improvements for Solana ecosystem projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Deluxe Feedback Package Outline - $25,000</h1>

        <section>
          <h2>I. Introduction</h2>
          <p><strong>Objective:</strong> To provide comprehensive feedback and improvements for Solana ecosystem projects, ensuring high-quality user experiences and robust technical performance.</p>
          <p><strong>Components:</strong> Detailed feedback from power users, professional code review, document review, competitive analysis, and case study with a performance report.</p>
        </section>

        <section>
          <h2>II. Budget Allocation Overview</h2>
          <table>
            <thead>
              <tr>
                <th>Component</th>
                <th>Percentage of Budget</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DAO Tax</td>
                <td>20%</td>
                <td>$5,000</td>
              </tr>
              <tr>
                <td>Referrer Commission</td>
                <td>10%</td>
                <td>$2,500</td>
              </tr>
              <tr>
                <td>Manager Pay</td>
                <td>Variable</td>
                <td>See Below</td>
              </tr>
              <tr>
                <td>Feedback Participants</td>
                <td>Variable</td>
                <td>See Below</td>
              </tr>
              <tr>
                <td>Professional Code Review (GibWork)</td>
                <td>20%</td>
                <td>$5,000</td>
              </tr>
              <tr>
                <td>Document Review and Revision (SuperteamEarn)</td>
                <td>10%</td>
                <td>$2,500</td>
              </tr>
              <tr>
                <td>Competitive Analysis (Focus Group)</td>
                <td>13%</td>
                <td>$3,250</td>
              </tr>
              <tr>
                <td>Case Study and Performance Report (Focus Group)</td>
                <td>17%</td>
                <td>$4,250</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2>III. Detailed Component Breakdown</h2>
          <h3>DAO Tax (20%)</h3>
          <p><strong>Amount:</strong> $5,000</p>
          <p><strong>Purpose:</strong> To support the operational costs of deanslistDAO and fund future initiatives.</p>

          <h3>Referrer Commission (10%)</h3>
          <p><strong>Amount:</strong> $2,500</p>
          <p><strong>Purpose:</strong> To incentivize network members to refer new projects to the feedback service.</p>

          <h3>Manager Pay (Variable)</h3>
          <p><strong>Calculation:</strong> Dependent on the number of feedback participants and outsourcing needs.</p>
          <p><strong>Example:</strong> If feedback budget is $5,000 and manager oversees 10 participants, manager pay could be $1,000 (20% of feedback budget).</p>

          <h3>Feedback Participants</h3>
          <p><strong>Amount:</strong> Variable, allocated from feedback budget after managerial pay.</p>
          <p><strong>Purpose:</strong> To compensate power users for providing detailed feedback.</p>
          <p><strong>Example:</strong> With a $5,000 budget, if manager pay is $1,000, remaining $4,000 is distributed among participants.</p>

          <h3>Professional Code Review (GibWork) (20%)</h3>
          <p><strong>Amount:</strong> $5,000</p>
          <p><strong>Purpose:</strong> To hire professional developers for a thorough code review, ensuring security and efficiency, refactoring, styling, and mobile optimization.</p>

          <h3>Document Review and Revision (SuperteamEarn) (10%)</h3>
          <p><strong>Amount:</strong> $2,500</p>
          <p><strong>Purpose:</strong> To review and revise all project documentation, ensuring clarity and completeness.</p>

          <h3>Comprehensive Competitive Analysis (13%)</h3>
          <p><strong>Amount:</strong> $3,250</p>
          <p><strong>Purpose:</strong> To conduct an in-depth analysis of competing projects, identifying strengths and weaknesses.</p>

          <h3>Case Study and Performance Report (17%)</h3>
          <p><strong>Amount:</strong> $4,250</p>
          <p><strong>Purpose:</strong> To create a detailed case study, including performance metrics and user experience insights, providing actionable recommendations.</p>
        </section>

        <section>
          <h2>IV. Manager Pay and Feedback Participants Example Breakdown</h2>
          <p><strong>Total Feedback Budget:</strong> $5,000 (after DAO tax and referrer commission)</p>

          <h3>Manager Pay:</h3>
          <p><strong>Base Pay:</strong> $500 (10% of feedback budget)</p>
          <p><strong>Additional Pay:</strong> $50 per participant</p>
          <p><strong>Example:</strong> With 10 participants, Manager Pay = $500 + (10 * $50) = $1,000</p>

          <h3>Feedback Participants:</h3>
          <p><strong>Total Allocation:</strong> $4,000 (remaining budget after manager pay)</p>
          <p><strong>Per Participant:</strong> $400 (if 10 participants)</p>
        </section>

        <section>
          <h2>V. Conclusion</h2>
          <p>The $25,000 deluxe feedback package offers a comprehensive suite of services designed to enhance the quality and performance of projects within the Solana ecosystem. By allocating funds strategically across various critical areas, we ensure thorough feedback, professional code reviews, meticulous document revisions, competitive analysis, and detailed performance reporting.</p>
        </section>
      </main>
      
      <style jsx>{`
        body {
          font-family: Arial, sans-serif;
        }
        main {
          max-width: 800px;
          margin: auto;
          padding: 20px;
        }
        h1, h2, h3 {
          color: #333;
        }
        p {
          line-height: 1.6;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f4f4f4;
        }
        section {
          margin-bottom: 40px;
        }
      `}</style>
    </div>
  );
}
