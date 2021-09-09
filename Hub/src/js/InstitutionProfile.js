const APP_ID = 'D6F24EF3-973C-6767-FF0A-1A3AA25B9300';
const API_KEY = '66456480-A606-E33D-FF39-2AE84754CA00';
let $list = [];
var xName;
var updatedFSStatus;
var updatedSCStatus;
var updatedResStatus;
var queryID;

var files;

Backendless.serverURL = 'https://api.backendless.com';
Backendless.initApp(APP_ID, API_KEY);
Backendless.UserService.getCurrentUser()
    .then(function (currentUser) {
        var IDNumber = document.getElementById("ID Number");
        var name = document.getElementById("Name");
        var surname = document.getElementById("Surname");
        var gender = document.getElementById("Gender");
        var homeLanguage = document.getElementById("Home Language");
        var title = document.getElementById("Title");
        var emailAddress = document.getElementById("Email Address");
        var houseNumber = document.getElementById("House Number");
        var streetName = document.getElementById("Street Name");
        var town = document.getElementById("Town");
        var city = document.getElementById("City");
        var zipCode = document.getElementById("Zip Code");
        var grade11 = document.getElementById("Grade 11 Results")
        var g11S1 = document.getElementById("1st Subject");
        var mark1 = document.getElementById("Mark1");
        var g11S2 = document.getElementById("2nd Subject");
        var mark2 = document.getElementById("Mark2");
        var g11s3 = document.getElementById("3rd Subject");
        var mark3 = document.getElementById("Mark3");
        var g11s4 = document.getElementById("4th Subject");
        var mark4 = document.getElementById("Mark4");
        var g11s5 = document.getElementById("5th Subject");
        var mark5 = document.getElementById("Mark5");
        var g11S6 = document.getElementById("6th Subject");
        var mark6 = document.getElementById("Mark6");
        var g11s7 = document.getElementById("7th Subject");
        var mark7 = document.getElementById("Mark7");
        var grade12 = document.getElementById("Grade 12 Final Results")
        var g12S1 = document.getElementById("1st Subject2");
        var mark8 = document.getElementById("Mark8");
        var g12S2 = document.getElementById("2nd Subject2");
        var mark9 = document.getElementById("Mark9");
        var g12s3 = document.getElementById("3rd Subject2");
        var mark10 = document.getElementById("Mark10");
        var g12s4 = document.getElementById("4th Subject2");
        var mark11 = document.getElementById("Mark11");
        var g12s5 = document.getElementById("5th Subject2");
        var mark12 = document.getElementById("Mark12");
        var g12S6 = document.getElementById("6th Subject2");
        var mark13 = document.getElementById("Mark13");
        var g12s7 = document.getElementById("7th Subject2");
        var mark14 = document.getElementById("Mark14");
        var campus = document.getElementById("Campus Applied at");
        var firstChoice = document.getElementById("First Choice");
        var firstStatus = document.getElementById("Status");
        var secondChoice = document.getElementById("Second Choice");
        var secondStatus = document.getElementById("Status");
        var residence = document.getElementById("Residence");
        var residenceStatus = document.getElementById("Status");
        var id2 = document.getElementById("sApplicationID")

        var table = document.getElementById("myTableData");
        var detailTable = document.getElementById("studentDetail")
        var rowCount = table.rows.length;

        let userInformation = currentUser.Name;


        if (userInformation.toUpperCase() === "Central university of technology".toUpperCase()) {

            var x;
            const whereClause = "universityName = 'Central university of technology'"
            var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);
            Backendless.Data.of("Application").find(queryBuilder)
                .then(function (foundContacts) {
                    alert(" Dear " + currentUser.Name + " Employee The number of applicants are : " + foundContacts.length)
                    for (x = 0; x < foundContacts.length; x++) {
                        var row = table.insertRow(rowCount);
                        row.insertCell(0).innerHTML = '<input type="button" value = "Click to update applican status" onClick="Update(this)">';
                        row.insertCell(1).innerHTML = IDNumber = foundContacts[x].ID;
                        row.insertCell(2).innerHTML = name = foundContacts[x].name;
                        row.insertCell(3).innerHTML = surname = foundContacts[x].lastName;
                        row.insertCell(4).innerHTML = gender = foundContacts[x].gender;
                        row.insertCell(5).innerHTML = homeLanguage = foundContacts[x].homeLanguage;
                        row.insertCell(6).innerHTML = title = foundContacts[x].title;
                        row.insertCell(7).innerHTML = emailAddress = foundContacts[x].userEmail;
                        row.insertCell(8).innerHTML = houseNumber = foundContacts[x].houseNumber;
                        row.insertCell(9).innerHTML = streetName = foundContacts[x].streetName;
                        row.insertCell(10).innerHTML = town = foundContacts[x].town;
                        row.insertCell(11).innerHTML = city = foundContacts[x].city;
                        row.insertCell(12).innerHTML = zipCode = foundContacts[x].zipCode;
                        row.insertCell(13).innerHTML = grade11 = " ";
                        row.insertCell(14).innerHTML = g11S1 = foundContacts[x].subject1;
                        row.insertCell(15).innerHTML = mark1 = foundContacts[x].mark1;
                        row.insertCell(16).innerHTML = g11S2 = foundContacts[x].subject2;
                        row.insertCell(17).innerHTML = mark2 = foundContacts[x].mark2;
                        row.insertCell(18).innerHTML = g11s3 = foundContacts[x].subject3;
                        row.insertCell(19).innerHTML = mark3 = foundContacts[x].mark3;
                        row.insertCell(20).innerHTML = g11s4 = foundContacts[x].subject4;
                        row.insertCell(21).innerHTML = mark4 = foundContacts[x].mark4;
                        row.insertCell(22).innerHTML = g11s5 = foundContacts[x].subject5;
                        row.insertCell(23).innerHTML = mark5 = foundContacts[x].mark5;
                        row.insertCell(24).innerHTML = g11S6 = foundContacts[x].subject6;
                        row.insertCell(25).innerHTML = mark6 = foundContacts[x].mark6;
                        row.insertCell(26).innerHTML = g11s7 = foundContacts[x].subject7;
                        row.insertCell(27).innerHTML = mark7 = foundContacts[x].mark7;
                        row.insertCell(28).innerHTML = grade12 = " ";
                        row.insertCell(29).innerHTML = g12S1 = foundContacts[x].metricSubject1;
                        row.insertCell(30).innerHTML = mark8 = foundContacts[x].metricMark1;
                        row.insertCell(31).innerHTML = g12S2 = foundContacts[x].metricSubject2;
                        row.insertCell(32).innerHTML = mark9 = foundContacts[x].metricMark2;
                        row.insertCell(33).innerHTML = g12S3 = foundContacts[x].metricSubject3;
                        row.insertCell(34).innerHTML = mark10 = foundContacts[x].metricMark3;
                        row.insertCell(35).innerHTML = g12S4 = foundContacts[x].metricSubject4;
                        row.insertCell(36).innerHTML = mark11 = foundContacts[x].metricMark4;
                        row.insertCell(37).innerHTML = g12S5 = foundContacts[x].metricSubject5;
                        row.insertCell(38).innerHTML = mark12 = foundContacts[x].metricMark5;
                        row.insertCell(39).innerHTML = g12S6 = foundContacts[x].metricSubject6;
                        row.insertCell(40).innerHTML = mark13 = foundContacts[x].metricMark6;
                        row.insertCell(41).innerHTML = g12S7 = foundContacts[x].metricSubject7;
                        row.insertCell(42).innerHTML = mark14 = foundContacts[x].metricMark7;
                        row.insertCell(43).innerHTML = campus = foundContacts[x].universityCampus;
                        row.insertCell(44).innerHTML = firstChoice = foundContacts[x].firstChoice;
                        row.insertCell(45).innerHTML = firstStatus = foundContacts[x].firstChoiceStatus;
                        row.insertCell(46).innerHTML = secondChoice = foundContacts[x].secondChoice;
                        row.insertCell(47).innerHTML = secondStatus = foundContacts[x].secondChoiceStatus;
                        row.insertCell(48).innerHTML = residence = foundContacts[x].residence;
                        row.insertCell(49).innerHTML = residenceStatus = foundContacts[x].ResidenceStatus;
                        row.insertCell(50).innerHTML = id2 = foundContacts[x].objectId;


                    }


                })
                .catch(function (fault) {
                    alert(fault.message)

                });
        } else if (userInformation.toUpperCase() === "university of free state".toUpperCase()) {
            var i;
            const whereClause = "universityName = 'university of free state'"
            var queryBuilder = Backendless.DataQueryBuilder.create().setWhereClause(whereClause);
            Backendless.Data.of("Application").find(queryBuilder)
                .then(function (foundContacts) {
                    alert("Dear University of Free State Employee. The number of applicants are : " + foundContacts.length)

                    for (i = 0; i < foundContacts.length; i++) {
                        var row = table.insertRow(rowCount);
                        row.insertCell(0).innerHTML = '<input type="button" value = "Update status" onClick="Update(this)">';
                        row.insertCell(1).innerHTML = IDNumber = foundContacts[i].ID;
                        row.insertCell(2).innerHTML = name = foundContacts[i].name;
                        row.insertCell(3).innerHTML = surname = foundContacts[i].lastName;
                        row.insertCell(4).innerHTML = gender = foundContacts[i].gender;
                        row.insertCell(5).innerHTML = homeLanguage = foundContacts[i].homeLanguage;
                        row.insertCell(6).innerHTML = title = foundContacts[i].title;
                        row.insertCell(7).innerHTML = emailAddress = foundContacts[i].userEmail;
                        row.insertCell(8).innerHTML = houseNumber = foundContacts[i].houseNumber;
                        row.insertCell(9).innerHTML = streetName = foundContacts[i].streetName;
                        row.insertCell(10).innerHTML = town = foundContacts[i].town;
                        row.insertCell(11).innerHTML = city = foundContacts[i].city;
                        row.insertCell(12).innerHTML = zipCode = foundContacts[i].zipCode;
                        row.insertCell(13).innerHTML = grade11 = " ";
                        row.insertCell(14).innerHTML = g11S1 = foundContacts[i].subject1;
                        row.insertCell(15).innerHTML = mark1 = foundContacts[i].mark1;
                        row.insertCell(16).innerHTML = g11S2 = foundContacts[i].subject2;
                        row.insertCell(17).innerHTML = mark2 = foundContacts[i].mark2;
                        row.insertCell(18).innerHTML = g11s3 = foundContacts[i].subject3;
                        row.insertCell(19).innerHTML = mark3 = foundContacts[i].mark3;
                        row.insertCell(20).innerHTML = g11s4 = foundContacts[i].subject4;
                        row.insertCell(21).innerHTML = mark4 = foundContacts[i].mark4;
                        row.insertCell(22).innerHTML = g11s5 = foundContacts[i].subject5;
                        row.insertCell(23).innerHTML = mark5 = foundContacts[i].mark5;
                        row.insertCell(24).innerHTML = g11S6 = foundContacts[i].subject6;
                        row.insertCell(25).innerHTML = mark6 = foundContacts[i].mark6;
                        row.insertCell(26).innerHTML = g11s7 = foundContacts[i].subject7;
                        row.insertCell(27).innerHTML = mark7 = foundContacts[i].mark7;
                        row.insertCell(28).innerHTML = grade12 = " ";
                        row.insertCell(29).innerHTML = g12S1 = foundContacts[i].metricSubject1;
                        row.insertCell(30).innerHTML = mark8 = foundContacts[i].metricMark1;
                        row.insertCell(31).innerHTML = g12S2 = foundContacts[i].metricSubject2;
                        row.insertCell(32).innerHTML = mark9 = foundContacts[i].metricMark2;
                        row.insertCell(33).innerHTML = g12S3 = foundContacts[i].metricSubject3;
                        row.insertCell(34).innerHTML = mark10 = foundContacts[i].metricMark3;
                        row.insertCell(35).innerHTML = g12S4 = foundContacts[i].metricSubject4;
                        row.insertCell(36).innerHTML = mark11 = foundContacts[i].metricMark4;
                        row.insertCell(37).innerHTML = g12S5 = foundContacts[i].metricSubject5;
                        row.insertCell(38).innerHTML = mark12 = foundContacts[i].metricMark5;
                        row.insertCell(39).innerHTML = g12S6 = foundContacts[i].metricSubject6;
                        row.insertCell(40).innerHTML = mark13 = foundContacts[i].metricMark6;
                        row.insertCell(41).innerHTML = g12S7 = foundContacts[i].metricSubject7;
                        row.insertCell(42).innerHTML = mark14 = foundContacts[i].metricMark7;
                        row.insertCell(43).innerHTML = campus = foundContacts[i].universityCampus;
                        row.insertCell(44).innerHTML = firstChoice = foundContacts[i].firstChoice;
                        row.insertCell(45).innerHTML = firstStatus = foundContacts[i].firstChoiceStatus;
                        row.insertCell(46).innerHTML = secondChoice = foundContacts[i].secondChoice;
                        row.insertCell(47).innerHTML = secondStatus = foundContacts[i].secondChoiceStatus;
                        row.insertCell(48).innerHTML = residence = foundContacts[i].residence;
                        row.insertCell(49).innerHTML = residenceStatus = foundContacts[i].ResidenceStatus;
                        row.insertCell(50).innerHTML = id2 = foundContacts[i].objectId;

                    }

                })
                .catch(function (fault) {
                    alert(fault.message)

                });
        } else {
            alert("no applications made to the institution yet")
        }


    })
    .catch(function (error) {
        alert("invalid " + error.message)
    });

