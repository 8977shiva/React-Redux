import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
function configureStore(initialStore) {
  const composeEnhacners =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

  return createStore(
    rootReducer,
    initialStore,
    composeEnhacners(applyMiddleware(reduxImmutableStateInvariant()))
  );
}

export default configureStore;
