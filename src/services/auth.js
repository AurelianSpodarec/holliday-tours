import firebase from './../../firebase';

// TODO: Catch error
function login(data) {
    const req = firebase.auth().createUserWithEmailAndPassword(data.email, data.password);
    return req;
}

function logout() {
    const req = firebase.auth().signOut();
    return req;
}

export {
    login,
    logout
}