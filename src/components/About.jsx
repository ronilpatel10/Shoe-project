import Links from "./Links";
import './About.css';

function About() {
    return (
      <div className="about">
        <Links/>
        <h1>About</h1>
        <h2>Welcome to ShoeScope!</h2>
        <p>
          Sneakers are more than just shoes; they're a statement, a lifestyle, and a passion. At ShoeScope, we're not just another marketplace; we're an all-in-one platform dedicated to the sneaker enthusiast in you.
        </p>

        <h3>Why Choose ShoeScope?</h3>
        <ul>
          <li>
            <strong>Real-time Price Comparisons:</strong> Get immediate pricing insights from leading resell platforms. Whether it's the latest release or an all-time classic, know you're getting the best value.
          </li>
          <li>
            <strong>Stay Updated:</strong> Be the first to know about the latest sneaker releases. Our timely notifications ensure you never miss out.
          </li>
          <li>
            <strong>Expert Sneaker Insights:</strong> Dive deep into the world of sneakers. From design stories to industry analyses, our blog keeps you informed and inspired.
          </li>
          <li>
            <strong>User-Friendly Experience:</strong> Whether you're a seasoned collector or a newbie, navigating ShoeScope is a breeze. Explore brands, models, and trends with ease.
          </li>
        </ul>

        <h3>Join Our Community!</h3>
        <p>
          Beyond being a platform, we're a thriving community of sneakerheads. Share, connect, and engage in vibrant discussions about the latest in sneakers. Sign up at the Home🏠  page today!
        </p>

        <p>
          Ready to elevate your sneaker game? Explore ShoeScope and immerse yourself in everything sneakers.
        </p>
      </div>
    );
}

export default About;
