module.exports = {
    'toolbar': {
        'newDiagram': 'New diagram',
        'openDiagram': 'Open existing diagram',
        'saveDiagram': 'Save current diagram',
        'export':{
            'label': 'Export to',
            'png': 'Png',
            'svg': 'Svg'
        },
        'layout':{
            'label': 'Layout',
            'manual': 'Manual',
            'tree': 'Tree',
            'cluster': 'Cluster'
        },
        'undo': 'Undo',
        'redo': 'Redo',
        'settings': 'Settings',
        'about': 'About'
    },
    'node':{
        'name': 'Label'
    },
    'edge':{
        'name': 'Label',
        'payoff': 'Payoff',
        'probability': 'Probability'

    },
    'settingsDialog':{
        'title': 'Settings',
        'general':{
            'title': 'General',
            'fontSize': 'Font size',
            'fontFamily': 'Font family',
            'numberFormatLocale': 'Number format locale',
        },
        'payoff':{
            'title': 'Payoff number format',
            'currency': 'Currency',
            'style': 'Style',
            'minimumFractionDigits': 'Minimum fraction digits',
            'maximumFractionDigits': 'Maximum fraction digits'
        },
        'probability':{
            'title': 'Probability number format',
            'style': 'Style',
            'minimumFractionDigits': 'Minimum fraction digits',
            'maximumFractionDigits': 'Maximum fraction digits',
            'fontSize': 'Font size',
            'color': 'Color'
        },
        'node':{
            'title': 'Node',
            'strokeWidth': 'Stroke width',
            optimal:{
                'title': 'Optimal',
                stroke: 'Color',
                'strokeWidth': 'Stroke width',
            },
            label: {
                'title': 'Label',
                fontSize: 'Label font size',
                color: 'Label color'
            },
            payoff: {
                'title': 'Payoff',
                fontSize: 'Font size',
                color: 'Color',
                negativeColor: 'Negative color'
            },
            decision: {
                'title': 'Decision Node',
                fill: 'Fill color',
                stroke: 'Stroke color',

                selected: {
                    fill: 'Selected fill color',
                }
            },
            chance: {
                'title': 'Chance Node',
                fill: 'Fill color',
                stroke: 'Stroke color',
                selected: {
                    fill: 'Selected fill color',
                }
            },
            terminal:{
                'title': 'Terminal Node',
                fill: 'Fill color',
                stroke: 'Stroke color',
                selected: {
                    fill: 'Selected fill color',
                },
                payoff: {
                    'title': 'Payoff',
                    fontSize: 'Font size',
                    color: 'Color',
                    negativeColor: 'Negative color'
                },
            }
        },
        edge:{
            'title': 'Edge',
            stroke: 'Color',
            'strokeWidth': 'Stroke width',
            optimal:{
                'title': 'Optimal',
                stroke: 'Color',
                'strokeWidth': 'Stroke width',
            },
            selected:{
                'title': 'Selected',
                stroke: 'Color',
                'strokeWidth': 'Stroke width',
            },
            label: {
                'title': 'Label',
                fontSize: 'Font size',
                color: 'Color'
            },
            payoff:{
                'title': 'Payoff',
                fontSize: 'Font size',
                color: 'Color',
                negativeColor: 'Negative color'
            }
        }
    },
    'aboutDialog':{
        'title': 'About'
    },
    'layoutOptions':{
        'header': 'Layout',
        'marginHorizontal': 'Horizontal Margin',
        'marginVertical': 'Vertical Margin',
        'nodeSize': 'Node size',
        'edgeSlantWidthMax': 'Edge slant (max)',
        'gridWidth': 'Width',
        'gridHeight': 'Height'
    },
    'validation':{
        'incompletePath': 'Path not ending with terminal node',
        'probabilityDoNotSumUpTo1': 'Probabilities do not sum up to 1'
    },
    'confirm':{
        'newDiagram': 'Do you really want to clear current diagram? All unsaved data will be lost.',
        'openDiagram': 'Are you sure? All unsaved diagram data will be lost.',
        'beforeunload': 'Are you sure you want to close Silver Decisions? All unsaved diagram data will be lost.'
    },
    'error':{
        'jsonParse': 'Error parsing file!',
        'fileApiNotSupported':'The file API isn\'t supported on this browser yet.',
        'inputFilesProperty':'Your browser doesn\'t seem to support the `files` property of file inputs.',
        'notSilverDecisionsFile':'Not a SilverDecisions file!',
        'malformedData':'Error reading tree data!'
    }
};
