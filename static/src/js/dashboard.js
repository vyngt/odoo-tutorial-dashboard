/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Layout } from "@web/search/layout";
import { useService } from "@web/core/utils/hooks";
import { Domain } from "@web/core/domain";
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
    this.action = useService("action");
  }

  open_librarian() {
    this.action.doAction("tutorial_member.action_tutorial_member");
  }

  open_books(title, domain) {
    this.action.doAction({
      type: "ir.actions.act_window",
      name: title,
      res_model: "tutorial.library.book",
      domain: new Domain(domain).toList(),
      views: [
        [false, "list"],
        [false, "form"],
      ],
    });
  }

  open_active_books() {
    const domain = "[('active', '=', True)]";
    this.open_books("Show active books", domain);
  }

  open_dead_books() {
    const domain = "[('is_available', '=', False)]";
    this.open_books("Show unavailable books", domain);
  }
}

TutorialDashboard.components = { Layout };
TutorialDashboard.template = "tutorial_dashboard.client_action";

registry
  .category("actions")
  .add("tutorial_dashboard.dashboard", TutorialDashboard);
