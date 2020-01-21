const BASE_URL = 'https://swapi.co/api/';
const SEARCH_PATH = "?search=";

export const onLogin = (username, searchType = 'people/') => {
	const searchPath = SEARCH_PATH;
    return fetch(BASE_URL + searchType + searchPath + username).then(result => {
        return result.json()
    });
}


export const onSearch = (searchTerm, searchType, formatType) => {
	let searchParam = SEARCH_PATH + searchTerm;
    return fetch(BASE_URL + searchType + searchParam + formatType).then(result => {
        return result.json()
    });
}
