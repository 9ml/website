// 导航效果
document.addEventListener("DOMContentLoaded", function(){
	let rise = function(trigEl) {
			trigEl.blur();

			let ul = document.querySelector("ul");

			ul.classList.add("rise");
			trigEl.classList.add("pop");

			setTimeout(function(){
				trigEl.focus();

				ul.classList.remove("rise");
				trigEl.classList.remove("pop");
			}, 1000);
		};

	this.querySelectorAll("li a").forEach(function(el){
		let rt = document.querySelector(":root"),
			di = +el.getAttribute("data-item");

		el.addEventListener("blur",function(){
			//var getRt = +window.getComputedStyle(el).getPropertyValue('--rotateTimes');
			//console.log(getRt);
			//this.classList.add("current");
		});
		el.addEventListener("focus",function(){
			rt.style.setProperty("--rotateTimes",di);
			//this.classList.remove("current");
		});
		el.addEventListener("dblclick",function(){
			rise(this);
		});
		el.addEventListener("keyup",function(e){
			if (e.keyCode === 13) {
				rise(this);
			}
		});
	});
});