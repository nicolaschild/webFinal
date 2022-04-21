function visitor(firstName, lastName, id){
    this.firstName=firstName;
    this.lastName=lastName;
    this.id=id;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }

}
let data = [
    new visitor("Ken", "Jenson", 5),
    new visitor("Ben", "Jenson", 3)
]

function writeTable1()
{

//var data = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
var numCols = 1;           

//_.orderBy(data, 'asc');
$.each(data, function(i) {
  let tRow = $('<tr>');
           
 // tCell = $('<td>').html(data[i]);
  let tCell = $('<td>').html(
      `
      <a href="#" onclick="DeleteVisitor('${data[i].id}')">Delete Me</a>
      `
      );
  //  tCell = $('<td>').html(data[i].fullName());

  $('#table1').append(tRow.append(tCell));
});
}
function DeleteVisitor(id){
alert(`deleting id=${id}`)
}
function writeTable2()
{

$("#table2").append(
    `<table class='table table-hover'>
      <tr>
        <td>${data[0].fullName()}</td>
        <td>${data[1].fullName()}</td>
      </tr>
    <tr>
      <td>My column 1, row 2</td>
      <td>My column 2, row 2</td>
    </tr>
    </table>`);
}
function writeTable3()
{
var data = [["City 1", "City 2", "City 3"], //headers
            ["New York", "LA", "Seattle"], 
            ["Paris", "Milan", "Rome"], 
            ["Pittsburg", "Wichita", "Boise"]]
var cityTable = makeResponsiveTable($("#table3container"), "table3", data);

}
function makeResponsiveTable(container, id, data) {
//$(container).addClass("table-responsive");
var table = $("<table/>").addClass('table table-hover table-bordered table-striped').attr("id",id);
var tbody=$("<tbody/>");
$.each(data, function(rowIndex) {
    var row = $("<tr/>");
    $.each(this, function(colIndex,c) { 
        var txt = c;
        row.append($("<t"+(rowIndex == 0 ?  "h" : "d")+"/>").html(txt));
    });
    tbody.append(row);
    
});
table.append(tbody);
return container.append(table);
}