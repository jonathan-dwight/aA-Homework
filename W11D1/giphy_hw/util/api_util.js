import { $CombinedState } from "redux"

export const fetchSearchGiphys = (searchTerm) => {
    return $.ajax({
        url: `http://api.giphy.com/v1/gifs/search?q=${search+term}&api_key=wUk00I7uR0rPM1UwrMazZORuuppyRe1Y&limit=2`,
        method: 'GET'
    })
}