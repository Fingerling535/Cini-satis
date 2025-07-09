$(document).ready(function() {
    // 1. Init Isotope on the product container
    var $listing = $('#product-template').isotope({
        itemSelector: '.tpproductitem',
        layoutMode: 'fitRows'
    });

    // 2. Listen for checkbox changes
    $('.form-check-input[data-min][data-max]').on('change', function() {
        // Collect all checked price ranges
        var filters = [];
        $('.form-check-input[data-min][data-max]:checked').each(function() {
            var min = parseFloat($(this).attr('data-min').replace('.', '').replace(',', '.'));
            var max = parseFloat($(this).attr('data-max').replace('.', '').replace(',', '.'));
            filters.push(function() {
                var price = parseFloat($(this).find('#product-card-price').data('price').toString().replace('.', '').replace(',', '.'));
                return price >= min && price <= max;
            });
        });

        // If no filter, show all
        if (filters.length === 0) {
            $listing.isotope({ filter: '*' });
            return;
        }

        // Combine filters: show if any filter matches
        $listing.isotope({
            filter: function() {
                return filters.some(f => f.call(this));
            }
        });
    });
});