export function changeState(state) {
    return {
        type: "changeMenu",
        payload: !state
    };
}