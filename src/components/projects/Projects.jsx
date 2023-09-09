import budgetApp from "../../assets/budgetApp.png";
import cryptoApp from "../../assets/cryptoApp.png";
import animeData from "../../assets/animeData.png";
import bookstore from "../../assets/bookstore.png";
import calcApp from "../../assets/calcApp.png";
import leaderboardApp from "../../assets/leaderboardApp.png";
import './projects.css';

const Projects = () => {
  const data = [
    {
      id: 1,
      image: budgetApp,
      title: "Budget Buddy",
      description:
        "Budget Buddy is a mobile web application where a user can manage their budget and spending. A User will have a list of transactions associated with a category so that they can track how much money they spent and on what they spent it.",
      live: "https://data-sync.onrender.com/categories",
      github: "https://github.com/edubew/Budget-App",
      technologies: ["Ruby on Rails", "Bootstrap", "PostgreSql"],
    },
    {
      id: 2,
      image: cryptoApp,
      title: "Crypto Data App",
      description:
        "Virtual Currency- a single-page web-based application developed using React Library and redux store. It allows users to see the current market value and price of different global digital currencies and also search for a specific digital coin. The system also generates a full description of a specified cryptocurrency.",
      live: "https://virtual-currency.onrender.com/",
      github: "https://github.com/edubew/virtual-currency",
      technologies: ["React", "Redux", "API", "css3", "jest"],
    },
    {
      id: 3,
      image: animeData,
      title: "Anime App",
      description:
        "A web application for anime enthusiasts providing quick access to top ranking anime series, from detailed show synopses to comments by other watchers. A user can also add their comments and likes.",
      live: "https://top-rated-animes.onrender.com/",
      github: "https://github.com/edubew/Anime-Data-App",
      technologies: ["javascript", "Html5", "scss", "API"],
    },
    {
      id: 4,
      image: bookstore,
      title: "Bookstore",
      description:
        "The BookStore App is a user-friendly application designed to help you effortlessly organize and manage your personal book collection. You can easily keep track of your reading progress, add new books to your collection, and remove books as needed.",
      live: "https://bookstore-app-csnw.onrender.com/",
      github: "https://github.com/edubew/bookstore-react",
      technologies: ["React", "Redux", "css3", "API"],
    },
    {
      id: 5,
      image: calcApp,
      title: "Math Magicians App",
      description:
        "Math magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations read a random math-related quote.",
      live: "https://calculator-app-5nla.onrender.com/",
      github: "https://github.com/edubew/math-magicians",
      technologies: ["React", "css3", "jest"],
    },
    {
      id: 6,
      image: leaderboardApp,
      title: "Leaderboard",
      description:
        "Welcome to my leaderboard website, where you can view scores submitted by various players. And of course, you're more than welcome to submit your own score 😉. All data is preserved thanks to the external Leaderboard API service.",
      live: "https://leaderboard-7s3g.onrender.com/",
      github: "https://github.com/edubew/Leaderboard",
      technologies: ["javascript", "webpack", "css3", "API"],
    },
  ];
  return (
    <section>
      <h2 className="title">My Recent Work</h2>
      <div className="projects__container">
        {data.map(
          ({ id, image, title, description, live, github, technologies }) => {
            return (
              <article key={id} className="project__item">
                <div className="project__image">
                  <img src={image} alt={title} />
                </div>
                <div className="project__content">
                  <h2>{title}</h2>
                  <p>{description}</p>
                  <ul className="list__tags">
                    {technologies.map((technology) => (
                      <li className="list__item" key={technologies}>{technology}</li>
                    ))}
                  </ul>
                  <div className="demo__links">
                    <a href={live}>Live</a>
                    <a href={github}>Source</a>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Projects;
