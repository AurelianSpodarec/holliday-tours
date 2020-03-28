import firebase from './../../firebase';


function handleOnLogin(values) {
    const req = firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
    return req;
}

function handleOnSignup(values) {
    const { name, email, password } = values;

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch (error) {

    }
}

function logout() {
    const req = firebase.auth().signOut();
    return req;
}

export {
    handleOnLogin,
    handleOnSignup
}