
function previewText(texto){
    texto = texto.replace(/\n/gi,'<br/>');
    //texto = texto.replace('@', '<b style="color: blue">@</b>')
    //texto = texto.replace('#', '<b style="color: blue">#</b>')

    document.getElementById('preview_text').innerHTML = texto;
}

function fileValidation(){
    var fileInput = document.getElementById('file');
    var filePath = fileInput.value;
    var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
    if(!allowedExtensions.exec(filePath)){
        document.getElementById('file').className = 'form-control is-invalid';
        document.getElementById('isFileValid').className = 'invalid-feedback';
        document.getElementById('isFileValid').innerHTML ='Archivo inválido, solo se aceptan archivos ".jpeg | .jpg | .png';
        fileInput.value = '';
        return false;
    }else{
        //Image preview
        if (fileInput.files && fileInput.files[0]) {
            document.getElementById('file').className = 'form-control is-valid';
            document.getElementById('isFileValid').className = 'valid-feedback';
            document.getElementById('isFileValid').innerHTML ='';            
            var fileName = document.getElementById("file").files[0].name;
            var nextSibling = document.getElementById("file-label");
                nextSibling.innerText = fileName;
            var reader = new FileReader();                     
            reader.readAsDataURL(document.getElementById('file').files[0]);         
            reader.onload = function (e) {             
                document.getElementById('uploadPreview').src = e.target.result;         
            };
                   
        }
    }
}
     
