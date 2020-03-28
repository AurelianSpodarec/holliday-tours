import firebase from './../firebase';


async function handleOnLogin(values) {
    console.log(values)
    const req = firebase.auth().signInWithEmailAndPassword(values.email, values.password);
    return req;
}

async function handleOnSignup(values) {
    const { name, email, password } = values;

    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password);

        if (res.user.uid) {
            const { uid } = res.user;
            const userData = { email, name, uid }
            await firebase.createNewUser
        }
    } catch (error) {

    }
}

function logout() {
    const req = firebase.auth().signOut();
    return req;
}

export {
    handleOnLogin,
    handleOnSignup,
    logout
}