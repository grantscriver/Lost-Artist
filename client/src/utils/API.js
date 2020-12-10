import axios from "axios"
BASEURL = "https://api.unsplash.com/search/photos?page=1&query="

export default {
    searchPhotos: function (searchTerm) {
        return axios.get(BASEURL + searchTerm);
    }
};