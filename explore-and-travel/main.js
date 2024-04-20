document.addEventListener('DOMContentLoaded', function() {

    flatpickr("#dateSelect", {
        dateFormat: "d.m.Y",
    });

    
    const form = document.querySelector('.search-form');
    const modal = document.getElementById('formErrorModal');
    const closeButton = document.querySelector('.close');
    form.addEventListener('submit', function(event) {
        event.preventDefault();     
        
        const inputs = form.querySelectorAll('input, select');
        let allFieldsFilled = true;
        inputs.forEach(function(input) {
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

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


        const nextButton = document.getElementById('next-img');
        const prevButton = document.getElementById('prev-img');
        const images = document.querySelectorAll('.testimonials-img > img');
        let currentIndex = 0;

        for (let i = 1; i < images.length; i++) {
            images[i].classList.add('hidden');
        }

        function showImage(index) {
            images.forEach(function(image) {
                image.classList.add('hidden');
            });
            images[index].classList.remove('hidden');
        }

        function toggleNextPrev(currentIndex){
            if (currentIndex == 0) {
                prevButton.querySelector('img').style = '';
                nextButton.querySelector('img').style = 'filter: invert(0)';
            } else if (currentIndex == images.length - 1) {
                prevButton.querySelector('img').style = 'filter: invert(1)';
                nextButton.querySelector('img').style = 'filter: invert(0.82)';
            } else {
                nextButton.querySelector('img').style = '';
                prevButton.querySelector('img').style = 'filter: invert(1)';
            }
        }

        nextButton.addEventListener('click', function(event) {
            event.preventDefault();
            if (currentIndex == images.length - 1){
                return;
            }
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
            toggleNextPrev(currentIndex);
            
        });

        prevButton.addEventListener('click', function(event) {
            event.preventDefault();
            if (currentIndex == 0){
                return;
            }
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
            toggleNextPrev(currentIndex);

        });


});
