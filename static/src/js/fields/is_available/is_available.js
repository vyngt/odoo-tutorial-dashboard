/** @odoo-module **/

import { registry } from "@web/core/registry";
import { BooleanField } from "@web/views/fields/boolean/boolean_field";

class IsAvailableField extends BooleanField {}

IsAvailableField.template = "tutorial_dashboard.IsAvailableField";

registry.category("fields").add("is_available_boolean", IsAvailableField);
