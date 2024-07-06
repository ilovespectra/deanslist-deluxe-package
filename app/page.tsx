"use client";

import Head from 'next/head';
import { useEffect } from 'react';
import { FaDollarSign, FaProjectDiagram, FaUsers, FaCode, FaFileAlt, FaChartBar, FaRegChartBar } from 'react-icons/fa';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Deluxe Feedback Package</title>
        <meta name="description" content="Comprehensive feedback and improvements for Solana ecosystem projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <img src="./banner.png" alt="Banner" className="banner" />
        <h1 className="font-size-xl">Deanslist Feedback Package $25,000</h1>
        <p className="p-note"><i>We could offer this package 50% to our first clients, and collaborate for feedback on our new service.</i></p>        
        <br></br>
        <section>
          <h2><FaProjectDiagram /> I. Objective</h2>
          <br></br>
          <p>To provide comprehensive feedback and improvements for Solana ecosystem projects, ensuring high-quality user experiences and robust technical performance.</p>
          <br></br>
          <p><strong>Components:</strong> Detailed feedback from power users, professional code review, document review, competitive analysis, and case study with a performance report.</p>
        </section>

        <section>
          <h2><FaDollarSign /> II. Budget Allocation Overview</h2>
          <br></br>
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
                <td>Feedback Participants (Focus Group)</td>
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

        
          <h2><FaUsers /> III. Detailed Component Breakdown</h2>
          <br></br>
          <section className="section-bottom">
          <h3>20% DAO Tax</h3>
          <p><strong>Amount:</strong> $5,000</p>
          <p><strong>Purpose:</strong> To support the operational costs of deanslistDAO and fund future initiatives.</p>
        </section>
        <section className="section-bottom">
          <h3>10% Referrer Commission</h3>
          <p><strong>Amount:</strong> $2,500</p>
          <p><strong>Purpose:</strong> To incentivize network members to refer new projects to the feedback service.</p>
        </section>
          <section className="section-bottom">
          <h3>Manager Pay (Variable)</h3>
          <p><strong>Calculation:</strong> Dependent on the number of feedback participants and outsourcing needs.</p>
          <p><strong>Example:</strong> If feedback budget is $5,000 and manager oversees 10 participants, manager pay could be $1,000 (20% of feedback budget).</p>
          </section>
          <section className="section-bottom">
          <h3>Feedback Participants (Variable)</h3>
          <p><strong>Amount:</strong> Variable, allocated from feedback budget after managerial pay.</p>
          <p><strong>Purpose:</strong> To compensate power users for providing detailed feedback.</p>
          <p><strong>Example:</strong> With a $5,000 budget, if manager pay is $1,000, remaining $4,000 is distributed among participants.</p>
          </section>
          <section className="section-bottom">
          <h3><FaCode />20%  Professional Code Review (GibWork)</h3>
          <p><strong>Amount:</strong> $5,000</p>
          <p><strong>Purpose:</strong> To hire professional developers for a thorough code review, ensuring security efficiency and mobile optimization.</p>
          </section>
          <section className="section-bottom">
          <h3><FaFileAlt />10%  Document Review and Revision (SuperteamEarn)</h3>
          <p><strong>Amount:</strong> $2,500</p>
          <p><strong>Purpose:</strong> To review and revise all project documentation, ensuring clarity and completeness.</p>
          </section>
          <section className="section-bottom">
          <h3><FaChartBar />13% Comprehensive Competitive Analysis (Focus Group)</h3>
          <p><strong>Amount:</strong> $3,250</p>
          <p><strong>Purpose:</strong> To conduct an in-depth analysis of competing projects, identifying strengths and weaknesses.</p>
          </section>
          <section className="section-bottom">
          <h3><FaRegChartBar />17% Case Study and Performance Report (Focus Group)</h3>
          <p><strong>Amount:</strong> $4,250</p>
          <p><strong>Purpose:</strong> To create a detailed case study, including performance metrics and user experience insights, providing actionable recommendations.</p>
        </section>

        <section>
          <h2>IV. Manager Pay and Feedback Participants Example Breakdown</h2>
          <br></br>
          <p><strong>Total Feedback Budget:</strong> $5,000 (after DAO tax and referrer commission)</p>
          <h3>Manager Pay:</h3>
          <p><strong>Base Pay:</strong> $500 (10% of feedback budget)</p>
          <p><strong>Additional Pay:</strong> $50 per participant</p>
          <p><strong>Example:</strong> With 10 participants, Manager Pay = $500 + (10 * $50) = $1,000</p>
          <h3>Feedback Participants:</h3>
          <p><strong>Total Allocation:</strong> $4,000 (remaining budget after manager pay)</p>
          <p><strong>Per Participant:</strong> $400 (if 10 participants)</p>
        </section>
      </main>
      
      <style jsx>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #121212;
          color: #E0E0E0;
        }
        main {
          max-width: 800px;
          margin: auto;
          padding: 20px;
          margin-top: 5vh;
          background-color: rgba(40, 40, 40, 0.9);
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        h1 {
          text-align: center;
          margin-bottom: 40px;
          color: #BB86FC;
          font-size: 2.5rem;
        }
        h2, h3 {
          color: #BB86FC;
        }
        p {
          line-height: 1.6;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 20px;
          background-color: #1F1F1F;
        }
        th, td {
          border: 1px solid #333;
          padding: 12px;
          text-align: left;
        }
        th {
          background-color: #292929;
          color: #BB86FC;
        }
        td {
          background-color: #1F1F1F;
        }
        section {
          margin-bottom: 40px;
          opacity: 0.4; 
          transition: opacity 0.7s ease-out;
          border: 1px solid white;
          border-radius: 16px;
          padding: 15px;
          border-color: white;
        }
        .banner {
          border-radius: 24px;
          margin-bottom: 10px;
        }
        section.visible {
          opacity: 1; 
        }
        .section-bottom {
        margin-bottom: 40px;
        opacity: 0.4; 
        transition: opacity 0.7s ease-out;
        border: 1px solid;
        border-radius: 12px;
        padding: 15px;
        border-color: purple;
        }
        .section-bottom.visible {
          opacity: 1; 
        }
        table tr:hover {
          background-color: #333;
          enlarge: 105%;
        }
        svg {
          vertical-align: middle;
          margin-right: 8px;
          color: #03DAC6;
        }
        .p-note {
          opacity: .25;
        }
      `}</style>
    </div>
  );
}
