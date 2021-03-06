export default {
    editor: {
        label: {
            en: 'Navigation Sidebar',
        },
    },
    properties: {
        fixedBottomLayout: {
            type: 'OnOff',
            label: {
                en: 'Fixed bottom layout',
            },
            section: 'settings',
            defaultValue: false,
            bindable: true,
        },
        positioning: {
            label: {
                en: 'Positioning',
                fr: 'Positionnement',
            },
            type: 'TextSelect',
            options: {
                options: [
                    { value: 'left', label: { en: 'Left', fr: 'Gauche' } },
                    { value: 'right', label: { en: 'Right', fr: 'Droite' } },
                    { value: 'bottom', label: { en: 'Bottom', fr: 'Bas' } },
                    { value: 'top', label: { en: 'Top', fr: 'Haut' } },
                ],
            },
            responsive: true,
            defaultValue: 'left',
            bindable: true,
        },
        spacings: {
            type: 'Length',
            label: {
                en: 'Spacings',
                fr: 'Spacings',
            },
            options: {
                unitChoices: [
                    { value: 'px', label: 'px' },
                    { value: '%', label: '%' },
                ],
            },
            responsive: true,
            defaultValue: '20px',
            bindable: true,
        },
        width: {
            type: 'Length',
            label: {
                en: 'Width',
                fr: 'Width',
            },
            options: {
                unitChoices: [
                    { value: 'px', label: 'px' },
                    { value: '%', label: '%' },
                ],
            },
            responsive: true,
            defaultValue: '90px',
            bindable: true,
        },
        heightBottomTop: {
            hidden: content => content.positioning !== 'top' || content.positioning !== 'bottom',
            type: 'Length',
            label: {
                en: 'Height',
                fr: 'Height',
            },
            options: {
                unitChoices: [
                    { value: 'px', label: 'px' },
                    { value: '%', label: '%' },
                ],
            },
            responsive: true,
            defaultValue: '70px',
            bindable: true,
        },
        contentLayoutBottom: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-flexbox', content: { direction: 'column' } },
        },
        contentLayout: {
            hidden: true,
            defaultValue: { isWwObject: true, type: 'ww-flexbox', content: { direction: 'column' } },
        },
    },
};
