function Slider(img, prev, next, pictures) {
    const _img = document.querySelector(img);
    const _prev = document.querySelector(prev);
    const _next = document.querySelector(next);
    if (pictures.indexOf(_img.getAttribute('src')) === 0) {
        _prev.classList.toggle('slider__btn--hide');
    }
    else if (pictures.indexOf(_img.getAttribute('src')) === (pictures.length - 1)) {
        _next.classList.toggle('slider__btn--hide');
    }
    this.checkBtn = function () {
        let imgCheck = pictures.indexOf(_img.getAttribute('src'));
        if (imgCheck === (pictures.length - 1)) {
            _next.classList.add('slider__btn--hide');
        } else if (imgCheck === 0) {
            _prev.classList.add('slider__btn--hide');
        } else if (_next.classList.contains('slider__btn--hide')) {
            _next.classList.remove('slider__btn--hide');
        } else if (_prev.classList.contains('slider__btn--hide')) {
            _prev.classList.remove('slider__btn--hide');
        }
    }
    this.change = function (_btn) {
        _btn.forEach(function (item) {
            item.addEventListener('click', function (event) {
                let imgIndex = pictures.indexOf(_img.getAttribute('src'));
                if (event.target.classList.contains('js--slider__btn--next')) {
                    _img.setAttribute('src', pictures[imgIndex + 1]);
                } else if (event.target.classList.contains('js--slider__btn--prev')) {
                    _img.setAttribute('src', pictures[imgIndex - 1]);
                }
                slider.checkBtn();
            })
        });
    }
}

const slider = new Slider('.js--slider__img', '.js--slider__btn--prev', '.js--slider__btn--next', ['img/one.jpg', 'img/two.jpg', 'img/three.jpg', 'img/four.jpg']);
slider.change(document.querySelectorAll('.js--slider_btn'));