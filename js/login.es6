let login = (username, password) => {
    if(username !== 'admin' || password !=='radical'){
        console.log('incorrect login');
    } else { console.log('you are now logged in with correct credentials')}
};

export {login};