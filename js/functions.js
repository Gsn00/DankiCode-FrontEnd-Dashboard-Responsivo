mobileBtn = document.querySelector(".mobile-menu-button");
mobileBtn.addEventListener('click', ()=>{
	mainContent = document.querySelector(".main-content");
	sidebar = document.querySelector(".sidebar");

	if (!mobileBtn.classList.contains('enabled')) {
		mainContent.style.position = "absolute";
		mainContent.style.left = "250px"
		sidebar.style.width = "250px";
		mobileBtn.classList.add('enabled');
		mobileBtn.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
	} else {
		mainContent.style.position = "initial";
		mainContent.style.left = "0px"
		sidebar.style.width = "0px";
		mobileBtn.classList.remove('enabled');
		mobileBtn.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
	}
});