import userData from "../utils/usersData";

export const sessionToken =
  "NJK#N321n3jkn3j2nJN#J2k1n31j4mk23lmKM$KLM$KL#$23kn13";

export const localStorageHelper = (name, value) => {
  if (value) {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    return JSON.parse(localStorage.getItem(name));
  }
};

export const identifyUser = ({ email, password }) => {
  const user = userData.find(
    (values) => values.email === email && values.password === password
  );
  if (user) {
    return { ...user, sessionToken };
  } else {
    throw new Error("User not found");
  }
};
