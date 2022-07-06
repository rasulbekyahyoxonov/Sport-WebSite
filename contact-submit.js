function mySubmit ()
{
    document.getElementById('jsDiv').style.display = 'block';
    let name = document.getElementById('in1').value;
    let surname = document.getElementById('in2').value;
    let message = document.getElementById('area').value;
    if(name != '')
    {
        document.getElementById('js_p').innerHTML = "Familya va xabar kiriting!";
        document.getElementById('in1').style.borderBlockEnd = '1px solid green';
        if(surname != '')
        {
            document.getElementById('in2').style.borderBlockEnd = '1px solid green';
            document.getElementById('js_p').innerHTML = "Xabar kiriting!";
            if(message != '')
            {
                document.getElementById('area').style.borderBlockEnd = '1px solid green';
                document.getElementById('jsDiv').style.background = 'green';
                document.getElementById('js_p').innerHTML = "Xabar yuborildi." + `<i class="fa-regular fa-check"></i>`;
                document.getElementById('in1').value = '';
                document.getElementById('in2').value = '';
                document.getElementById('area').value = '';

                setTimeout(() => {
                    document.getElementById('jsDiv').style.display = 'none';
                }, 2000);
            }
            else
            {
                document.getElementById('area').style.borderBlockEnd = '1px solid red';
            }
        }
        else
        {
            document.getElementById('in2').style.borderBlockEnd = '1px solid red';
            document.getElementById('area').style.borderBlockEnd = '1px solid red';
        }
    }
    else
    {
        document.getElementById('js_p').innerHTML = "Ismingiz, Familyangiz va xabar kiriting!";
        document.getElementById('jsDiv').style.background = 'rgb(226, 0, 0)';
        document.getElementById('in1').style.borderBlockEnd = '1px solid red';
        document.getElementById('in2').style.borderBlockEnd = '1px solid red';
        document.getElementById('area').style.borderBlockEnd = '1px solid red';
    }
}