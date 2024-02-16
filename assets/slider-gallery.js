class sliderGallery extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const _self = this;
        const dataAutoplay = _self.dataset.autoplay;
        const slideSpeed = parseInt(_self.dataset.speed);
        const effect = _self.dataset.effect;
        let autoplay = false;

        if (dataAutoplay == 'true' || dataAutoplay == true) {
            autoplay = {
                delay: slideSpeed,
            };
        }

        const swiperWrapper = _self.querySelector('.swiper');
        const next = _self.querySelector('.swiper-button-next');
        const prev = _self.querySelector('.swiper-button-prev');

        const swiper = new Swiper(swiperWrapper, {
            direction: 'horizontal',
            effect: effect,
            loop: true,
            navigation: {
                nextEl: next,
                prevEl: prev,
            },
            autoplay: autoplay,
        });
    }
}
customElements.define('slider-gallery', sliderGallery);
