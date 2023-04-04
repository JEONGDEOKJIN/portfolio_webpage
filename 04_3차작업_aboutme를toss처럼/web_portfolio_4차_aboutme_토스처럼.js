

// https://github.com/JEONGDEOKJIN


// https://hello-5200.tistory.com/



// 🟦 탭 기능 구현 

  // 🔷 시도 1차 

  // // let tabList = document.querySelectorAll('.tab_menu .list li');
  // let buttonList = document.querySelectorAll('.nav-tabs button');
  // for(let i = 0; i < buttonList.length; i++){
  //     buttonList[i].addEventListener('click', function(e){
  //     e.preventDefault();
  //     for(let j = 0; j < buttonList.length; j++){
  //         buttonList[j].classList.remove('active');
  //     }
  //     this.parentNode.classList.add('active');
  //   });
  // }

  // 🔷 2차 

  function openPopup() {
    
    let popup = document.querySelectorAll(".nav-item-wrap div"); 

    console.log(popup)

    if(popup.classList.contains("nav-item is-active")) {
        popup.classList.remove("is-active")
    } else {
        popup.classList.add("is-active")
    }

  }