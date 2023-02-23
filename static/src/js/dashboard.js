/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";

import { getDefaultConfig } from "@web/views/view";

const { Component, useSubEnv } = owl;

export class TutorialDashboard extends Component {
  setup() {
    useSubEnv({
      config: {
        ...getDefaultConfig(),
        ...this.env.config,
      },
    });
    this.display = {
      controlPanel: { "top-right": false, "bottom-right": false },
    };
  }
}

TutorialDashboard.components = { Layout };
TutorialDashboard.template = "tutorial_dashboard.client_action";

registry
  .category("actions")
  .add("tutorial_dashboard.dashboard", TutorialDashboard);
