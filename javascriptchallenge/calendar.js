var MONTHNAME = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var MONTHLENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var WEEKID = ['week1', 'week2', 'week3', 'week4', 'week5', 'week6'];

var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
var day;
var monthLength;

var previousMonth;
var previousMonthDay;
var previousMonthLength;

var row;
var cell;

var count;
var mcheck = true;

start();
addtocal();


function myFunction1()
{
    clearCalendar();
    month--;
    start();
    addtocal();
}
function myFunction2()
{
    clearCalendar();
    month++;
    start();
    addtocal();
}


function addtocal()
{
    for(var i = 0; i < 6; i++)
    {
        row = document.getElementById(WEEKID[i]);
        for(var j = 0; j < 7; j++)
        {
            cell = row.insertCell(j);
            if(previousMonthDay == previousMonthLength)
            {    
                cell.innerHTML = count;
                count++;
                if(mcheck == false)
                {
                    cell.className = 'notthismonth';
                }
            }
            else
            {
                cell.innerHTML = previousMonthDay + 1;
                previousMonthDay++;
                cell.className = 'notthismonth';
            }

            daycolor();

            if(count > monthLength)
            {
                count = 1;
                mcheck = false;
            }
            
        }
    }
}

function clearCalendar()
{
    for(var t = 0; t < 7; t++)
    {
        var rowtoDelete1 = document.getElementById('week1');
        rowtoDelete1.deleteCell(0);
        var rowtoDelete2 = document.getElementById('week2');
        rowtoDelete2.deleteCell(0);
        var rowtoDelete3 = document.getElementById('week3');
        rowtoDelete3.deleteCell(0);
        var rowtoDelete4 = document.getElementById('week4');
        rowtoDelete4.deleteCell(0);
        var rowtoDelete5 = document.getElementById('week5');
        rowtoDelete5.deleteCell(0);
        var rowtoDelete6 = document.getElementById('week6');
        rowtoDelete6.deleteCell(0);
    }
}

function start()
{
    //for changes in year
    previousMonth = month - 1;
    if(month == -1)
    {
        month = 11;
        previousMonth = 10;
        year--;
    }
    else if(month == 12)
    {
        month = 0;
        previousMonth = 11;
        year++;
    }
    else if(month == 0)
    {
        previousMonth = 11;
    }

    //leap year
    if(year % 4 != 0 || month != 1)
    {
        monthLength = MONTHLENGTH[month];
    }
    else
    {
        monthLength = 29;
    }
    
    document.getElementById('month').innerHTML = MONTHNAME[month] + ' ' + year;
    count = 1;
    mcheck = true;

    day = new Date(year, month, 01);
    day = day.getDay();

    previousMonthDay = MONTHLENGTH[previousMonth] - day;
    previousMonthLength = MONTHLENGTH[previousMonth];
}

function daycolor()
{
    if(year == today.getFullYear())
    {
        if(month == today.getMonth())
        {
            if(count == (today.getDate() + 1))
            {
                cell.className = 'today';
            }
        }
    }
}