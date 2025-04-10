function getProject(id){
    document.location.href = "project"+id+".html";
}

function jumpTo(id){
    let section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

function openWindowWithUrl(url){
    window.open(url, '_blank');
}