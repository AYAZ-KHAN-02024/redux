
function api() {



    const data = 'abcdefghijklmnopqrstuvwxyz';
    let string = '';

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * data.length);
        string += data.charAt(index);
    }

    return string;
    
    //jo chiz return karta hai function vhai chiz agle bar catch hota hai , ya use hota hai very very important

}

export { api };
// just function not component
