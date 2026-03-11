function calculate()
{
    let marks = document.getElementById("marks").value;

    let resultText = "";

    if(marks >= 400)
    {
        resultText = "PASS - Grade A";
    }
    else if(marks >= 300)
    {
        resultText = "PASS - Grade B";
    }
    else if(marks >= 200)
    {
        resultText = "PASS - Grade C";
    }
    else if(marks >= 100)
    {
        resultText = "PASS - Grade D";
    }
    else
    {
        resultText = "FAIL";
    }

    document.getElementById("result").innerHTML = resultText;
}