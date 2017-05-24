var cat = "cat1";
var files = [["测试1","1.jpg"],
    ["测试2","2.png"],
    ["测试3","3.png"],
    ["测试4","4.png"],
    ["测试5","5.png"],
    ["测试6","6.png"],
    ["测试7","7.png"]];


for(var i=0;i<files.length;i++){
    var file = files[i];
    var oneImage = "<div class='col-xs-6 col-md-3'>";
    oneImage += " <a class = 'thumbnail' onclick='changeSrc(\""+file[0]+"\",\"image/"+cat+"/"+file[1]+"\")'>";
    oneImage += "<img src='image/"+cat+"/"+file[1]+"' data-target='.bs-example-modal-lg' data-toggle='modal' >";
    oneImage += "</a></div>";
    $("#photos").append(oneImage);
}
function changeSrc(title,imageUrl) {
    $("#theTitle").text(title);
    $("#theImg").attr("src",imageUrl);
}
