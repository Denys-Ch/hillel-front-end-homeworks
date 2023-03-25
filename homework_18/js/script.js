function Gallery({ modal, close, next, prev, modalContent, modalImg }) {
    const $modal = $(modal);
    const $closeModalBtn = $(close);
    const $nextBtn = $(next);
    const $prevBtn = $(prev);
    const $modalContent = $(modalContent);
    const $modalImg = $(modalImg);
    this.init = function ($galItem) {
        $galItem.click((event) => {
            $modalImg.attr('src', `${$(event.target).attr('src')}`);
            $modal.toggleClass('active');
        });
        gallery.closeModal();
        gallery.nextItem();
        gallery.prevItem();
        gallery.getSrcArray();
    }
    this.getSrcArray = function () {
        const images = $('.js--gal_img');
        let imgSrcs = [];
        $(images).each(function () {
            imgSrcs.push(($(this).attr('src')));
        })
        let imgIndex = imgSrcs.indexOf($modalImg.attr('src'));
        return {
            sources: imgSrcs,
            index: imgIndex
        };
    }
    this.nextItem = function () {
        $nextBtn.click(() => {
            let srcArray = gallery.getSrcArray();
            if ($modalImg.attr('src') === srcArray.sources[srcArray.sources.length - 1]) {
                $($modalContent.find('img')).attr('src', `${srcArray.sources[0]}`);
            } else {
                $($modalContent.find('img')).attr('src', `${srcArray.sources[srcArray.index + 1]}`);
            }
        })
    }
    this.prevItem = function () {
        $prevBtn.click(() => {
            let srcArray = gallery.getSrcArray();
            if ($modalImg.attr('src') === srcArray.sources[0]) {
                $($modalContent.find('img')).attr('src', `${srcArray.sources[srcArray.sources.length - 1]}`);
            } else {
                $($modalContent.find('img')).attr('src', `${srcArray.sources[srcArray.index - 1]}`);
            }
        })
    }
    this.closeModal = function () {
        $closeModalBtn.click(() => {
            $modal.removeClass('active');
        });
    }
}
const gallery = new Gallery({
    modal: '.js--modal',
    close: '.js--modal__close',
    next: '.js--modal__next',
    prev: '.js--modal__prev',
    modalContent: '.js--modal__content',
    modalImg: '.js--modal__img'
})
gallery.init($('.js--gal_item'));