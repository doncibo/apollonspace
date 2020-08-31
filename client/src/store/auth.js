import Cookies from 'js-cookie';

export const login = (username, password) => {
    return dispatch => {
        const csrfToken = Cookies.get("XSRF-TOKEN");
        const res = fetch('/api/session', {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": csrfToken,
            }
        })
    }
}