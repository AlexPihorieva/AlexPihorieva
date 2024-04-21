document.addEventListener('DOMContentLoaded', function () {

    flatpickr("#dateSelect", {
        dateFormat: "d.m.Y",
    });


    const form = document.querySelector('.search-form');
    const modal = document.getElementById('formErrorModal');
    const closeButton = document.querySelector('.close');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const inputs = form.querySelectorAll('input, select');
        let allFieldsFilled = true;
        inputs.forEach(function (input) {
            if (!input.value.trim()) {
                allFieldsFilled = false;
            }
        });

        if (!allFieldsFilled) {
            modal.style.display = 'block';
        } else {
            form.submit();
        }

    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    const testimonialsNextButton = document.getElementById('next-img');
    const testimonialsPrevButton = document.getElementById('prev-img');
    const testimonialsImage = document.querySelector('.testimonials-img > img');
    const testimonialsAuthor = document.querySelector('.testimonials-desc-author');
    const testimonialsTitle = document.querySelector('.testimonials-desc-title');
    const testimonialsDesc = document.querySelector('.testimonials-desc-info');
    const testimonialsStars = document.querySelector('.testimonials-text-stars');

    let currentIndex = 0;
    fetch('media/testimonials.json')
        .then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        })
        .then(testimonials => {


            function UpdateTestimonial(index) {
                const item = testimonials[index];
                testimonialsImage.setAttribute('src', item.image);
                testimonialsAuthor.textContent = item.author;
                testimonialsTitle.textContent = item.title;
                testimonialsDesc.textContent = item.desc;
                testimonialsStars.innerHTML = getStarsHtml(item.stars);
            }

            function toggleNextPrev(currentIndex) {
                if (currentIndex == 0) {
                    testimonialsPrevButton.querySelector('img').style = '';
                    testimonialsNextButton.querySelector('img').style = 'filter: invert(0)';
                } else if (currentIndex == testimonials.length - 1) {
                    testimonialsPrevButton.querySelector('img').style = 'filter: invert(1)';
                    testimonialsNextButton.querySelector('img').style = 'filter: invert(0.82)';
                } else {
                    testimonialsNextButton.querySelector('img').style = '';
                    testimonialsPrevButton.querySelector('img').style = 'filter: invert(1)';
                }
            }

            function getStarsHtml(starsNumer) {
                return '<img src="images/Frame.svg" />'.repeat(starsNumer)
            }

            testimonialsNextButton.addEventListener('click', function (event) {
                event.preventDefault();
                if (currentIndex == testimonials.length - 1) {
                    return;
                }
                currentIndex = (currentIndex + 1) % testimonials.length;
                UpdateTestimonial(currentIndex);
                toggleNextPrev(currentIndex);

            });

            testimonialsPrevButton.addEventListener('click', function (event) {
                event.preventDefault();
                if (currentIndex == 0) {
                    return;
                }
                currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                UpdateTestimonial(currentIndex);
                toggleNextPrev(currentIndex);

            });
        })
});
