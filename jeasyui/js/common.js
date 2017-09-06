function tabBack() {
    var tab = $('#tabs').tabs('getSelected');
    // console.log('tab',tab);
    // console.log('tab.panel',tab.panel);
    // console.log('tab.panel.options',tab.panel('options'));
    var itemKey = 'tabs-'.concat(tab.panel('options').id);
    tab.panel('refresh', localStorage.getItem(itemKey));
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



if ($.fn.datagrid){
    $.fn.datagrid.defaults.emptyMsg = '查询无数据集合';
    $.fn.datagrid.defaults.pageSize = 20;
}