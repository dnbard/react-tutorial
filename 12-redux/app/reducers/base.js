export default function actionHandling(actionHandlers, action, state){
    const handler = actionHandlers[action.type];

    if (typeof handler === 'function'){
        return Object.assign({}, state, handler(action));
    }

    return state;
}
