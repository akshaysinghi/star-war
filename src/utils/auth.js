export const USER_KEY = "user";

export const onSignIn = () => sessionStorage.setItem(USER_KEY, 'true');

export const onSignOut = () => sessionStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    if (sessionStorage.getItem(USER_KEY) === 'true') {
      resolve(true);
    } else {
      reject(false);
    }

  });
};