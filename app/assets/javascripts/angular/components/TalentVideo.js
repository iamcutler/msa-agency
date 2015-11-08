export default function TalentVideo() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: `
            <figure>
                <div class="thumb">
                    <img src="https://usatlife.files.wordpress.com/2015/07/xxx__mg_8277_hires2-2_dcb_74631276.jpg?w=1000&h=692">
                </div>
                <figcaption>
                    <span class="title">Thinking out out</span>
                    <span class="artist">Ed Sheeran</span>
                </figcaption>
            </figure>
        `
    };
}