function Update(obj) {
    //alert("Hellow ");

    var row_index = obj.parentNode.parentNode.rowIndex;
    var ind = row_index;
    //alert("did "+ row_index);
    xName = document.getElementById("myTableData").rows[row_index].cells[1].innerText;
    //alert("I found " + x);
    //document.getElementById("pers").innerHTML = x; //USE THIS IF YOU WANT TO CHANGE THE NAME OF THE LABLE IN HERE
    document.getElementById("sID").value = document.getElementById("myTableData").rows[row_index].cells[1].innerText;
    document.getElementById("sName").value = document.getElementById("myTableData").rows[row_index].cells[2].innerText;
    document.getElementById("sSurname").value = document.getElementById("myTableData").rows[row_index].cells[3].innerText;
    document.getElementById("sGender").value = document.getElementById("myTableData").rows[row_index].cells[4].innerText;
    document.getElementById("sHomeLanguage").value = document.getElementById("myTableData").rows[row_index].cells[5].innerText;
    document.getElementById("sTitle").value = document.getElementById("myTableData").rows[row_index].cells[6].innerText;
    document.getElementById("sEmailAddress").value = document.getElementById("myTableData").rows[row_index].cells[7].innerText;
    document.getElementById("sHouseNumber").value = document.getElementById("myTableData").rows[row_index].cells[8].innerText;
    document.getElementById("sStreetName").value = document.getElementById("myTableData").rows[row_index].cells[9].innerText;
    document.getElementById("sTown").value = document.getElementById("myTableData").rows[row_index].cells[10].innerText;
    document.getElementById("sCity").value = document.getElementById("myTableData").rows[row_index].cells[11].innerText;
    document.getElementById("szipCode").value = document.getElementById("myTableData").rows[row_index].cells[12].innerText;
    document.getElementById("g11S1").innerHTML = document.getElementById("myTableData").rows[row_index].cells[14].innerText + ":";
    document.getElementById("g11Mark1").value = document.getElementById("myTableData").rows[row_index].cells[15].innerText;
    document.getElementById("g11S2").innerHTML = document.getElementById("myTableData").rows[row_index].cells[16].innerText + ":";
    document.getElementById("g11Mark2").value = document.getElementById("myTableData").rows[row_index].cells[17].innerText;
    document.getElementById("g11S3").innerHTML = document.getElementById("myTableData").rows[row_index].cells[18].innerText + ":";
    document.getElementById("g11Mark3").value = document.getElementById("myTableData").rows[row_index].cells[19].innerText;
    document.getElementById("g11S4").innerHTML = document.getElementById("myTableData").rows[row_index].cells[20].innerText + ":";
    document.getElementById("g11Mark4").value = document.getElementById("myTableData").rows[row_index].cells[21].innerText;
    document.getElementById("g11S5").innerHTML = document.getElementById("myTableData").rows[row_index].cells[22].innerText + ":";
    document.getElementById("g11Mark5").value = document.getElementById("myTableData").rows[row_index].cells[23].innerText;
    document.getElementById("g11S6").innerHTML = document.getElementById("myTableData").rows[row_index].cells[24].innerText + ":";
    document.getElementById("g11Mark6").value = document.getElementById("myTableData").rows[row_index].cells[25].innerText;
    document.getElementById("g11S7").innerHTML = document.getElementById("myTableData").rows[row_index].cells[26].innerText + ":";
    document.getElementById("g11Mark7").value = document.getElementById("myTableData").rows[row_index].cells[27].innerText;

    document.getElementById("g12S1").innerHTML = document.getElementById("myTableData").rows[row_index].cells[29].innerText + ":";
    document.getElementById("g12Mark1").value = document.getElementById("myTableData").rows[row_index].cells[30].innerText;
    document.getElementById("g12S2").innerHTML = document.getElementById("myTableData").rows[row_index].cells[31].innerText + ":";
    document.getElementById("g12Mark2").value = document.getElementById("myTableData").rows[row_index].cells[32].innerText;
    document.getElementById("g12S3").innerHTML = document.getElementById("myTableData").rows[row_index].cells[33].innerText + ":";
    document.getElementById("g12Mark3").value = document.getElementById("myTableData").rows[row_index].cells[34].innerText;
    document.getElementById("g12S4").innerHTML = document.getElementById("myTableData").rows[row_index].cells[35].innerText + ":";
    document.getElementById("g12Mark4").value = document.getElementById("myTableData").rows[row_index].cells[36].innerText;
    document.getElementById("g12S5").innerHTML = document.getElementById("myTableData").rows[row_index].cells[37].innerText + ":";
    document.getElementById("g12Mark5").value = document.getElementById("myTableData").rows[row_index].cells[38].innerText;
    document.getElementById("g12S6").innerHTML = document.getElementById("myTableData").rows[row_index].cells[39].innerText + ":";
    document.getElementById("g12Mark6").value = document.getElementById("myTableData").rows[row_index].cells[40].innerText;
    document.getElementById("g12S7").innerHTML = document.getElementById("myTableData").rows[row_index].cells[41].innerText + ":";
    document.getElementById("g12Mark7").value = document.getElementById("myTableData").rows[row_index].cells[42].innerText;
    document.getElementById("fsss").innerHTML = document.getElementById("myTableData").rows[row_index].cells[44].innerText + ":";
    document.getElementById("sFirstChoice").value = document.getElementById("myTableData").rows[row_index].cells[45].innerText;
    document.getElementById("ss").innerHTML = document.getElementById("myTableData").rows[row_index].cells[46].innerText + ":";
    document.getElementById("sSecondChoice").value = document.getElementById("myTableData").rows[row_index].cells[47].innerText;
    document.getElementById("sCampus").value = document.getElementById("myTableData").rows[row_index].cells[43].innerText;
    document.getElementById("sResidence").value = document.getElementById("myTableData").rows[row_index].cells[49].innerText;
    document.getElementById("fsInfo").innerHTML = document.getElementById("myTableData").rows[row_index].cells[44].innerText + ":";
    document.getElementById("ssInfo").innerHTML = document.getElementById("myTableData").rows[row_index].cells[46].innerText + ":";
    document.getElementById("resInfo").innerHTML = document.getElementById("myTableData").rows[row_index].cells[48].innerText + ":";
    document.getElementById("sApplicationID").value = document.getElementById("myTableData").rows[row_index].cells[50].innerText;
    document.getElementById("iframe").src = "images/IDCopy.pdf";
    document.getElementById("iframeGrade11").src = "images/grade11.pdf";
    document.getElementById("iframeGrade12").src = "images/metric_certificate.pdf";
    //document.getElementById("up").innerHTML = '<input type="button" value = "Update status Please" onClick="SubmitStatus(ind)">';
    queryID = document.getElementById("sApplicationID").value;
    document.getElementById("demo").innerHTML = x;


}


function SubmitStatus() {

    updatedFSStatus = document.getElementById("fsStatus").value;
    updatedSCStatus = document.getElementById("ssStatus").value;
    updatedResStatus = document.getElementById("resStatus").value;


    Backendless.Data.of("Application").bulkUpdate("objectId = '" + queryID + "'", {
        "firstChoiceStatus": updatedFSStatus,
        "secondChoiceStatus": updatedSCStatus,
        "ResidenceStatus": updatedResStatus
    })
        .then(function (objectsUpdated) {
            alert("You have successfully updated applicant information");
            location.reload();
        })
        .catch(function (error) {
            alert("error " + error);
        })


}

// do not forget to call Backendless.initApp( appId, jsAPIKey ) in the app initialization code

function userLoggedOut() {
    window.location.replace("http://localhost:63342/Hub-generated%20(1)/main.html?_ijt=dv2fmolu5assgttibaehrlrk69");
    alert("user has been logged out");
}

function gotError(err) // see more on error handling
{
    alert("error message - " + err.message);
    alert("error code - " + err.statusCode);
}

function logoutUser() {
    Backendless.UserService.logout()
        .then(userLoggedOut)
        .catch(gotError);
}


function deleteRow(obj) {
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);


}



