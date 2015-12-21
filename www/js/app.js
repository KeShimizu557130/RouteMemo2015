var RoutePoint = (function () {
    function RoutePoint() {
    }
    return RoutePoint;
})();

var Item = (function () {
    function Item() {
    }
    return Item;
})();

var viewModel = (function () {
    function viewModel(sampleText) {
        this.sampleText = ko.observable('');
        this.RoutePointList = ko.observableArray();
        this.sampleText = sampleText;
        var tmp = new RoutePoint();
        tmp.ArriveTime = '6:59';
        tmp.DepartureTime = '7:03';
        tmp.Name = '間山';
        this.RoutePointList.push(tmp);
        var tmp = new RoutePoint();
        tmp.ArriveTime = '7:59';
        tmp.DepartureTime = '8:05';
        tmp.Name = '2832mピーク';
        this.RoutePointList.push(tmp);
    }
    viewModel.prototype.showDialogB = function () {
        alert('b');
        ons.createDialog('dialogcontent.html').then(function (dialog) {
            dialog.show();
        });
    };
    return viewModel;
})();

function showDialog($elm) {
    ons.createDialog('dialogcontent.html').then(function (dialog) {
        alert();
        dialog.show();
    });
}

(function () {
    var currentItem = new Item();

    $(document).on('pageinit', '#detail-page', function () {
        $('.item-title', this).text(currentItem.title);
        $('.item-desc', this).text(currentItem.desc);
        $('.item-label', this).text(currentItem.label);
        $('.add-note-action-item', this).click(function () {
            alert('dummy message');
        });

        var list = getMemoList();
        for (var i in list) {
            var memo = list[i];
            $('.item-title', this).text(memo.text);
            break;
        }
    });

    $(document).on('pageinit', '#list-page', function () {
        $('.item').each(function (i, elm) {
            $(elm).find('.item-title').text('a' + i);
        });
    });
})();
