const options = () => {
  return {
    toggleSidebar: {
      type: "Button",
      options: {
        text: { en: "Toggle sidebar state" },
        color: "blue",
        action: "toggleSidebar",
      },
    },
    fixedBottomLayout: {
      type: "OnOff",
      label: {
        en: "Fixed bottom layout",
      },
    },
  };
};

const positioning = () => {
  return {
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
    },
  };
};

const dimensions = (content) => {
  return {
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
    },
    heightBottomTop:
      content.positioning === "top" || content.positioning === "bottom"
        ? {
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
          }
        : {},
  };
};

const animation = () => {
  return {
    transitionDuration: {
      type: "Length",
      label: {
        en: "Transition duration",
        fr: "Durée de la transition",
      },
      options: {
        unitChoices: [{ value: "ms", label: "ms", min: 1, max: 5000 }],
      },
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
    },
  };
};

export const getSettingsConfigurations = (content) => {
  return {
    settingsOptions: { ...options() },
    styleOptions: {
      ...positioning(),
      ...dimensions(content),
      ...animation(),
    },
  };
};
