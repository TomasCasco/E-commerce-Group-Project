export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const setLogged=(value)=>{
    return {
        type:"SET_LOGGED",
        payload:value
    }
}
