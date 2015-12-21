/// <reference path="localStorage.ts"/>
// <reference path="../typings/jquery.d.ts"/>
// <reference path="../typings/knockout.d.ts"/>

//参考URL：https://nulab-inc.com/ja/blog/nulab/knockout-1/
//参考URL：http://sourcechord.hatenablog.com/entry/2015/02/23/002638

declare var $;
declare var ko;
declare var KnockoutObservable;
declare var KnockoutObservableArray;
declare var ons;

class RoutePoint {
    ArriveTime: KnockoutObservable<string>;
    DepartureTime:KnockoutObservable<string>;
    Name: KnockoutObservable<string>;
}

class Item {
    title: string;
    desc: string;
    label: string;
}

class viewModel {
    private sampleText: KnockoutObservable = ko.observable('');
    private RoutePointList: KnockoutObservableArray<RoutePoint> = ko.observableArray<RoutePoint>();

    constructor(sampleText: string) {
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

    showDialogB(): void {
        alert('b');
        ons.createDialog('dialogcontent.html').then(function(dialog) {
            dialog.show();
        });
    }
}


function showDialog($elm) {
    ons.createDialog('dialogcontent.html').then(function(dialog) {
        alert();
        dialog.show();
    });
}

(function(){

var currentItem = new Item();

  $(document).on('pageinit', '#detail-page', function() {
    $('.item-title', this).text(currentItem.title);
    $('.item-desc', this).text(currentItem.desc);
    $('.item-label', this).text(currentItem.label);
    $('.add-note-action-item', this).click(function () {
        alert('dummy message');
    });
    
//    $('.item-title', this).text('日本語メモサンプル');
        var list = getMemoList();
        for (var i in list) {
            var memo = list[i];
            $('.item-title', this).text(memo.text);
            break;
        }
  });

  $(document).on('pageinit', '#list-page', function() {
    $('.item').each(function(i, elm){
        $(elm).find('.item-title').text('a' + i);
    });

//    $('.item', this).on('click', function() {
//      var currentItem = new Item();
//      currentItem.title = $('.item-title', this).text();
//      currentItem.desc = $('.item-desc', this).text();
//      currentItem.label = $('.item-label', this).text();
//
//      app.navi.pushPage('detail.html');
//    });
    
//    addMemo('日本語メモサンプルaaaa');
  });

})();
