import { projectData } from "../../utils/projectData";

const Window = ({ activeProject }) => {
  const projectDetails = projectData[activeProject] || {};

  return (
    <div className="border h-192 mx-5 mt-12 px-4 py-4 text-white text-2xl overflow-y-auto custom-scroll">
      {activeProject ? (
        <div>
          <h2 className="text-3xl mb-3">{activeProject}</h2>
          <p className="mx-7">
            {projectDetails.description} Here's the{" "}
            <a
              className="text-green-400 underline"
              href={projectDetails.link}
              target="_blank"
            >
              Github
            </a>{" "}
            for the code.
          </p>
          <div className="my-9 grid place-items-center">
            {projectDetails.images &&
              projectDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={activeProject}
                  className="w-4/5"
                />
              ))}
            <div className="flex space-x-4 mt-3">
              {projectDetails.icons &&
                projectDetails.icons.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p>
          I am <span className="text-green-400">Jaylyn Green</span>, an aspiring
          web developer. I graduated from Georgia Southwestern University with a
          bachelor's in <span className="text-orange-500">IT</span>. I have
          built several projects showcasing my work and if you would like to
          check them out, take look at the{" "}
          <span className="text-green-400">projects</span> tab. Explore the
          section on the left to learn about my{" "}
          <span className="text-purple-400">skills</span> and the{" "}
          <span className="text-purple-400">tools</span> that I use You can also
          view my repositories in this{" "}
          <a
            className="text-green-400 underline"
            href="https://github.com/jaylyn-green"
          >
            GitHub
          </a>{" "}
          link.
          <br />
          <br />
          Although I have more experience in{" "}
          <span className="text-orange-500">frontend</span> development, I also
          enjoy building <span className="text-purple-400">backend</span>{" "}
          application and tinkering with{" "}
          <span className="text-green-400">electronics</span>.
          <br />
          <br />
          Here is a link to my{" "}
          <a
            className="text-orange-500 underline"
            href="https://drive.google.com/file/d/17PRbEObOIrWKousTi9ffBggD9Vc7hLl8/view?usp=sharing"
            target="_blank"               /**opens a new tab when link is clicked */
          >
            {" "}
            resum&eacute;
          </a>{" "}
          and{" "}
          <a
            className="text-purple-400 underline"
            href="https://www.linkedin.com/in/jaylyn-green-0b4086242/"
            target="_blank"
          >
            LinkedIn.
          </a>{" "}
        </p>
      )}
    </div>
  );
};

export default Window;
