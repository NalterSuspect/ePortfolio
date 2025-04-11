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

function highlightProject(projectId) {
    document.querySelectorAll('.image-holder img').forEach(img => {
      img.style.zIndex = 0;
    });
  
    const img = document.getElementById(`img-${projectId}`);
    if (img) {
      img.style.zIndex = 2;
    }
  }