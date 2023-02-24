/** @odoo-module */

import { registry } from "@web/core/registry";
import { memoize } from "@web/core/utils/functions";

export const tutorial_service = {
  dependencies: ["rpc"],
  async: ["load_statistics"],
  start(env, { rpc }) {
    return {
      load_statistics: memoize(() => rpc("/tutorial/rpc/library/books")),
    };
  },
};

registry.category("services").add("tutorial_service", tutorial_service);
