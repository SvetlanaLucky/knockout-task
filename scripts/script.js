/**
 * Created with JetBrains PhpStorm.
 * User: Slight
 * Date: 24.08.14
 * Time: 19:00
 * To change this template use File | Settings | File Templates.
 */
var literatureList='{"docs":[' +
    '{'+
    '"index":"1",' +
    '"title":"О компании QAP INT",' +
    '"iconFile":"assets/images/filetype_pdf.png"' +
    '},' +
    '{'+
    '"index":"2",' +
    '"title":"Преимущества использования CLM-инструмента для Вашего бизнеса",' +
    '"iconFile":"assets/images/filetype_pdf.png"' +
    '},' +
    '{'+
    '"index":"3",' +
    '"title":"Перспективы сотрудничества с QAP INT",' +
    '"iconFile":"assets/images/filetype_pdf.png"' +
    '},' +
    '{'+
    '"index":"4",' +
    '"title":"Описание решения для разработки HTML5 презентаций",' +
    '"iconFile":"assets/images/filetype_pdf.png"' +
    '},' +
    '{'+
    '"index":"5",' +
    '"title":"Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (русский)",' +
    '"iconFile":"assets/images/filetype_pdf.png"' +
    '},' +
    '{'+
    '"index":"6",' +
    '"title":"Описание разработанного инструмента CLM2CRM и его интеграция с salesforce.com (english)",' +
    '"iconFile":"assets/images/filetype_pdf.png"' +
    '}'+
    ']'+
'}';



//var docs=JSON.parse(literatureList);
//console.log(docs);

function AppViewModel(){
    var self=this;

    self.availableDocs=JSON.parse(literatureList);
//    console.log(self.availableDocs);

}

ko.applyBindings(new AppViewModel());