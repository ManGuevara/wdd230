const imagesToLoad = document.querySelectorAll('img[data-src]');

const imgOptions = {
    treshold: 0,
    rottMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload =()=>{
        image.removeAttribute('data-src');
    };
};
if('IntersectionObserver' in window){
    const imgObserver = new IntersectionObserver((entries, imgObserver)=>{
        entries.forEach((entrie)=>{
            if(entrie.isIntersecting){
                loadImages(entrie.target);
                imgObserver.unobserve(entrie.target);
            }
        });
    });
    imagesToLoad.forEach((img)=>{
        imgObserver.observe(img);
    });
}else{
    imagesToLoad.forEach((img)=>{
    loadImages(img);
    });

};



