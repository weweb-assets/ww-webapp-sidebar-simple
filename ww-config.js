export default {
  "editor": {
    "label": {
      "en": "Navigation Sidebar"
    }
  },
  properties: {
    toggleSidebar: {
      type: "Button",
      options: {
        text: { en: "Toggle sidebar state" },
        color: "blue",
        action: "toggleSidebar",
      },
      section: 'settings',
      editorOnly: true
    },
    fixedBottomLayout: {
      type: "OnOff",
      label: {
        en: "Fixed bottom layout",
      },
      section: 'settings',
      defaultValue: false
    },
    positioning: {
      label: {
        en: "Positioning",
        fr: "Positionnement",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "left", label: { en: "Left", fr: "Gauche" } },
          { value: "right", label: { en: "Right", fr: "Droite" } },
          { value: "bottom", label: { en: "Bottom", fr: "Bas" } },
          { value: "top", label: { en: "Top", fr: "Haut" } },
        ],
      },
      responsive: true,
      defaultValue: 'left'
    },
    spacings: {
      type: "Length",
      label: {
        en: "Spacings",
        fr: "Spacings",
      },
      options: {
        unitChoices: [
          { value: "px", label: "px" },
          { value: "%", label: "%" },
        ],
      },
      responsive: true,
      defaultValue: '20px'
    },
    widthClosed: {
      type: "Length",
      label: {
        en: "Width closed",
        fr: "Width closed",
      },
      options: {
        unitChoices: [
          { value: "px", label: "px" },
          { value: "%", label: "%" },
        ],
      },
      responsive: true,
      defaultValue: '90px'
    },
    widthOpen: {
      type: "Length",
      label: {
        en: "Width open",
        fr: "Width open",
      },
      options: {
        unitChoices: [
          { value: "px", label: "px" },
          { value: "%", label: "%" },
        ],
      },
      responsive: true,
      defaultValue: '250px'
    },
    heightBottomTop: {
      hidden: content => content.positioning !== "top" || content.positioning !== "bottom",
      type: "Length",
      label: {
        en: "Height",
        fr: "Height",
      },
      options: {
        unitChoices: [
          { value: "px", label: "px" },
          { value: "%", label: "%" },
        ],
      },
      responsive: true,
      defaultValue: '70px'
    },
    transitionDuration: {
      type: "Length",
      label: {
        en: "Transition duration",
        fr: "Durée de la transition",
      },
      options: {
        unitChoices: [{ value: "ms", label: "ms", min: 1, max: 5000 }],
      },
      defaultValue: '400ms'
    },
    transitionTimingFunction: {
      label: {
        en: "Transition timing function",
        fr: "Transition timing function",
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "ease", label: { en: "ease", fr: "ease" } },
          { value: "ease-in", label: { en: "ease-in", fr: "ease-in" } },
          { value: "ease-out", label: { en: "ease-out", fr: "ease-out" } },
          {
            value: "ease-in-out",
            label: { en: "ease-in-out", fr: "ease-in-out" },
          },
          { value: "linear", label: { en: "linear", fr: "linear" } },
        ],
      },
      defaultValue: 'ease'
    },
    headerLogo: {
      hidden: true,
      defaultValue: wwLib.element("ww-flexbox"),
    },
    headerContent: {
      hidden: true,
      defaultValue: wwLib.element("ww-flexbox"),
    },
    contentLayoutBottom: {
      hidden: true,
      defaultValue: wwLib.element({
        type: "ww-flexbox",
        content: { direction: "column" },
      })
    },
    contentLayout: {
      hidden: true,
      defaultValue: wwLib.element({
        type: "ww-flexbox",
        content: { direction: "column" },
      })
    }
  }
}
