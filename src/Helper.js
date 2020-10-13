export function saveStateToLocalStorage(State){
     let stringifiedState = JSON.stringify(State)
     window.localStorage.setItem("taskState",stringifiedState)
}

export function getStateFromLocalStorage(){
    let State = localStorage.getItem("taskState");
    let parsedState = JSON.parse(State);
    return parsedState;
}