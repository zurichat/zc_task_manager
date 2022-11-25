import Documentator from "../src/utils/documentator/index.js";
import definition from "../src/utils/documentator/config/index.js";

export const mochaHooks = {
    async beforeAll() {
        Documentator.start(definition);
    },

    async afterAll() {
        Documentator.document();
    },
};
