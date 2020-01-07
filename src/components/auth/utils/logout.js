
export const logout = e => {
    e.preventDefault();
    localStorage.removeItem("token");
};