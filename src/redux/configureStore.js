import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
function configureStore(initialStore) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialStore,
    // for debuging
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}

export default configureStore;
