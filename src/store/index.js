import { persistStore } from "redux-persist";

import createStore from "./createStore";

import rootReducer from "./modules/rootReducer";

const middlewares = [];

const store = createStore(persistReducers(rootReducer), middlewares);

export { store };
