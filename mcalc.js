let interest = 10;
    n_comp_periods = 1;

function validate() {
    let pres_value = document.getElementById("present-value").value;
    if (pres_value == "") {
        alert("Please enter the sum of money you invested");
        pres_value.focus();
        return false;
    }
    let t_years = document.getElementById("years").value;
    if (t_years == "") {
        alert("Please enter the number of years");
        return false;
    }
    return calc_time_value(pres_value, interest, n_comp_periods, t_years);
    function calc_time_value(pres_value, interest, n_comp_periods, t_years) {
        result = 1 + (interest / n_comp_periods)
        result = result ** (n_comp_periods * t_years)
        result = result * pres_value
        document.getElementById("result").innerHTML = "The value of your money is  N" + result;
        return result
    }
}


