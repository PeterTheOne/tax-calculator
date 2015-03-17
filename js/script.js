$(function() {

  //var population = 8579747;
  //var percPopulation = population / 100;

  var data = [
    {
      percentile: 7,
      averageWealth: 133,
      totalWealth: 4888335
    },
    {
      percentile: 8,
      averageWealth: 313,
      totalWealth: 12150970
    },
    {
      percentile: 9,
      averageWealth: 525,
      totalWealth: 18948024
    }
  ];

  function validateInput() {
    if (parseFloat($('input.taxRate').val()) > 1.0) {
      $(this).val('1.00');
    } else if (parseFloat($('input.taxRate').val()) < 0.0) {
      $(this).val('0.00');
    }

    if (parseInt($('input.threshold').val()) < 0) {
      $('input.threshold').val(0);
    }
  }

  function calculateTaxRevenue(taxRate, threshold) {
    var taxRevenue = 0;
    $(data).each(function(index, value) {
      //if (value.averageWealth > threshold) {
        taxRevenue += value.totalWealth * taxRate;
      //}
    });
    return taxRevenue;
  }

  function main() {
    validateInput();

    var threshold = parseInt($('input.threshold').val());
    var taxRate = parseFloat($('input.taxRate').val());

    var taxRevenue = calculateTaxRevenue(taxRate, threshold);

    $('.result').html(taxRevenue);
  }

  $('input.taxRate').on('change', function() {
    main();
  });

  $('input.threshold').on('change', function() {
    main();
  });



});
