function handle(event) {
  event.preventDefault();
  var prefix = document.querySelector(".prefix").value;
  var fName = document.querySelector("#fName").value;
  var lName = document.querySelector("#lName").value;
  var pPronouns = document.querySelector(".pPronouns").value;
  var workPhn = document.querySelector(".workPhn").value;
  var cellPhn = document.querySelector(".cellPhn").value;
  var jobTitle = document.querySelector(".jobTitle").value;
  var company = document.querySelector(".company").value;
  var bAddress = document.querySelector(".bAddress").value;
  var comWebsite = document.querySelector(".comWebsite").value;
  var facebookPage = document.querySelector(".facebookPage").value;
  var compTwit = document.querySelector(".compTwit").value;
  var compLink = document.querySelector(".compLink").value;
  var radio = document.querySelector("input:checked").value;
  var aGuest = document.querySelector(".aGuest").value;

  var overlay = document.getElementById("overlay");
  overlay.innerHTML = `
    <div  id="myModal" class="modal">
        <div class="modal-header">
            <h2>Form Details</h2>
        </div>
        <div class="modal-body">
            <div class="column">
                <p><strong>Prefix:</strong> ${prefix}</p>
                <p><strong>Name:</strong> ${fName} ${lName}</p>
                <p><strong>Preferred Pronouns:</strong> ${pPronouns}</p>
                <p><strong>Work Phone:</strong> ${workPhn}</p>
                <p><strong>Cell Phone:</strong> ${cellPhn}</p>
                <p><strong>Job Title:</strong> ${jobTitle}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Business Address:</strong> ${bAddress}</p>
            </div>
            <div class="column">
                <p><strong>Company Website:</strong> ${comWebsite}</p>
                <p><strong>Facebook Page:</strong> ${facebookPage}</p>
                <p><strong>Company Twitter Handle:</strong> ${compTwit}</p>
                <p><strong>Company LinkedIn Handle:</strong> ${compLink}</p>
                <p><strong>Sponsorship Level:</strong> ${radio}</p>
                <p><strong>Additional Guests:</strong> ${aGuest}</p>
            </div>
            </div>
            <button class="btn" onclick="closeOverlay()">Close</button>
        </div>
    </div>
    `;
  window.addEventListener("click", function (event) {
    if (event.target == overlay) {
      overlay.style.display = "none";
    }
  });
  overlay.style.display = "flex";
}

function closeOverlay() {
  console.log("Close button clicked");
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function onpress(key) {
  return (
    (key >= "0" && key <= "9") || ["+", "(", ")", "Backspace"].includes(key)
  );
}
