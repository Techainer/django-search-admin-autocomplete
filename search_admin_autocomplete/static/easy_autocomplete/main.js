$(document).ready(function() {
    var options = {
        url: function (phrase) {
            return "search/?q=" + phrase;
        },
        getValue: "keyword",

        template: {
            type: "links",
            fields: {
                link: "url"
            }
        },
        list: {
            maxNumberOfElements: 6,
            onChooseEvent: function () {
                location.href = $('#searchbar').getSelectedItemData().url
            },
            match: {
                enabled: true
            }
        }

    };
    $("#searchbar").easyAutocomplete(options);
})