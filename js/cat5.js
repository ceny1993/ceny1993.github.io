var cat = "cat5";
var files = [["实拍","WechatIMG20.jpeg"],
    ["实拍","WechatIMG22.jpeg"]];


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
