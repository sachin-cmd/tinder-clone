import axios from "axios";

const instance= axios.create({
    baseURL:"https://tinderbackkend.herokuapp.com",
});

export default instance;