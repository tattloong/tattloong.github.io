const closeButton=document.querySelector(".lightbox-close")
const lightBox=document.querySelector(".lightbox");
closeButton.onclick= function(event){
event.preventDefault();
lightBox.classList.add('hidden');
}

const galleryItems=document.querySelectorAll(".gallery-item")
for(let i = 0 ; i < galleryItems.length ; i++) {
	let item = galleryItems[i];
	item.onclick=function(){
		lightBox.classList.remove('hidden')
		const elementClickedOn=event.target;
		const galleryItemParent=elementClickedOn.parentElement;

		const lightboxImage= document.querySelector('.lightbox-image');
		lightboxImage.innerHTML= galleryItemParent.innerHTML;
	}
}


	const lightboxNext=document.querySelector(".lightbox-next");
	lightboxNext.onclick= function() {
		lightBox.classList.add('lightboxImage');





		}