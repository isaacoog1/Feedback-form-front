var feedbacks = document.querySelector('.feedbacks')
document.addEventListener('DOMContentLoaded', function() {
    fetch('https://feedback-form-nu.vercel.app/api/get-data', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        var output = '';
        data.forEach(feedback => {
            output += `
                    <div class="card my-3 w-75">
                        <div class="card-body text-center">
                        ${feedback.message}
                        <div class="text-secondary mt2">
                            By ${feedback.fullname} rated ${feedback.rating}
                        </div>
                        </div>
                    </div> 
                        `
        })
        feedbacks.innerHTML = output;
    })
    .catch((error) => {
        console.error("Error fetching data: ", error)
    })

})

    