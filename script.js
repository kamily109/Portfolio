
    function Selecionado(tag) {
        var item = document.getElementById('menu-h');
        var href = item.getElementsByTagName('a');
        
        for (var i = 0; i < href.length; i++) {
            href[i].style.backgroundColor = "";
            href[i].style.color = "";
            href[i].style.border = ""
        }

        tag.style.backgroundColor = "#2f1468";
        tag.style.color = "#f0f1ff";
       
    }

    var links = document.querySelectorAll('#menu-h a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            Selecionado(this);
        });
    });
    
//rolagem link
document.querySelector('a[href="#eu"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    var section = document.getElementById("eu");
    section.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
});

document.querySelector('a[href="#habilidades"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    var section = document.getElementById("habilidades"); 
    section.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
});

document.querySelector('a[href="#projetos"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    var section = document.getElementById("projetos"); 
    section.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
});

document.querySelector('a[href="#contato"]').addEventListener('click', function (event) {
    event.preventDefault(); 
    var section = document.getElementById("contato"); 
    section.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
});

