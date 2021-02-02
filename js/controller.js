'use strict'


//Use JQuery to change my details section
$("#me h4").html('Timophey')
$("#me img").attr("src","img/MyPic.jpg")


renderPortfolioGrid()

function renderPortfolioGrid (projs) {
    projs = getProjs()
    var strHTML =''
    var x = projs[0]
    projs.forEach(function (proj) {
        strHTML += `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.title}" onclick="renderModal('${proj.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/${proj.name}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
        </div>`
    });
    $(".row.grid").html(strHTML)
}

// function renderModal () {
//     console.log('hiiiiii');
    
// }

function renderModal(projId) {
    var currProj = gProjs.find(function(proj) {
        return proj.id === projId
    })
    console.log('This is the curr proj ',currProj)
    var strHTML = `<div class="portfolio-modal modal fade" id="portfolioModal${currProj.title}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${currProj.name}</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src=${currProj.pic} alt="">
                <p>${currProj.desc}</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Window</li>
                  <li>Category: Photography</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>`

    $(".modal-section").html(strHTML)

    console.log($($(".modal-section").html(strHTML)));
}

$(".submit-mail").click(onSubmitMail)

function onSubmitMail () {
  var elContent = $("#content").val()
  var elSubject = $("#subject").val()
  var elName = $("#name").val()
  console.log(elSubject);
  console.log(elName)
  console.log(elContent)
  window.open(` https://mail.google.com/mail/?view=cm&fs=1&to=tima121212@gmail.com&su=${elName}+${elSubject}&body=${elContent}`)
  $('#content').attr("placeholder","Write something");
  $('#subject').attr("placeholder","The topic of your message");
  $('#name').attr("placeholder","Your name")
}