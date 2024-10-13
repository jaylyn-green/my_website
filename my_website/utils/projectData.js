import CityUpdate from "../src/assets/CityUpdate.png"
import { HTML, CSS, REACT, NODEJS, DB } from "./icons";

export const projectData = {
    FitnessTracker: {
        description: "A web application that helps users track their fitness activities and goals.",
        images: [], // put images later
        icons: [HTML, CSS, REACT, NODEJS, DB],
        link: "https://github.com/jaylyn-green/fitness_tracker_fullstack"
    },
    CityUpdate: {
        description: "An app that provides real-time updates on city infrastructure. It is a full-stack web application designed to allow users to register, track, and manage city infrastructure projects. The platform helps centralize information about various projects, including their type, location, status, and impact on the community. The app utilizes Google Maps to display registered projects on an interactive map, providing a clear geographical overview of ongoing and upcoming city developments. This application uses Html, CSS, React, Node.js, and MongoDb",
        images: [CityUpdate],
        icons: [HTML, CSS, REACT, NODEJS, DB],
        link: "https://github.com/jaylyn-green/CityUpdate"
    },
    ChatApp: {
        description: "A chat application that allows users to communicate in real-time. Uses backend technologies such as Node.js and socket.io.",
        images: [],
        icons: [HTML, CSS, REACT, NODEJS, DB],
        link: "https://github.com/jaylyn-green/ChatApp"
    },
};