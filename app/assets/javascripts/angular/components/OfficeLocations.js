export default function OfficeLocations() {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: `
            <section id="office-locations">
                <header class="section-header">
                    Office Locations
                </header>

                <div class="address">
                    <h3>Los Angeles</h3>
                    <strong>953 Cole Ave Hollywood CA 90038</strong><br>
                    Phone: (323) 957-6680 | Dance Fax: (323) 957-5694<br>
                    Chor. Fax: (323) 957-6688
                </div>

                <div class="address">
                    <h3>New York</h3>
                    <strong>1375 Broadway, Suite 1000 New York NY 10018</strong><br>
                    Phone: (646) 237-6928 | Fax: (646) 253-1258
                </div>
            </section>
        `
    };
}
