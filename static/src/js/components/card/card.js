/** @odoo-module **/

const { Component } = owl;

export class Card extends Component {}

Card.template = "tutorial_dashboard.Card";
Card.props = {
  slots: {
    type: Object,
    shape: {
      default: Object,
      title: { type: Object, optional: true },
    },
  },
  class_name: {
    type: String,
    optional: true,
  },
};
