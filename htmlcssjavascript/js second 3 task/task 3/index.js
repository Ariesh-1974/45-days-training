function observable(){
    let list = [];
    let state;

    return{
        subscribe(fn){
            list.push(fn);
        },
        unsubscribe(fn){
            list = list.filter((item) => item != fn);
        },
        notifi(){
            list.forEach((item) =>{
                item(state);
            })
        },
        setState(st){
            state = st;
            this.notifi();
        }
    }
}

const fun1 = (state) => {
    console.log("This function 1 state = ", state);
}

const fun2 = (state) => {
    console.log("This function 2 state = ", state);
}

const fun3 = (state) => {
    console.log("This function 3 state = ", state);
}
const obs = observable();

obs.subscribe(fun1);
obs.subscribe(fun2);
obs.subscribe(fun3);

obs.unsubscribe(fun3);

obs.setState("Karthicrajan");