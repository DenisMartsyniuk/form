import { createStore } from "redux";

import { rootReducer } from "core/rootReducer";
import { enhancedStore } from "core/middleware";

export const store = createStore(rootReducer, enhancedStore);
