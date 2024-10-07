function getApi(){
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(thin.readystate==4 && thin.status==200){
            var ahmed = this.responseText;
            var mohamed = JSON.parse(ahmed);
            var element = mohamed.products;
            myText = "";
        for(i=0; i<element.lenght; i++){
            var cartoona =  `<div class="col-md-4 text-center mb-4">
                            <img src="${element[i].image[0]}" style="height:350px" class="img-fluid">
                            <h4>${element[i].title}</h4>
                            <h6>${element[i].id}</h6>
                            </div>
                            `
            myText = myText+cartoona;
        }
        document.querySelector(".test").innerHTML = cartoona;
        }
    }
    xhttp.open("GET","https://dummyjson.com/products",true);
}