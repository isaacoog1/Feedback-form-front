var feedbacks = document.querySelector('.feedbacks')

//Make a GET request to backend when page loads
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://feedback-form-nu.vercel.app/api/get-data', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {
        //Initialize delay for animation
        var delay = 0;
        var output = '<h2 class="lead mt3 fs-1" data-aos="zoom-in">Past Feedbacks</h2>';
        //Loop through the data received from backend and make a template for each feedback
        data.length > 0 ? data.forEach(feedback => {
            output += `
                    <div class="card my-3 w-75" data-aos="fade-up" data-aos-delay="${delay}">
                        <div class="card-body text-center text-dark fw-bold fs-5">
                            ${feedback.message}
                            <div class="text-secondary mt3 fw-normal fs-6">
                                By ${feedback.fullname} rated ${feedback.rating}
                            </div>
                        </div>
                    </div> 
                        `
                        delay += 300;
        }) : output += `<p class="lead mt3">There is no feedback</p>`
        //Append feedbacks to the container on the page
        feedbacks.innerHTML = output;
    })
    .catch((error) => {
        console.error("Error fetching data: ", error)
    })

})

    