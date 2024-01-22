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
        feedbacks.innerHTML = data;
    })
    .catch((error) => {
        console.error("Error fetching data: ", error)
    })

})